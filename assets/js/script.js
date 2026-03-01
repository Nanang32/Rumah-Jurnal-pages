
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".journal-item");
    document.getElementById("totalJurnal").textContent = items.length;

    document.getElementById("searchInput").addEventListener("keyup", function() {
        const value = this.value.toLowerCase();
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(value) ? "" : "none";
        });
    });
});
