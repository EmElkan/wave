// src/plotting.js

const chart = new Chart("chart", {
  type: "line",
  data: {
    datasets: [
      {
        borderColor: "#040404",
        backgroundColor: "#fbdb23",
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});

function updateChart(xValues, yValues) {
  chart.data.labels = xValues;
  chart.data.datasets[0].data = yValues;
  chart.update();
}

audioCtx = new (window.AudioContext || window.webkitAudioContext)();

show();
beep();

function show() {
  frequency = document.getElementById("range1In").value;
  frequency = document.getElementById("range2In").value;
  volume = document.getElementById("volIn").value / 100;

}

function beep() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = range1;
  oscillator.frequency.value = range2;
  oscillator.type = "sine";

  oscillator.start();
}
