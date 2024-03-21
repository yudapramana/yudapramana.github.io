function getColor(color, opacity) {
    return 'rgba(' + parseInt(color.slice(-6,-4),16)
        + ',' + parseInt(color.slice(-4,-2),16)
        + ',' + parseInt(color.slice(-2),16)
        +','+ opacity +')';
}

var ctx = document.getElementById("skillChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            ['PHP', 'MySQL'],
            ['Laravel', 'CodeIgniter'],
            ['Git', 'NginX', 'Linux'],
            ['Joomla!', 'WordPress'],
            ['CSS', 'jQuery'],
            'Bootstrap',
            'AngularJs',
            'HTML'
        ],
        datasets: [
            {
                label: 'Backend',
                backgroundColor: getColor('#2826ff', 0.5),
                borderColor: '#2826ff',
                pointBackgroundColor: '#2826ff',
                data: [
                    85,
                    80,
                    65,
                    75,
                    70,
                    0,
                    0,
                    0
                ]
            },
            {
                label: 'Frontend',
                backgroundColor: getColor('#ff2826', 0.5),
                borderColor: '#ff2826',
                pointBackgroundColor: '#ff2826',
                data: [
                    85,
                    0,
                    0,
                    0,
                    70,
                    80,
                    40,
                    90
                ]
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100,
                display: false
            }
        }
    }
});