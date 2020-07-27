class Modal {
    constructor() {
        let modalElement = $("body").append(`<div class="modal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h1>Hello, I am a modal!</h1>
            </div>
        </div>`);
    }

    static showModal() {
        let modal = $(".modal");
        let closeButton = $(".close-button");

        modal.addClass("show-modal");
        console.log(modal);

        function toggleModal() {
            modal.toggleClass("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }

        closeButton.on("click", toggleModal);
        window.addEventListener("click", windowOnClick);
    }
}
