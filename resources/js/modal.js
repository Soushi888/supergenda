class Modal {
    constructor() {
        let modalElement = $("body").append(`<div class="modal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
            </div>
        </div>`);
    }

    /**
     * Ouverture d'une fenêtre modal
     */
    static showModal() {
        let modal = $(".modal");
        let closeButton = $(".close-button");

        modal.addClass("show-modal");
        closeButton.on("click", Modal.closeModal);

        $("body").on("keydown", evt => {
            if (evt.key === "Escape") {
                Modal.closeModal();
            }
        });

        modal.on("click", evt => {
            if ($(evt.target).hasClass("modal")) {
                Modal.closeModal();
            }
        });
    }

    /**
     * Fermeture d'une fenêtre modal
     */
    static closeModal() {
        let modal = $(".modal");
        modal.removeClass("show-modal");
        $(".modal-content").html("<span class='close-button'>&times;</span>");
    }
}
