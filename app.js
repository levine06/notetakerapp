const addNotesButtons = document.querySelectorAll(".add-notes-btn");
const closeButton = document.querySelector(".close-btn");
const dialog = document.getElementById("note-dialog");

addNotesButtons.forEach((button) => {
    button.addEventListener("click", () => {
        dialog.showModal();
    });
});

dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        dialog.close();
    }
});

closeButton.addEventListener("click", () => {
    dialog.close();
});