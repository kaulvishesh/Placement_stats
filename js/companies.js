const ctx = document.getElementById('companyChart').getContext('2d');

// Process company data
const companies = {
	'SocGen': 2,
	'NetraDyne': 2,
	'Wells Fargo': 2,
	'JPMC': 1,
	'Connect Secure': 1,
	'HP': 1,
	'Routematic': 1,
	'Nuware Systems': 1
};

// Prepare data for chart
const labels = Object.keys(companies);
const data = Object.values(companies);
const colors = [
	'#FF6384',
	'#36A2EB',
	'#FFCE56',
	'#4BC0C0',
	'#9966FF',
	'#FF9F40',
	'#FF6384',
	'#36A2EB'
];

new Chart(ctx, {
	type: 'pie',
	data: {
		labels: labels,
		datasets: [{
			data: data,
			backgroundColor: colors,
			borderWidth: 1
		}]
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Company-wise Placements'
			}
		}
	}
});
