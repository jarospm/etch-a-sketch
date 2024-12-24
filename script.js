function createGrid() {
    const container = document.getElementById('container');
    
    // Create 16x16 = 256 squares
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Listen for when mouse enters the square
        square.addEventListener('mouseenter', function(event) {
            const hoveredSquare = event.target;
            // Directly change the background color
            hoveredSquare.style.backgroundColor = 'black';
        });
        
        container.appendChild(square);
    }
}

// Call the function when the page loads
createGrid(); 


//understanding event.target property
document.body.addEventListener('click', function(event) {
    console.log(event.target);  // This will show which element was clicked
});