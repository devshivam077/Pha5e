
document.addEventListener('mousemove', (e) => {
    const images = document.querySelectorAll('.hero-image');
    images.forEach((image, index) => {
        const speed = (index + 1) * 10;
        const x = (window.innerWidth - e.clientX * speed) / 100;
        const y = (window.innerHeight - e.clientY * speed) / 100;
        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});
console.log("check");