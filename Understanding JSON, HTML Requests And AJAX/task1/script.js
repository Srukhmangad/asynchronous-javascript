let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(this.responseText,"text/xml");
        let menuItems = xmlDoc.getElementsByTagName("food");
        let menuDiv = document.querySelector("#menu");
        for (let i = 0; i < menuItems.length; i++) {
          let name = menuItems[i].getElementsByTagName("name")[0].textContent;
          let price = menuItems[i].getElementsByTagName("price")[0].textContent;
          let description = menuItems[i].getElementsByTagName("description")[0].textContent;
          let calories = menuItems[i].getElementsByTagName("calories")[0].textContent;
          let menuItem = document.createElement("div");
          menuItem.classList.add("menu-item");
          menuItem.innerHTML = `
            <div id= "content">
            <h3>${name}</h3>
            <p>${description}</p>
            <p class="price">Price: ${price}</p>
            <p class="calories">Calories: ${calories} calories</p>
            </div>
          `;
          menuDiv.appendChild(menuItem);
        }
      }
    };

    xhttp.open("GET", "file.xml", true);
    xhttp.send();