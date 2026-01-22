// ===== MOBILE NAVIGATION TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== ABOUT NCC GALLERY SLIDER =====
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryCounter = document.getElementById('galleryCounter');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
let currentGallerySlide = 0;

// Function to update gallery
function updateGallery() {
    gallerySlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentGallerySlide);
    });
    galleryCounter.textContent = `${currentGallerySlide + 1} / ${gallerySlides.length}`;
}

// Auto-slide gallery every 2 seconds
let galleryInterval = setInterval(() => {
    currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    updateGallery();
}, 2000);

// Manual controls
galleryPrev.addEventListener('click', () => {
    clearInterval(galleryInterval);
    currentGallerySlide = (currentGallerySlide - 1 + gallerySlides.length) % gallerySlides.length;
    updateGallery();
    // Restart auto-slide
    galleryInterval = setInterval(() => {
        currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
        updateGallery();
    }, 2000);
});

galleryNext.addEventListener('click', () => {
    clearInterval(galleryInterval);
    currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
    updateGallery();
    // Restart auto-slide
    galleryInterval = setInterval(() => {
        currentGallerySlide = (currentGallerySlide + 1) % gallerySlides.length;
        updateGallery();
    }, 2000);
});

// ===== LOAD DYNAMIC GALLERY IMAGES =====
const galleryImages = [
    "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547626740-02cb6aed9ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

function loadGalleryImages() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'NCC Activity';
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}
// ===== SIMPLE RANK PANEL ANIMATIONS =====
function initSimpleRankPanel() {
    const rankCards = document.querySelectorAll('.rank-card');
    
    rankCards.forEach((card, index) => {
        // Add entrance animation with delay
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200); // Staggered entrance
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    console.log("Simple Rank Panel Initialized!");
}

// Update DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Abhiyant '26 NCC Fest website loaded successfully!");
    
    // Load gallery images
    loadGalleryImages();
    
    // Add active class to first nav item
    if(navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Initialize gallery
    updateGallery();
    
    // Initialize events slider
    initEventsSlider();
    
    // Initialize simple rank panel
    initSimpleRankPanel();
})
    // Initialize the slider
    function init() {
        updateRankSlider();
        startAutoPlay();
        initRankSliderEvents();
        
        // Animate initial stat bars
        setTimeout(() => {
            const statFills = document.querySelectorAll('.stat-fill');
            statFills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 500);
            });
        }, 300);
    }
    
    // Start the slider
    init();
    
    console.log("Rank Panel Slider Initialized!");
x

// Update DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Abhiyant '26 NCC Fest website loaded successfully!");
    
    // Load gallery images
    loadGalleryImages();
    
    // Add active class to first nav item
    if(navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Initialize gallery
    updateGallery();
    
    // Initialize events slider
    initEventsSlider();
    
    // Initialize rank panel slider
    initRankSlider();
});    
    // Initialize animations
    setTimeout(() => {
        animateStats();
        animateComparisonChart();
    }, 500);
    
// Add achievement popup styles
    const style = document.createElement('style');
    style.textContent = `
        .achievement-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .achievement-popup.active {
            opacity: 1;
        }
        
        .popup-content {
            background: var(--ncc-white);
            padding: 30px;
            border-radius: 15px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            border: 3px solid var(--ncc-gold);
        }
        
        .popup-content h4 {
            color: var(--ncc-navy);
            font-family: 'Oswald', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
        
        .popup-content ul {
            list-style: none;
            text-align: left;
            margin-bottom: 25px;
        }
        
        .popup-content li {
            color: var(--ncc-darkblue);
            padding: 8px 0;
            border-bottom: 1px solid rgba(0, 0, 128, 0.1);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .popup-content li:before {
            content: '✓';
            color: var(--ncc-red);
            font-weight: bold;
        }
        
        .popup-close {
            background: var(--ncc-red);
            color: var(--ncc-white);
            border: none;
            padding: 10px 25px;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .popup-close:hover {
            background: #a52a2a;
            transform: scale(1.05);
        }
        
        .floating-medal {
            animation: floatUp 1s forwards;
        }
        
        @keyframes floatUp {
            to {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log("Interactive Rank Panel Loaded!");


// Update DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Abhiyant '26 NCC Fest website loaded successfully!");
    
    // Load gallery images
    loadGalleryImages();
    
    // Add active class to first nav item
    if(navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Initialize gallery
    updateGallery();
    
    // Initialize events slider
    initEventsSlider();
    
    // Initialize rank panel
    initRankPanel();
});
// ===== STICKY NAVBAR EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nccNavbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.background = 'linear-gradient(90deg, rgba(0, 0, 128, 0.95) 0%, rgba(0, 0, 80, 0.95) 50%, rgba(139, 0, 0, 0.95) 100%)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.background = 'linear-gradient(90deg, var(--ncc-navy) 0%, var(--ncc-darkblue) 50%, var(--ncc-red) 100%)';
    }
});
// ===== EVENTS SLIDER FUNCTIONALITY =====
const eventsSlider = document.getElementById('eventsSlider');
const eventsDots = document.getElementById('eventsDots');
const eventsPrev = document.getElementById('eventsPrev');
const eventsNext = document.getElementById('eventsNext');
const autoplayToggle = document.getElementById('autoplayToggle');
const timerBar = document.getElementById('timerBar');
let currentEventSlide = 0;
let autoplayActive = true;
let autoplayInterval;
let timerInterval;
const slideDuration = 2000; // 2 seconds
const totalSlides = document.querySelectorAll('.event-slide').length;

// Create dots for each slide
function createDots() {
    eventsDots.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        eventsDots.appendChild(dot);
    }
}

// Update slider position
function updateSlider() {
    // Move slides
    const slides = document.querySelectorAll('.event-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentEventSlide);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentEventSlide);
    });
    
    // Reset timer bar
    resetTimer();
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentEventSlide = slideIndex;
    updateSlider();
    resetAutoplay();
}

// Next slide
function nextSlide() {
    currentEventSlide = (currentEventSlide + 1) % totalSlides;
    updateSlider();
}

// Previous slide
function prevSlide() {
    currentEventSlide = (currentEventSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Reset autoplay timer
function resetAutoplay() {
    if (autoplayActive) {
        clearInterval(autoplayInterval);
        clearInterval(timerInterval);
        startAutoplay();
    }
}

// Start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, slideDuration);
    startTimer();
}

// Start timer bar animation
function startTimer() {
    let width = 100;
    const decrement = 100 / (slideDuration / 10); // Update every 10ms
    
    timerInterval = setInterval(() => {
        width -= decrement;
        timerBar.style.width = width + '%';
        
        if (width <= 0) {
            width = 100;
        }
    }, 10);
}

// Reset timer bar
function resetTimer() {
    clearInterval(timerInterval);
    timerBar.style.width = '100%';
    if (autoplayActive) {
        startTimer();
    }
}

// Toggle autoplay
function toggleAutoplay() {
    autoplayActive = !autoplayActive;
    
    if (autoplayActive) {
        autoplayToggle.innerHTML = '<i class="fas fa-pause"></i> Pause Auto-slide';
        startAutoplay();
    } else {
        autoplayToggle.innerHTML = '<i class="fas fa-play"></i> Play Auto-slide';
        clearInterval(autoplayInterval);
        clearInterval(timerInterval);
        timerBar.style.width = '100%';
    }
}

// Initialize events slider
function initEventsSlider() {
    createDots();
    updateSlider();
    startAutoplay();
    
    // Event listeners
    eventsPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });
    
    eventsNext.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    
    autoplayToggle.addEventListener('click', toggleAutoplay);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoplay();
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleAutoplay();
        }
    });
    
    // Pause autoplay on hover
    eventsSlider.addEventListener('mouseenter', () => {
        if (autoplayActive) {
            clearInterval(autoplayInterval);
            clearInterval(timerInterval);
        }
    });
    
    eventsSlider.addEventListener('mouseleave', () => {
        if (autoplayActive) {
            startAutoplay();
        }
    });
}

// Update the DOMContentLoaded event listener to include:
document.addEventListener('DOMContentLoaded', () => {
    console.log("Abhiyant '26 NCC Fest website loaded successfully!");
    
    // Load gallery images
    loadGalleryImages();
    
    // Add active class to first nav item
    if(navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Initialize gallery
    updateGallery();
    
    // Initialize events slider
    initEventsSlider();
});
// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ===== INITIALIZE PAGE =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("Abhiyant '26 NCC Fest website loaded successfully!");
    
    // Load gallery images
    loadGalleryImages();
    
    // Add active class to first nav item
    if(navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Initialize gallery
    updateGallery();
});