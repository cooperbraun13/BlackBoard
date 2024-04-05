// This script goes into the "blackboard.js" file you've referenced in your HTML.

document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('blackBoard');
    const ctx = canvas.getContext('2d');

    let drawing = false;

    const startDrawing = (e) => {
        drawing = true;
        draw(e); // This is to ensure drawing starts immediately when the mouse is pressed down, without needing to move it.
    };

    const stopDrawing = () => {
        drawing = false;
        ctx.beginPath(); // This stops the drawing from continuing to the next point when you click again.
    };

    const draw = (e) => {
        if (!drawing) return;

        ctx.lineWidth = 5; // You can adjust the thickness of the line here.
        ctx.lineCap = 'round'; // This makes the line edges round.
        ctx.strokeStyle = '#fff'; // This sets the color of the line.

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); // Correct for canvas position
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing); // This stops drawing if the mouse leaves the canvas.
    canvas.addEventListener('mousemove', draw);
});