document.addEventListener('DOMContentLoaded', function () {
	// Modern Chart Configuration
	Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
	Chart.defaults.color = '#334155';
	Chart.defaults.borderColor = '#e2e8f0';

	// Salary Distribution Curve Chart
	new Chart(document.getElementById('salaryDistributionChart'), {
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
				pointRadius: 6,
				pointHoverRadius: 8
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
							return `${context.parsed.y} students in ₹${context.label} LPA range`;
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
					},
					title: {
						display: true,
						text: 'Number of Students'
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
					},
					title: {
						display: true,
						text: 'Salary Range (LPA)'
					}
				}
			},
			animation: {
				duration: 2000,
				easing: 'easeOutQuart'
			}
		}
	});

	// Role-wise Salary Comparison Chart
	new Chart(document.getElementById('roleSalaryChart'), {
		type: 'radar',
		data: {
			labels: ['Base Salary', 'Bonus', 'Stock Options', 'Benefits', 'Total Compensation'],
			datasets: [{
				label: 'Data Scientist',
				data: [28, 8, 6, 4, 46],
				borderColor: 'rgb(59, 130, 246)',
				backgroundColor: 'rgba(59, 130, 246, 0.2)',
				borderWidth: 2,
				pointBackgroundColor: 'rgb(59, 130, 246)',
				pointBorderColor: 'white',
				pointBorderWidth: 2
			}, {
				label: 'Product Manager',
				data: [32, 10, 8, 5, 55],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.2)',
				borderWidth: 2,
				pointBackgroundColor: 'rgb(16, 185, 129)',
				pointBorderColor: 'white',
				pointBorderWidth: 2
			}, {
				label: 'Consultant',
				data: [26, 6, 2, 4, 38],
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
							return `${context.dataset.label}: ₹${context.parsed.r} LPA`;
						}
					}
				}
			},
			scales: {
				r: {
					beginAtZero: true,
					max: 60,
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

	// Salary Trends Over Years Chart
	new Chart(document.getElementById('salaryTrendsChart'), {
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
				tension: 0.4,
				pointBackgroundColor: 'rgb(59, 130, 246)',
				pointBorderColor: 'white',
				pointBorderWidth: 3,
				pointRadius: 6
			}, {
				label: 'Median Package',
				data: [20.0, 19.5, 21.0, 22.5, 23.8, 24.0],
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
				label: 'Highest Package',
				data: [35.0, 32.0, 38.5, 42.0, 44.5, 44.5],
				borderColor: 'rgb(245, 158, 11)',
				backgroundColor: 'rgba(245, 158, 11, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(245, 158, 11)',
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
	new Chart(document.getElementById('sectorSalaryChart'), {
		type: 'horizontalBar',
		data: {
			labels: ['Investment Banking', 'Technology', 'Consulting', 'Analytics', 'Product Management', 'Operations'],
			datasets: [{
				label: 'Average Package (LPA)',
				data: [38.5, 28.2, 26.8, 25.1, 32.0, 22.5],
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
							return `Average: ₹${context.parsed.x} LPA`;
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
						callback: function (value) {
							return '₹' + value + ' LPA';
						},
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

	// Location-based Salary Chart
	new Chart(document.getElementById('locationSalaryChart'), {
		type: 'bar',
		data: {
			labels: ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'International'],
			datasets: [{
				label: 'Average Package (LPA)',
				data: [28.5, 32.1, 30.8, 26.2, 25.8, 24.5, 42.3],
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

	// Experience vs Salary Chart
	new Chart(document.getElementById('experienceSalaryChart'), {
		type: 'scatter',
		data: {
			datasets: [{
				label: 'Technology',
				data: [
					{ x: 0, y: 24 }, { x: 0, y: 26 }, { x: 0, y: 28 }, { x: 0, y: 30 },
					{ x: 1, y: 28 }, { x: 1, y: 32 }, { x: 2, y: 35 }, { x: 3, y: 38 }
				],
				backgroundColor: 'rgba(59, 130, 246, 0.6)',
				borderColor: 'rgb(59, 130, 246)',
				borderWidth: 2
			}, {
				label: 'Finance',
				data: [
					{ x: 0, y: 28 }, { x: 0, y: 32 }, { x: 0, y: 35 }, { x: 0, y: 38 },
					{ x: 1, y: 35 }, { x: 1, y: 40 }, { x: 2, y: 42 }, { x: 3, y: 45 }
				],
				backgroundColor: 'rgba(16, 185, 129, 0.6)',
				borderColor: 'rgb(16, 185, 129)',
				borderWidth: 2
			}, {
				label: 'Consulting',
				data: [
					{ x: 0, y: 22 }, { x: 0, y: 25 }, { x: 0, y: 27 }, { x: 0, y: 29 },
					{ x: 1, y: 26 }, { x: 1, y: 30 }, { x: 2, y: 32 }, { x: 3, y: 35 }
				],
				backgroundColor: 'rgba(245, 158, 11, 0.6)',
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
							return `${context.dataset.label}: ${context.parsed.x} years exp, ₹${context.parsed.y} LPA`;
						}
					}
				}
			},
			scales: {
				x: {
					type: 'linear',
					position: 'bottom',
					title: {
						display: true,
						text: 'Years of Experience'
					},
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
					title: {
						display: true,
						text: 'Package (LPA)'
					},
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
				}
			},
			animation: {
				duration: 2000,
				easing: 'easeOutQuart'
			}
		}
	});
});
