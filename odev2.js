let liveToastBtnDOM = document.querySelector("#liveToastBtn"); // Görev ekle düğmesi
let taskDOM = document.querySelector("#task"); // Görev inputu

let liveToastEDOM = document.querySelector("#liveToastE"); // Hata mesajı
let liveToastSDOM = document.querySelector("#liveToastS"); // Başarılı mesajı
const listDOM = document.querySelector("#list"); // Liste ul öğesi

liveToastBtnDOM.addEventListener('click', function liEkle() {
    if (taskDOM.value.trim() === "") {
        // Eğer görev boşsa hata mesajını göster
        liveToastEDOM.classList.replace('hide', 'show');
        setTimeout(function () {
            kapatToast(liveToastEDOM);
        }, 3000); // 3000 milisaniye (3 saniye) sonra kapat
    } else {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = `${taskDOM.value} <button style="float:right;" class="rigth-aligned-button trash-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
        </svg>   
        </button>`; // Görevi li öğesinin içeriği olarak ayarla
        listDOM.appendChild(liDOM); // Liste öğesine li öğesini ekle
        liveToastSDOM.classList.replace('hide', 'show');
        taskDOM.value = "";

        // Toast mesajını 3 saniye sonra kapat
        setTimeout(function () {
            kapatToast(liveToastSDOM);
        }, 3000); // 3000 milisaniye (3 saniye) sonra kapat
    }
});

// Kapama işlemini gerçekleştiren butonları seçin
let kapamaDugmeleri = document.querySelectorAll('.close');

// Her kapama düğmesi için olay dinleyici ekleyin
kapamaDugmeleri.forEach(function (kapamaDugmesi) {
    kapamaDugmesi.addEventListener('click', function () {
        mesajGizle(kapamaDugmesi);
    });
});

function mesajGizle(gizleDugmesi) {
    let gizleDOM = gizleDugmesi.closest('.toast'); // Kapama düğmesine en yakın .toast öğesini bulun
    let gizleClassList = gizleDOM.classList;
    if (gizleClassList.contains('show')) {
        gizleClassList.replace('show', 'hide');
    }
}

// Liste öğelerine tıklama olay dinleyicisi ekleyin
listDOM.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        // Liste öğesine tıklanmışsa, çizgili hale getirin
        event.target.innerHTML = `<s>${event.target.innerHTML}</s>`;
    } 
    else {
        // Tıklanan öğe bir LI değilse, yani bir buton ise
        // Üst öğesinin üst öğesini (LI'yi) bulup kaldırın
        const listItem = event.target.closest('li');
        if (listItem) {
            listItem.remove();
        }
    }
});

function kapatToast(toastElement) {
    toastElement.classList.remove('show');
    toastElement.classList.add('hide');
}
