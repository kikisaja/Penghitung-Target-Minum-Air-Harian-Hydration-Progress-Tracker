# 💧 Hydration Progress Tracker

Aplikasi pemantau target minum air harian (*Hydration Progress Tracker*) interaktif berbasis web dengan animasi air dan indikator persentase real-time.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **State & Math Calculation:**
   Mengakumulasikan volume air aktif dan menghitung rasio persentase ($\frac{\text{Current}}{\text{Target}} \times 100\%$).
2. **CSS Animation & Dynamic Heights:**
   Mengontrol tinggi elemen `height` pada elemen wadah air secara terikat (*data-driven*) dengan efek CSS transition halus.
3. **Event Handling & Data Attributes:**
   Membaca atribut `data-amount` pada elemen tombol untuk menangani variasi nilai penambahan air (+250 ml atau +500 ml).

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Antarmuka gelas visual, tombol aksi, dan kontrol target
├── style.css        # Desain Neobrutalism, animasi gelombang air, dan layout
└── script.js        # Logika perhitungan persentase, update UI, dan event handler
