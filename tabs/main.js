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
        document.body.classList.remove('info-theme', 'contact-theme', 'work-images-theme', 'work-github-theme', 'work-videos-theme');

        if (targetId === 'info-tab') {
            document.body.classList.add('info-theme');
        } else if (targetId === 'contact-tab') {
            document.body.classList.add('contact-theme');
        } else if (targetId === 'work-tab') {
            // Default to images theme when Work tab is opened
            document.body.classList.add('work-images-theme'); 
            
            // Auto-reset sub-nav to Images to prevent layout desync
            document.querySelector('[data-target="images"]').click();
        }
    }
