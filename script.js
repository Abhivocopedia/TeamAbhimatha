// Welcome Screen and Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const loadingProgress = document.querySelector('.loading-progress');
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');

    // Loading animation
    setTimeout(() => {
        loadingProgress.style.width = '100%';
    }, 100);

    // Hide welcome screen and show main content
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.visibility = 'hidden';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 500);
    }, 2500);

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
        this.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navList.style.display = 'none';
                    navToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.work-card, .stat, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Additional Works Page (works.html) would be created separately