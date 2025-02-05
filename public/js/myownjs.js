 // Show the popup with the specified image
 function showPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    popup.style.display = 'flex'; // Show the popup
    popupImage.src = imageSrc;   // Set the image source
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}



// for video

function showPopupvideo(videoSrc) {
    const popup = document.getElementById('videopopup');
    const popupVideo = document.getElementById('popup-video');
    const videoSource = document.getElementById('popup-video-source');
    popup.style.display = 'block'; // Show the popup
    videoSource.src = videoSrc;    // Set the video source
    popupVideo.load();             // Reload video to play the new source
    popupVideo.play();             // Play the video
}

// Close the popup
function vclosePopup() {
    const popup = document.getElementById('videopopup');
    const popupVideo = document.getElementById('popup-video');
    popup.style.display = 'none';  // Hide the popup
    popupVideo.pause();           // Pause the video
    popupVideo.currentTime = 0;   // Reset video to the beginning
}