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
						ticks: {
							font: { weight: '500' },
							stepSize: 1
						},
						title: {
							display: true,
							text: 'Number of Students',
							font: { weight: '600' }
						}
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
						ticks: {
							font: { weight: '500' },
							stepSize: 1
						},
						title: {
							display: true,
							text: 'Number of Students',
							font: { weight: '600' }
						}
					},
					y: {
						grid: { display: false },
						ticks: { font: { weight: '500' } }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Summer Stipend Distribution Chart
		createChart('summerStipendDistributionChart', {
			type: 'bar',
			data: {
				labels: ['₹15-35K', '₹35-55K', '₹55-75K', '₹75K+'],
				datasets: [{
					label: 'Number of Students',
					data: [3, 2, 4, 1],
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
					borderWidth: 2,
					borderRadius: {
						topLeft: 8,
						topRight: 8
					}
				}]
			},
			options: {
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
								return `Students: ${context.parsed.y}`;
							},
							afterLabel: function (context) {
								const total = context.dataset.data.reduce((a, b) => a + b, 0);
								const percentage = ((context.parsed.y / total) * 100).toFixed(1);
								return `Percentage: ${percentage}%`;
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.1)' },
						ticks: {
							font: { weight: '500' },
							stepSize: 1
						},
						title: {
							display: true,
							text: 'Number of Students',
							font: { weight: '600' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } },
						title: {
							display: true,
							text: 'Monthly Stipend Range',
							font: { weight: '600' }
						}
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Winter Stipend Distribution Chart
		createChart('winterStipendDistributionChart', {
			type: 'bar',
			data: {
				labels: ['₹50-70K', '₹70-90K', '₹90-110K', '₹110-130K', '₹130-150K', '₹150K+'],
				datasets: [{
					label: 'Number of Students',
					data: [3, 2, 2, 1, 2, 1],
					backgroundColor: [
						'rgba(16, 185, 129, 0.8)',
						'rgba(59, 130, 246, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(236, 72, 153, 0.8)'
					],
					borderColor: [
						'rgb(16, 185, 129)',
						'rgb(59, 130, 246)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(236, 72, 153)'
					],
					borderWidth: 2,
					borderRadius: {
						topLeft: 8,
						topRight: 8
					}
				}]
			},
			options: {
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
								return `Students: ${context.parsed.y}`;
							},
							afterLabel: function (context) {
								const total = context.dataset.data.reduce((a, b) => a + b, 0);
								const percentage = ((context.parsed.y / total) * 100).toFixed(1);
								return `Percentage: ${percentage}%`;
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.1)' },
						ticks: {
							font: { weight: '500' },
							stepSize: 1
						},
						title: {
							display: true,
							text: 'Number of Students',
							font: { weight: '600' }
						}
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } },
						title: {
							display: true,
							text: 'Monthly Stipend Range',
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
