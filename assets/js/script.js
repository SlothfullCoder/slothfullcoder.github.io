document.addEventListener('DOMContentLoaded', () => {
    // Tooltip for nav button descriptions
    const tooltip = document.getElementById('nav-desc-tooltip');
    let hoverTimer = null;
    let lastMouseX = 0;
    let lastMouseY = 0;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        });

        btn.addEventListener('mouseenter', () => {
            hoverTimer = setTimeout(() => {
                const desc = btn.getAttribute('data-desc');
                tooltip.textContent = desc;
                tooltip.style.display = 'block';
                tooltip.style.left = (lastMouseX + 15) + 'px';
                tooltip.style.top = (lastMouseY + 15) + 'px';
            }, 1500);
        });

        btn.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimer);
            tooltip.style.display = 'none';
        });
    });
});
