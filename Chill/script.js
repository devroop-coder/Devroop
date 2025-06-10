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
            window.open('https://firebasestorage.googleapis.com/v0/b/devroop-7c99b.firebasestorage.app/o/Chill%20Reloaded%2FChill%20V1.6.apk?alt=media&token=4900d58b-6f82-45de-a276-ec100598994f', '_blank');
        });
    }
}); 