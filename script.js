// 1. Audio & Click Logic
const clickSound = document.getElementById("clickSound");
const weddingMusic = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function toggleMusic() {
    playClick();
    if (weddingMusic.paused) {
        weddingMusic.play();
        musicBtn.innerHTML = "⏸";
    } else {
        weddingMusic.pause();
        musicBtn.innerHTML = "🎵";
    }
}

// 2. Countdown Timer (Target: 03 April 2026)
const weddingDate = new Date("April 3, 2026 09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}, 1000);

// 3. RSVP WhatsApp
function kirimWA() {
    playClick();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    const nomorTujuan = "6285693354007"; 

    if (!nama) {
        alert("Mohon maaf yang sebesar-besarnya, bos-tuan besar. Nama Anda belum terisi di kolom identitas. 💼");
        return;
    }
    if (!pesan) {
        alert("Izin menyampaikan, bos-tuan besar. Kolom pesan doa masih kosong, mohon berkenan mengisinya untuk kebahagiaan mempelai. 📝");
        return;
    }

    const template = `Salam hangat untuk Romeo & Juliet,\n\nSaya *${nama}*.\n\nUcapan & Doa: _${pesan}_`;
    const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(template)}`;
    setTimeout(() => { window.open(url, '_blank'); }, 300);
}

// 4. Bunga Berjatuhan 🌸
function createPetal() {
    const container = document.getElementById('flowerContainer');
    const petal = document.createElement('div');
    petal.classList.add('petal');
    const size = Math.random() * 15 + 10 + "px";
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 5 + 5 + "s";
    const colors = ['#ffc0cb', '#ffe4e1', '#ffffff'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 10000);
}
setInterval(createPetal, 400);

// 5. QR Code Otomatis
window.onload = () => {
    new QRCode(document.getElementById("qrcode"), {
        text: window.location.href,
        width: 150, height: 150,
        colorDark : "#2c2c2c", colorLight : "#ffffff"
    });
};
