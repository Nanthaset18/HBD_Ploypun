// สไลด์โชว์
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // เปลี่ยนทุก 4 วินาที
}

// นับถอยหลัง (ตั้งเป็นวันเกิดจริงของแฟน)
const birthday = new Date("2025-04-15T00:00:00").getTime(); // เปลี่ยนเป็นวันเกิดจริง

function updateCountdown() {
  const now = new Date().getTime();
  const gap = birthday - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (gap < 0) {
    document.getElementById("timer").innerText = "🎉 วันเกิดสุขสันต์นะที่รัก!";
  }
}

setInterval(updateCountdown, 1000);

// ควบคุมเพลงในหน้าวิดีโอ
document.addEventListener("DOMContentLoaded", function () {
  const musicToggle = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bg-music");

  if (musicToggle) {
    musicToggle.addEventListener("click", function () {
      if (bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.play().catch(e => console.log("ไม่สามารถเล่นเพลงได้", e));
        musicToggle.innerText = "🎶 เพลงกำลังเล่น";
        musicToggle.style.background = "#2196f3";
      } else {
        bgMusic.muted = true;
        musicToggle.innerText = "🔇 ปิดเพลง";
        musicToggle.style.background = "#f44336";
      }
    });
  }
});