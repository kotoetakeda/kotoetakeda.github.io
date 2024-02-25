function modal(btn) {
    let modal_block = document.getElementById('modal-container');
    if (btn.id == "more") {
        modal_block.style.display = "flex";
    } else {
        modal_block.style.display = "none";
    }
};

/**
 * Opens the PDF version of the file the button click asks for
 * @param {string} name the name of the pdf that the button click is asking for
 */
function openPDF(name) {
    if (name == "resume") {
        window.open("Kotoe Takeda's Resume.pdf", "_blank");
    }
}