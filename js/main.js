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

		// Enhanced Package Distribution Chart
		createChart('packageChart', {
			type: 'bar',
			data: {
				labels: ['10-15 LPA', '15-20 LPA', '20-25 LPA', '25-30 LPA', '30-35 LPA', '35+ LPA'],
				datasets: [{
					label: 'Number of Offers',
					data: [2, 8, 12, 15, 8, 5],
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
					borderRadius: 8,
					borderSkipped: false,
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				resizeDelay: 0,
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
								return `${context.parsed.y} students placed`;
							}
						}
					}
				},
				scales: {
					y: {
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
					x: {
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

		// Enhanced Sector Chart
		createChart('sectorChart', {
			type: 'doughnut',
			data: {
				labels: ['Technology', 'Finance & Banking', 'Consulting', 'Analytics', 'Product Management', 'Operations'],
				datasets: [{
					data: [35, 25, 15, 12, 8, 5],
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

		// Enhanced Role-wise Salary Chart
		createChart('salaryChart', {
			type: 'line',
			data: {
				labels: ['Data Scientist', 'Product Manager', 'Consultant', 'Quant Analyst', 'Software Engineer', 'Business Analyst'],
				datasets: [{
					label: 'Average Package (LPA)',
					data: [28.5, 32.2, 26.8, 38.5, 24.3, 22.1],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: 'rgb(59, 130, 246)',
					pointBorderColor: 'white',
					pointBorderWidth: 3,
					pointRadius: 6,
					pointHoverRadius: 8
				}, {
					label: 'Median Package (LPA)',
					data: [26.0, 30.0, 24.5, 35.0, 22.0, 20.5],
					borderColor: 'rgb(16, 185, 129)',
					backgroundColor: 'rgba(16, 185, 129, 0.1)',
					borderWidth: 3,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: 'rgb(16, 185, 129)',
					pointBorderColor: 'white',
					pointBorderWidth: 3,
					pointRadius: 6,
					pointHoverRadius: 8
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					intersect: false,
					mode: 'index'
				},
				plugins: {
					legend: {
						position: 'top',
						labels: {
							usePointStyle: true,
							pointStyle: 'circle',
							font: {
								size: 13,
								weight: '500'
							},
							padding: 20,
							boxWidth: 15,
							boxHeight: 15
						},
						maxHeight: 80
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
								return `${context.dataset.label}: ₹${context.parsed.y} LPA`;
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: {
							color: 'rgba(0, 0, 0, 0.05)'
						},
						ticks: {
							callback: function (value) {
								return '₹' + value + ' LPA';
							},
							font: {
								weight: '500'
							}
						}
					},
					x: {
						grid: {
							display: false
						},
						ticks: {
							maxRotation: 45,
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

		// Enhanced Company Chart
		createChart('companyChart', {
			type: 'horizontalBar',
			data: {
				labels: ['Microsoft', 'Google', 'Amazon', 'Goldman Sachs', 'McKinsey', 'Deloitte', 'JPMC', 'Wells Fargo', 'Flipkart', 'Uber'],
				datasets: [{
					label: 'Number of Hires',
					data: [8, 6, 7, 4, 3, 5, 4, 3, 4, 2],
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

		// Placement Timeline Chart
		createChart('timelineChart', {
			type: 'line',
			data: {
				labels: ['Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
				datasets: [{
					label: 'Cumulative Placements',
					data: [5, 15, 28, 42, 58, 72, 85, 95],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4,
					pointBackgroundColor: 'rgb(59, 130, 246)',
					pointBorderColor: 'white',
					pointBorderWidth: 3,
					pointRadius: 6
				}, {
					label: 'Monthly Placements',
					data: [5, 10, 13, 14, 16, 14, 13, 10],
					borderColor: 'rgb(16, 185, 129)',
					backgroundColor: 'rgba(16, 185, 129, 0.2)',
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					pointBackgroundColor: 'rgb(16, 185, 129)',
					pointBorderColor: 'white',
					pointBorderWidth: 2,
					pointRadius: 5
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					intersect: false,
					mode: 'index'
				},
				plugins: {
					legend: {
						position: 'top',
						labels: {
							usePointStyle: true,
							font: {
								size: 13,
								weight: '500'
							},
							padding: 20,
							boxWidth: 15,
							boxHeight: 15
						},
						maxHeight: 80
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
					y: {
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
					x: {
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

		// Geographic Distribution Chart
		createChart('locationChart', {
			type: 'polarArea',
			data: {
				labels: ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'International'],
				datasets: [{
					data: [35, 25, 20, 8, 5, 4, 3],
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
					borderWidth: 2
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
							font: {
								size: 13,
								weight: '500'
							},
							padding: 25,
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
								return `${context.label}: ${context.parsed}% of placements`;
							}
						}
					}
				},
				scales: {
					r: {
						beginAtZero: true,
						grid: {
							color: 'rgba(0, 0, 0, 0.1)'
						},
						ticks: {
							display: false
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

		// Additional Salary Analytics Charts

		// Salary Distribution Curve Chart
		createChart('salaryDistributionChart', {
			type: 'line',
			data: {
				labels: ['10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45'],
				datasets: [{
					label: 'Number of Students',
					data: [2, 8, 15, 18, 12, 6, 2],
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
						cornerRadius: 8,
						callbacks: {
							label: function (context) {
								return `${context.parsed.y} students in ₹${context.label} LPA range`;
							}
						}
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						grid: { color: 'rgba(0, 0, 0, 0.05)' },
						ticks: { font: { weight: '500' } },
						title: { display: true, text: 'Number of Students' }
					},
					x: {
						grid: { display: false },
						ticks: { font: { weight: '500' } },
						title: { display: true, text: 'Salary Range (LPA)' }
					}
				},
				animation: { duration: 2000, easing: 'easeOutQuart' }
			}
		});

		// Role-wise Salary Radar Chart
		createChart('roleSalaryRadarChart', {
			type: 'radar',
			data: {
				labels: ['Base Salary', 'Bonus', 'Stock Options', 'Benefits', 'Total Compensation'],
				datasets: [{
					label: 'Data Scientist',
					data: [28, 8, 6, 4, 46],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(59, 130, 246)'
				}, {
					label: 'Product Manager',
					data: [32, 10, 8, 5, 55],
					borderColor: 'rgb(16, 185, 129)',
					backgroundColor: 'rgba(16, 185, 129, 0.2)',
					borderWidth: 2,
					pointBackgroundColor: 'rgb(16, 185, 129)'
				}, {
					label: 'Consultant',
					data: [26, 6, 2, 4, 38],
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
				labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
				datasets: [{
					label: 'Average Package',
					data: [22.5, 21.8, 23.2, 25.1, 26.8, 27.05],
					borderColor: 'rgb(59, 130, 246)',
					backgroundColor: 'rgba(59, 130, 246, 0.1)',
					borderWidth: 3,
					fill: true,
					tension: 0.4
				}, {
					label: 'Median Package',
					data: [20.0, 19.5, 21.0, 22.5, 23.8, 24.0],
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

		// Location-based Salary Chart
		createChart('locationSalaryChart', {
			type: 'bar',
			data: {
				labels: ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'International'],
				datasets: [{
					label: 'Average Package (LPA)',
					data: [28.5, 32.1, 30.8, 26.2, 25.8, 42.3],
					backgroundColor: [
						'rgba(59, 130, 246, 0.8)',
						'rgba(16, 185, 129, 0.8)',
						'rgba(245, 158, 11, 0.8)',
						'rgba(239, 68, 68, 0.8)',
						'rgba(139, 92, 246, 0.8)',
						'rgba(34, 197, 94, 0.8)'
					],
					borderColor: [
						'rgb(59, 130, 246)',
						'rgb(16, 185, 129)',
						'rgb(245, 158, 11)',
						'rgb(239, 68, 68)',
						'rgb(139, 92, 246)',
						'rgb(34, 197, 94)'
					],
					borderWidth: 2,
					borderRadius: 8
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false }
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
						ticks: { maxRotation: 45, font: { weight: '500' } }
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
