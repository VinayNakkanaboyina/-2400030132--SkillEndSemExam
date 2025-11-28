// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];

// Open modal when a gallery image is clicked
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";      // Show the modal
        modalImg.src = item.src;            // Set the modal image to clicked image
        modalImg.alt = item.alt;            // Set alt text
    });
});

// Close modal when clicking the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}