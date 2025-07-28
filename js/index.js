// Year-wise Placement Trends
new Chart(document.getElementById('trendChart'), {
	type: 'line',
	data: {
		labels: ['2019', '2020', '2021', '2022', '2023'],
		datasets: [{
			label: 'Placement %',
			data: [92, 88, 94, 96, 95],
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}]
	}
});

// Package Distribution
new Chart(document.getElementById('packageChart'), {
	type: 'bar',
	data: {
		labels: ['<15 LPA', '15-20 LPA', '20-25 LPA', '25-30 LPA', '>30 LPA'],
		datasets: [{
			label: 'Number of Students',
			data: [0, 1, 6, 0, 3],
			backgroundColor: 'rgba(153, 102, 255, 0.5)'
		}]
	}
});

// Profile Distribution
new Chart(document.getElementById('profileChart'), {
	type: 'doughnut',
	data: {
		labels: ['Data Scientist', 'Data Analyst', 'Quant Analyst'],
		datasets: [{
			data: [5, 2, 3],
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#4BC0C0'
			]
		}]
	}
});

// Internship Conversion
new Chart(document.getElementById('conversionChart'), {
	type: 'pie',
	data: {
		labels: ['Converted', 'New Offers'],
		datasets: [{
			data: [6, 4],
			backgroundColor: ['#4BC0C0', '#FF9F40']
		}]
	}
});
