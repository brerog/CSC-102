
function enlargeImage(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
