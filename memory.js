document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Animate memory cards sequentially
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    // Add hover effect to memory images
    const memoryImages = document.querySelectorAll('.memory-image');
    
    memoryImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.querySelector('.memory-overlay').style.background = 'linear-gradient(to bottom, rgba(216, 27, 96, 0.2), rgba(216, 27, 96, 0.4))';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.querySelector('.memory-overlay').style.background = 'linear-gradient(to bottom, rgba(216, 27, 96, 0.1), rgba(216, 27, 96, 0.3))';
        });
    });
    
    // Add pulse animation to quote
    const memoryQuote = document.querySelector('.memory-quote');
    
    setInterval(() => {
        memoryQuote.style.transform = 'scale(1.01)';
        setTimeout(() => {
            memoryQuote.style.transform = 'scale(1)';
        }, 1000);
    }, 3000);
    
    // Add year indicators
    const years = ['2018', '2021', '2022', '2023', 'Today'];
    document.querySelectorAll('.memory-card').forEach((card, index) => {
        card.setAttribute('data-year', years[index]);
    });
    
    // Add click effect to memory cards
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});