const getStreets = () => {
  return fetch('/data/streets.json').then(response => {
    if (response.ok) {
      return response.json();
    }
  })
}

// `https://api.winnipegtransit.com/v3/streets.json?api-key=Qub0QR_o1dAAciAXfyiK&name=${}`

// getStreets('grant');
getStreets().then(response => {
  console.log(response.streets);
});