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
            window.open('https://drive.google.com/drive/folders/1s2LcylLoBJfXtihykWPUw7beDZIo0PJs?usp=drive_link', '_blank');
        });
    }
}); 