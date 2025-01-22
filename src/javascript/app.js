document.addEventListener('DOMContentLoaded', () => {
    
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

    
    tl.from('header', {
        y: -100,
        opacity: 0,
        duration: 1.2
    })

    
    .from('.rounded-full', {
        scale: 0,
        opacity: 0,
        rotation: -180,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.5")

    
    .from('h2', {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=1")

    
    .from('p', {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=0.8")

    gsap.utils.toArray('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link.querySelector('i'), {
                scale: 1.3,
                rotate: '10deg',
                duration: 0.3,
                ease: "back.out(2)"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link.querySelector('i'), {
                scale: 1,
                rotate: '0deg',
                duration: 0.3
            });
        });
    });

    gsap.to('.bg-[radial-gradient(#51c774,transparent_1px)]', {
        backgroundPosition: '100px 100px',
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.utils.toArray('main a').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});
