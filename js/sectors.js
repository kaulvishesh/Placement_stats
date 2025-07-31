document.addEventListener('DOMContentLoaded', function () {
	// Modern Chart Configuration
	Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
	Chart.defaults.color = '#334155';
	Chart.defaults.borderColor = '#e2e8f0';

	// Sector Distribution Chart
	new Chart(document.getElementById('sectorDistributionChart'), {
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
						padding: 20,
						usePointStyle: true,
						pointStyle: 'circle',
						font: {
							size: 12,
							weight: '500'
						}
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
							const percentage = ((context.parsed / context.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
							return `${context.label}: ${context.parsed}% (${percentage}% of total)`;
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

	// Sector Growth Trends Chart
	new Chart(document.getElementById('sectorGrowthChart'), {
		type: 'line',
		data: {
			labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
			datasets: [{
				label: 'Technology',
				data: [30, 28, 32, 34, 36, 35],
				borderColor: 'rgb(59, 130, 246)',
				backgroundColor: 'rgba(59, 130, 246, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(59, 130, 246)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
			}, {
				label: 'Finance & Banking',
				data: [28, 25, 24, 26, 27, 25],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(16, 185, 129)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
			}, {
				label: 'Consulting',
				data: [20, 18, 16, 15, 16, 15],
				borderColor: 'rgb(245, 158, 11)',
				backgroundColor: 'rgba(245, 158, 11, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(245, 158, 11)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
			}, {
				label: 'Analytics',
				data: [8, 10, 12, 14, 15, 12],
				borderColor: 'rgb(239, 68, 68)',
				backgroundColor: 'rgba(239, 68, 68, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(239, 68, 68)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
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
							weight: '500'
						}
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
							return `${context.dataset.label}: ${context.parsed.y}% of placements`;
						}
					}
				}
			},
			scales: {
				y: {
					beginAtZero: true,
					max: 40,
					grid: {
						color: 'rgba(0, 0, 0, 0.05)'
					},
					ticks: {
						callback: function (value) {
							return value + '%';
						},
						font: {
							weight: '500'
						}
					},
					title: {
						display: true,
						text: 'Percentage of Placements'
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

	// Sector-wise Compensation Chart
	new Chart(document.getElementById('sectorCompensationChart'), {
		type: 'bar',
		data: {
			labels: ['Finance & Banking', 'Product Management', 'Technology', 'Consulting', 'Analytics', 'Operations'],
			datasets: [{
				label: 'Average Package (LPA)',
				data: [38.5, 32.0, 28.2, 26.8, 25.1, 22.5],
				backgroundColor: [
					'rgba(16, 185, 129, 0.8)',
					'rgba(139, 92, 246, 0.8)',
					'rgba(59, 130, 246, 0.8)',
					'rgba(245, 158, 11, 0.8)',
					'rgba(239, 68, 68, 0.8)',
					'rgba(236, 72, 153, 0.8)'
				],
				borderColor: [
					'rgb(16, 185, 129)',
					'rgb(139, 92, 246)',
					'rgb(59, 130, 246)',
					'rgb(245, 158, 11)',
					'rgb(239, 68, 68)',
					'rgb(236, 72, 153)'
				],
				borderWidth: 2,
				borderRadius: 8,
				borderSkipped: false
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
							return `Average: ₹${context.parsed.y} LPA`;
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

	// Role Distribution by Sector Chart
	new Chart(document.getElementById('roleDistributionChart'), {
		type: 'bar',
		data: {
			labels: ['Technology', 'Finance', 'Consulting', 'Analytics', 'Product Mgmt', 'Operations'],
			datasets: [{
				label: 'Technical Roles',
				data: [28, 8, 5, 10, 4, 2],
				backgroundColor: 'rgba(59, 130, 246, 0.8)',
				borderColor: 'rgb(59, 130, 246)',
				borderWidth: 2
			}, {
				label: 'Management Roles',
				data: [5, 12, 8, 2, 4, 3],
				backgroundColor: 'rgba(16, 185, 129, 0.8)',
				borderColor: 'rgb(16, 185, 129)',
				borderWidth: 2
			}, {
				label: 'Analyst Roles',
				data: [2, 5, 2, 0, 0, 0],
				backgroundColor: 'rgba(245, 158, 11, 0.8)',
				borderColor: 'rgb(245, 158, 11)',
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
						font: {
							weight: '500'
						}
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
							return `${context.dataset.label}: ${context.parsed.y}% of roles`;
						}
					}
				}
			},
			scales: {
				x: {
					stacked: true,
					grid: {
						display: false
					},
					ticks: {
						font: {
							weight: '500'
						}
					}
				},
				y: {
					stacked: true,
					beginAtZero: true,
					grid: {
						color: 'rgba(0, 0, 0, 0.05)'
					},
					ticks: {
						callback: function (value) {
							return value + '%';
						},
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

	// Market Share Evolution Chart
	new Chart(document.getElementById('marketShareChart'), {
		type: 'line',
		data: {
			labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
			datasets: [{
				label: 'Technology',
				data: [34, 35, 36, 35, 34, 35],
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
				label: 'Finance',
				data: [26, 25, 24, 25, 26, 25],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.1)',
				borderWidth: 3,
				fill: true,
				tension: 0.4,
				pointBackgroundColor: 'rgb(16, 185, 129)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
			}, {
				label: 'Analytics',
				data: [10, 11, 12, 13, 14, 12],
				borderColor: 'rgb(239, 68, 68)',
				backgroundColor: 'rgba(239, 68, 68, 0.1)',
				borderWidth: 3,
				fill: true,
				tension: 0.4,
				pointBackgroundColor: 'rgb(239, 68, 68)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
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
							weight: '500'
						}
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
							return `${context.dataset.label}: ${context.parsed.y}% market share`;
						}
					}
				}
			},
			scales: {
				y: {
					beginAtZero: true,
					max: 40,
					grid: {
						color: 'rgba(0, 0, 0, 0.05)'
					},
					ticks: {
						callback: function (value) {
							return value + '%';
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

	// Skills Demand by Sector Chart
	new Chart(document.getElementById('skillsDemandChart'), {
		type: 'radar',
		data: {
			labels: ['Programming', 'Analytics', 'Communication', 'Leadership', 'Domain Knowledge', 'Problem Solving'],
			datasets: [{
				label: 'Technology',
				data: [9, 7, 6, 5, 6, 8],
				borderColor: 'rgb(59, 130, 246)',
				backgroundColor: 'rgba(59, 130, 246, 0.2)',
				borderWidth: 2,
				pointBackgroundColor: 'rgb(59, 130, 246)',
				pointBorderColor: 'white',
				pointBorderWidth: 2
			}, {
				label: 'Finance',
				data: [5, 9, 8, 7, 9, 8],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.2)',
				borderWidth: 2,
				pointBackgroundColor: 'rgb(16, 185, 129)',
				pointBorderColor: 'white',
				pointBorderWidth: 2
			}, {
				label: 'Consulting',
				data: [4, 6, 9, 8, 7, 9],
				borderColor: 'rgb(245, 158, 11)',
				backgroundColor: 'rgba(245, 158, 11, 0.2)',
				borderWidth: 2,
				pointBackgroundColor: 'rgb(245, 158, 11)',
				pointBorderColor: 'white',
				pointBorderWidth: 2
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
						font: {
							weight: '500'
						}
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
							return `${context.dataset.label}: ${context.parsed.r}/10 importance`;
						}
					}
				}
			},
			scales: {
				r: {
					beginAtZero: true,
					max: 10,
					grid: {
						color: 'rgba(0, 0, 0, 0.1)'
					},
					angleLines: {
						color: 'rgba(0, 0, 0, 0.1)'
					},
					pointLabels: {
						font: {
							size: 12,
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
});
