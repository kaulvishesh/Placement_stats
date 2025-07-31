// Ensure this script only runs once
(function () {
	'use strict';

	// Prevent multiple initializations
	if (window.chartsInitialized) {
		return;
	}

	function initializeCharts() {
		// Double check to prevent race conditions
		if (window.chartsInitialized) {
			return;
		}
		window.chartsInitialized = true;

		// Modern Chart Configuration
		Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
		Chart.defaults.color = '#334155';
		Chart.defaults.borderColor = '#e2e8f0';
		Chart.defaults.backgroundColor = 'rgba(30, 64, 175, 0.1)';

		// Store chart instances for cleanup
		window.chartInstances = {};

		// Helper function to create charts safely
		function createChart(canvasId, config) {
			const canvas = document.getElementById(canvasId);
			if (!canvas) return null;

			// Destroy existing chart if it exists
			if (window.chartInstances[canvasId]) {
				window.chartInstances[canvasId].destroy();
			}

			// Create new chart
			window.chartInstances[canvasId] = new Chart(canvas, config);
			return window.chartInstances[canvasId];
		}

		// Enhanced Package Distribution Chart with KDE Overlay
		createChart('packageChart', {
			type: 'bar',
			data: {
				labels: ['15-20 LPA', '20-25 LPA', '25-30 LPA', '30-35 LPA', '35+ LPA'],
				datasets: [{
					label: 'Number of Offers',
					data: [1, 6, 0, 0, 3],
					backgroundColor: 'rgba(59, 130, 246, 0.7)',
					borderColor: 'rgb(59, 130, 246)',
					borderWidth: 2,
					borderRadius: 8,
					borderSkipped: false,
					yAxisID: 'y'
				}, {
					label: 'Density Curve (KDE)',
					type: 'line',
					data: [0.8, 4.2, 2.8, 1.5, 0.7],
					borderColor: 'rgb(239, 68, 68)',
					backgroundColor: 'rgba(239, 68, 68, 0.1)',
					borderWidth: 3,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: 'rgb(239, 68, 68)',
					pointBorderColor: 'white',
					pointBorderWidth: 2,
					pointRadius: 5,
					pointHoverRadius: 7,
					yAxisID: 'y1'
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					mode: 'index',
					intersect: false,
				},
				plugins: {
					legend: {
						display: true,
						position: 'top',
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
								if (context.datasetIndex === 0) {
									return `${context.parsed.y} students placed`;
								} else {
									return `Density: ${context.parsed.y.toFixed(2)}`;
								}
							}
						}
					}
				},
				scales: {
					y: {
						type: 'linear',
						display: true,
						position: 'left',
						beginAtZero: true,
						grid: {
							color: 'rgba(0, 0, 0, 0.05)'
						},
						ticks: {
							font: { weight: '500' }
						},
						title: {
							display: true,
							text: 'Number of Students',
							font: { weight: '600' }
						}
					},
					y1: {
						type: 'linear',
						display: true,
						position: 'right',
						beginAtZero: true,
						grid: {
							drawOnChartArea: false,
						},
						ticks: {
							font: { weight: '500' }
						},
						title: {
							display: true,
							text: 'Density',
							font: { weight: '600' }
						}
					},
					x: {
						grid: {
							display: false
						},
						ticks: {
							font: { weight: '500' }
						},
						title: {
							display: true,
							text: 'Salary Range',
							font: { weight: '600' }
						}
					}
				},
				animation: {
					duration: 2000,
					easing: 'easeOutQuart'
				}
			}
		});

		// Enhanced Sector Chart
		createChart('sectorChart', {
			type: 'doughnut',
			data: {
				labels: ['Data Science', 'Finance & Banking', 'Cybersecurity', 'Analytics'],
				datasets: [{
					data: [4, 3, 1, 2],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)'
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
							padding: 25,
							usePointStyle: true,
							pointStyle: 'circle',
							font: {
								size: 13,
								weight: '500'
							},
							boxWidth: 15,
							boxHeight: 15
						},
						maxHeight: 120
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
								const percentage = ((context.parsed / context.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
								return `${context.label}: ${context.parsed}% (${percentage}% of placements)`;
							}
						}
					}
				},
				animation: {
					animateRotate: true,
					duration: 2000
				}
			}
		});



		// Enhanced Company Chart
		createChart('companyChart', {
			type: 'bar',
			data: {
				labels: ['JPMC', 'Wells Fargo', 'NetraDyne', 'RouteMatic', 'Societe Generales', 'Niveta Systems'],
				datasets: [{
					label: 'Number of Hires',
					data: [1, 2, 2, 1, 1, 1],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)',
						'rgba(34, 197, 94, 0.8)',
						'rgba(168, 85, 247, 0.8)',
						'rgba(251, 146, 60, 0.8)',
						'rgba(14, 165, 233, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)',
						'rgb(34, 197, 94)',
						'rgb(168, 85, 247)',
						'rgb(251, 146, 60)',
						'rgb(14, 165, 233)'
					],
					borderWidth: 2,
					borderRadius: 6
				}]
			},
			options: {
				indexAxis: 'y',
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false
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
								return `${context.parsed.x} students hired`;
							}
						}
					}
				},
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							color: 'rgba(0, 0, 0, 0.05)'
						},
						ticks: {
							font: {
								weight: '500'
							}
						}
					},
					y: {
						grid: {
							display: false
						},
						ticks: {
							font: {
								weight: '500'
							}
						}
					}
				},
				animation: {
					duration: 2000,
					easing: 'easeOutQuart'
				}
			}
		});
		// Cleanup function for charts
		window.cleanupCharts = function () {
			if (window.chartInstances) {
				Object.values(window.chartInstances).forEach(chart => {
					if (chart && typeof chart.destroy === 'function') {
						chart.destroy();
					}
				});
				window.chartInstances = {};
			}
			window.chartsInitialized = false;
		};



		// Role-wise Salary Radar Chart
		createChart('roleSalaryRadarChart', {
			type: 'radar',
			data: {
				labels: ['Base Salary', 'Bonus', 'Stock Options', 'Total Compensation'],
				datasets: [{
					label: 'Data Scientist',
					data: [22, 1, 3, 23.5],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(59, 130, 246)'
				}, {
					label: 'Quant Analyst',
					data: [26.5, 4, 5, 38.5],
					borderColor: 'rgb(16, 185, 129)',
					backgroundColor: 'rgba(16, 185, 129, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(16, 185, 129)'
				}, {
					label: 'Data Analyst',
					data: [18, 1, 1, 20.5],
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
						labels: { usePointStyle: true, font: { weight: '500' } }
					}
				},
				scales: {
					r: {
						beginAtZero: true,
						max: 60,
						grid: { color: 'rgba(0, 0, 0, 0.1)' }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Salary Trends Chart
		createChart('salaryTrendsChart', {
			type: 'line',
			data: {
				labels: ['2023', '2024', '2025'],
				datasets: [{
					label: 'Average Package',
					data: [27.3, 23.3, 27.05],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4
				}, {
					label: 'Median Package',
					data: [28.8, 20, 24.0],
					borderColor: 'rgb(16, 185, 129)',
					borderWidth: 3,
					fill: false,
					tension: 0.4
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'top',
						labels: { usePointStyle: true, font: { weight: '500' } }
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

		// Cleanup on page unload
		window.addEventListener('beforeunload', window.cleanupCharts);
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeCharts);
	} else {
		// DOM is already loaded
		initializeCharts();
	}
})();
