// Export and Import Utilities for Sales Data

// Export dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
    const exportDropdownBtn = document.getElementById('export-dropdown-btn');
    const exportMenu = document.getElementById('export-menu');
    const exportExcelBtn = document.getElementById('export-excel-btn');
    const importFileBtn = document.getElementById('import-file-btn');
    const importModal = document.getElementById('import-modal');
    const closeImportModal = document.getElementById('close-import-modal');
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const browseFileBtn = document.getElementById('browse-file-btn');
    const filePreview = document.getElementById('file-preview');
    const fileName = document.getElementById('file-name');
    const removeFileBtn = document.getElementById('remove-file-btn');
    const cancelImportBtn = document.getElementById('cancel-import-btn');
    const confirmImportBtn = document.getElementById('confirm-import-btn');

    let selectedFile = null;

    // Toggle export dropdown
    if (exportDropdownBtn && exportMenu) {
        exportDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportMenu.style.display = exportMenu.style.display === 'none' ? 'block' : 'none';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            if (exportMenu) exportMenu.style.display = 'none';
        });

        exportMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Export to Excel
    if (exportExcelBtn) {
        exportExcelBtn.addEventListener('click', () => {
            exportToExcel();
            exportMenu.style.display = 'none';
        });
    }

    // Open import modal
    if (importFileBtn && importModal) {
        importFileBtn.addEventListener('click', () => {
            importModal.style.display = 'flex';
            exportMenu.style.display = 'none';
        });
    }

    // Close import modal
    if (closeImportModal || cancelImportBtn) {
        const closeModal = () => {
            importModal.style.display = 'none';
            resetFileInput();
        };
        closeImportModal?.addEventListener('click', closeModal);
        cancelImportBtn?.addEventListener('click', closeModal);
    }

    // Browse files
    if (browseFileBtn && fileInput) {
        browseFileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            handleFileSelect(e.target.files[0]);
        });
    }

    // Drag and drop
    if (dropZone) {
        dropZone.addEventListener('click', () => {
            fileInput.click();
        });

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '#6c5dd3';
            dropZone.style.background = 'rgba(108, 93, 211, 0.05)';
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = 'var(--border)';
            dropZone.style.background = 'var(--bg-secondary)';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--border)';
            dropZone.style.background = 'var(--bg-secondary)';

            const file = e.dataTransfer.files[0];
            handleFileSelect(file);
        });
    }

    // Handle file selection
    function handleFileSelect(file) {
        if (!file) return;

        const validTypes = ['.csv', '.xlsx', '.xls'];
        const fileExt = '.' + file.name.split('.').pop().toLowerCase();

        if (!validTypes.includes(fileExt)) {
            alert('Invalid file type. Please upload CSV or Excel files only.');
            return;
        }

        selectedFile = file;
        fileName.textContent = file.name;
        filePreview.style.display = 'block';
        confirmImportBtn.disabled = false;
        lucide.createIcons();
    }

    // Remove file
    if (removeFileBtn) {
        removeFileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            resetFileInput();
        });
    }

    // Reset file input
    function resetFileInput() {
        selectedFile = null;
        fileInput.value = '';
        filePreview.style.display = 'none';
        confirmImportBtn.disabled = true;
    }

    // Confirm import
    if (confirmImportBtn) {
        confirmImportBtn.addEventListener('click', () => {
            if (selectedFile) {
                importFile(selectedFile);
            }
        });
    }

    // Export to Excel function
    function exportToExcel() {
        // Get sales data from window.allSales (will be defined in script.js)
        const salesData = window.allSales || [];

        if (salesData.length === 0) {
            alert('No sales data to export');
            return;
        }

        // Create CSV content
        const headers = ['Sale_ID', 'Date', 'Drone_Model', 'Category', 'Units', 'Unit_Price', 'Region'];
        const csvContent = [
            headers.join(','),
            ...salesData.map(sale =>
                [sale.saleId, sale.date, sale.droneModel, sale.category, sale.units, sale.unitPrice, sale.region].join(',')
            )
        ].join('\n');

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', `sales_export_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('Exported', salesData.length, 'sales records');
    }

    // Import file function
    function importFile(file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const content = e.target.result;
                const lines = content.split(/\r?\n/).filter(line => line.trim() !== '');

                if (lines.length < 2) {
                    alert('File is empty or invalid');
                    return;
                }

                // Skip header and parse data
                const dataLines = lines.slice(1);
                const importedSales = dataLines.map((line, index) => {
                    const [saleId, date, droneModel, category, units, unitPrice, region] = line.split(',');
                    return {
                        saleId: saleId?.trim(),
                        date: date?.trim(),
                        droneModel: droneModel?.trim(),
                        category: category?.trim(),
                        units: parseInt(units?.trim()) || 0,
                        unitPrice: parseFloat(unitPrice?.trim()) || 0,
                        region: region?.trim()
                    };
                });

                // Update global sales data
                window.allSales = importedSales;

                // Re-render the sales table starting at page 1
                if (typeof window.renderSales === 'function') {
                    window.renderSales(window.allSales, 1);
                }

                importModal.style.display = 'none';
                resetFileInput();
                alert(`Successfully imported ${importedSales.length} sales records`);
                console.log('Import successful:', importedSales);

            } catch (error) {
                console.error('Import error:', error);
                alert('Failed to import file. Please check the file format.');
            }
        };

        reader.readAsText(file);
    }
});
