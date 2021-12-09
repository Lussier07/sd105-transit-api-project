const asideEl = document.querySelector('aside');
const stopsLiEl = asideEl.querySelector('section');

const getStreets = () => {
  return fetch('/data/streets.json')
    .then(response => response.json())
    .then(data => data.stops)
}

// `https://api.winnipegtransit.com/v3/streets.json?api-key=Qub0QR_o1dAAciAXfyiK&name=${}`

function returnStreetsLi(streets) {
  if (streets.length > 0) {
    stopsLiEl.innerHTML = '';
    streets.forEach(street => {
      stopsLiEl.insertAdjacentHTML('beforeend', 
      `<a href="#" data-street-key="${street.key}">${street.name}</a>
      `)
    });
  }
}

// getStreets('grant');
getStreets().then(response => {
  returnStreetsLi(response.streets);
});


{/* <section class="streets">
        <a href="#" data-street-key="4499">Kenaston Common Drive</a>

        <a href="#" data-street-key="1932">Kenaston Boulevard</a>

        <a href="#" data-street-key="70002291"
          >McGillivray Kenaston Access Loop</a
        >

        <a href="#" data-street-key="50001000"
          >McGillivray - Kenaston Sobey's Access Road</a
        >

        <a href="#" data-street-key="50000257">Kenaston Access Access Road</a>

        <a href="#" data-street-key="50000253"
          >McGillivray Kenaston Access Boulevard</a
        >
      </section> */}