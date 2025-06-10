// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth hover effect to product card
    const productCard = document.querySelector('.product-card');
    
    if (productCard) {
        productCard.addEventListener('mouseenter', () => {
            productCard.style.transform = 'translateY(-5px)';
        });
        
        productCard.addEventListener('mouseleave', () => {
            productCard.style.transform = 'translateY(0)';
        });
    }
}); 