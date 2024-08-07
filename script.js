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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('ul li a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});