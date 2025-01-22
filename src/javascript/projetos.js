document.addEventListener("DOMContentLoaded", () => {
  // Timeline principal
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Animação do header
  tl.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
  })

    // Animação do título principal
    .from(
      "h2",
      {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    )

    // Animação dos cards de projeto
    .from(
      "article",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=0.5"
    );

  // Efeito de hover nos cards
  gsap.utils.toArray("article").forEach((card) => {
    const cardImage = card.querySelector("img");
    const cardContent = card.querySelector(".p-6");
    const cardTags = card.querySelectorAll(".px-3");

    // Timeline para hover
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(cardImage, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(
        cardContent,
        {
          y: -5,
          duration: 0.3,
        },
        0
      )
      .to(
        cardTags,
        {
          scale: 1.05,
          stagger: 0.05,
          duration: 0.2,
        },
        0
      );

    // Adiciona eventos de hover
    card.addEventListener("mouseenter", () => hoverTl.play());
    card.addEventListener("mouseleave", () => hoverTl.reverse());
  });

  // Animação do background pontilhado
  gsap.to(".bg-[radial-gradient(#51c774,transparent_1px)]", {
    backgroundPosition: "100px 100px",
    duration: 20,
    repeat: -1,
    ease: "none",
  });

  // Efeito nos botões
  gsap.utils.toArray("a").forEach((button) => {
    if (
      button.classList.contains("bg-[#51c774]") ||
      button.classList.contains("border-[#51c774]")
    ) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
        });
      });
    }
  });

  // Efeito scroll reveal para cards
  const revealCards = () => {
    gsap.utils.toArray("article").forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
      });
    });
  };

  // Inicializa scroll reveal
  if (typeof ScrollTrigger !== "undefined") {
    revealCards();
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Animação inicial do botão
    gsap.from('#backButton', {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1, 0.5)"
    });

    // Efeito hover
    const button = document.querySelector('#backButton');
    
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "back.out(1.7)"
        });
        
        gsap.to(button.querySelector('i'), {
            rotate: -15,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut"
        });
        
        gsap.to(button.querySelector('i'), {
            rotate: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    // Mostrar/ocultar botão baseado no scroll
    gsap.to('#backButton', {
        scrollTrigger: {
            trigger: 'body',
            start: '100px top',
            end: '100% bottom',
            toggleActions: 'play reverse play reverse',
            onEnter: () => gsap.to('#backButton', { opacity: 1, duration: 0.3 }),
            onLeave: () => gsap.to('#backButton', { opacity: 0, duration: 0.3 }),
            onEnterBack: () => gsap.to('#backButton', { opacity: 1, duration: 0.3 }),
            onLeaveBack: () => gsap.to('#backButton', { opacity: 0, duration: 0.3 })
        }
    });
});