let isim=prompt("Lütfen isminizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${isim}`;

function zaman(){

    function ikili(alBakam) {
        alBakam=alBakam.toString().padStart(2,'0');
        return alBakam;
    }
    
    const tarih=new Date;

    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    
    
    let gun =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let gunName = gun[tarih.getDay()]
    
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${ikili(saat)}:${ikili(dakika)}:${ikili(saniye)} ${gunName}`;
}

setInterval(zaman,1000);