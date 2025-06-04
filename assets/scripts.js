
           const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });


const investmentInput = document.getElementById('investmentRange');
  const durationInput = document.getElementById('durationRange');
  const investmentDisplay = document.getElementById('investmentValue');
  const durationDisplay = document.getElementById('durationValue');
  const earningsDisplay = document.getElementById('earnings');

  function calculateEarnings() {
    const investment = parseInt(investmentInput.value);
    const duration = parseInt(durationInput.value);
    
    // Simple estimation formula (customize as needed)
    const estimatedEarnings = Math.round(investment * Math.pow(1.5, duration));

    investmentDisplay.textContent = investment.toLocaleString();
    durationDisplay.textContent = duration;
    earningsDisplay.textContent = estimatedEarnings.toLocaleString();
  }

  investmentInput.addEventListener('input', calculateEarnings);
  durationInput.addEventListener('input', calculateEarnings);

  // Initial calculation
  calculateEarnings();




  // slider

     function scrollSlider(direction) {
      const slider = document.getElementById('slider');
      const scrollAmount = 300;
      slider.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
  // slider

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1550: {
          slidesPerView: 4,
        },
      },
    });


    // Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // GSAP for Fade-In Animations
    document.querySelectorAll('.fade-in').forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
      });
    });

    // GSAP for Hover Animations on Buttons
    document.querySelectorAll('.glow-on-hover').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 1.05,
          rotateX: 5,
          boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)',
          duration: 0.3,
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          rotateX: 0,
          boxShadow: '0 0 0 rgba(0, 255, 0, 0)',
          duration: 0.3,
        });
      });
    });

    // GSAP for Card Hover Animations
    document.querySelectorAll('.card-hover').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          y: -10,
          rotateY: 5,
          boxShadow: '0 10px 20px rgba(0, 255, 0, 0.3)',
          duration: 0.3,
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          y: 0,
          rotateY: 0,
          boxShadow: '0 0 0 rgba(0, 255, 0, 0)',
          duration: 0.3,
        });
      });
    });

    // GSAP for Icon Hover Animations
    document.querySelectorAll('.icon-hover').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 1.2,
          rotate: 10,
          color: '#00FF00',
          duration: 0.3,
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          rotate: 0,
          color: '#00FF00',
          duration: 0.3,
        });
      });
    });

    // Slider Animation
    const slider = document.getElementById('testimonial-slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = window.innerWidth < 768 ? 100 : 33.333;
      const gap = window.innerWidth < 768 ? 1 : 0.67; // Account for gap in calculations
      gsap.to(slider, {
        x: -currentIndex * (slideWidth + gap) + '%',
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);

    // Update slider on window resize
    window.addEventListener('resize', updateSlider);

    // Countdown Timer
    let timeLeft = 24 * 60 * 60; // 24 hours in seconds
    const countdownEl = document.getElementById('countdown');
    setInterval(() => {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timeLeft--;
      if (timeLeft < 0) timeLeft = 24 * 60 * 60;
    }, 1000);
  
