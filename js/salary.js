const ctx = document.getElementById('salaryChart').getContext('2d');
new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Data Scientist', 'Data Analyst', 'Quantitative Analyst'],
		datasets: [{
			label: 'Average Package (LPA)',
			data: [23, 20.5, 38.16],
			backgroundColor: 'rgba(54, 162, 235, 0.5)'
		}]
	},
	options: {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
