document.addEventListener("DOMContentLoaded", function () {
    const biodataForm = document.getElementById("biodata-form");
    const expertSystemSection = document.getElementById("expert-system-section");
    const expertSystemForm = document.getElementById("expert-system-form");
    const resultSection = document.getElementById("result-section");
    const resultText = document.getElementById("result");

    // Simulasi basis pengetahuan dengan metode Forward Chaining
    const rules = {
        visual: ["C01", "C02", "C03", "C04", "C05", "C06", "C09", "C10"],
        auditory: ["C07", "C11", "C12", "C13", "C14", "C15", "C19", "C20"],
        kinesthetic: ["C21", "C22", "C23", "C24", "C25", "C26", "C28", "C29"],
    };

    biodataForm.addEventListener("submit", function (e) {
        e.preventDefault();
        biodataForm.style.display = "none";
        expertSystemSection.style.display = "block";
    });

    expertSystemForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedCiri = Array.from(expertSystemForm.elements["ciri"])
            .filter(input => input.checked)
            .map(input => input.value);

        let diagnosis = "Tidak dapat menentukan gaya belajar.";
        if (selectedCiri.some(ciri => rules.visual.includes(ciri))) {
            diagnosis = "Gaya Belajar Visual";
        }
        if (selectedCiri.some(ciri => rules.auditory.includes(ciri))) {
            diagnosis = "Gaya Belajar Auditori";
        }
        if (selectedCiri.some(ciri => rules.kinesthetic.includes(ciri))) {
            diagnosis = "Gaya Belajar Kinestetik";
        }

        resultText.textContent = diagnosis;
        resultSection.style.display = "block";
    });
});
