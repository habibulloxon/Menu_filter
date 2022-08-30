const menu = [
    {
      id: 1,
      title: "Buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf`,
    },
    {
      id: 2,
      title: "Diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore`,
    },
    {
      id: 3,
      title: "Godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack`,
    },
    {
      id: 4,
      title: "Country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra`,
    },
    {
      id: 5,
      title: "Egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle`,
    },
    {
      id: 6,
      title: "Oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical`,
    },
    {
      id: 7,
      title: "Bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral`,
    },
    {
      id: 8,
      title: "American classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercat`,
    },
    {
      id: 9,
      title: "Quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic`,
    },
  ];

const section = document.getElementById("section")

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = menu.map(function (item) {
        return `
        <li>
          <img src = "${item.img}">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <p>${item.price}</p>
        </li>
        ` 
    })
    displayMenu = displayMenu.join("")
    section.innerHTML = displayMenu
})

const allBtn = document.getElementById("all")
const shakeBtn = document.getElementById("shake")
const breakfastBtn = document.getElementById("breakfast")
const lunchBtn = document.getElementById("lunch")

lunchBtn.addEventListener("click", function (e) {
  e.preventDefault()
  section.innerHTML = 
  menu.filter(item => item.category.toLowerCase() === "lunch").map(item =>
     `<li>
          <img src = "${item.img}">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <p>${item.price}</p>
      </li>`).join('')
})

breakfastBtn.addEventListener("click", function (e) {
  e.preventDefault()
  section.innerHTML = 
  menu.filter(item => item.category.toLowerCase() === "breakfast").map(item => 
      `<li>
          <img src = "${item.img}">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <p>${item.price}</p>
      </li>`).join('')
})

shakeBtn.addEventListener("click", function (e) {
  e.preventDefault()
  section.innerHTML = 
  menu.filter(item => item.category.toLowerCase() === "shakes").map(item => 
      `<li>
          <img src = "${item.img}">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <p>${item.price}</p>
      </li>`).join('')
})

allBtn.addEventListener("click", function () {
  let displayMenu = menu.map(function (item) {
    return `
    <li>
      <img src = "${item.img}">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <p>${item.price}</p>
    </li>
    ` 
})
displayMenu = displayMenu.join("")
section.innerHTML = displayMenu
})