let currentSlide = 0;

const headings = {
    'heading1': "Exploring the Galaxy",
    'heading2': "Journey to Mars",
    'heading3': "Discovering New Worlds"
};

const contents = {
    'content1': "The Milky Way galaxy, a sprawling spiral of stars, gas, and dust, is our cosmic home. Stretching across 100,000 light-years, it hosts a diverse array of celestial phenomena. From nebulae where new stars are born to black holes with intense gravitational pulls, the galaxy is a treasure trove of astronomical wonders waiting to be explored.",
    'content2': "Mars, often called the 'Red Planet,' is a world of extremes. Its surface features the tallest volcano and the deepest canyon in the solar system. Scientists are fascinated by Mars due to its potential to harbor past or present life. Ongoing missions aim to uncover its secrets and determine whether ancient water bodies once flowed across its barren landscape.",
    'content3': "Exoplanets, or planets that orbit stars beyond our solar system, have revolutionized our understanding of the cosmos. Thousands of these distant worlds have been discovered, revealing a remarkable variety of planetary systems. Studying exoplanets not only enhances our knowledge of planet formation but also brings us closer to answering the profound question: Are we alone in the universe?"
};

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });

    handleTypingAnimation();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function typeText(elementId, text, speed, callback) {
    let index = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function handleTypingAnimation() {
    const currentHeadingId = `heading${currentSlide + 1}`;
    const currentContentId = `content${currentSlide + 1}`;

    document.querySelectorAll('.typing-container h2, .typing-container p').forEach(el => el.innerHTML = '');

    typeText(currentHeadingId, headings[currentHeadingId], 100, function() {
        typeText(currentContentId, contents[currentContentId], 50);
    });
}

// Initial display
showSlide(currentSlide);
