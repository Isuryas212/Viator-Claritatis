const aphorisms = [
    "Jangan percaya. Amati.",
    "Realitas tidak wajib mengikuti konsepmu.",
    "Kejernihan lahir ketika ego berhenti menjadi hakim.",
    "Keheningan sering menjawab lebih banyak daripada kata-kata.",
    "Pertanyaan yang benar lebih berharga daripada jawaban yang cepat.",
    "Semakin jernih pengamatanmu, semakin sedikit yang perlu diperdebatkan."
];

function newAphorism() {
    const random = Math.floor(Math.random() * aphorisms.length);
    document.getElementById("aphorism").textContent = aphorisms[random];
}

newAphorism();
