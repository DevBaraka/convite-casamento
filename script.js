const targetDate = new Date("2023-09-09T00:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days < 10 ? "0" + days : days;
  document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector(".botaomenu2").addEventListener("click", function() {
  window.open("https://cartoriosilvagoiania.com.br/", "_blank");
});
document.querySelector(".botaomenu2-2").addEventListener("click", function() {
  window.open("https://www.instagram.com/jpsteakhousegoiania/?hl=pt-br", "_blank");
});
document.querySelector(".botaopresente").addEventListener("click", function() {
  window.open("https://nubank.com.br/pagar/1mxc08/PMOjl2P07y", "_blank");
});

