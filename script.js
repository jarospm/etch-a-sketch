function createGrid(size = 16) {
    const container = document.getElementById('container');
    
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size based on container size
    const squareSize = 960 / size;
    
    // Track if mouse button is being held down
    let isDrawing = false;
    
    // Add mouse down and up listeners to the container
    container.addEventListener('mousedown', () => isDrawing = true);
    container.addEventListener('mouseup', () => isDrawing = false);
    // Stop drawing if mouse leaves the container
    container.addEventListener('mouseleave', () => isDrawing = false);
    
    // Create size x size squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Set square size dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Initialize interaction count for progressive darkening
        square.dataset.interactions = '0';
        
        // Color square when mouse enters while button is held
        square.addEventListener('mouseenter', function(event) {
            if (isDrawing) {
                colorSquare(event.target);
            }
        });
        
        // Handle initial click on a square
        square.addEventListener('mousedown', function(event) {
            colorSquare(event.target);
        });
        
        container.appendChild(square);
    }
    
    // Prevent drag selection while drawing
    container.addEventListener('dragstart', (e) => e.preventDefault());
}

function getRandomRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function colorSquare(square) {
    // Get current interaction count
    let interactions = parseInt(square.dataset.interactions) || 0;
    interactions++;
    square.dataset.interactions = interactions;
    
    // Generate random RGB values
    const { r, g, b } = getRandomRGB();
    
    // Calculate darkness percentage (10% darker per interaction)
    const darkenPercent = interactions * 0.1;
    
    // Apply color with darkening effect
    square.style.backgroundColor = `rgb(${r * (1 - darkenPercent)}, 
                                      ${g * (1 - darkenPercent)}, 
                                      ${b * (1 - darkenPercent)})`;
}

function changeGridSize() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    
    // Convert to number and validate input
    newSize = parseInt(newSize);
    
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number!');
        return;
    }
    
    if (newSize > 100) {
        alert('Maximum size is 100!');
        return;
    }
    
    createGrid(newSize);
}

// Add event listener to the size button
document.getElementById('sizeButton').addEventListener('click', changeGridSize);

// Create initial 16x16 grid
createGrid();

//understanding event.target property
document.body.addEventListener('click', function(event) {
    console.log(event.target);  // This will show which element was clicked
});