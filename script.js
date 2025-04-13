document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video');
    const videoContainer = document.querySelector('.video-container');
    
    // Function to adjust video size
    function adjustVideoSize() {
        const containerWidth = videoContainer.offsetWidth;
        const containerHeight = videoContainer.offsetHeight;
        const videoRatio = video.videoWidth / video.videoHeight;
        const containerRatio = containerWidth / containerHeight;

        if (containerRatio > videoRatio) {
            video.style.width = 'auto';
            video.style.height = '100%';
        } else {
            video.style.width = '100%';
            video.style.height = 'auto';
        }
    }

    // Handle video metadata load
    video.addEventListener('loadedmetadata', () => {
        adjustVideoSize();
        // Ensure video plays automatically
        video.play().catch(error => {
            console.log('Autoplay failed:', error);
        });
    });

    // Handle video end - pause the video
    video.addEventListener('ended', () => {
        video.pause();
    });

    // Create a ResizeObserver to handle container size changes
    const resizeObserver = new ResizeObserver(adjustVideoSize);
    resizeObserver.observe(videoContainer);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 