class Modal {
    constructor() {
        let modalElement = $("body").append(`<div class="modal">
            <div class="modal-content">
                <span class="close-button">&times;</span>
            </div>
        </div>`);
    }

    static showModal() {
        let modal = $(".modal");
        let closeButton = $(".close-button");

        modal.addClass("show-modal");
        closeButton.on("click", Modal.closeModal);
    }

    static closeModal() {
        let modal = $(".modal");
        modal.removeClass("show-modal");
        $(".modal-content").html("<span class='close-button'>&times;</span>");
    }
}
