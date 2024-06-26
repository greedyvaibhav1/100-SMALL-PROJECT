// Example JavaScript for dynamic background color change
document.addEventListener('DOMContentLoaded', () => {
    const colors = ['black', 'yellow', 'blue', 'pink'];
    let currentIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 3000); // Change color every 3 seconds
});
