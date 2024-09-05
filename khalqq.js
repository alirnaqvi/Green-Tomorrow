// Hover card effect when hovering over the sections
document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'scale(1.03)';
        section.style.transition = 'transform 0.3s ease';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'scale(1)';
    });
});
