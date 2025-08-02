// ===== CAROUSEL FUNCTIONALITY =====
let currentSlideIndex = 0;
const carouselData = [
    {
        image: "media/work1.jpg",
        title: "Physics Engine Nightmare",
        description: "Currently tweaking the physics engine for my next game. It's wonky, but fun. Objects randomly decide to ignore gravity, but that's part of the charm."
    },
    {
        image: "media/work2.jpg", 
        title: "Blender Animation Chaos",
        description: "A sneak peek of a cutscene I'm animating using Blender. The character keeps falling through the floor, but we're calling it 'artistic interpretation'."
    },
    {
        image: "media/work3.jpg",
        title: "Sci-Fi Asset Creation",
        description: "Building modular sci-fi assets — panels, consoles, and strange machinery. Half of them look like they belong in a toaster, the other half are surprisingly decent."
    }
];

function updateCarousel() {
    const image = document.getElementById('carousel-image');
    const title = document.getElementById('carousel-title');
    const desc = document.getElementById('carousel-desc');
    const dots = document.querySelectorAll('.dot');
    
    if (image && title && desc) {
        image.src = carouselData[currentSlideIndex].image;
        title.textContent = carouselData[currentSlideIndex].title;
        desc.textContent = carouselData[currentSlideIndex].description;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % carouselData.length;
    updateCarousel();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    updateCarousel();
}

// ===== CARD EXPANSION FUNCTIONALITY =====
function expandCard(card) {
    const overlay = document.getElementById('card-overlay');
    const expanded = document.getElementById('card-expanded');
    const title = card.querySelector('h3').textContent;
    const img = card.querySelector('img').src;
    const description = card.querySelector('p').textContent;
    const tags = card.querySelector('.card-tags');
    const rating = card.querySelector('.rating');
    const price = card.dataset.price;
    const link = card.dataset.link;
    
    document.getElementById('expanded-title').textContent = title;
    document.getElementById('expanded-image').src = img;
    document.getElementById('expanded-description').textContent = description;
    
    if (tags) {
        document.getElementById('expanded-tags').innerHTML = tags.innerHTML;
    }
    
    if (rating) {
        document.getElementById('expanded-rating').textContent = rating.textContent;
    }
    
    if (price) {
        document.getElementById('expanded-price').textContent = price;
    }
    
    const expandedLink = document.getElementById('expanded-link');
    if (link && expandedLink) {
        expandedLink.href = link;
        expandedLink.textContent = card.classList.contains('game-card') ? 'Play Now' : 'Buy Now';
    }
    
    overlay.classList.add('show');
    expanded.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeExpandedCard() {
    const overlay = document.getElementById('card-overlay');
    const expanded = document.getElementById('card-expanded');
    
    overlay.classList.remove('show');
    expanded.classList.remove('show');
                <p id="expanded-price"></p>
                <a id="expanded-link" class="preview-button" target="_blank">Get It Now</a>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-links">
            <a href="terms.html">Terms of Service</a>
            <a href="privacy.html">Privacy Policy</a>
        </div>
        <div class="footer-social">
            <a href="https://youtube.com" target="_blank">YouTube</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="#" target="_blank">Discord</a>
        </div>
        <div class="copyright">© 2025 brickedmyportfolio.com | IronLanternStudios</div>
    </footer>

    <script src="main.js"></script>
</body>
</html>
