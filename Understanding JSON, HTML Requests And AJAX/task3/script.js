async function getXML() {
    const response = await fetch('file.xml');
    const xmlDoc = await response.text();
    const parser = new DOMParser();
    const data = parser.parseFromString(xmlDoc, 'text/xml');
    
    show(data);
  }
  
  function show(data) {
    const restaurants = data.getElementsByTagName('restaurant');
    const list = document.createElement('ul');
    
    for (let i = 0; i < restaurants.length; i++) {
      const restaurant = restaurants[i];
      
      const name = restaurant.getAttribute('name');
      const address = restaurant.getAttribute('address');
      const item = document.createElement('li');
      item.innerHTML = `Restaurant Name: ${name}  ||  Address: ${address}`;
      if(restaurant.getAttribute('type') == 'sitdown'){
      
        item.style.backgroundColor = 'orange';
      }
      else{
        item.style.backgroundColor = 'green';
      }
      list.appendChild(item);
    }
    
    document.body.appendChild(list);
  }
  
  getXML();