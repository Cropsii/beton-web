// Получаем элементы кнопок и диалогового окна
const buyConcreteBtn = document.getElementById("buyConcreteBtn");
const myDialog = document.getElementById("myModal");
const closeDialogBtn = document.getElementById("closeDialogBtn");

// Назначаем обработчики событий
buyConcreteBtn.addEventListener("click", function () {
    myDialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
    myDialog.close();
});
