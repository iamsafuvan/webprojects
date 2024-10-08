document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = 'docs/safuvanresume.pdf';
        link.download = 'safuvanresume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`No section found with ID: ${targetId}`);
            }
        });
    }
});



// Select the menubar element
const menubar = document.getElementById('menubar');
const overlay = document.querySelector('.overlay');
const boxMenu = document.querySelector('.box-menu');
const closeicon = document.querySelector('.close-icon');



// Add click event listener to the menubar
menubar.addEventListener('click', function (event) {
    boxMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Add click event listener to the overlay
overlay.addEventListener('click', function (event) {
    boxMenu.classList.remove('active');
    overlay.classList.remove('active');
});

closeicon.addEventListener('click', function (event) {
    boxMenu.classList.remove('active');
    overlay.classList.remove('active');
});








