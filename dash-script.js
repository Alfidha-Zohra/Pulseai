document.addEventListener('DOMContentLoaded', () => {
    // 1. World Map
    new jsVectorMap({
        selector: '#world-map',
        map: 'world',
        regionStyle: { initial: { fill: '#d1d5db' } },
        visualizeData: {
            scale: ['#e0e7ff', '#4f46e5'],
            values: { US: 400, CN: 550, FR: 480, JP: 390 }
        }
    });

    // 2. Simple Bar Chart
    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{ data: [300, 450, 600, 400], backgroundColor: '#4f46e5', borderRadius: 8 }]
        },
        options: { plugins: { legend: { display: false } } }
    });

    // 3. Smooth Line Chart
    new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [{
                data: [1.2, 1.3, 1.5, 2.1, 2.4, 2.8, 3.2, 2.9, 2.4],
                borderColor: '#4f46e5',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(79, 70, 229, 0.05)'
            }]
        },
        options: { plugins: { legend: { display: false } }, scales: { y: { display: false } } }
    });

    // 4. Growth Chart
    new Chart(document.getElementById('growthChart'), {
        type: 'doughnut',
        data: {
            labels: ['Intl', 'Dom'],
            datasets: [{ data: [70, 30], backgroundColor: ['#4f46e5', '#e0e7ff'] }]
        },
        options: { cutout: '70%' }
    });
});