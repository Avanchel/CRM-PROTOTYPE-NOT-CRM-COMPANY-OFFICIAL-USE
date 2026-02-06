const GMAIL_CONFIG = {
    CLIENT_ID: '606575808308-4cnj9duk5a7tifai4c5588fi9tjdj4rr.apps.googleusercontent.com',
    CLIENT_SECRET: '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',
    DISCOVERY_DOCS: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    SCOPES: 'https://www.googleapis.com/auth/gmail.send',
    REDIRECT_URI: 'https://avanchel.github.io/CRM-PROTOTYPE-NOT-CRM-COMPANY-OFFICIAL-USE/',
    AUTH_ENDPOINT: 'https://accounts.google.com/o/oauth2/v2/auth'
};

// Gmail API State
let gmailAuthorized = false;
let gapiInited = false;
let accessToken = null;

// Initialize Gmail API
function initGmailAPI() {
    gapi.load('client', async () => {
        try {
            await gapi.client.init({
                discoveryDocs: GMAIL_CONFIG.DISCOVERY_DOCS,
            });
            gapiInited = true;
            console.log('GAPI client initialized');

            // Check for token in URL before enabling buttons
            checkAndHandleToken();
            maybeEnableButtons();
        } catch (err) {
            console.error('Error initializing GAPI client:', err);
        }
    });
}

// Parse access token from URL fragment
function checkAndHandleToken() {
    const fragmentString = window.location.hash.substring(1);
    const params = new URLSearchParams(fragmentString);
    const token = params.get('access_token');

    if (token) {
        accessToken = token;
        gmailAuthorized = true;
        gapi.client.setToken({ access_token: token });

        // Clean the URL hash without refreshing
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);

        console.log('Access token recovered from URL');
        updateGmailStatus(true);
    }
}

function maybeEnableButtons() {
    if (gapiInited) {
        const btns = [
            document.getElementById('modal-gmail-connect-btn'),
            document.getElementById('modal-gmail-reconnect-btn')
        ];
        btns.forEach(btn => {
            if (btn) {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        });
        console.log('Connection buttons ready');
    }
}

// Handle Gmail Authentication via Manual Redirect (Implicit Flow)
function handleGmailAuth() {
    console.log('Starting manual OAuth flow...');

    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', GMAIL_CONFIG.AUTH_ENDPOINT);

    const params = {
        'client_id': GMAIL_CONFIG.CLIENT_ID,
        'redirect_uri': GMAIL_CONFIG.REDIRECT_URI,
        'response_type': 'token',
        'scope': GMAIL_CONFIG.SCOPES,
        'include_granted_scopes': 'true',
        'state': 'crm-auth'
    };

    for (const p in params) {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}

// Sign out from Gmail
function handleGmailSignout() {
    gapi.client.setToken(null);
    accessToken = null;
    gmailAuthorized = false;
    updateGmailStatus(false);
}

// Update Gmail connection status in UI
function updateGmailStatus(connected) {
    const sidebarStatus = document.getElementById('gmail-sidebar-status');
    const statusText = document.getElementById('gmail-status-text');
    const unconnectedView = document.getElementById('gmail-unconnected-view');
    const connectedBanner = document.getElementById('gmail-connected-banner');
    const signoutSection = document.getElementById('signout-section');

    if (connected) {
        if (sidebarStatus) sidebarStatus.classList.add('connected');
        if (statusText) statusText.textContent = '✓ Gmail Connected';
        if (unconnectedView) unconnectedView.style.display = 'none';
        if (connectedBanner) connectedBanner.style.display = 'flex';
        if (signoutSection) signoutSection.style.display = 'block';
    } else {
        if (sidebarStatus) sidebarStatus.classList.remove('connected');
        if (statusText) statusText.textContent = 'Gmail Not Connected';
        if (unconnectedView) unconnectedView.style.display = 'block';
        if (connectedBanner) connectedBanner.style.display = 'none';
        if (signoutSection) signoutSection.style.display = 'none';
    }
}

// Send email via Gmail API
async function sendEmailViaGmail(to, subject, body) {
    if (!gmailAuthorized) {
        alert('Please connect to Gmail first!');
        return false;
    }

    try {
        const email = [
            `To: ${to}`,
            `Subject: ${subject}`,
            'Content-Type: text/plain; charset=utf-8',
            '',
            body
        ].join('\r\n');

        const encodedEmail = btoa(unescape(encodeURIComponent(email)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        const response = await gapi.client.gmail.users.messages.send({
            userId: 'me',
            resource: {
                raw: encodedEmail
            }
        });

        console.log('Email sent successfully:', response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email: ' + error.message);
        return false;
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    const gapiScript = document.createElement('script');
    gapiScript.src = 'https://apis.google.com/js/api.js';
    gapiScript.onload = initGmailAPI;
    document.head.appendChild(gapiScript);
});


