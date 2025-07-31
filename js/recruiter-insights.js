(function () {
	'use strict';

	// Chart instances storage for cleanup
	window.chartInstances = window.chartInstances || {};

	// Cleanup function
	window.cleanupCharts = function () {
		Object.values(window.chartInstances).forEach(chart => {
			if (chart && typeof chart.destroy === 'function') {
				chart.destroy();
			}
		});
		window.chartInstances = {};
	};

	// Helper function to create charts
	function createChart(canvasId, config) {
		const canvas = document.getElementById(canvasId);
		if (!canvas) {
			console.warn(`Canvas with id '${canvasId}' not found`);
			return null;
		}

		// Cleanup existing chart
		if (window.chartInstances[canvasId]) {
			window.chartInstances[canvasId].destroy();
		}

		try {
			const chart = new Chart(canvas, config);
			window.chartInstances[canvasId] = chart;
			return chart;
		} catch (error) {
			console.error(`Error creating chart '${canvasId}':`, error);
			return null;
		}
	}

	function initializeCharts() {
		// Top Recruiting Companies Chart
		createChart('topCompaniesChart', {
			type: 'bar',
			data: {
				labels: ['Microsoft', 'Google', 'Amazon', 'McKinsey', 'BCG', 'Goldman Sachs', 'JP Morgan', 'Flipkart'],
				datasets: [{
					label: 'Number of Hires',
					data: [8, 7, 6, 5, 4, 4, 3, 3],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)',
						'rgba(34, 197, 94, 0.8)',
						'rgba(168, 85, 247, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)',
						'rgb(34, 197, 94)',
						'rgb(168, 85, 247)'
					],
					borderWidth: 2,
					borderRadius: 8
				}]
			},
			options: {
				indexAxis: 'y',
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8
					}
				},
				scales: {
					x: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: { font: { weight: '500' } }
					},
					y: {
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Sector Distribution Chart
		createChart('sectorDistributionChart', {
			type: 'doughnut',
			data: {
				labels: ['Technology', 'Finance', 'Consulting', 'Analytics', 'Product Management', 'Others'],
				datasets: [{
					data: [35, 25, 15, 12, 8, 5],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(156, 163, 175, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(156, 163, 175)'
					],
					borderWidth: 3,
					hoverOffset: 10
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							usePointStyle: true,
							font: { weight: '500' },
							padding: 20
						}
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return context.label + ': ' + context.parsed + '%';
							}
						}
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Sector-wise Compensation Chart
		createChart('sectorCompensationChart', {
			type: 'bar',
			data: {
				labels: ['Technology', 'Finance', 'Consulting', 'Analytics', 'Product Mgmt'],
				datasets: [{
					label: 'Average Package (LPA)',
					data: [28.5, 32.1, 26.8, 24.2, 30.5],
					backgroundColor: 'rgba(59, 130, 246, 0.8)',
					borderColor: 'rgb(59, 130, 246)',
					borderWidth: 2,
					borderRadius: 8
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return 'Average: ₹' + context.parsed.y + ' LPA';
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: {
							callback: function (value) { return '₹' + value + ' LPA'; },
							font: { weight: '500' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Hiring Trends Chart
		createChart('hiringTrendsChart', {
			type: 'line',
			data: {
				labels: ['2023', '2024', '2025'],
				datasets: [{
					label: 'Total Hires',
					data: [38, 42, 45],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: 'rgb(59, 130, 246)',
					pointBorderColor: 'white',
					pointBorderWidth: 3,
					pointRadius: 6
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: { font: { weight: '500' } }
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Company Size Distribution Chart
		createChart('companySizeChart', {
			type: 'pie',
			data: {
				labels: ['Large Corp (10K+)', 'Mid-size (1K-10K)', 'Startup (<1K)', 'Consulting Firms'],
				datasets: [{
					data: [45, 30, 15, 10],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)'
					],
					borderWidth: 3,
					hoverOffset: 10
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							usePointStyle: true,
							font: { weight: '500' },
							padding: 15
						}
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return context.label + ': ' + context.parsed + '%';
							}
						}
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Role Distribution by Sector Chart
		createChart('roleDistributionChart', {
			type: 'bar',
			data: {
				labels: ['Technology', 'Finance', 'Consulting', 'Analytics', 'Product Mgmt'],
				datasets: [{
					label: 'Software Engineer',
					data: [15, 2, 0, 3, 1],
					backgroundColor: 'rgba(59, 130, 246, 0.8)',
					borderColor: 'rgb(59, 130, 246)',
					borderWidth: 2
				}, {
					label: 'Data Scientist',
					data: [8, 3, 2, 8, 2],
					backgroundColor: 'rgba(16, 185, 129, 0.8)',
					borderColor: 'rgb(16, 185, 129)',
					borderWidth: 2
				}, {
					label: 'Consultant',
					data: [2, 5, 12, 1, 1],
					backgroundColor: 'rgba(245, 158, 11, 0.8)',
					borderColor: 'rgb(245, 158, 11)',
					borderWidth: 2
				}, {
					label: 'Analyst',
					data: [3, 8, 1, 6, 2],
					backgroundColor: 'rgba(239, 68, 68, 0.8)',
					borderColor: 'rgb(239, 68, 68)',
					borderWidth: 2
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'top',
						labels: {
							usePointStyle: true,
							font: { weight: '500' },
							padding: 15
						}
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8
					}
				},
				scales: {
					x: {
						stacked: true,
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					},
					y: {
						stacked: true,
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Package by Company Type Chart
		createChart('packageByTypeChart', {
			type: 'bar',
			data: {
				labels: ['Tech Giants', 'Investment Banks', 'Consulting', 'Startups', 'Analytics Firms'],
				datasets: [{
					label: 'Average Package (LPA)',
					data: [35.2, 38.5, 28.8, 22.5, 26.3],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)'
					],
					borderWidth: 2,
					borderRadius: 8
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						borderColor: 'rgba(255, 255, 255, 0.1)',
						borderWidth: 1,
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return 'Average: ₹' + context.parsed.y + ' LPA';
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: {
							callback: function (value) { return '₹' + value + ' LPA'; },
							font: { weight: '500' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Skills Demand by Sector Chart
		createChart('skillsDemandChart', {
			type: 'radar',
			data: {
				labels: ['Analytics', 'Programming', 'Strategy', 'Communication', 'Leadership', 'Finance'],
				datasets: [{
					label: 'Technology',
					data: [8, 9, 6, 7, 6, 4],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(59, 130, 246)'
				}, {
					label: 'Finance',
					data: [9, 6, 7, 8, 7, 9],
					borderColor: 'rgb(16, 185, 129)',
					backgroundColor: 'rgba(16, 185, 129, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(16, 185, 129)'
				}, {
					label: 'Consulting',
					data: [7, 5, 9, 9, 8, 6],
					borderColor: 'rgb(245, 158, 11)',
					backgroundColor: 'rgba(245, 158, 11, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(245, 158, 11)'
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'top',
						labels: {
							usePointStyle: true,
							font: { weight: '500' },
							padding: 15
						}
					}
				},
				scales: {
					r: {
						beginAtZero: true,
						max: 10,
						grid: { color: 'rgba(0, 0, 0, 0.1)' },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Cleanup on page unload
		window.addEventListener('beforeunload', window.cleanupCharts);
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeCharts);
	} else {
		initializeCharts();
	}
})();
