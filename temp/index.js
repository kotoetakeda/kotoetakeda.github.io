function modal(btn) {
    let modal_block = document.getElementById('modal-container');
    if (btn.id == "more") {
        modal_block.style.display = "block";
    } else {
        modal_block.style.display = "none";
    }
};