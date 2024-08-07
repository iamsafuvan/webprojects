document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'docs/safuvanresume.pdf'; 
        link.download = 'safuvanresume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});