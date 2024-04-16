document.addEventListener("DOMContentLoaded", function() {
    var videoElement = document.getElementById('videoElement'); // Target the video element
    var headTop = document.getElementById('head-top'); // This selects the #head-top element

    // When the video is hovered over, show #head-top
    videoElement.addEventListener('mouseenter', function() {
        headTop.style.display = 'block';
    });

    // When the mouse leaves the video, hide #head-top again
    videoElement.addEventListener('mouseleave', function() {
        headTop.style.display = 'none';
    });
});