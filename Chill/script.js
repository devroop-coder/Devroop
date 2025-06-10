document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');

    // Hide splash screen after 3 seconds
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('hidden');
        }
    }, 3000);

    const downloadButton = document.querySelector('.download-app');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            window.open('https://firebasestorage.googleapis.com/v0/b/devroop-7c99b.firebasestorage.app/o/Chill%20Reloaded%2FChill%20V1.5.apk?alt=media&token=a5791f50-1399-495a-8ff8-19aa571b79c2', '_blank');
        });
    }
}); 