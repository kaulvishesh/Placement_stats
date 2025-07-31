document.addEventListener('DOMContentLoaded', function () {
	// Modern Chart Configuration
	Chart.defaults.font.family = 'Inter, system-ui, sans-serif';
	Chart.defaults.color = '#334155';
	Chart.defaults.borderColor = '#e2e8f0';

	// Top Recruiting Companies Chart
	new Chart(document.getElementById('topCompaniesChart'), {
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

	// Company Size Distribution Chart
	new Chart(document.getElementById('companySizeChart'), {
		type: 'doughnut',
		data: {
			labels: ['Large Corp (10K+)', 'Mid-size (1K-10K)', 'Startup (100-1K)', 'Small (<100)'],
			datasets: [{
				data: [45, 30, 20, 5],
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
							return `${context.label}: ${context.parsed}% of companies`;
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

	// Hiring Trends Over Years Chart
	new Chart(document.getElementById('hiringTrendsChart'), {
		type: 'line',
		data: {
			labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
			datasets: [{
				label: 'Total Companies',
				data: [35, 28, 32, 42, 48, 52],
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
				label: 'New Companies',
				data: [8, 5, 12, 18, 15, 12],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(16, 185, 129)',
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

	// Company Origin Chart
	new Chart(document.getElementById('companyOriginChart'), {
		type: 'pie',
		data: {
			labels: ['Indian MNCs', 'US Companies', 'European', 'Indian Startups', 'Asian (Non-Indian)', 'Others'],
			datasets: [{
				data: [35, 30, 15, 12, 5, 3],
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
				hoverOffset: 8
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
							return `${context.label}: ${context.parsed}% of companies`;
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

	// Package by Company Type Chart
	new Chart(document.getElementById('packageByTypeChart'), {
		type: 'bar',
		data: {
			labels: ['Tech Giants', 'Investment Banks', 'Consulting', 'Product Companies', 'Startups', 'Traditional Corps'],
			datasets: [{
				label: 'Average Package (LPA)',
				data: [42, 38, 35, 28, 25, 22],
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

	// Recruitment Timeline Chart
	new Chart(document.getElementById('recruitmentTimelineChart'), {
		type: 'line',
		data: {
			labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
			datasets: [{
				label: 'Companies Visiting',
				data: [2, 8, 15, 18, 12, 8, 5, 2],
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
				label: 'Offers Made',
				data: [3, 12, 22, 28, 18, 12, 8, 3],
				borderColor: 'rgb(16, 185, 129)',
				backgroundColor: 'rgba(16, 185, 129, 0.1)',
				borderWidth: 3,
				fill: false,
				tension: 0.4,
				pointBackgroundColor: 'rgb(16, 185, 129)',
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
});
