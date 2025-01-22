// Função para criar efeito de digitação
function typeWriter(element, texts, waitTime = 3000) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = "";

  function type() {
    // Texto atual do array de textos
    const fullText = texts[textIndex];

    if (isDeleting) {
      // Remove caracteres
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Adiciona caracteres
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Atualiza o texto no elemento
    element.textContent = currentText;

    // Velocidade de digitação
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullText.length) {
      // Pausa no final do texto
      typeSpeed = waitTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move para o próximo texto
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Inicializa o efeito quando o documento carregar
document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.querySelector("h2");
  const texts = [
    "Front-End Developer",
    "Desenvolvedor Front-End",
  ];

  typeWriter(titleElement, texts);
});

// Animações principais
document.addEventListener('DOMContentLoaded', () => {
    // Timeline principal
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

    // Animação do header
    tl.from('header', {
        y: -100,
        opacity: 0,
        duration: 1.2
    })

    // Animação da foto de perfil
    .from('.rounded-full', {
        scale: 0,
        opacity: 0,
        rotation: -180,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.5")

    // Animação do título
    .from('h2', {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=1")

    // Animação da descrição
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
