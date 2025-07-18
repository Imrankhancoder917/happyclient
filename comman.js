// Common JavaScript functions for all pages

// Create floating hearts background
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const colors = ['#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.background = color;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        container.appendChild(heart);
    }
}

// Add heart element styles to head if not already added
if (!document.querySelector('style[data-hearts]')) {
    const style = document.createElement('style');
    style.setAttribute('data-hearts', 'true');
    style.innerHTML = `
    .heart {
        position: absolute;
        bottom: -100px;
        background: #ff9aa2;
        border-radius: 50% 50% 0 0;
        transform: rotate(-45deg);
        animation: floating-heart linear infinite;
        opacity: 0.7;
    }

    .heart:before, .heart:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
    }

    .heart:before {
        top: -50%;
        left: 0;
    }

    .heart:after {
        top: 0;
        left: 50%;
    }

    @keyframes floating-heart {
        0% {
            transform: rotate(-45deg) translateY(0) translateX(0) scale(1);
            opacity: 0.7;
        }
        50% {
            transform: rotate(-45deg) translateY(-100px) translateX(10px) scale(1.1);
            opacity: 1;
        }
        100% {
            transform: rotate(-45deg) translateY(-200px) translateX(0) scale(0.9);
            opacity: 0;
        }
    }
    `;
    document.head.appendChild(style);
}