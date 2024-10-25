function updateTotals() {
    const rows = document.querySelectorAll('.styled-table tbody tr');
    rows.forEach(row => {
        const gold = parseInt(row.cells[1].querySelector('span').textContent) || 0;
        const silver = parseInt(row.cells[2].querySelector('span').textContent) || 0;
        const bronze = parseInt(row.cells[3].querySelector('span').textContent) || 0;
        const total = gold + silver + bronze;
        row.querySelector('.total').textContent = total;
    });
}

// Initialize totals on page load
updateTotals();