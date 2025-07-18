document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Add sparkle effect to diamond ring
    const diamondRing = document.querySelector('.diamond-ring');
    
    setInterval(() => {
        diamondRing.style.animationName = 'sparkle, pulse';
        setTimeout(() => {
            diamondRing.style.animationName = 'sparkle';
        }, 1000);
    }, 3000);
    
    // Add click event for mobile users
    const proposalCard = document.querySelector('.proposal-card');
    if (window.innerWidth <= 768) {
        proposalCard.addEventListener('click', function() {
            this.querySelector('.card-inner').classList.toggle('flipped');
        });
    }
});