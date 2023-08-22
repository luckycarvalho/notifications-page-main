

document.querySelector('.markAll').addEventListener('click', () => {
    const notVisualized = document.querySelectorAll('.notVisualized');
    const pointRed = document.querySelectorAll('.pointRed');
    notVisualized.forEach(function(element) {
        element.classList.remove('notVisualized');
    });
    pointRed.forEach(function(element) {
        element.classList.remove('pointRed');
    });
})