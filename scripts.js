document.getElementById('openCameraButton').addEventListener('click', function() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            // Stream the video to a video element (if desired)
            // Here we're just opening the camera, you can customize this further
            let video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            document.body.appendChild(video);
        })
        .catch(function(error) {
            console.error("Error opening camera: ", error);
        });
    } else {
        alert('Sorry, your browser does not support accessing the camera.');
    }
});
