// src/plotting.js

const chart = new Chart("chart", {
  type: "line",
  data: {
    datasets: [{
        borderColor: "#040404",
        backgroundColor: "#fbdb23",
      }
    ]
  },
  options: {
    plugins: {
      legend: {display: false},
      tooltip: {enabled: false},
    },
    scales: {
      x: {display: false},
      y: {display: false}
    },
  }
})

function updateChart(xValues, yValues) {
  chart.data.labels = xValues
  chart.data.datasets[0].data = yValues
  chart.update()
}