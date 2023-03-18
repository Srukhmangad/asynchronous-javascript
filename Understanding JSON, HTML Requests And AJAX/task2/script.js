async function getXML() {
    const response = await fetch('file.xml');
    const xmlDoc = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlDoc, 'text/xml');
    
    show(data);
  }
  
  function show(data) {
    let tab = `
      <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Type</th>
      </tr>
      `;
      
    const restaurants = data.getElementsByTagName('restaurant');
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      tab += `<tr>
          <td>${restaurant.getAttribute('name')}</td>
          <td>${restaurant.getAttribute('address')}</td>
          <td>${restaurant.getAttribute('lat')}</td>
          <td>${restaurant.getAttribute('lng')}</td>
          <td>${restaurant.getAttribute('type')}</td>
        </tr>`;
    }
    
    document.getElementById("restaurant").innerHTML = tab;
  }
  
  getXML();