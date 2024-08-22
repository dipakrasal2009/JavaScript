// Access the elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        // Stream the video to the video element
        video.srcObject = stream;
        video.play();
    })
    .catch((err) => {
        console.error("Error accessing the camera: " + err);
    });

// Capture a photo when the button is clicked
snap.addEventListener('click', () => {
    // Draw the video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Optionally, you can get the image data as a data URL:
    const imageData = canvas.toDataURL('image/png');
    console.log(imageData);  // You can display it, save it, or send it to a server
});

