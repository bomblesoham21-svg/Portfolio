document.addEventListener('DOMContentLoaded', () => {
    const workBtns = document.querySelectorAll('.work-btn');
    const workSections = document.querySelectorAll('.work-section');

    workBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // --> NEW: Pause videos when switching sub-sections within the work tab
            document.querySelectorAll('.work-video').forEach(video => {
                video.pause();
            });

            // 1. Remove active state from all sub-tabs
            workBtns.forEach(b => b.classList.remove('active'));
            workSections.forEach(s => s.classList.remove('active'));

            // 2. Activate clicked button and target section
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(`work-${target}`).classList.add('active');

            // 3. Clear previous work themes and apply the new one
            document.body.classList.remove('work-images-theme', 'work-github-theme', 'work-videos-theme');
            document.body.classList.add(`work-${target}-theme`);
        });
    });
});
