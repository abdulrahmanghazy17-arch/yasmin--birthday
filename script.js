const birthdaySong = document.getElementById("birthdaySong");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const openMessage = document.getElementById("openMessage");
const message = document.getElementById("message");

// تشغيل الموسيقى وتحديث المشغل
async function playSong() {
  try {
    await birthdaySong.play();

    musicToggle.textContent = "Ⅱ";
    musicToggle.setAttribute("aria-label", "إيقاف الموسيقى");
    musicStatus.textContent = "الموسيقى تعمل الآن";
  } catch (error) {
    musicStatus.textContent = "اضغط تشغيل لبدء الأغنية";
    musicToggle.textContent = "▶";
    musicToggle.setAttribute("aria-label", "تشغيل الموسيقى");
  }
}

// إيقاف الموسيقى وتحديث المشغل
function pauseSong() {
  birthdaySong.pause();

  musicToggle.textContent = "▶";
  musicToggle.setAttribute("aria-label", "تشغيل الموسيقى");
  musicStatus.textContent = "الموسيقى متوقفة";
}

// محاولة التشغيل التلقائي عند فتح الموقع
window.addEventListener("load", () => {
  playSong();
});

// زر تشغيل وإيقاف الأغنية
musicToggle.addEventListener("click", async () => {
  if (birthdaySong.paused) {
    await playSong();
  } else {
    pauseSong();
  }
});

// فتح الرسالة ومحاولة تشغيل الأغنية إذا كانت متوقفة
openMessage.addEventListener("click", async () => {
  message.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (birthdaySong.paused) {
    await playSong();
  }
});

// تحديث الحالة لو الأغنية انتهت أو حصل خطأ
birthdaySong.addEventListener("error", () => {
  musicStatus.textContent = "تأكد من وجود ملف song.mp3";
});

birthdaySong.addEventListener("playing", () => {
  musicStatus.textContent = "الموسيقى تعمل الآن";
});

birthdaySong.addEventListener("pause", () => {
  musicStatus.textContent = "الموسيقى متوقفة";
});
