async function getData() {
  try {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);

    const years = [];
    const temps = [];

    rows.forEach((elem) => {
      const row = elem.split(",");
      const year = row[0];
      let temp = parseFloat(row[1]);
      temp += 14;
      years.push(year);
      temps.push(temp);
    });

    createLineChart(years, temps);
  } catch (error) {
    console.error('Error:', error);
  }
}

function createLineChart(years, temps) {
  const ctx = document.getElementById('lineChart');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Global Temperatures',
        backgroundColor: 'red',
        data: temps,
        borderWidth: 1,
      }]
    },
    options: {

    }
  });
}
