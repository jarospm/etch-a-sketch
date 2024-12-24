function createGrid() {
    const container = document.getElementById('container');
    
    // Create 16x16 = 256 squares
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}

// Call the function when the page loads
createGrid(); 