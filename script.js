// --- 1. STATE APLIKASI ---
let currentWater = 0;
let targetWater = 2000;

// --- 2. AMBIL ELEMEN DOM ---
const waterFill = document.getElementById("water-fill");
const percentageText = document.getElementById("percentage-text");
const volumeText = document.getElementById("volume-text");
const addButtons = document.querySelectorAll(".add-btn");
const targetInput = document.getElementById("target-input");
const resetBtn = document.getElementById("reset-btn");
const statusMessage = document.getElementById("status-message");

// --- 3. FUNGSI UPDATE TAMPILAN (UI) ---
function updateUI() {
    // Hitung persentase ketercapaian
    const percentage = Math.min(Math.round((currentWater / targetWater) * 100), 100);

    // Update animasi ketinggian air & teks
    waterFill.style.height = `${percentage}%`;
    percentageText.textContent = `${percentage}%`;
    volumeText.textContent = `${currentWater} / ${targetWater} ml`;

    // Update pesan status berdasarkan pencapaian
    if (currentWater === 0) {
        statusMessage.textContent = "Ayo minum gelas pertamamu hari ini! 💦";
    } else if (currentWater < targetWater * 0.5) {
        statusMessage.textContent = "Bagus! Tetap jaga hidrasi tubuhmu! 👍";
    } else if (currentWater < targetWater) {
        statusMessage.textContent = "Sedikit lagi mencapai target harian! 🚀";
    } else {
        statusMessage.textContent = "🎉 Luar biasa! Target hidrasi harian tercapai!";
    }
}

// --- 4. EVENT LISTENERS ---

// Tambah Air via Tombol +250ml / +500ml
addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const amount = parseInt(btn.getAttribute("data-amount"));
        if (currentWater < targetWater) {
            currentWater += amount;
            if (currentWater > targetWater) currentWater = targetWater;
            updateUI();
        }
    });
});

// Ubah Target Harian Custom
targetInput.addEventListener("change", () => {
    const newTarget = parseInt(targetInput.value);
    if (newTarget >= 500) {
        targetWater = newTarget;
        if (currentWater > targetWater) currentWater = targetWater;
        updateUI();
    } else {
        alert("Target minimal adalah 500 ml!");
        targetInput.value = targetWater;
    }
});

// Reset Progres
resetBtn.addEventListener("click", () => {
    if (confirm("Reset progres minum hari ini?")) {
        currentWater = 0;
        updateUI();
    }
});

// Inisialisasi awal
updateUI();
