document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // 1. Toggle Dropdown Menu Open/Close
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents instant closing
        dropdownMenu.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });

    // 2. Close dropdown if clicking anywhere else on screen
    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('open');
        menuBtn.classList.remove('active');
    });

    // 3. Tab Switching and Highlighting Logic
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            
            // Remove active highlight from all menu buttons, add to clicked one
            menuItems.forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');

            // Handle the smooth scene transitions
            switchScene(targetId);
        });
    });

    function switchScene(targetId) {
        const scenes = document.querySelectorAll('.hero-scene, .content-tab');
        
        scenes.forEach(scene => {
            if (scene.id === targetId) {
                scene.classList.add('visible');
            } else {
                scene.classList.remove('visible');
            }
        });

        // Handle background theme toggle flawlessly
        if (targetId === 'info-tab') {
            document.body.classList.add('info-theme');
        } else {
            document.body.classList.remove('info-theme');
        }
    }
}); // <-- THIS WAS MISSING AND BROKE YOUR WHOLE SITE
