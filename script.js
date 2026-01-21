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

// ===== RANK CARD INTERACTIVITY =====
document.querySelectorAll('.rank-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== EVENT CARD INTERACTIVITY =====
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.event-icon');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.event-icon');
        icon.style.transform = 'scale(1) rotate(0)';
    });
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