// Navbar Active Link Toggle
document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar ul li a').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Scroll to Section Smoothly
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Hero Section Button Interaction
    document.querySelectorAll('.hero button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Welcome to Hi-Tech Bamboo Nursery!');
        });
    });
    
    // Product Item Hover Effect
    document.querySelectorAll('.products ul li').forEach(item => {
        item.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#228B22';
            this.style.color = '#fff';
        });
        item.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#f0f0f0';
            this.style.color = '#000';
        });
    });
    
    // Gallery Image Zoom on Click
    document.querySelectorAll('.gallery .image-grid img').forEach(img => {
        img.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';
    
            const imgClone = document.createElement('img');
            imgClone.src = this.src;
            imgClone.style.maxWidth = '90%';
            imgClone.style.maxHeight = '90%';
            imgClone.style.borderRadius = '5px';
            modal.appendChild(imgClone);
    
            modal.addEventListener('click', () => modal.remove());
            document.body.appendChild(modal);
        });
    });
    
    // Contact Form Validation
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();
    
            if (!name || !email || !message) {
                alert('Please fill out all fields!');
            } else {
                alert('Thank you for reaching out! We will get back to you soon.');
                this.reset();
            }
        });
    }
    
    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#228B22';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.zIndex = '1000';
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    