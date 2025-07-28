const ctx = document.getElementById('sectorChart').getContext('2d');

const sectorData = {
	labels: ['Technology', 'Finance'],
	datasets: [{
		data: [7, 3],
		backgroundColor: [
			'rgba(54, 162, 235, 0.8)',
			'rgba(255, 206, 86, 0.8)'
		],
		borderColor: [
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)'
		],
		borderWidth: 1
	}]
};

new Chart(ctx, {
	type: 'doughnut',
	data: sectorData,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Placements by Sector'
			}
		}
	}
});
