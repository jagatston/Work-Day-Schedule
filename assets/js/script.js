var formModal = $("#form-modal");
var openModalButton = $("#open-modal-button");
var currentDateTimeSpan = $("#current-date-time");


function updateCurrentTime(){
    currentDateTimeSpan.text()
}

openModalButton.on("click", function () {
    formModal.modal("show");
});

console.log(moment().format("MMM Do YYYY, hh:mm:ss"));