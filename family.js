document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Calculate Arham's age
    function updateBabyStats() {
        // Set Arham's birth date (update this with actual date)
        const birthDate = new Date('2024-01-01'); // Example date - replace with actual
        const today = new Date();
        
        // Calculate months
        const months = (today.getFullYear() - birthDate.getFullYear()) * 12;
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const totalMonths = months + monthDiff;
        
        // Animate counter
        animateValue('age-stat', 0, totalMonths, 2000);
        
        // Example weight - replace with actual
        const weight = 7.5 + (totalMonths * 0.5); // Starting weight + 0.5kg per month
        animateValue('weight-stat', 0, weight, 2000);
    }
    
    // Animate value counter
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = end === Math.floor(end) ? value : value.toFixed(1);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Initialize
    updateBabyStats();
    
    // Add hover effects to family members
    const familyMembers = document.querySelectorAll('.family-member');
    
    familyMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Gallery item click effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});