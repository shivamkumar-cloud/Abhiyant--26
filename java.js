// Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'rgba(15, 26, 10, 0.98)';
                navMenu.style.padding = '20px';
                navMenu.style.gap = '20px';
            }
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Image slider functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slides.length;
        
        // Initialize slider
        function initSlider() {
            // Set first slide as active
            slides[0].classList.add('active');
            indicators[0].classList.add('active');
            
            // Auto slide every 5 seconds
            setInterval(() => {
                nextSlide();
            }, 5000);
        }
        
        // Next slide function
        function nextSlide() {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Add active class to new slide
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }
        
        // Add click event to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                // Remove active class from current slide
                slides[currentSlide].classList.remove('active');
                indicators[currentSlide].classList.remove('active');
                
                // Set new slide
                currentSlide = index;
                
                // Add active class to new slide
                slides[currentSlide].classList.add('active');
                indicators[currentSlide].classList.add('active');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            initSlider();
            
            // Add scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements for animation
            document.querySelectorAll('.intro-content, .event-card, .section-title').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(el);
            });
        });