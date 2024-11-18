document.addEventListener('DOMContentLoaded', () => {
    const doctorsSlider = document.querySelector('.doctors-slider');
    let scrollAmount = 0;

    // Auto-scroll slider
    setInterval(() => {
        scrollAmount += 200;
        if (scrollAmount >= doctorsSlider.scrollWidth) {
            scrollAmount = 0;
        }
        doctorsSlider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 3000);
});