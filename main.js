var phone = prompt("How much memory do you need?", "RAM: 1, 2, 3, 4");
var phoneColor = prompt("Which color?", "White, Black, Blue, Gold");
var memory = [{
        ram: 1,
        price: 50,
        color: 'White'
        
      },
      {
        ram: 1,
        price: 60,
        color: 'Black'
      },
      {
        ram: 1,
        price: 70,
        color: 'Blue'
      },
      {
        ram: 1,
        price: 90,
        color: 'Gold'
      },
      {
        ram: 2,
        price: 100,
        color: 'White'
      },
      {
        ram: 2,
        price: 110,
        color: 'Black'
      },
      {
        ram: 2,
        price: 120,
        color: 'Blue'
      },
      {
        ram: 2,
        price: 150,
        color: 'Gold'
      },
      {
        ram: 3,
        price: 200,
        color: 'White'
      },
      {
        ram: 3,
        price: 220,
        color: 'Black'
      },
      {
        ram: 3,
        price: 230,
        color: 'Blue'
      },
      {
        ram: 3,
        price: 250,
        color: 'Gold'
      },
      {
        ram: 4,
        price: 400,
        color: 'Gold'
      },
      {
        ram: 4,
        price: 300,
        color: 'Blue'
      },
      {
        ram: 4,
        price: 330,
        color: 'Black'
      },
      {
        ram: 4,
        price: 350,
        color: 'White'
      }
    ]

   
    for (var i = 0; i < memory.length; i++) {
        if (+phone=== memory[i].ram && phoneColor === memory[i].color) {
            document.write("Sale Price: " + "RAM: " + memory[i].ram + " Gb = " + memory[i].price + " $" + "<br>" + "Color: " + memory[i].color + "<br>");
            if (phoneColor === 'White') {
              document.write('<img src="sony_xperia_z5.jpg" alt="">');
            }
            else if (phoneColor === 'Black') {
              document.write('<img src="sony_xperia_xa2.jpg" alt="">');
            }
            else if (phoneColor === 'Blue') {
              document.write('<img src="sony_xperia_xz1.jpg" alt="">');
            }
            else if (phoneColor === 'Gold') {
              document.write('<img src="sony_xperia_xa1.jpg" alt="">');
            }
           
            break;
        }
        
    }
    if (+phone !== memory[i].ram && phoneColor !== memory[i].color) {
      document.write("Phone not found");
     
      }
   
    