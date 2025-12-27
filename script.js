
const PASSWORD = "25/5"; // 🔐 đổi mật khẩu tại đây

const openBtn = document.getElementById("openBtn");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("error");

const lock = document.getElementById("lock");
const card = document.getElementById("card");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  if(passwordInput.value === PASSWORD){
    lock.style.display = "none";
    card.style.display = "block";

    music.volume = 0.7;
    music.play().catch(() => {
      alert("Không phát được nhạc. Kiểm tra file music.mp3");
    });
  }else{
    errorText.innerText = "Sai mật khẩu";
  }
});
