
function handleChillRedirects() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
   
    const chillWithPathMatch = currentPath.match(/\/(chill|Chill)\/(.+)/i);
    if (chillWithPathMatch) {
        const pathAfterChill = chillWithPathMatch[2];
        
        openAppWithDeepLink(pathAfterChill);
        return;
    }
    
   
    if (currentPath.toLowerCase() === '/chill' || currentPath.toLowerCase() === '/chill/') {
        window.location.href = '/Chill/';
        return;
    }
    
    
    if (currentHash.toLowerCase().includes('chill')) {
        window.location.href = '/Chill/';
        return;
    }
}


function openAppWithDeepLink(pathAfterChill) {
   
    const deepLinkUrl = `chill://open/${pathAfterChill}`;
    const fallbackUrl = `/Chill/`;
    
   
    const startTime = Date.now();
    
    
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = deepLinkUrl;
    document.body.appendChild(iframe);
    
   
    setTimeout(() => {
       
        if (Date.now() - startTime < 2000) {
            
            window.location.href = fallbackUrl;
        }
        
        document.body.removeChild(iframe);
    }, 1500);
    
    
    if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
        window.location.href = deepLinkUrl;
        setTimeout(() => {
            window.location.href = fallbackUrl;
        }, 1000);
    }
}


handleChillRedirects();


document.addEventListener('DOMContentLoaded', () => {
   
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