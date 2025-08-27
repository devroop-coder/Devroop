// Handle redirects and deep links for Chill paths
function handleChillRedirects() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Check if path contains /Chill/ or /chill/ followed by any id
    const chillWithIdMatch = currentPath.match(/\/(chill|Chill)\/(\w+)/i);
    if (chillWithIdMatch) {
        const id = chillWithIdMatch[2];
        // Try to open the app using deep link
        openAppWithDeepLink(id);
        return;
    }
    
    // Check if path is exactly /chill (case-insensitive) without ID
    if (currentPath.toLowerCase() === '/chill' || currentPath.toLowerCase() === '/chill/') {
        window.location.href = '/Chill/';
        return;
    }
    
    // Check hash for #chill or #Chill patterns
    if (currentHash.toLowerCase().includes('chill')) {
        window.location.href = '/Chill/';
        return;
    }
}

// Function to handle deep linking to the app
function openAppWithDeepLink(id) {
    // Construct the deep link URL (adjust the scheme based on your app)
    const deepLinkUrl = `chill://open?id=${id}`;
    const fallbackUrl = `/Chill/`;
    
    // Try to open the app
    const startTime = Date.now();
    
    // Create a hidden iframe to attempt the deep link
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = deepLinkUrl;
    document.body.appendChild(iframe);
    
    // Set a timeout to check if the app opened
    setTimeout(() => {
        // If we're still on the page after attempting deep link, redirect back to /Chill/
        if (Date.now() - startTime < 2000) {
            // App likely didn't open, redirect back to /Chill/
            window.location.href = fallbackUrl;
        }
        // Clean up the iframe
        document.body.removeChild(iframe);
    }, 1500);
    
    // Also try the universal link approach for iOS
    if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
        window.location.href = deepLinkUrl;
        setTimeout(() => {
            window.location.href = fallbackUrl;
        }, 1000);
    }
}

// Run redirect check immediately
handleChillRedirects();

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth hover effect to all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 