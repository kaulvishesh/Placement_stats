document.addEventListener('DOMContentLoaded', function () {
	// Add any interactive features here
	const navLinks = document.querySelectorAll('nav a');

	navLinks.forEach(link => {
		if (link.href === window.location.href) {
			link.style.backgroundColor = '#555';
		}
	});

	// Package Distribution Chart
	new Chart(document.getElementById('packageChart'), {
		type: 'bar',
		data: {
			labels: ['17-25 LPA', '35+ LPA'],
			datasets: [{
				label: 'Number of Offers',
				data: [7, 3],
				backgroundColor: 'rgba(52, 152, 219, 0.6)',
				borderColor: 'rgba(52, 152, 219, 1)',
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: 'Package Distribution'
				}
			}
		}
	});

	// Sector Chart
	new Chart(document.getElementById('sectorChart'), {
		type: 'doughnut',
		data: {
			labels: ['Technology', 'Finance'],
			datasets: [{
				data: [7, 3],
				backgroundColor: [
					'rgba(52, 152, 219, 0.8)',
					'rgba(46, 204, 113, 0.8)'
				]
			}]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'bottom'
				}
			}
		}
	});

	// Salary Chart
	new Chart(document.getElementById('salaryChart'), {
		type: 'bar',
		data: {
			labels: ['Data Scientist', 'Data Analyst', 'Quantitative Analyst'],
			datasets: [{
				label: 'Average Package (LPA)',
				data: [23, 20.5, 38.16],
				backgroundColor: 'rgba(46, 204, 113, 0.6)',
				borderColor: 'rgba(46, 204, 113, 1)',
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			plugins: {
				title: {
					display: true,
					text: 'Role-wise Average Package'
				}
			}
		}
	});

	// Company Chart
	new Chart(document.getElementById('companyChart'), {
		type: 'pie',
		data: {
			labels: ['SocGen', 'NetraDyne', 'Wells Fargo', 'JPMC', 'Connect Secure', 'HP', 'Routematic', 'Nuware Systems'],
			datasets: [{
				data: [2, 2, 2, 1, 1, 1, 1, 1],
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#4BC0C0',
					'#9966FF',
					'#FF9F40',
					'#FF6384',
					'#36A2EB'
				]
			}]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: 'right'
				},
				title: {
					display: true,
					text: 'Company-wise Placements'
				}
			}
		}
	});
});
