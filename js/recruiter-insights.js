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
		// Top Summer Internship Companies Chart
		createChart('topSummerCompaniesChart', {
			type: 'bar',
			data: {
				labels: ['WellsFargo', 'ZS Associates', 'Honeywell', 'iMerit', 'Quantum Street', 'XenReality', 'I-STEM'],
				datasets: [{
					label: 'Summer Interns',
					data: [1, 2, 2, 2, 1, 1, 1],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)',
						'rgba(34, 197, 94, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)',
						'rgb(34, 197, 94)'
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

		// Top Winter Internship Companies Chart
		createChart('topWinterCompaniesChart', {
			type: 'bar',
			data: {
				labels: ['JP Morgan', 'Uber', 'Accenture', 'CocoBlu', 'Societe Generale', 'SSGA', 'HP'],
				datasets: [{
					label: 'Winter Interns',
					data: [2, 1, 1, 1, 1, 1, 2],
					backgroundColor: [
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)',
						'rgba(34, 197, 94, 0.8)',
						'rgba(168, 85, 247, 0.8)',
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)'
					],
					borderColor: [
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)',
						'rgb(34, 197, 94)',
						'rgb(168, 85, 247)',
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)'
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

		// Summer Stipend Distribution with KDE Chart
		createChart('summerStipendDistributionChart', {
			type: 'line',
			data: {
				labels: ['15K', '25K', '50K', '70K', '75K', '130K'],
				datasets: [{
					label: 'Frequency Distribution',
					data: [1, 2, 2, 2, 2, 1],
					borderColor: 'rgb(245, 158, 11)',
					backgroundColor: 'rgba(245, 158, 11, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: 'rgb(245, 158, 11)',
					pointBorderColor: 'white',
					pointBorderWidth: 2,
					pointRadius: 4
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
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return context.dataset.label + ': ' + context.parsed.y + '%';
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: {
							callback: function (value) { return value + '%'; },
							font: { weight: '500' }
						},
						title: {
							display: true,
							text: 'Frequency (%)',
							font: { weight: '600' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } },
						title: {
							display: true,
							text: 'Stipend Range',
							font: { weight: '600' }
						}
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Winter Stipend Distribution with KDE Chart
		createChart('winterStipendDistributionChart', {
			type: 'line',
			data: {
				labels: ['50K', '60K', '75K', '100K', '110K', '120K', '150K', '200K'],
				datasets: [{
					label: 'Frequency Distribution',
					data: [2, 1, 2, 1, 1, 1, 2, 1],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: 'rgb(59, 130, 246)',
					pointBorderColor: 'white',
					pointBorderWidth: 2,
					pointRadius: 4
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
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return context.dataset.label + ': ' + context.parsed.y + '%';
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: {
							callback: function (value) { return value + '%'; },
							font: { weight: '500' }
						},
						title: {
							display: true,
							text: 'Frequency (%)',
							font: { weight: '600' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } },
						title: {
							display: true,
							text: 'Stipend Range',
							font: { weight: '600' }
						}
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Stipend Distribution Chart
		createChart('stipendDistributionChart', {
			type: 'bar',
			data: {
				labels: ['Technology', 'Finance', 'Analytics', 'Others'],
				datasets: [{
					label: 'Average Stipend (₹K/month)',
					data: [55, 65, 40, 35],
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
