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
            window.open('https://firebasestorage.googleapis.com/v0/b/devroop-7c99b.firebasestorage.app/o/Chill%20Reloaded%2FChill%20V1.7.apk?alt=media&token=80f182a5-ae55-4090-a2e0-bd62b2b56ac1', '_blank');
        });
    }
}); 