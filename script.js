// GLOBAL STATE FOR CHAT FILE UPLOAD
window.stagedChatFile = null;
window.awaitingImportTarget = false;

window.allLeads = [
    // Pre-added User
    { name: 'James Paul Abid', company: 'Introvert Pirate Vampire', phone: '09612131515', email: 'introvertpiratevampire@gmail.com', assignedTo: '', seed: 'james-paul' },


    // keep your full leads array here exactly as is
    { name: 'Marcus Aurelius', company: 'Stoic Solutions', phone: '555-0101', email: 'marcus@stoic.com', assignedTo: 'Mark', seed: 'lead-0' },
    { name: 'Eleanor Shellstrop', company: 'Good Place Corp', phone: '555-0102', email: 'ellie@forney.com', assignedTo: 'Sarah', seed: 'lead-1' },
    { name: 'Michael Scott', company: 'Dunder Mifflin', phone: '555-0103', email: 'm.scott@dm.com', assignedTo: 'Dwight', seed: 'lead-2' },
    { name: 'Shiv Roy', company: 'Waystar Royco', phone: '555-0104', email: 's.roy@waystar.com', assignedTo: 'Roman', seed: 'lead-3' },
    { name: 'Leslie Knope', company: 'Pawnee Gov', phone: '555-0105', email: 'l.knope@pawnee.gov', assignedTo: 'Ben', seed: 'lead-4' },
    { name: 'Tony Stark', company: 'Stark Ind.', phone: '555-0106', email: 'ts@stark.com', assignedTo: 'Happy', seed: 'lead-5' },
    { name: 'Kim Wexler', company: 'HHM Law', phone: '555-0107', email: 'kim@hhm.law', assignedTo: 'Jimmy', seed: 'lead-6' },
    { name: 'Ted Lasso', company: 'AFC Richmond', phone: '555-0108', email: 'ted@afc.com', assignedTo: 'Beard', seed: 'lead-7' },
    { name: 'Beth Harmon', company: 'Gambit LLC', phone: '555-0109', email: 'beth@chess.com', assignedTo: 'Benny', seed: 'lead-8' },
    { name: 'Marty Byrde', company: 'Blue Cat Lodge', phone: '555-0110', email: 'marty@ozark.com', assignedTo: 'Wendy', seed: 'lead-9' },
    { name: 'Bruce Wayne', company: 'Wayne Ent.', phone: '555-0111', email: 'b.wayne@wayne.com', assignedTo: 'Alfred', seed: 'lead-10' },
    { name: 'Peggy Olson', company: 'Sterling Cooper', phone: '555-0112', email: 'polson@sc.com', assignedTo: 'Don', seed: 'lead-11' },
    { name: 'Walter White', company: 'Heisenberg Co', phone: '555-0113', email: 'w.white@chem.com', assignedTo: 'Jesse', seed: 'lead-12' },
    { name: 'Daenerys Targ', company: 'Dragon Air', phone: '555-0114', email: 'dany@fire.com', assignedTo: 'Jorah', seed: 'lead-13' },
    { name: 'Peter Parker', company: 'Daily Bugle', phone: '555-0115', email: 'peter@pics.com', assignedTo: 'MJ', seed: 'lead-14' },
    { name: 'Katniss Everdeen', company: 'District 12', phone: '555-0116', email: 'kat@archery.com', assignedTo: 'Haymitch', seed: 'lead-15' },
    { name: 'Logan Roy', company: 'Waystar Royco', phone: '555-0117', email: 'l.roy@waystar.com', assignedTo: 'Gerri', seed: 'lead-16' },
    { name: 'Robin Hood', company: 'Sherwood Inc', phone: '555-0118', email: 'robin@forest.com', assignedTo: 'Marian', seed: 'lead-17' },
    { name: 'Sherlock Holmes', company: 'Baker St Consulting', phone: '555-0119', email: 'sh@detect.com', assignedTo: 'Watson', seed: 'lead-18' },
    { name: 'Hermione Granger', company: 'S.P.E.W', phone: '555-0120', email: 'hg@magic.com', assignedTo: 'Ron', seed: 'lead-19' },
    { name: 'Steve Rogers', company: 'Shield Corp', phone: '555-0121', email: 'steve@shield.org', assignedTo: 'Bucky', seed: 'lead-20' },
    { name: 'Natasha Romanoff', company: 'Red Room Tech', phone: '555-0122', email: 'nat@spy.com', assignedTo: 'Clint', seed: 'lead-21' },
    { name: 'Jim Halpert', company: 'Athlead', phone: '555-0123', email: 'jim@athlead.com', assignedTo: 'Pam', seed: 'lead-22' },
    { name: 'Dwight Schrute', company: 'Schrute Farms', phone: '555-0125', email: 'dwight@beet.com', assignedTo: 'Angela', seed: 'lead-23' },
    { name: 'Harvey Specter', company: 'Pearson Hardman', phone: '555-0126', email: 'harvey@law.com', assignedTo: 'Donna', seed: 'lead-24' },
    { name: 'Mike Ross', company: 'Pearson Hardman', phone: '555-0127', email: 'mike@law.com', assignedTo: 'Rachel', seed: 'lead-25' },
    { name: 'Jon Snow', company: "Night's Watch", phone: '555-0131', email: 'jon@wall.com', assignedTo: 'Sam', seed: 'lead-26' },
    { name: 'Arya Stark', company: 'Faceless Ltd', phone: '555-0132', email: 'noone@braavos.com', assignedTo: 'Gendry', seed: 'lead-27' },
    { name: 'Sansa Stark', company: 'Winterfell Corp', phone: '555-0133', email: 'sansa@north.com', assignedTo: 'Brienne', seed: 'lead-28' },
    { name: 'Tyrion Lannister', company: 'Casterly Wine', phone: '555-0134', email: 'tyrion@imp.com', assignedTo: 'Varys', seed: 'lead-29' },
    { name: 'Jaime Lannister', company: 'Kingsguard Inc', phone: '555-0135', email: 'jaime@lion.com', assignedTo: 'Cersei', seed: 'lead-30' },
    { name: 'Saul Goodman', company: 'Better Call Inc', phone: '555-0137', email: 'saul@justice.com', assignedTo: 'Huell', seed: 'lead-31' },
    { name: 'Gus Fring', company: 'Los Pollos', phone: '555-0138', email: 'gus@chicken.com', assignedTo: 'Mike', seed: 'lead-32' },
    { name: 'Jesse Pinkman', company: 'Vamonos Pest', phone: '555-0139', email: 'jesse@science.com', assignedTo: 'Badger', seed: 'lead-33' },
    { name: 'Skyler White', company: 'White Wash', phone: '555-0140', email: 'sky@carwash.com', assignedTo: 'Marie', seed: 'lead-34' },
    { name: 'Frank Underwood', company: 'House Cards', phone: '555-0141', email: 'frank@dc.gov', assignedTo: 'Claire', seed: 'lead-35' },
    { name: 'Doug Stamper', company: 'Cashew Tech', phone: '555-0142', email: 'doug@stamper.com', assignedTo: 'Frank', seed: 'lead-36' },
    { name: 'Olivia Pope', company: 'Pope & Assoc', phone: '555-0143', email: 'liv@gladiator.com', assignedTo: 'Huck', seed: 'lead-37' },
    { name: 'Annalise Keating', company: 'Middleton Law', phone: '555-0144', email: 'ak@law.edu', assignedTo: 'Bonnie', seed: 'lead-38' },
    { name: 'Rick Grimes', company: 'Alexandria Co', phone: '555-0145', email: 'rick@safety.com', assignedTo: 'Daryl', seed: 'lead-39' },
    { name: 'Michonne Hawthorne', company: 'Katana Group', phone: '555-0146', email: 'm@sword.com', assignedTo: 'Rick', seed: 'lead-40' },
    { name: 'Glenn Rhee', company: 'Delivery Ops', phone: '555-0147', email: 'glenn@supply.com', assignedTo: 'Maggie', seed: 'lead-41' },
    { name: 'Tommy Shelby', company: 'Blinders Ltd', phone: '555-0148', email: 'tommy@bham.uk', assignedTo: 'Arthur', seed: 'lead-42' },
    { name: 'Polly Gray', company: 'Shelby Trust', phone: '555-0149', email: 'polly@finance.com', assignedTo: 'Ada', seed: 'lead-43' },
    { name: 'John Wick', company: 'Continental', phone: '555-0150', email: 'john@pencils.com', assignedTo: 'Winston', seed: 'lead-44' },
    { name: 'James Bond', company: 'MI6 Services', phone: '555-0151', email: '007@mi6.gov', assignedTo: 'M', seed: 'lead-45' },
    { name: 'Lara Croft', company: 'Tomb Raiders', phone: '555-0152', email: 'lara@mansion.com', assignedTo: 'Jonah', seed: 'lead-46' },
    { name: 'Nathan Drake', company: 'Fortune Hunt', phone: '555-0153', email: 'nate@uncharted.com', assignedTo: 'Sully', seed: 'lead-47' },
    { name: 'Joel Miller', company: 'Firefly Sol', phone: '555-0154', email: 'joel@qzone.com', assignedTo: 'Ellie', seed: 'lead-48' },
    { name: 'Arthur Morgan', company: 'Van Der Linde', phone: '555-0155', email: 'arthur@outlaw.com', assignedTo: 'Dutch', seed: 'lead-49' },
    { name: 'Geralt Rivia', company: 'Witcher Hire', phone: '555-0156', email: 'white.wolf@kaer.com', assignedTo: 'Yennefer', seed: 'lead-50' },
    { name: 'Ciri Fiona', company: 'Elder Blood', phone: '555-0157', email: 'ciri@zireael.com', assignedTo: 'Geralt', seed: 'lead-51' },
    { name: 'Master Chief', company: 'UNSC Navy', phone: '555-0158', email: 'chief@halo.com', assignedTo: 'Cortana', seed: 'lead-52' },
    { name: 'Samus Aran', company: 'Bounty Tech', phone: '555-0159', email: 'samus@vocal.com', assignedTo: 'Adam', seed: 'lead-53' },
    { name: 'Kratos War', company: 'Spartan Log', phone: '555-0160', email: 'dad@midgard.com', assignedTo: 'Atreus', seed: 'lead-54' },
    { name: 'Aloy Sobeck', company: 'Horizon Optic', phone: '555-0161', email: 'aloy@focus.com', assignedTo: 'Sylens', seed: 'lead-55' },
    { name: 'Ezio Auditore', company: 'Brotherhood', phone: '555-0162', email: 'ezio@florence.it', assignedTo: 'Leonardo', seed: 'lead-56' },
    { name: 'Altair Ibn', company: 'Creed Assoc', phone: '555-0163', email: 'altair@masyaf.com', assignedTo: 'Al Mualim', seed: 'lead-57' },
    { name: 'Solid Snake', company: 'Foxhound', phone: '555-0164', email: 'snake@codec.com', assignedTo: 'Otacon', seed: 'lead-58' },
    { name: 'Gordon Freeman', company: 'Black Mesa', phone: '555-0165', email: 'gordon@lambda.com', assignedTo: 'Alyx', seed: 'lead-59' },
    { name: 'Jack Sparrow', company: 'Pearl Marine', phone: '555-0166', email: 'jack@rum.com', assignedTo: 'Gibbs', seed: 'lead-60' },
    { name: 'Elizabeth Swann', company: 'Port Royal', phone: '555-0167', email: 'liz@governor.com', assignedTo: 'Will', seed: 'lead-61' },
    { name: 'Indiana Jones', company: 'Marshall Uni', phone: '555-0168', email: 'indy@museum.edu', assignedTo: 'Shorty', seed: 'lead-62' },
    { name: 'Han Solo', company: 'Falcon Air', phone: '555-0169', email: 'han@kessel.com', assignedTo: 'Chewie', seed: 'lead-63' },
    { name: 'Leia Organa', company: 'Alliance NGO', phone: '555-0170', email: 'princess@rebel.org', assignedTo: 'Luke', seed: 'lead-64' },
    { name: 'Frodo Baggins', company: 'Shire Goods', phone: '555-0171', email: 'frodo@ring.com', assignedTo: 'Samwise', seed: 'lead-65' },
    { name: 'Gandalf Grey', company: 'Maia Consult', phone: '555-0172', email: 'wizard@white.com', assignedTo: 'Pippin', seed: 'lead-66' },
    { name: 'Aragorn Elessar', company: 'Gondor Mgmt', phone: '555-0173', email: 'king@gondor.gov', assignedTo: 'Legolas', seed: 'lead-67' },
    { name: 'Harry Potter', company: 'Auror Dept', phone: '555-0174', email: 'harry@hogwarts.uk', assignedTo: 'Ron', seed: 'lead-68' },
    { name: 'Albus Dumbledore', company: 'Phoenix Grp', phone: '555-0175', email: 'head@school.uk', assignedTo: 'Minerva', seed: 'lead-69' },
    { name: 'Severus Snape', company: 'Potions Inc', phone: '555-0176', email: 'sev@dungeon.com', assignedTo: 'Lily', seed: 'lead-70' },
    { name: 'Katara Tribe', company: 'Water Tribe', phone: '555-0177', email: 'katara@south.com', assignedTo: 'Aang', seed: 'lead-71' },
    { name: 'Zuko Prince', company: 'Fire Nation', phone: '555-0178', email: 'zuko@honor.com', assignedTo: 'Iroh', seed: 'lead-72' },
    { name: 'Korra Avatar', company: 'Republic City', phone: '555-0179', email: 'avatar@balance.com', assignedTo: 'Asami', seed: 'lead-73' },
    { name: 'Edward Elric', company: 'Alchemy Lab', phone: '555-0180', email: 'ed@fullmetal.com', assignedTo: 'Al', seed: 'lead-74' },
    { name: 'Roy Mustang', company: 'Flame Mil', phone: '555-0181', email: 'roy@central.gov', assignedTo: 'Riza', seed: 'lead-75' },
    { name: 'Spike Spiegel', company: 'Bebop Bounty', phone: '555-0182', email: 'spike@bebop.com', assignedTo: 'Jet', seed: 'lead-76' },
    { name: 'Faye Valentine', company: 'Casino Royal', phone: '555-0183', email: 'faye@debt.com', assignedTo: 'Ed', seed: 'lead-77' },
    { name: 'Eren Jaeger', company: 'Titan Walls', phone: '555-0184', email: 'eren@freedom.com', assignedTo: 'Mikasa', seed: 'lead-78' },
    { name: 'Levi Ackerman', company: 'Survey Corps', phone: '555-0185', email: 'levi@clean.com', assignedTo: 'Erwin', seed: 'lead-79' },
    { name: 'Saitama Hero', company: 'Z-City Ops', phone: '555-0186', email: 'punch@hero.com', assignedTo: 'Genos', seed: 'lead-80' },
    { name: 'Monkey D. Luffy', company: 'Straw Hat', phone: '555-0187', email: 'king@pirate.com', assignedTo: 'Zoro', seed: 'lead-81' },
    { name: 'Nami Map', company: 'Navigator', phone: '555-0188', email: 'nami@money.com', assignedTo: 'Sanji', seed: 'lead-82' },
    { name: 'Tanjiro Kamado', company: 'Slayer Corp', phone: '555-0189', email: 'tan@sun.com', assignedTo: 'Nezuko', seed: 'lead-83' },
    { name: 'Giyuu Tomioka', company: 'Water Hash', phone: '555-0190', email: 'giyuu@quiet.com', assignedTo: 'Shinobu', seed: 'lead-84' },
    { name: 'Deku Midoriya', company: 'UA High', phone: '555-0191', email: 'deku@allmight.com', assignedTo: 'Bakugo', seed: 'lead-85' },
    { name: 'All Might', company: 'Peace Symbol', phone: '555-0192', email: 'hero@top.com', assignedTo: 'Gran', seed: 'lead-86' },
    { name: 'Naruto Uzumaki', company: 'Hidden Leaf', phone: '555-0193', email: 'naruto@hokage.com', assignedTo: 'Sasuke', seed: 'lead-87' },
    { name: 'Kakashi Hatake', company: 'Ninja Logic', phone: '555-0194', email: 'copy@ninja.com', assignedTo: 'Guy', seed: 'lead-88' },
    { name: 'Ichigo Kurosaki', company: 'Soul Society', phone: '555-0195', email: 'ichigo@hollow.com', assignedTo: 'Rukia', seed: 'lead-89' },
    { name: 'Yusuke Urameshi', company: 'Spirit Detect', phone: '555-0196', email: 'yusuke@spirit.com', assignedTo: 'Kuwabara', seed: 'lead-90' },
    { name: 'Gon Freecss', company: 'Hunter Org', phone: '555-0197', email: 'gon@island.com', assignedTo: 'Killua', seed: 'lead-91' },
    { name: 'Kurapika Kurta', company: 'Chains Inc', phone: '555-0198', email: 'kura@eyes.com', assignedTo: 'Leorio', seed: 'lead-92' },
    { name: 'Spike Buffy', company: 'Slayer Help', phone: '555-0199', email: 'spike@vamp.com', assignedTo: 'Angel', seed: 'lead-93' },
    { name: 'Willow Rosen', company: 'Magic Tech', phone: '555-0200', email: 'willow@witch.com', assignedTo: 'Tara', seed: 'lead-94' },
    { name: 'Fox Mulder', company: 'X-Files', phone: '555-0201', email: 'fox@believe.com', assignedTo: 'Scully', seed: 'lead-95' },
    { name: 'Dana Scully', company: 'FBI Medical', phone: '555-0202', email: 'dana@science.com', assignedTo: 'Mulder', seed: 'lead-96' },
    { name: 'Jack Bauer', company: 'CTU Ops', phone: '555-0203', email: 'jack@24.com', assignedTo: 'Chloe', seed: 'lead-97' },
    { name: 'Gregory House', company: 'Plainsboro', phone: '555-0204', email: 'house@vicodin.com', assignedTo: 'Wilson', seed: 'lead-98' },
    { name: 'Perry Mason', company: 'Defense Law', phone: '555-0205', email: 'perry@court.com', assignedTo: 'Della', seed: 'lead-99' }
];

// Apple App Ingestion Function
window.receiveAppleAppLead = function (data) {
    if (!data) return;

    const newLead = {
        name: data['Full Name'] || 'Unknown Lead',
        company: data['Company / Organization'] || 'No Company',
        phone: data['Contact Number'] || '',
        email: data['Email Address'] || '',
        assignedTo: '', // Explicitly empty as requested
        seed: `lead-apple-${Date.now()}` // Unique seed for avatar
    };

    // Prepend to leads list
    window.allLeads.unshift(newLead);

    // Update Lead Count
    const leadCountEl = document.getElementById('lead-count');
    if (leadCountEl) leadCountEl.textContent = `${window.allLeads.length} Leads`;

    // Re-render table at page 1 to show new lead
    window.renderLeads(window.allLeads, 1);

    console.log('✅ New Apple Lead Ingested:', newLead);
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sidebarThemeToggle = document.getElementById('sidebar-theme-toggle');
    const body = document.body;

    const toggleTheme = () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Theme Toggles
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (sidebarThemeToggle) sidebarThemeToggle.addEventListener('click', toggleTheme);

    // Load Theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    // Tab & View Switching Logic
    const tabs = document.querySelectorAll('.tab');
    const views = document.querySelectorAll('.dashboard-view');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetViewId = tab.getAttribute('data-view');

            // Switch tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch views
            views.forEach(v => v.classList.remove('active'));
            const targetView = document.getElementById(targetViewId);
            if (targetView) targetView.classList.add('active');
        });
    });

    // Outreach Chatbot Logic
    const outreachModal = document.getElementById('outreach-modal');
    const launchBtn = document.getElementById('launch-outreach-btn');
    const closeOutreachBtn = document.getElementById('close-outreach-modal');
    const outreachInput = document.getElementById('outreach-input');
    const outreachSendBtn = document.getElementById('send-outreach-btn');
    const outreachChatHistory = document.getElementById('outreach-chat-history');

    const toggleOutreachModal = () => outreachModal.classList.toggle('active');

    launchBtn.addEventListener('click', toggleOutreachModal);
    closeOutreachBtn.addEventListener('click', toggleOutreachModal);

    const appendOutreachMsg = (role, text) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ${role}`;

        let contentHtml = text.replace(/\n/g, '<br>');

        // --- Proactive Sales Insight Highlighting ---
        const salesKeywords = ['should i draft', 'i see', 'recommend', 'best lead', 'roi', 'opportunity', 'suggest a follow-up', 'let’s get you started'];
        if (role === 'bot' && salesKeywords.some(kw => text.toLowerCase().includes(kw))) {
            contentHtml = contentHtml.replace(/(Should I draft|I see|recommend|best lead|ROI|opportunity|suggest a follow-up|Let’s get you started)/gi, '<strong>$1</strong>');
            msgDiv.innerHTML = `<div class="sales-insight">💡 ${contentHtml}</div>`;
        } else {
            msgDiv.innerHTML = contentHtml;
        }

        // Check if message contains email content
        if (role === 'bot') {
            const emailData = parseEmailFromAI(text);
            if (emailData) {
                const sendBtn = document.createElement('button');
                sendBtn.className = 'email-send-btn';
                sendBtn.innerHTML = '📧 Send Email';
                sendBtn.style.marginTop = '12px';
                sendBtn.onclick = async () => {
                    if (!gmailAuthorized) {
                        showToast('Please connect Gmail first!', 'error');
                        return;
                    }

                    sendBtn.disabled = true;
                    sendBtn.textContent = 'Sending...';

                    const success = await sendEmailViaGmail(emailData.to, emailData.subject, emailData.body);

                    if (success) {
                        showToast(`Email sent to ${emailData.to}!`, 'success');
                        sendBtn.textContent = '✓ Sent';
                        sendBtn.style.background = '#4caf50';
                    } else {
                        showToast('Failed to send email', 'error');
                        sendBtn.disabled = false;
                        sendBtn.textContent = '📧 Retry Send';
                    }
                };
                msgDiv.appendChild(sendBtn);
            }
        }

        outreachChatHistory.appendChild(msgDiv);
        outreachChatHistory.scrollTop = outreachChatHistory.scrollHeight;
    };

    outreachSendBtn.addEventListener('click', () => {
        if (outreachInput.value.trim()) askOutreachAI(outreachInput.value.trim());
    });

    outreachInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && outreachInput.value.trim()) askOutreachAI(outreachInput.value.trim());
    });

    // Gmail Modal Logic
    const gmailModal = document.getElementById('gmail-modal');
    const openGmailBtn = document.getElementById('gmail-sidebar-status');
    const closeGmailBtn = document.getElementById('close-gmail-modal');
    const modalConnectBtn = document.getElementById('modal-gmail-connect-btn');
    const modalReconnectBtn = document.getElementById('modal-gmail-reconnect-btn');
    const modalSignoutBtn = document.getElementById('modal-gmail-signout-btn');

    const toggleGmailModal = () => {
        if (gmailModal) gmailModal.classList.toggle('active');
    };

    if (openGmailBtn) openGmailBtn.addEventListener('click', toggleGmailModal);
    if (closeGmailBtn) closeGmailBtn.addEventListener('click', toggleGmailModal);

    if (modalConnectBtn) modalConnectBtn.addEventListener('click', () => {
        handleGmailAuth();
    });

    if (modalReconnectBtn) modalReconnectBtn.addEventListener('click', () => {
        handleGmailAuth();
    });

    if (modalSignoutBtn) modalSignoutBtn.addEventListener('click', () => {
        handleGmailSignout();
    });


    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === gmailModal) toggleGmailModal();
    });


    // Generate 100 Sample Leads (Preserved)

    // --- NEW: EXPORT & IMPORT LOGIC ---

    // 1. Export Handlers
    const exportLeadsBtn = document.getElementById('export-leads-btn');
    const exportSalesBtn = document.getElementById('export-sales-btn');

    if (exportLeadsBtn) {
        // Legacy button handler if still present or for reference
        exportLeadsBtn.addEventListener('click', () => {
            // ...
        });
    }

    // New Leads Export Dropdown Logic
    const exportLeadsDropdownBtn = document.getElementById('export-leads-dropdown-btn');
    const exportLeadsMenu = document.getElementById('export-leads-menu');
    const exportLeadsActionBtn = document.getElementById('export-leads-action-btn');

    if (exportLeadsDropdownBtn) {
        exportLeadsDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportLeadsMenu.style.display = exportLeadsMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!exportLeadsDropdownBtn.contains(e.target) && !exportLeadsMenu.contains(e.target)) {
                exportLeadsMenu.style.display = 'none';
            }
        });
    }

    if (exportLeadsActionBtn) {
        exportLeadsActionBtn.addEventListener('click', () => {
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(window.allLeads);
            XLSX.utils.book_append_sheet(wb, ws, "Leads");
            XLSX.writeFile(wb, "CRM_Leads_Export.xlsx");
            exportLeadsMenu.style.display = 'none';
        });
    }

    if (exportSalesBtn) {
        exportSalesBtn.addEventListener('click', () => {
            const data = window.allSales || [];
            if (data.length === 0) {
                showToast('No sales data to export', 'error');
                return;
            }
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "Sales");
            XLSX.writeFile(wb, "CRM_Sales_Export.xlsx");
        });
    }

    // 2. Import Modal & Logic
    const importModal = document.getElementById('import-modal');
    const importBtn = document.getElementById('import-file-btn-standalone');
    const closeImportBtn = document.getElementById('close-import-modal');
    const cancelImportBtn = document.getElementById('cancel-import-btn');
    const confirmImportBtn = document.getElementById('confirm-import-btn');
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const browseBtn = document.getElementById('browse-file-btn');
    const filePreview = document.getElementById('file-preview');
    const fileNameDisplay = document.getElementById('file-name');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const importTargetSelect = document.getElementById('import-target-select');

    let importFile = null;

    if (importBtn) {
        const toggleImport = () => {
            importModal.style.display = importModal.style.display === 'flex' ? 'none' : 'flex';
            resetImportUI();
        };
        importBtn.addEventListener('click', toggleImport);
        closeImportBtn.addEventListener('click', toggleImport);
        cancelImportBtn.addEventListener('click', toggleImport);
    }

    // New Leads Import Button
    const importLeadsBtn = document.getElementById('import-leads-btn-standalone');
    if (importLeadsBtn) {
        importLeadsBtn.addEventListener('click', () => {
            importModal.style.display = 'flex';
            resetImportUI();
            // Optional: Pre-select 'Leads' in the dropdown
            if (importTargetSelect) importTargetSelect.value = 'leads';
        });
    }

    const resetImportUI = () => {
        importFile = null;
        dropZone.style.display = 'block';
        filePreview.style.display = 'none';
        confirmImportBtn.disabled = true;
        fileInput.value = '';
    };

    const handleImportFileSelect = (file) => {
        if (!file) return;
        importFile = file;
        fileNameDisplay.textContent = file.name;
        dropZone.style.display = 'none';
        filePreview.style.display = 'flex';
        confirmImportBtn.disabled = false;
    };

    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = '#6c5dd3'; });
    dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.style.borderColor = 'var(--border)'; });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border)';
        if (e.dataTransfer.files.length) handleImportFileSelect(e.dataTransfer.files[0]);
    });

    browseBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleImportFileSelect(e.target.files[0]);
    });

    removeFileBtn.addEventListener('click', resetImportUI);

    confirmImportBtn.addEventListener('click', async () => {
        if (!importFile) return;
        const target = importTargetSelect.value;
        await processFileImport(importFile, target);
        importModal.style.display = 'none';
        resetImportUI();
    });

    // Unified Import Processor
    window.processFileImport = async (file, targetList) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.SheetNames[0];
                    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

                    if (!jsonData || jsonData.length === 0) {
                        showToast('File is empty or could not be read.', 'error');
                        resolve(false);
                        return;
                    }

                    const headers = Object.keys(jsonData[0]);
                    const hasSaleID = headers.some(h => /sale_?id/i.test(h));
                    const hasDroneModel = headers.some(h => /drone_?model|model/i.test(h));
                    const hasEmail = headers.some(h => /email/i.test(h));
                    const hasName = headers.some(h => /name/i.test(h));

                    if (targetList === 'leads') {
                        // VALIDATION: Must NOT be a sales file
                        if (hasSaleID || (hasDroneModel && !hasEmail)) {
                            showToast('Error: This looks like a Sales file (contains Sale_ID/Model). Please import to Sales.', 'error');
                            resolve(false);
                            return;
                        }

                        // Map fields loosely
                        const newLeads = jsonData.map(row => ({
                            name: row['Name'] || row['Full Name'] || row['name'] || 'Unknown',
                            company: row['Company'] || row['Organization'] || row['company'] || '',
                            phone: row['Phone'] || row['Contact'] || row['phone'] || '',
                            email: row['Email'] || row['email'] || '',
                            assignedTo: row['Assigned To'] || '',
                            seed: `imported-${Date.now()}-${Math.random()}`
                        }));
                        window.allLeads = [...newLeads, ...window.allLeads]; // Add to top
                        if (window.renderLeads) window.renderLeads(window.allLeads, 1);
                        showToast(`Successfully imported ${newLeads.length} leads!`, 'success');

                    } else if (targetList === 'sales') {
                        // VALIDATION: Must have Sales indicators
                        if (!hasSaleID && !hasDroneModel) {
                            showToast('Error: Invalid Sales file. Missing Sale_ID or Drone Model.', 'error');
                            resolve(false);
                            return;
                        }
                        if (hasEmail && !hasSaleID) {
                            showToast('Error: This looks like a Leads file. Please import to Leads.', 'error');
                            resolve(false);
                            return;
                        }

                        window.allSales = window.allSales || [];
                        const newSales = jsonData.map(row => ({
                            sale_id: row['Sale_ID'] || `SALE-${Date.now()}`,
                            date: row['Date'] || new Date().toISOString().split('T')[0],
                            drone_model: row['Drone_Model'] || row['Model'] || 'Unknown Model',
                            category: row['Category'] || 'General',
                            units: row['Units'] || 1,
                            unit_price: row['Unit_Price'] || row['Price'] || 0,
                            region: row['Region'] || 'Unknown'
                        }));
                        window.allSales = [...newSales, ...window.allSales];
                        // If there's a render function for sales, call it here (assumed generic refresh)
                        // Trigger sales view refresh if active
                        const salesTab = document.querySelector('.tab[data-view="sales-view"]');
                        if (salesTab && salesTab.classList.contains('active')) salesTab.click(); // Hacky refresh
                        showToast(`Successfully imported ${newSales.length} sales records!`, 'success');
                    }
                    resolve(true);
                } catch (err) {
                    console.error("Import Error:", err);
                    showToast('Failed to parse file. Check format.', 'error');
                    resolve(false);
                }
            };
            reader.readAsArrayBuffer(file);
        });
    };

    // --- END NEW IMPORT/EXPORT ---



    // Render Leads with pagination
    window.renderLeads = function (leadsData, page = 1) {
        const tableBody = document.getElementById('leads-table-body');
        if (!tableBody) return;

        const itemsPerPage = 10;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedLeads = leadsData.slice(startIndex, endIndex);

        tableBody.innerHTML = paginatedLeads.map(lead => `
        <tr>

            <td>
                <div class="user-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${lead.seed}">
                    <span>${lead.name}</span>
                </div>
            </td>
            <td>${lead.company}</td>
            <td>${lead.phone}</td>
            <td>${lead.email}</td>
            <td>${lead.assignedTo}</td>
        </tr>
    `).join('');

        renderLeadsPagination(leadsData.length, page, itemsPerPage);
    };

    // Render pagination
    function renderLeadsPagination(totalItems, currentPage, itemsPerPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const paginationContainer = document.getElementById('leads-pagination');
        if (!paginationContainer) return;

        let html = `
        <button class="p-btn" ${currentPage === 1 ? 'disabled' : ''}
            onclick="renderLeads(allLeads, ${currentPage - 1})">
            ‹ Previous
        </button>
        <div class="pages">
    `;

        for (let i = 1; i <= totalPages; i++) {
            html += `
            <span class="page ${i === currentPage ? 'active' : ''}"
                onclick="renderLeads(allLeads, ${i})">
                ${i}
            </span>
        `;
        }

        html += `
        </div>
        <button class="p-btn" ${currentPage === totalPages ? 'disabled' : ''}
            onclick="renderLeads(allLeads, ${currentPage + 1})">
            Next ›
        </button>
    `;

        paginationContainer.innerHTML = html;
    }


    // AI Sidebar Logic
    const aiSidebar = document.getElementById('ai-sidebar');
    const aiToggle = document.getElementById('ai-sidebar-toggle');
    const aiClose = document.getElementById('close-ai-sidebar');
    const aiInput = document.getElementById('ai-input');
    const aiSendBtn = document.getElementById('send-ai-btn');
    const aiChatHistory = document.getElementById('ai-chat-history');

    // START CHAT FILE STAGING LOGIC
    const chatStagingArea = document.getElementById('chat-file-staging');
    const stagedFileName = document.getElementById('staged-file-name');
    const removeStagedFileBtn = document.getElementById('remove-staged-file');
    const aiInputWrapper = document.querySelector('.ai-input-wrapper');

    // Drag & Drop for AI Chat
    // Drag & Drop for AI Chat - Expanded to Sidebar
    aiSidebar.addEventListener('dragover', (e) => {
        e.preventDefault();
        aiSidebar.style.borderColor = '#6c5dd3';
        aiSidebar.style.background = 'rgba(108, 93, 211, 0.1)';
    });

    aiSidebar.addEventListener('dragleave', (e) => {
        e.preventDefault();
        aiSidebar.style.borderColor = '';
        aiSidebar.style.background = '';
    });

    aiSidebar.addEventListener('drop', (e) => {
        e.preventDefault();
        aiSidebar.style.borderColor = '';
        aiSidebar.style.background = '';

        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            // Simple validation
            if (!file.name.match(/\.(xlsx|xls|csv)$/i)) {
                showToast('Please drop an Excel or CSV file', 'error');
                return;
            }
            stageChatFile(file);
        }
    });

    const stageChatFile = (file) => {
        window.stagedChatFile = file;
        stagedFileName.textContent = file.name;
        chatStagingArea.style.display = 'block';
        aiInput.placeholder = "Add a message (optional)...";
        aiInput.focus();
    };

    const clearStagedFile = () => {
        window.stagedChatFile = null;
        chatStagingArea.style.display = 'none';
        aiInput.placeholder = "Ask AI or drag data file...";
    };

    removeStagedFileBtn.addEventListener('click', clearStagedFile);
    // END CHAT FILE STAGING LOGIC

    const GEMINI_API_KEY = 'AIzaSyCbHPNXw1HAUdd_RoWbM5aRqKz4ikSr-jg';
    const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;


    const AI_SCRIPT_KNOWLEDGE = `
AI Sales Agent Script: Section 1 – General & Intro(100 Entries)
The "Human-Like" Foundation
    1.	Q: Who am I speaking with? A : I’m your Agridom AI Assistant! I’m here to make sure you get the right tech without the wait.
2.	Q: Are you a robot ? A : I am an AI, but I’ve been trained by our best agricultural experts to give you the same level of care as a human agent.
3.	Q: Is Agridom a real company ? A : We certainly are! We are the leading provider of XAG agricultural technology in the Philippines.
4.	Q: What do you guys actually do? A : We help farmers modernize.From drones that spray crops to mapping solutions, we’re all about making farming efficient.
5.	Q: Where are you located ? A : Our main headquarters is in Davao City, and we have a major service hub in Bongabon, Nueva Ecija.
6.	Q: Do you serve Luzon ? A : Absolutely.Our Nueva Ecija office is dedicated to serving our North and Central Luzon farmers.
7.	Q: Do you serve Mindanao ? A : Yes, Mindanao is our home base! We operate extensively across the region.
8.	Q: Can you help me in Visayas ? A : While our main offices are in Luzon and Mindanao, we are actively looking for partners in Visayas to better serve you.
9.	Q: How do I get started ? A : It’s easy! Just tell me what crops you’re growing or what drone model from our list caught your eye.
10.	Q: What are your office hours ? A : Our human team is available 8 AM - 5 PM, but I’m here 24 / 7 to answer your questions.
11.	Q: Can I visit your office ? A : We’d love that! You can visit us in Davao or Nueva Ecija to see the drones in action.
12.	Q: How long have you been in business ? A : Agridom has been a trusted name in agri - solutions, leading the charge in drone technology for years.
13.	Q: What makes you different from other drone sellers ? A : We don’t just sell drones; we provide a full service ecosystem, including repair, training, and parts.
14.	Q: Is this service available for small farms ? A : Yes! Our mission is to help all farmers, whether you have one hectare or one thousand.
15.	Q: Do you have a contact number ? A : You can reach us directly at + 63 998 963 2225.
    16.	Q: What is your email address ? A : Drop us a line at info @agridomcorp.com.
17.	Q: Are you closed on holidays ? A : Our offices might be, but I never sleep! Feel free to ask me anything anytime.
18.	Q: Can you speak Tagalog ? A : I can understand Tagalog and will do my best to assist you in the language you're most comfortable with!
    19.	Q: Who is the owner of Agridom ? A : We are a corporate entity(Agridom Solutions Corp) run by a team of dedicated agricultural and tech professionals.
20.	Q: Why drones ? Why not traditional spraying ? A : Drones are faster, safer for the farmer, and much more precise, which saves you money on chemicals.
21.	Q: Is this just for rice ? A : Not at all! We work with banana, mango, corn, and many other high - value crops.
22.	Q: Do you have a website ? A : Yes, you can find more details at our official Agridom website.
23.	Q: Can I book a demo ? A : We often hold field days.Leave your contact info and I’ll have an agent notify you of the next one!
    24.	Q: Are the drones hard to fly ? A : With the XAG system, they are highly automated.We also provide full training.
25.	Q: Do I need a license ? A : For commercial drone use in the Philippines, CAAP certifications are often required.We can guide you on that.
26.	Q: What’s the first step to buying ? A : First, we identify your farm's needs. Are you spraying, spreading, or mapping?
    27.	Q: How do I talk to a human ? A : Just type "Talk to Human" and I will alert our team to jump in.
28.	Q: Why should I trust Agridom ? A : We are authorized partners of XAG and have a proven track record across the Philippines.
29.	Q: What brands do you carry ? A : Our primary focus for agriculture is XAG, but we also keep an eye on enterprise tech like DJI and Skydio.
30.	Q: Do you offer discounts ? A : We occasionally have promotions.It’s best to speak with a sales agent for the latest deals.
31.	Q: Is drone tech reliable ? A : Extremely.Modern agri - drones are built to work in tough farm environments.
32.	Q: How fast do you reply ? A : Me ? Instantly! Our human team usually gets back to you within 24 hours.
33.	Q: What’s your most popular drone ? A : The XAG series is our bestseller for spraying, while the DJI Mini series is popular for quick aerial views.
34.	Q: Can you help with crop mapping ? A : Yes, mapping is one of our core services to help you understand your field better.
35.	Q: Do you sell spare parts ? A : Yes, we maintain an inventory of genuine parts at our service centers.
36.	Q: Where can I see your price list ? A : Prices vary based on the package.I can give you some estimates, or a human agent can send a formal quote.
37.	Q: Are you active on social media ? A : Yes! Follow Agridom Solutions Corp for the latest updates and field photos.
38.	Q: Can I be a dealer ? A : We are looking for partners! Type "Reseller" to see the requirements.
39.	Q: Do you support Lakatan farmers ? A : Yes, we have specialized experience with both Lakatan and Cavendish banana plantations.
40.	Q: Is this available in Mindanao ? A : Definitely.We have a very strong presence in Davao and surrounding provinces.
41.	Q: Do you offer repair services ? A : Yes, our specialized centers in Davao and Nueva Ecija handle all repairs.
42.	Q: What if I’m not tech - savvy ? A : No worries.Our drones are designed for ease of use, and our training is very beginner - friendly.
43.	Q: Is this safe for the environment ? A : Actually, it's better. Precision spraying means less chemical runoff and waste.
44.	Q: Can I buy just one drone ? A : Of course! Whether you need one drone or a whole fleet, we’ve got you covered.
45.	Q: Do you provide battery chargers ? A : Yes, all our drone packages come with the necessary power and charging equipment.
46.	Q: How long is the warranty ? A : Our drones come with a standard manufacturer's warranty. Ask an agent for specific model details.
    47.	Q: Can you spray at night ? A : Many of our XAG models are equipped for night operations, though safety is always priority.
48.	Q: What's the battery life like? A: It depends on the payload, but we usually recommend a multi-battery setup for continuous work.
    49.	Q: Do you have the DJI Neo ? A : We track consumer models like the Neo($199) for light use, but we recommend XAG for heavy farm work.
50.	Q: What about the DJI Matrice 350 ? A : That's a powerhouse ($12,500) for enterprise mapping and inspection!
    51.	Q: Is the Skydio X10 available ? A : We focus on XAG for spraying, but the Skydio X10 is a top - tier enterprise mapping tool($15,000).
52.	Q: Can I pay via bank transfer ? A : Yes, we accept various payment methods.Our sales team can provide the details.
53.	Q: Do you deliver ? A : We can arrange shipping and delivery to most parts of the Philippines.
54.	Q: Is the training free ? A : Training is typically included when you purchase a drone package from us.
55.	Q: How many people does it take to fly ? A : Most of our drones can be operated by a single trained pilot.
56.	Q: What is the maximum spray capacity ? A : This depends on the specific XAG model.Some are designed for high - volume efficiency.
57.	Q: Can I use my own chemicals ? A : Yes, you can use standard liquid fertilizers and pesticides.
58.	Q: Do you have used drones for sale ? A : We primarily sell new, high - performance equipment to ensure reliability.
59.	Q: How do I know which drone is right for me ? A : Just tell me your farm size and crop type, and I’ll give you a recommendation!
    60.	Q: Are you open on weekends ? A : Our physical offices are usually closed, but you can message me anytime!
    61.	Q: Can you help with insurance ? A : We can point you in the right direction for drone insurance providers.
62.	: What happens if there’s a software bug ? A : Our service team can help you with firmware updates and troubleshooting.
63.	Q: Do you have a physical catalog ? A : We have digital brochures we can email to you right now!
    64.	Q: Can I apply for a job ? A : We are always looking for talent.Send your CV to info @agridomcorp.com.
65.	Q: Do you sell the DJI Air 3S ? A : Yes, that’s a great prosumer choice($1,099) for high - quality farm photography.
66.	Q: Is the Autel Evo Lite + better ? A : It’s a strong competitor($1, 249).It depends on your specific needs for image quality.
67.	Q: What’s the cheapest drone you have ? A : For basic aerial views, the DJI Neo is very affordable at $199.
68.	Q: Do you provide free consultations ? A : Absolutely.We want to make sure you get the right solution for your farm.
69.	Q: Can I change my order after it's placed? A: Please contact your assigned sales agent immediately to see if changes are still possible.
    70.	Q: Do you offer after - sales support ? A : This is what we pride ourselves on! Our support doesn't end when the sale does.
    71.	Q: Where is the Bongabon office ? A : It’s located in Bongabon, Nueva Ecija, perfectly placed to serve Luzon's rice granary.
    72.	Q: Can I buy drones in bulk ? A : Yes, we handle fleet orders for large plantations and cooperatives.
73.	Q: Do you have a YouTube channel ? A : We often post demo videos! Check out our social media for links.
74.	Q: Is the drone noisy ? A : They sound like large fans.It’s a powerful sound, but manageable in a farm setting.
75.	Q: How do you handle windy conditions ? A : Our professional drones have high wind resistance ratings to stay stable.
76.	Q: Can the drone fly itself ? A : Yes, XAG drones are highly autonomous.You set the path, and it does the work.
77.	Q: Do I need a remote control ? A : Most models use a specialized handheld controller or a mobile app interface.
78.	Q: Can you help with mango trees ? A : Yes! Drones are excellent for reaching the canopy of mango trees.
79.	Q: Do you have the DJI Mini 4 Pro ? A : Yes, it’s a favorite for its 4K camera and portability($759).
80.	Q: What is the range of the drone ? A : Professional models can often fly several kilometers away, but we recommend keeping them in sight.
81.	Q: Are you a scam ? A : Not at all! We are a registered corporation with physical offices and hundreds of happy clients.
82.	Q: How long does shipping take ? A : Usually a few days to a week depending on your location in the Philippines.
83.	Q: Can I test fly a drone ? A : We host demo events where you can see the drones in action.
84.	Q: Do you sell seeds too ? A : Our drones are great for spreading seeds, though we primarily focus on the technology.
85.	Q: What’s the weight limit ? A : Each model has a different payload capacity for liquids or granules.
86.	Q: Do you offer a warranty on repairs ? A : Yes, our service centers stand by their work.
87.	Q: Is there an app I need to download ? A : Yes, most drones use a specific app for flight planning and monitoring.
88.	Q: Can I use the drone for photography ? A : Our XAG drones are for work, but models like the DJI Mini 4 Pro are perfect for photography.
89.	Q: Do you have a branch in Cebu ? A : Not yet, but we are looking for partners in the Visayas region!
    90.	Q: Can I pay in installments ? A : This is something you can discuss with our sales representatives.
91.	Q: Do you have the Potensic Atom ? A : Yes, it’s a great budget - friendly option($299) for basic aerial tasks.
92.	Q: How do I update the drone's GPS? A: It updates automatically through the software, but we can help you if you get stuck.
    93.	Q: Can the drone fly in the rain ? A : While many are water - resistant, we generally recommend flying in clear weather for safety.
94.	Q: Do you sell thermal drones ? A : Yes, some enterprise models like the Matrice 350 can be equipped with thermal cameras.
95.	Q: What if I lose the drone ? A : Modern drones have "Return to Home" features to prevent loss.
96.	Q: Can I upgrade my drone later ? A : Some components can be upgraded.Our service center can advise you.
97.	Q: Do you provide a VAT invoice ? A : Yes, we provide official receipts and invoices for all purchases.
98.	Q: Are you hiring pilots ? A : Feel free to send your resume! We’re always growing.
99.	Q: Why is my drone not connecting ? A : That sounds like a technical issue.Would you like to speak with a technician ?
        100.	Q: Ready to start ? A : I’ve got all the info you need.Just tell me which drone or service you want to hear more about!

AI Sales Agent Script: Section 2 – Product & Technical(100 Entries)
The "Technical Specialist" Voice
    1.	Q: What is the flagship model for spraying ? A : That would be the XAG P100 Pro.It’s a beast in the field with a 50kg payload capacity.
2.	Q: How much liquid can the P100 Pro carry ? A : It features a 50 - liter smart liquid tank, perfect for large - scale operations.
3.	Q: What about granular spreading ? A : The P100 Pro has an 80 - liter granule container for fertilizers and seeds.
4.	Q: How fast can it spread fertilizer ? A : It can discharge up to 150 kg of granules per minute.That’s a bag of fertilizer in about 20 seconds!
    5.	Q: What is the spray width of the XAG P100 Pro ? A : You’re looking at an effective spray width of 5 to 10 meters, depending on your flight altitude.
6.	Q: How many hectares can it cover in an hour ? A : For rice weeding, it can hit up to 28 hectares per hour at top speed.
7.	Q: What is the maximum flight speed during operation ? A : It cruises at a maximum of 13.8 meters per second.
8.	Q: Does it have obstacle avoidance ? A : Yes! It uses 4D Imaging Radar that detects obstacles up to 80 meters away.
9.	Q: Can it fly in hilly areas ? A : Absolutely.It has Terrain - Following Radar that maintains a consistent height above the crop canopy even on 45° slopes.
10.	Q: What is the XAG P150 ? A : The P150 is the next evolution, pushing payloads up to 70kg for even higher efficiency.
11.	Q: How accurate is the flight path ? A : With RTK(Real - Time Kinematic) technology, the drone has centimeter - level positioning accuracy.
12.	Q: What is "Rotary Atomization" ? A : It’s XAG’s signature tech.Instead of traditional nozzles, it uses spinning discs to create uniform droplets(60 - 400 microns) that stick to leaves better.
13.	Q: Can I adjust the droplet size ? A : Yes, you can adjust it via the app to suit different chemicals and weather conditions.
14.	Q: What is the "RevoSpray 3" system ? A : That’s the high - flow spraying module on the P100 Pro, capable of 22 liters per minute.
15.	Q: Does the drone have a camera for the pilot ? A : Yes, it has a PSL(Pilot - Sight - Livestream) camera so you can see exactly what the drone sees in HD.
16.	Q: What is the DJI Mini 4 Pro used for in farming ? A : While not for spraying, it’s our go - to for quick field scouting($759).It fits in your pocket but shoots 4K video.
17.	Q: Is the Skydio X10 good for mapping ? A : It’s world - class.At $15,000, it uses AI to fly through complex environments like forests or structures without crashing.
18.	Q: What makes the DJI Matrice 350 special ? A : It’s an enterprise "Swiss Army Knife"($12, 500).You can swap out cameras for thermal sensors or high - zoom lenses.
19.	Q: Does the XAG P100 Pro fold ? A : Yes, it folds down to 62 % of its size, making it much easier to transport in a pickup truck.
20.	Q: What is the IP rating of the XAG drones ? A : They are rated IPX6K, meaning they are dustproof and can be washed down with a hose after a day in the field.
21.	Q: How long does the battery last ? A : A standard flight is about 10 - 15 minutes when fully loaded, but we focus on "Fast Charging" to keep you in the air.
22.	Q: How long does it take to charge ? A : With the GC4000 + SuperCharge Station, you can go from 30 % to 95 % in just 11 minutes.
23.	Q: Does the charger use gasoline ? A : The GC4000 + is a gas - powered mobile generator—perfect for farms without a power outlet nearby.
24.	Q: How many batteries do I need ? A : We recommend a "two-battery, one-charger" cycle for non - stop operation.
25.	Q: What is the RealTerra system ? A : It’s XAG’s mapping module.It can map 6.67 hectares in just 10 minutes.
26.	Q: Can it identify weeds ? A : Yes, the AI can analyze mapping data to create "Prescription Maps" that tell the drone to spray only where weeds are.
27.	Q: What is the propeller size ? A : The P100 Pro uses massive 55 - inch carbon - fiber propellers for maximum lift.
28.	Q: What material are the arms made of ? A : A durable composite of glass and carbon fiber—light but incredibly tough.
29.	Q: Can it fly in the wind ? A : It can withstand winds up to 12 meters per second.
30.	Q: Does it work without an internet connection ? A : Yes, the XAG Local Network Terminal allows the drone to operate even in remote "dead zones."
    31.	Q: What is the maximum altitude ? A : It can fly up to 2,000 meters above sea level.
32.	Q: Can it handle powder chemicals ? A : The RevoCast system is primarily for granules, but certain powder - coated granules work fine.
33.	Q: How many nozzles does it have ? A : Usually 2 high - speed centrifugal atomizers that do the work of 8 - 10 traditional nozzles.
34.	Q: Is the battery safe ? A : It uses the XBMS Intelligent Battery Management System to prevent overheating and overcharging.
35.	Q: Can the drone fly at night ? A : Yes, it’s equipped with high - intensity LED lights for safe night spraying.
36.	Q: What's the maximum flow rate of the P150? A: It can push up to 30 liters per minute!
    37.	Q: Does it have a "Return to Home" feature ? A : Of course.If the battery is low or signal is lost, it automatically returns to the takeoff point.
38.	Q: Can it follow a custom flight path ? A : Yes, you can draw the field boundary on the app, and it plans the path automatically.
39.	Q: What is the weight of the P100 Pro without a battery ? A : It’s about 46kg.
40.	Q: Can I use it for banana plantations ? A : It’s perfect for it.The downward wind from the propellers helps the spray reach the underside of the leaves.
41.	Q: How much is the DJI Neo ? A : That's our entry-level drone at $199. Great for personal photos but not for farming.
    42.	Q: Is the Autel Evo Lite + better than the Mini 4 Pro ? A : It has a larger sensor for better low - light photos, but it's a bit more expensive ($1,249).
    43.	Q: What is the sensor size on the DJI Air 3S ? A : It features a 1 - inch CMOS main camera, which is professional - grade for $1,099.
44.	Q: How does the drone know the field size ? A : You can walk the boundary with a handheld RTK stick or fly the drone over to map it.
45.	Q: Can it spray orchards ? A : Yes, we have a specific "Orchard Mode" for spraying fruit trees like Mango.
46.	Q: Does it help with rice seeding ? A : Definitely.It provides much more even distribution than hand - casting seeds.
47.	Q: What is the "Smart Screw Feeder" ? A : It’s the mechanism in the spreader that ensures granules don't get stuck or crushed.
    48.	Q: Can I control the drone with my smartphone ? A : Yes, the "XAG One" app is designed for exactly that.
49.	Q: How many drones can one person fly ? A : The system supports "Swarm Mode," where one operator can manage multiple drones at once.
50.	Q: What is the range of the remote ? A : Typically up to 2km with a clear line of sight.
51.	Q: Can the P100 Pro carry 50kg of liquid AND 50kg of granules ? A : Not at the same time! You swap the modules depending on the task.
52.	Q: How long does it take to swap modules ? A : Only a few minutes.It's designed to be "plug-and-play."
    53.	Q: Does the drone have GPS ? A : It uses GPS, GLONASS, Galileo, and Beidou for maximum signal stability.
54.	Q: What is the standby time of the remote ? A : About 5 - 6 hours of active use.
55.	Q: Does the drone come with a warranty ? A : Yes, we provide a full manufacturer warranty on the core components.
56.	Q: Is the propeller made of plastic ? A : No, it’s high - strength carbon fiber to handle the massive torque.
57.	Q: What happens if a motor fails ? A : The flight controller has redundancy and will try to land the drone safely.
58.	Q: Can I use it for corn ? A : Yes, it’s excellent for corn, especially for mid - to - late season spraying when tractors can't enter the field.
    59.	Q: How many centrifugal discs does it have for spreading ? A : Two high - speed discs for the most even spread pattern.
60.	Q: Does it have a water tank sensor ? A : Yes, it tells you exactly how many liters are left in real - time.
61.	Q: Can I limit the flight height ? A : Yes, you can set a "ceiling" for safety.
62.	Q: What is the "SuperX 4 Pro" ? A : That’s the "brain" or flight control system of the drone.
63.	Q: Does it use 5G ? A : It supports 4G / 5G modules for cloud - based data transmission.
64.	Q: Can it be used for aquaculture ? A : Yes! It’s perfect for feeding fish or shrimp in large ponds.
65.	Q: How much does the Skydio X10 weigh ? A : It’s much lighter than the agri - drones, under 2.5kg, but very rugged.
66.	: What is the payload of the Matrice 350 ? A : Around 2.7kg for sensors / cameras.
67.	Q: Can the XAG drones avoid power lines ? A : The radar is very good at detecting wires, but we always recommend caution.
68.	Q: Does the spreader work for salt ? A : Yes, but you must wash it thoroughly afterward to prevent corrosion.
69.	Q: What is the "Centrifugal Nozzle" life span ? A : They are very durable, usually lasting hundreds of hours before needing a check.
70.	Q: Does it come with a flight case?A: We offer various transport solutions, including rugged crates and trailers.
71.	Q: Can I monitor the spray from my office ? A : Yes, through the cloud platform, you can see live progress of the fleet.
72.	Q: What is the flight time of the DJI Mini 4 Pro ? A : Up to 45 minutes on a single battery!
    73.	Q: Does the P100 Pro have lights for landing ? A : Yes, it has high - visibility navigation and landing lights.
74.	Q: Can I use it for forest fire prevention ? A : Some clients use mapping drones to monitor dry areas, yes.
75.	Q: Does the battery charge in the sun ? A : No, we recommend using the water-cooling tank for charging to keep it cool and fast.
76.	Q: What is a "Water Cooling Tank" ? A : It’s a specialized container that keeps the battery cool while it fast - charges at high speeds.
77.	Q: Can I fly it manually ? A : Yes, but most users prefer the autonomous mode for better precision.
78.	Q: How does the AI detect crop health ? A : It looks at the "greenness" or NDVI(Normalized Difference Vegetation Index) of the plants.
79.	Q: Can I use the drone for cattle herding ? A : Some farmers use drones for monitoring livestock, though it's not their primary design.
    80.	Q: What is the "JetSeed" engine ? A : That’s the AI - driven software that controls the spreading flow rate.
81.	Q: Does it have a loud alarm ? A : It has voice prompts to tell you when the tank is empty or the battery is low.
82.	Q: Can I use the DJI Air 3S for real estate ? A : Absolutely, it’s a top choice for high - end property videos.
83.	Q: Is the Skydio X10 waterproof ? A : It has an IP55 rating, so it can handle rain and dust.
84.	Q: Does the XAG app work on iPhones ? A : Yes, it’s available for both iOS and Android.
85.	Q: Can I export the field maps ? A : Yes, you can export them to other agricultural software.
86.	Q: What is the width of the drone when unfolded ? A : It’s nearly 2.5 meters wide—a very stable platform.
87.	Q: Can the drone "see" in the dark ? A : The radar works perfectly in total darkness, but the camera needs light.
88.	Q: Does it come with an SD card ? A : The internal storage handles flight logs, but you’ll want a high - speed card for mapping.
89.	Q: Can I use a different controller ? A : It’s best to use the XAG Smart ControlStick for full compatibility.
90.	Q: How do I calibrate the radar ? A : The app guides you through it; it’s a simple one - click process.
91.	Q: Can I adjust the flight altitude during flight ? A : Yes, you can manually override it if needed.
92.	Q: What is the "A50" motor ? A : It’s the high - efficiency brushless motor used in the P100 Pro.
93.	Q: How many flight modes are there ? A : Standard, Manual, and Route(Autonomous) modes.
94.	Q: Can it detect birds ? A : Yes, the radar can detect moving objects, including birds.
95.	Q: How do I clean the nozzles ? A : Just run clean water through the system after each use—the centrifugal design is mostly self - cleaning.
96.	Q: Can I use it to spray my garden ? A : It’s a bit too big for a backyard garden! It’s designed for farm fields.
97.	Q: Is there a "Simulator" for practice ? A : Yes, the XAG software includes a flight simulator to practice before you fly for real.
98.	Q: Can I share my maps with my neighbors ? A : Yes, mapping data can be shared through the Agridom cloud.
99.	Q: Does it have "Anti-Erosion" materials ? A : Yes, the frame is treated to resist chemicals and fertilizers.
100.	Q: Is the P100 Pro the "Pro" version of the P100 ? A : Exactly! It has upgraded motors, larger propellers, and a higher payload capacity.

AI Sales Agent Script: Section 3 – Business, Dealership & Logistics(100 Entries)
The "Strategic Partner" Voice
    1.	Q: How do I become an Agridom dealer ? A : We’re always looking for partners! Start by sending your name, location, and whether you have an existing agri - store to info @agridomcorp.com.
2.	Q: What are the qualifications for a dealer ? A : Ideally, you should have a background in agriculture, a registered business, and a passion for helping farmers modernize.
3.	Q: Do I need a physical store ? A : While a physical store in a key agricultural hub is a huge plus, we evaluate all qualified applications.
4.	Q: Is there an application fee ? A : There is no fee to apply.We want to hear your business proposal first!
    5.	Q: Can I be an exclusive dealer for my province ? A : Exclusivity depends on your sales targets and the regional demand.Let’s discuss your territory!
    6.	Q: What info should I include in my email ? A : Please include your Full Name, Business Address, Contact Number, and any experience you have with drones or agri - retail.
7.	Q: Do you provide marketing support for dealers ? A : Yes! Our partners get access to brand assets, brochures, and digital marketing materials.
8.	Q: Are there different "tiers" of partnership ? A : We offer various levels, from Referral Agents to Authorized Service & Support Centers.
9.	Q: Can I just be a referral partner ? A : Yes, if you have the connections but not the shop space, our referral program might be perfect for you.
10.	Q: How much is the initial investment for a dealership ? A : This varies based on the inventory you choose to stock.We’ll provide a detailed breakdown after your initial interview.
11.	Q: Do you offer "Drop-shipping" for drones ? A : For high - value agri - drones, we prefer a more hands - on dealer model to ensure the customer gets proper training.
12.	Q: Can I apply if I’m based in Visayas ? A : Yes! We are actively looking to expand our footprint in the Visayas region.
13.	Q: What is the "Agridom Academy" ? A : It’s our specialized training center in Davao that ensures your pilots(and your customers) are certified.
14.	Q: Is there a dealer training program ? A : Absolutely.We don’t just sell you the drones; we train your staff on how to demo and maintain them.
15.	Q: Do you provide a "Demo Unit" for my shop ? A : We have special pricing programs for dealers to acquire their first demo and training aircraft.
16.	Q: How do I handle warranty claims as a dealer ? A : You’ll coordinate directly with our service hubs in Davao or Nueva Ecija to get your customers back in the air.
17.	Q: Can I sell parts only ? A : We prefer partners who can offer the full experience—sales, parts, and basic technical advice.
18.	Q: Is there a minimum monthly sales quota ? A : We set realistic targets based on your region's agricultural profile (e.g., rice season vs. fruit season).
    19.	: How long does the approval process take ? A : Usually 7 to 14 business days once we have all your documentation.
20.	Q: Do I need to be a drone pilot myself ? A : Not necessarily, but at least one member of your staff must be a certified XAG technician / pilot.
21.	Q: What is the profit margin for resellers ? A : We offer competitive margins that reward high - performing partners.Detailed pricing is shared upon approval.
22.	Q: Can I sell other brands too ? A : Our dealership focus is on the XAG ecosystem, but we can discuss how this fits with your existing inventory.
23.	Q: Do you provide lead referrals to dealers ? A : Yes! If a customer in your area contacts us, we often direct them to their nearest authorized dealer.
24.	Q: Can I set my own prices ? A : We provide a Suggested Retail Price(SRP) to maintain a fair market for all our partners.
25.	Q: Do you offer seasonal promotions ? A : Yes, we run various campaigns throughout the year that our dealers can participate in.
26.	Q: What’s the biggest challenge for a new dealer ? A : Education! Most farmers need to see the drone work before they buy.That’s why demos are key.
27.	Q: Can I sell the DJI Matrice 350 ? A : Our enterprise models are available for our specialized partners.Let us know if you have an industrial clientele.
28.	Q: Is there a contract to sign ? A : Yes, a formal Dealership Agreement to protect both parties and ensure service quality.
29.	Q: Can I use the Agridom logo on my sign ? A : Authorized dealers are encouraged to use our co - branding to build trust with local farmers.
30.	Q: Do you offer bulk discounts for cooperatives ? A : Yes, we have special programs for agricultural cooperatives and farm clusters.
31.	Q: How do I order restock inventory ? A : Dealers have a direct line to our logistics team for priority shipping on drones and parts.
32.	Q: What if a dealer wants to exit the partnership ? A : Our contracts include a clear exit clause; we value long - term relationships but understand business shifts.
33.	Q: Can I apply as a service - only partner ? A : If you have a strong technical background, we are open to discussing Authorized Service Center status.
34.	Q: Do you help with CAAP / TESDA certifications for my clients ? A : Yes, our Academy is a partner for these certifications, making it a "one-stop shop" for your customers.
35.	Q: Is the agricultural drone market growing in the PH ? A : Rapidly! With the government's push for modernization, the demand is higher than ever.
    36.	Q: Can I sell drones to local government units(LGUs) ? A : Yes, many LGUs are looking to purchase drones for their local farmers.We can help you with the technical specs for bidding.
37.	Q: What payment terms do you offer dealers ? A : Initially, most orders are on a pre - paid basis, but we can discuss credit terms as our partnership grows.
38.	Q: Do you have a dealer portal ? A : We provide our partners with all the latest technical bulletins and price lists via direct communication.
39.	Q: Can I host an Agridom event at my store ? A : We love that! We can send a technical team to help you run a "Field Day" for your community.
40.	Q: What’s the warranty on a dealer’s demo unit ? A : The same high standard as our retail units.
41.	Q: How do I handle shipping damage ? A : All our shipments are insured.You just need to report any issues immediately upon delivery.
42.	Q: Do you provide tech support via phone ? A : Yes, we have a dedicated technical hotline for our authorized partners.
43.	Q: Can I sell the DJI Mini 4 Pro($759) in my store ? A : Yes, consumer models are a great way to drive "foot traffic" into your agri - store.
44.	Q: Is the Skydio X10($15,000) a hard sell ? A : It's a niche product for high-end enterprise clients. We can help you identify those leads.
    45.	Q: Can I operate a "Drone-as-a-Service" business ? A : Many of our partners do both! They sell the hardware and offer spraying services on the side.
46.	Q: What is the ROI for a service provider ? A : Most service providers see a return on investment within 1 to 2 harvest seasons.
47.	Q: Do you sell the DJI Neo($199) ? A : It’s available for bulk orders if you’re targeting the hobbyist or light - scouting market.
48.	Q: What is the "Bongabon" advantage ? A : It’s our hub for Luzon.Dealers in the north get faster parts and support from this location.
49.	Q: Can I be a dealer if I’m just a pilot ? A : We recommend partnering with a local business owner or registering your own business first.
50.	Q: Do you provide leads for spraying services ? A : We often get requests for service and pass those on to our nearest partner with a fleet.
51.	Q: Can I sell to banana plantations ? A : Yes, and we can provide you with the specific data we’ve gathered from our Davao operations to help your pitch.
52.	Q: How does the "Referral Program" work ? A : You connect us with a buyer, and you earn a commission once the sale is finalized.Simple!
    53.	Q: Do I need to stock batteries ? A : We highly recommend it.Batteries are the most requested "add-on" for farmers.
54.	Q: Can I advertise on Facebook ? A : Yes! We can even provide you with high - quality photos and videos for your ads.
55.	Q: What is the most common dealer question ? A : Usually, "How fast can I get parts?" And the answer is: We keep them in stock in Davao and Nueva Ecija!
    56.	Q: Do you offer financing for dealers ? A : We can recommend banking partners who are familiar with agricultural technology loans.
57.	Q: Can I sell the Autel Evo Lite + ($1, 249) ? A : Yes, it’s a great option for farmers who want high - end imaging without the "enterprise" price tag.
58.	Q: Is the Skydio X10($15,000) a hard sell ? A : It's a niche product for high-end enterprise clients. We can help you identify those leads.
    59.	Q: Can I customize the drones for my clients ? A : We recommend sticking to the XAG ecosystem for reliability, but we can discuss specialized sensors.
60.	Q: What about the "Cavendish" market ? A : It’s huge.We can provide you with the exact "Spray Recipes" and flight parameters for banana success.
61.	Q: Do you have a dealer meeting ? A : We occasionally gather our partners for training and to reveal new XAG tech.
62.	Q: Can I sell the DJI Air 3S($1,099) ? A : Definitely.It’s a very popular mid - range drone for farm monitoring.
63.	Q: How do I prove the drone works to a skeptic ? A : Demos! We have the data to show chemical savings of up to 30 %.
64.	Q: What is the "XAG One" app ? A : It’s the software our dealers use to manage their customers' drones and flight logs.
    65.	Q: Can I sell drones to sugar cane farms ? A : Yes! Drones are actually better for sugar cane because they don't damage the tall stalks like tractors do.
    66.	Q: Do you offer a "Trade-in" program ? A : Not currently, but we can help dealers assess the value of used units for their clients.
67.	Q: Can I be a dealer for just one model ? A : We prefer our dealers to represent the full XAG agricultural line for better customer service.
68.	Q: How do you handle competition between dealers ? A : We try to space out our authorized centers to ensure everyone has a fair territory.
69.	Q: Do you provide a "Starter Kit" for new dealers ? A : Yes! It includes all the essential tools and marketing materials to get you going.
70.	Q: Can I sell to the government ? A : Yes, we can support you with the necessary technical documentation for LGU or DA biddings.
71.	Q: What is the email for the Training Academy ? A : academy@agridomcorp.com.
72.	Q: Can I send my pilots to Davao for training ? A : Yes, that is the best place for them to get hands - on experience in our banana fields.
73.	Q: Is there a discount for bulk orders ? A : Yes, volume - based discounts are available for all our partners.
74.	Q: Can I put my own stickers on the drone ? A : You can add your dealer contact info, but the XAG branding must remain clear.
75.	Q: How do I report a bug in the app ? A : Dealers have a direct line to our technical support team for software feedback.
76.	Q: Do you have a "Partner of the Year" award ? A : We love celebrating our top performers! Stay tuned for our annual rewards.
77.	Q: Can I use your videos for my own website ? A : Authorized dealers are granted a license to use our official media assets.
78.	Q: What about shipping to Palawan ? A : We ship nationwide! We’ll find the best courier for your region.
79.	Q: Is the price list in Pesos or Dollars ? A : For the Philippines market, we provide all pricing in Philippine Pesos(PHP).
80.	Q: Can I pay via credit card ? A : We accept various payment forms; specific card fees may apply.
81.	Q: Do you have a showroom ? A : Yes, in Davao City! You are welcome to bring potential big - ticket clients here.
82.	Q: Can I sell the Potensic Atom($299) ? A : Yes, it’s a great "low-risk" drone for first - time flyers.
83.	Q: Is there a dealer's handbook? A: Yes, we provide an onboarding guide for all new partners.
    84.	Q: What if I have a question at 10 PM ? A : You can message me(the AI), and I’ll do my best to help until the team is back!
    85.	Q: Do you offer "Rent-to-Own" for farmers ? A : That is a model some of our dealers choose to run.We can advise you on how to set it up.
86.	Q: How do I explain the "Centrifugal Nozzle" to a customer ? A : Tell them: "It's like a tiny fan that turns the liquid into a fine mist that sticks to plants instead of falling on the dirt."
    87.	Q: Can I sell drones for search and rescue ? A : Yes, the DJI Matrice 350 is excellent for this.We can help you with the thermal camera specs.
88.	Q: Is there a limit on how many drones I can buy ? A : As long as we have the stock, there is no limit!
    89.	Q: Can I be a dealer if I live abroad but own a farm in the PH ? A : Yes, as long as you have a registered Philippine business entity.
90.	Q: What is the most sold part ? A : Usually "Propeller Blades" and "Spray Discs." We recommend dealers keep these in high stock.
91.	Q: Do you provide a "Certificate of Dealership" ? A : Yes, you’ll get an official plaque or certificate to display in your store.
92.	Q: Can I sell the DJI Matrice 350($12, 500) to mining companies ? A : Yes, it’s highly popular for stockpile volume measurement in mines.
93.	Q: What’s the best way to get a farmer’s attention ? A : Show them a side - by - side comparison of manual labor vs.a 10 - minute drone flight.
94.	Q: How do I handle a "Fly-away" ? A : Modern GPS makes this rare, but we can help you analyze the flight logs to see what happened.
95.	Q: Can I set up a service center in a remote province ? A : We are very interested in remote service points to better support our farmers!
    96.	Q: Do you provide insurance for the drones ? A : We can recommend specialized drone insurance providers in the Philippines.
97.	Q: What is the most important skill for a dealer ? A : Good customer service.Farmers need to know you’ll be there if they have a problem.
98.	Q: Can I use the "Agridom" name in my business name ? A : No, you should keep your own business name and add "Authorized Agridom Dealer."
    99.	Q: How do I get a quote for 10 drones ? A : Just send your request to info @agridomcorp.com and we’ll get back to you with a volume quote.
100.	Q: Ready to grow with us ? A : The future of farming is in the air.Let’s get you started as a partner today!
        `;

    const ANTIGRAVITY_PROMPT = `
        You are Antigravity, the Elite Sales & Outreach Specialist for a DRONE RENTAL & SALES SERVICE. 🚁
        Your primary goal is to **CONVERT LEADS INTO CUSTOMERS**.

        🚨 PROACTIVE SALES RULES 🚨
        1. **Always be closing**: If the user asks for data, provide it and then suggest a follow-up action (e.g., "I see James Paul hasn't been contacted in 2 months. Should I draft an email?").
        2. **Personalization is Power**: Use specific details from the LEAD and SALES databases to make every interaction feel calculated and professional.
        3. **Spot Opportunities**: If you see a high-value lead in the database who hasn't bought anything yet, point them out!

        YOUR PERSONALITY:
        - ROLE: High-Performance Growth Associate
        - TONE: Ambitious, Persuasive, and Data-Driven
        - STYLE: Concise but impactful. You speak in terms of ROI and efficiency for the farmer.

        COMPANY KNOWLEDGE BASE:
        - **PRIMARY PRODUCT:** XAG agricultural drones.
        - **VALUE PROP:** 30% chemical savings, 10x faster than manual labor, increased crop yields.
        - **LOCATION:** Main Hub in Davao, Service Center in Bongabon.

        EXTENDED KNOWLEDGE BASE & FAQ:
        ${AI_SCRIPT_KNOWLEDGE}

        YOUR MAIN TASKS:

        1. **COLD OUTREACH GENERATION**: (High Priority)
           - Use the provided context to identify the best premium and budget drone options.
           - Draft emails that are FRIENDLY but professional.
           - ALWAYS include the Subject line and the "To:" email address at the top of your response.

        2. **LEAD SCOUTING**:
           - When asked "Who should I contact?" or "Which leads are best?", analyze the database.
           - Recommend leads with no "Assigned To" value or those from high-value companies.
           - Suggest a specific drone model for them based on their crop type (if known).

        🚨 ANTI-HALLUCINATION RULES 🚨
        - ONLY use the data provided in the DATABASE CONTEXT.
        - If a field (like email) is missing, do not guess it.
        - Do not generate code. Just be a world-class sales assistant.
    `;

    // Script Knowledge Parser (Optimized)
    const scriptQA = [];
    const parseScriptKnowledge = () => {
        const lines = AI_SCRIPT_KNOWLEDGE.split('\n');
        lines.forEach(line => {
            const match = line.match(/^\d+\.\s*Q:\s*(.+?)\s*A:\s*(.+)/);
            if (match) {
                scriptQA.push({
                    q: match[1].trim(),
                    a: match[2].trim(),
                    keywords: match[1].toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3)
                });
            }
        });
        console.log(`Parsed ${scriptQA.length} script entries for local matching.`);
    };
    // Parse immediately
    setTimeout(parseScriptKnowledge, 100);

    // Complex Query Handler - helps Ollama process sophisticated requests
    const handleComplexQuery = (query, leadsData, salesData) => {
        const q = query.toLowerCase();
        let enhancedContext = '';
        let queryType = 'general';

        // Detect query patterns and prepare structured context

        // Outreach queries: "send email", "create cold email", "draft SMS"
        if (q.includes('email') || q.includes('sms') || q.includes('text') || q.includes('message') || q.includes('outreach') || q.includes('cold')) {
            if (q.includes('send') || q.includes('create') || q.includes('draft') || q.includes('write') || q.includes('generate')) {
                queryType = 'outreach';
                enhancedContext = `TASK: Generate cold outreach content(email or SMS).\nUse the templates provided in the system prompt.\nPersonalize with lead information from the database.\nKeep it concise and benefit - focused.\n\n`;
            }
        }

        // Comparison queries: "compare X and Y"
        if (q.includes('compare') || q.includes('versus') || q.includes('vs')) {
            queryType = 'comparison';
            enhancedContext = `TASK: Compare items mentioned in the query.\nProvide a side - by - side comparison focusing on key differences.\n\n`;
        }

        // Analysis queries: "analyze", "what's the trend", "summary"
        if (q.includes('analyze') || q.includes('trend') || q.includes('summary') || q.includes('overview')) {
            queryType = 'analysis';
            enhancedContext = `TASK: Provide analytical insights based on the data.\nFocus on patterns, trends, and key metrics.\n\n`;
        }

        // Filter queries: "show me leads from X" or "sales in Y region"
        if ((q.includes('from') || q.includes('in') || q.includes('where')) && (q.includes('lead') || q.includes('sale'))) {
            queryType = 'filter';
            enhancedContext = `TASK: Filter and display matching records.\nList only items that match the criteria.\n\n`;
        }

        // Recommendation queries: "who should I contact", "best lead for"
        if (q.includes('should') || q.includes('recommend') || q.includes('suggest') || q.includes('best')) {
            queryType = 'recommendation';
            enhancedContext = `TASK: Provide a recommendation based on available data.\nBe specific and justify your choice with data points.\n\n`;
        }

        // Multi-step queries: "find X and tell me Y"
        if (q.includes(' and ') || q.includes(' then ')) {
            queryType = 'multi-step';
            enhancedContext = `TASK: This is a multi - step query.Address each part in order.\n\n`;
        }

        return {
            queryType,
            enhancedContext,
            needsAI: queryType !== 'general' // Complex queries always need AI
        };
    };

    // Local Query Pre-Processor - handles simple queries without AI
    const handleLocalQuery = (query) => {
        const q = query.toLowerCase().trim();

        // Skip local handling if it's an outreach request
        if (q.includes('email') || q.includes('sms') || q.includes('text') || q.includes('message') || q.includes('send') || q.includes('draft') || q.includes('write') || q.includes('create') || q.includes('generate')) {
            return { handled: false }; // Let AI handle outreach
        }

        // "About Me" / Personality queries - handle locally for consistency
        if (q.includes('who are you') || q.includes('what is your name') || q.includes("what's your name") || q.includes('your name') || q.includes('about yourself') || q.includes('what can you do') || (q.includes('what') && q.includes('antigravity'))) {
            return {
                handled: true,
                response: "I'm **Antigravity**, your AI CRM assistant! 🚁\n\nI can help you:\n- **Look up leads** (just ask for a name!)\n- **Check sales data**\n- **Write cold emails & SMS**\n- **Answer questions** about your business\n\nTry asking: *\"Send an email to [Name]\"* or *\"Who bought the premium drone?\"*",
                engine: "Local"
            };
        }

        // Specific "How are you" check
        if (q.includes('how are you')) {
            return { handled: true, response: "I'm doing great, thanks for asking! 🚀 I'm ready to help you with your leads. What can I do for you?", engine: "Local" };
        }

        // Simple Greetings - strict matching (start of line or word boundary)
        // --- COMPANY SPECIFIC FAQ HANDLERS (Agridom/FAC) ---

        // 1. Direct Script Matcher (Fuzzy)
        // Checks if the user's query strongly resembles a known FAQ in the script
        const userKeywords = q.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3);

        if (userKeywords.length > 2) {
            // Find best match in scriptQA
            let bestMatch = null;
            let maxOverlap = 0;

            scriptQA.forEach(entry => {
                const overlap = entry.keywords.filter(k => q.includes(k)).length;
                if (overlap > maxOverlap && overlap >= Math.min(entry.keywords.length, userKeywords.length) * 0.6) {
                    maxOverlap = overlap;
                    bestMatch = entry;
                }
            });

            if (bestMatch && maxOverlap >= 2) { // At least 2 significant keywords must match
                return {
                    handled: true,
                    response: `💡 ** ${bestMatch.a}** `, // Use emoji to show it's a "Smart" answer
                    engine: "Local (Script)"
                };
            }
        }

        // --- COMPANY SPECIFIC FAQ HANDLERS (Agridom/FAC) ---
        // REMOVED: Location, Fertilizers, Reseller, Repair, Drones
        // These are now covered by the comprehensive AI_SCRIPT_KNOWLEDGE in the system prompt.
        // We let the AI handle these to provide the detailed, scripted answers.

        // ---------------------------------------------------

        // ---------------------------------------------------

        // Count queries
        if (q.includes('how many leads') || q.includes('count leads')) {
            return { handled: true, response: `There are ${allLeads.length} leads in the database.\n\nAntigravity`, engine: "Local" };
        }
        if (q.includes('how many sales') || q.includes('count sales')) {
            const salesCount = (window.allSales || []).length;
            return { handled: true, response: `There are ${salesCount} sales records in the database.\n\nAntigravity`, engine: "Local" };
        }

        // Specific person lookup - Strict match "details on [Name]" or "find [Name]"
        // Removed generic "get" or "show" to prevent false positives like "get a quote"
        const nameMatch = q.match(/(?:details on|details about|find lead|lookup)\s+(\w+)/i);
        if (nameMatch) {
            const searchName = nameMatch[1];
            const lead = allLeads.find(l => l.name.toLowerCase().includes(searchName));
            if (lead) {
                return {
                    handled: true,
                    response: `** ${lead.name}**\nCompany: ${lead.company} \nPhone: ${lead.phone} \nEmail: ${lead.email} \nAssigned to: ${lead.assignedTo || 'Unassigned'} \n\nAntigravity`,
                    engine: "Local"
                };
            }
        }

        // List all leads
        if (q.includes('list') && q.includes('lead')) {
            const leadsList = allLeads.slice(0, 20).map(l => `• ${l.name} (${l.company})`).join('\n');
            return {
                handled: true,
                response: `Here are the first 20 leads: \n\n${leadsList} \n\n(Showing 20 of ${allLeads.length} total) \n\nAntigravity`,
                engine: "Local"
            };
        }

        // Not a simple query - needs AI
        return { handled: false };
    };

    const callAI = async (query, context = null) => {
        let userContent = `Sender: User\nSubject: CRM Inquiry\nContent: \n${query} `;
        if (context) {
            userContent = `-- - DATABASE CONTEXT-- -\n${context} \n---------------------\n\n${userContent} `;
        }

        console.log('Antigravity: Attempting Gemini AI call...');

        try {
            const geminiResponse = await fetch(GEMINI_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `${ANTIGRAVITY_PROMPT} \n\nUSER QUERY: \n${userContent} `
                        }]
                    }]
                })
            });

            if (geminiResponse.ok) {
                const data = await geminiResponse.json();
                if (data.candidates && data.candidates[0].content) {
                    const content = data.candidates[0].content.parts[0].text.trim();
                    console.log('Antigravity: Success using Gemini.');
                    return { content, engine: 'Gemini' };
                } else {
                    console.error('Gemini error response:', data);
                    throw new Error('Malformed response from Gemini API.');
                }
            } else {
                const errData = await geminiResponse.json().catch(() => ({}));
                const errMsg = errData.error ? errData.error.message : await geminiResponse.text();
                console.error(`Gemini API Error ${geminiResponse.status}: `, errMsg);
                throw new Error(`Gemini API Error ${geminiResponse.status}: ${errMsg.substring(0, 100)}...`);
            }
        } catch (error) {
            console.error('Gemini connection error:', error);
            throw new Error(`AI service unavailable: ${error.message} `);
        }
    };

    const toggleAiSidebar = () => aiSidebar.classList.toggle('active');

    aiToggle.addEventListener('click', toggleAiSidebar);
    aiClose.addEventListener('click', toggleAiSidebar);

    // Email parsing helper
    const parseEmailFromAI = (text) => {
        // Robust matching for Subject: and To: even if wrapped in markdown bolding
        const subjectMatch = text.match(/(?:\*\*|#)?\s*Subject:\s*(?:\*\*)?\s*(.+)/i);
        const emailMatch = text.match(/(?:\*\*|#)?\s*(?:To:|Email:)\s*(?:\*\*)?\s*([\w\.-]+@[\w\.-]+\.\w+)/i);

        if (subjectMatch && emailMatch) {
            // Extract body (everything after subject line)
            // We strip markdown bolding from the match text for indexing
            const rawSubjectLine = subjectMatch[0];
            const bodyStart = text.indexOf(rawSubjectLine) + rawSubjectLine.length;
            const body = text.substring(bodyStart).trim();

            return {
                to: emailMatch[1],
                subject: subjectMatch[1].trim().replace(/\*\*$/, ''), // Clean trailing bolding
                body: body.replace(/(?:\*\*|#)?\s*Email:\s*(?:\*\*)?\s*[\w\.-]+@[\w\.-]+\.\w+(?:\*\*)?/gi, '').trim()
            };
        }
        return null;
    };

    // Toast notification
    const showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `toast toast - ${type} `;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    const appendMessage = (role, text, engine = null) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ${role}`;

        if (engine && role === 'bot') {
            const engineTag = document.createElement('span');
            engineTag.style.cssText = 'font-size: 10px; opacity: 0.6; display: block; margin-bottom: 4px;';
            engineTag.textContent = `⚡ via ${engine} Engine`;
            msgDiv.appendChild(engineTag);
        }

        const textSpan = document.createElement('span');

        // --- Proactive Sales Insight Highlighting ---
        // If the message contains proactive suggestions, wrap them in a special div
        const salesKeywords = ['should i draft', 'i see', 'recommend', 'best lead', 'roi', 'opportunity', 'suggest a follow-up', 'let’s get you started'];
        if (role === 'bot' && salesKeywords.some(kw => text.toLowerCase().includes(kw))) {
            const highlightedText = text.replace(/(Should I draft|I see|recommend|best lead|ROI|opportunity|suggest a follow-up|Let’s get you started)/gi, '<strong>$1</strong>');
            textSpan.innerHTML = `<div class="sales-insight">💡 ${highlightedText}</div>`;
        } else {
            textSpan.textContent = text;
        }

        msgDiv.appendChild(textSpan);

        // Check if message contains email content
        if (role === 'bot') {
            const emailData = parseEmailFromAI(text);
            if (emailData) {
                const sendBtn = document.createElement('button');
                sendBtn.className = 'email-send-btn';
                sendBtn.innerHTML = '📧 Send Email';
                sendBtn.onclick = async () => {
                    if (!gmailAuthorized) {
                        showToast('Please connect Gmail first!', 'error');
                        return;
                    }

                    sendBtn.disabled = true;
                    sendBtn.textContent = 'Sending...';

                    const success = await sendEmailViaGmail(emailData.to, emailData.subject, emailData.body);

                    if (success) {
                        showToast(`Email sent to ${emailData.to}!`, 'success');
                        sendBtn.textContent = '✓ Sent';
                        sendBtn.style.background = '#4caf50';
                    } else {
                        showToast('Failed to send email', 'error');
                        sendBtn.disabled = false;
                        sendBtn.textContent = '📧 Retry Send';
                    }
                };
                msgDiv.appendChild(sendBtn);
            }
        }

        aiChatHistory.appendChild(msgDiv);
        aiChatHistory.scrollTop = aiChatHistory.scrollHeight;
    };

    // AI State Management
    let isGenerating = false;
    let aiCancelController = null;

    const stopAI = () => {
        if (aiCancelController) {
            aiCancelController.abort();
            aiCancelController = null;
        }
        isGenerating = false;
        aiSendBtn.innerHTML = '<i data-lucide="send"></i>';
        lucide.createIcons();
        appendMessage('bot', "🛑 Generator stopped by user.");
        updateSendBtnState(); // Reset button state
    };

    const askAI = async (query) => {
        if (isGenerating) return; // Prevent double submit

        // --- 1. HANDLE STAGED FILE LOGIC ---
        if (window.stagedChatFile) {
            const file = window.stagedChatFile;
            appendMessage('user', `[Uploaded File: ${file.name}] ${query} `);

            // Determine intent from query
            const lowerQ = query.toLowerCase();
            let target = null;

            if (lowerQ.includes('lead')) target = 'leads';
            else if (lowerQ.includes('sale')) target = 'sales';

            clearStagedFile(); // Clear UI immediately
            aiInput.value = '';

            if (target) {
                appendMessage('bot', `📂 Processing ** ${file.name}** for ** ${target.toUpperCase()} ** list...`);
                const success = await processFileImport(file, target);
                if (success) {
                    appendMessage('bot', `✅ Done! The file has been imported to your ${target} list.`);
                }
            } else {
                // Ambiguous - Ask user
                // Temporarily store the file in memory (not window.stagedChatFile which handles UI)
                window.pendingImportFile = file;
                window.awaitingImportTarget = true;
                appendMessage('bot', `I see you uploaded ** ${file.name}**. 📂\n\nShould I save this to the ** Leads ** list or the ** Sales ** list ? `);
            }
            return;
        }

        // --- 2. HANDLE PENDING CLARIFICATION ---
        if (window.awaitingImportTarget) {
            appendMessage('user', query);
            aiInput.value = '';

            const lowerQ = query.toLowerCase();
            let target = null;
            if (lowerQ.includes('lead')) target = 'leads';
            else if (lowerQ.includes('sale')) target = 'sales';

            if (target) {
                window.awaitingImportTarget = false;
                if (window.pendingImportFile) {
                    appendMessage('bot', `Got it! Importing to ** ${target.toUpperCase()}**...`);
                    const success = await processFileImport(window.pendingImportFile, target);
                    window.pendingImportFile = null;
                    if (success) {
                        appendMessage('bot', `✅ Successfully imported details.`);
                    }
                } else {
                    appendMessage('bot', "⚠️ Error: I lost the file. Please upload it again.");
                }
            } else {
                appendMessage('bot', "I didn't quite catch that. Please type **'Leads'** or **'Sales'** to confirm where to save the file.");
            }
            return;
        }

        // --- 3. NORMAL CHAT LOGIC ---
        appendMessage('user', query);
        aiInput.value = '';
        updateSendBtnState(); // Disable button since input is empty

        // Try local query handler first for instant responses
        const localResult = handleLocalQuery(query);
        if (localResult.handled) {
            appendMessage('bot', localResult.response, localResult.engine);
            return;
        }

        // START GENERATION STATE
        isGenerating = true;
        aiCancelController = new AbortController();
        aiSendBtn.innerHTML = '<i data-lucide="square" style="fill: currentColor;"></i>'; // Stop icon
        lucide.createIcons();
        updateSendBtnState(); // Enable button for stopping

        // ... (Database context logic remains same)
        const limitedLeads = allLeads.slice(0, 20);
        const leadsContext = limitedLeads.map(l =>
            `${l.name} | ${l.company} | ${l.phone} | ${l.email} | Assigned to: ${l.assignedTo} `
        ).join('\n');

        const limitedSales = (window.allSales || []).slice(0, 30);
        const salesContext = limitedSales.map(s =>
            `Sale ID: ${s.saleId} | Model: ${s.droneModel} | Units: ${s.units} | Price: $${s.unitPrice} | Region: ${s.region} | Date: ${s.date} `
        ).join('\n');

        const complexQuery = handleComplexQuery(query, limitedLeads, limitedSales);
        const baseContext = `LEAD DATABASE(showing ${limitedLeads.length} of ${allLeads.length} leads): \n${leadsContext} \n\nSALES DATABASE(showing ${limitedSales.length} of ${(window.allSales || []).length} records): \n${salesContext} `;
        const context = complexQuery.enhancedContext + baseContext;

        try {
            const { content, engine } = await callAI(query, context, aiCancelController.signal);
            if (content === "IGNORE") {
                appendMessage('bot', "(Antigravity filtered this as irrelevant)", engine);
            } else {
                appendMessage('bot', content, engine);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                // Handled by stopAI
            } else {
                appendMessage('bot', `Connection Error: ${error.message} `);
            }
        } finally {
            // RESET STATE
            isGenerating = false;
            aiCancelController = null;
            aiSendBtn.innerHTML = '<i data-lucide="send"></i>';
            lucide.createIcons();
            updateSendBtnState(); // Disable button again as input is empty
        }
    };

    const askOutreachAI = async (query) => {
        // ... (Outreach AI logic - leave as is or update similarly if needed)
        // For now, focusing on the main chatbox as requested
        appendOutreachMsg('user', query);
        outreachInput.value = '';
        // ... rest of outreach logic

        // Provide complete lead database as context
        const limitedLeads = allLeads.slice(0, 20);
        const leadsContext = limitedLeads.map(l =>
            `${l.name} | ${l.company} | ${l.phone} | ${l.email} | Assigned to: ${l.assignedTo} `
        ).join('\n');

        // Provide sales database context
        const limitedSales = (window.allSales || []).slice(0, 30);
        const salesContext = limitedSales.map(s =>
            `Sale ID: ${s.saleId} | Model: ${s.droneModel} | Units: ${s.units} | Price: $${s.unitPrice} | Region: ${s.region} | Date: ${s.date} `
        ).join('\n');

        const context = `LEAD DATABASE(showing ${limitedLeads.length} of ${allLeads.length} leads): \n${leadsContext} \n\nSALES DATABASE(showing ${limitedSales.length} of ${(window.allSales || []).length} records): \n${salesContext} `;

        try {
            const { content, engine } = await callAI(query, context); // No signal for outreach for now or update if needed
            if (content === "IGNORE") {
                appendOutreachMsg('bot', "(Antigravity filtered this as irrelevant)");
            } else {
                appendOutreachMsg('bot', content);
            }
        } catch (error) {
            appendOutreachMsg('bot', `Connection Error: ${error.message} `);
        }
    };

    outreachSendBtn.addEventListener('click', () => {
        if (outreachInput.value.trim()) askOutreachAI(outreachInput.value.trim());
    });

    outreachInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && outreachInput.value.trim()) askOutreachAI(outreachInput.value.trim());
    });

    const updateSendBtnState = () => {
        if (isGenerating) {
            aiSendBtn.disabled = false; // Always enable stop button
            aiSendBtn.style.opacity = 1;
            aiSendBtn.style.cursor = 'pointer';
        } else {
            const isEmpty = !aiInput.value.trim();
            aiSendBtn.disabled = isEmpty;
            aiSendBtn.style.opacity = isEmpty ? 0.5 : 1;
            aiSendBtn.style.cursor = isEmpty ? 'not-allowed' : 'pointer';
        }
    };

    aiSendBtn.addEventListener('click', () => {
        if (isGenerating) {
            stopAI();
        } else {
            if (aiInput.value.trim()) askAI(aiInput.value.trim());
        }
    });

    aiInput.addEventListener('input', updateSendBtnState);

    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isGenerating && aiInput.value.trim()) askAI(aiInput.value.trim());
    });

    // Initial state check
    updateSendBtnState();

    document.querySelectorAll('.suggest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!isGenerating) askAI(btn.getAttribute('data-query'));
        });
    });

    // Static Lead Data
    //const allLeads = [
    //]

    // Update lead count
    const leadCountEl = document.getElementById('lead-count');
    if (leadCountEl) leadCountEl.textContent = `${allLeads.length} Leads`;

    // Render leads on page load with pagination starting at page 1
    window.renderLeads(allLeads, 1);
});
