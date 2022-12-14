const $carrouselContainer = document.querySelector('.carrousel-container');
const $carrouselImgContainer = document.querySelector(
    '.carrousel-img-container'
);

// Change height carrousel container
const changeHeight = () => {
    $carrouselContainer.style.height = `${$carrouselImgContainer.clientHeight}px`;
};

// Carrousel
const carrousel = () => {
    const $nextBtn = document.querySelector('.arrow-right'),
        $prevBtn = document.querySelector('.arrow-left'),
        $carrouselImages = document.querySelectorAll(
            '.carrousel-img-container'
        );
    let i = 0;
    document.addEventListener('click', e => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            $carrouselImages[i].classList.remove('active');
            i--;
            if (i < 0) i = $carrouselImages.length - 1;
            $carrouselImages[i].classList.add('active');
        }
        if (e.target === $nextBtn) {
            e.preventDefault();
            $carrouselImages[i].classList.remove('active');
            i++;
            if (i >= $carrouselImages.length) i = 0;
            $carrouselImages[i].classList.add('active');
        }
    });
};

window.addEventListener('resize', () => {
    changeHeight();
});

document.addEventListener('DOMContentLoaded', () => {
    carrousel();
    changeHeight();
});
