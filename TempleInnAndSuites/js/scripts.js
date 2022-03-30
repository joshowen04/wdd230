function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

if (page === "index"){
const reservationButton = document.querySelector("#reservationButton");

reservationButton.addEventListener("click",function(){
    document.location.href = 'reservation/reservation.html';
});
const servicesButton = document.querySelector("#servicesButton");

servicesButton.addEventListener("click",function(){
    document.location.href = 'services/services.html';
});
};
