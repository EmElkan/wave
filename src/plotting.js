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
function show() {
  range1 = document.getElementById("range1").value;
  vol = document.getElementById("vol").value;
}

function beep() {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = vol;
  oscillator.frequency.value = range1;
  oscillator.frequency.value = range2;
  oscillator.type = "sine";
  oscillator.start();
}
