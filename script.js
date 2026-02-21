document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Snappy Entrance Sequence
    // Reduced duration from 1.2s to 0.5s for a much faster feel
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.5 }});

    tl.to(".badge-pill", { opacity: 1, y: 0, delay: 0.2 })
      .to(".hero-section h1", { opacity: 1, y: 0 }, "-=0.3")
      .to(".hero-section p", { opacity: 1, y: 0 }, "-=0.4")
      .to(".persona-card", { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "elastic.out(1, 0.75)" // Gives a slight 'bounce' at high speed
      }, "-=0.3");

    // 2. Faster Hover Response
    const card = document.querySelector('.persona-card');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);

        const rotateX = (y - rect.height/2) / 15;
        const rotateY = (rect.width/2 - x) / 15;

        // Reduced duration to 0.2s for instant feedback
        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.02,
            duration: 0.2, 
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.4, // Faster snap back
            ease: "power4.out"
        });
    });
});

// Faster Page Transition
function navigateToDashboard(userPersona) {
    localStorage.setItem('userPersona', userPersona);
    gsap.to("body", { 
        opacity: 0, 
        scale: 1.05, 
        duration: 0.4, // Half the previous time
        onComplete: () => { window.location.href = 'dashboard.html'; }
    });
}
