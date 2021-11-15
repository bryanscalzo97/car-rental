const routes = [{ path: "*", redirect: "/" }];

const router = new VueRouter({
  routes,
});
var body = document.querySelector("body");
var groupsData = [
  {
    id: 1,
    name: "Group A",
    description: "Economy",
    car_type: "GROUP A (ECAR) KIA RIO OR SIMILAR",
    convertible: false,
    seats5: true,
    seats7orMore: false,
    manual: false,
    img: [
      {
        src: "./imagenes/kia.png",
        alt: "Imagen representativa de set de 2 lamparas Dory",
      },
    ],
    characteristics: [
      "5 seats",
      "1 large suitcase",
      "1 small suitcase",
      "4 doors",
      "Automatic transmission",
      "Air Conditioning",
    ],

    rates: [
      {
        name_rate: "AR - Most Inclusive",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 752.99,
      },
      {
        name_rate: "4M - Inclusive LDW",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "F2 - Inclusive + Gas",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "SC - Inclusive + GPS",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "HB - Inclusive Light",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
    ],
  },
  {
    ver: false,
    id: 2,
    name: "Group B",
    description: "Compact",
    car_type: "GROUP B (CCAR) KIA SOUL OR SIMILAR",
    convertible: false,
    seats5: false,
    seats7orMore: true,
    manual: true,
    img: [
      {
        src: "./imagenes/kia2.png",
        alt: "Imagen representativa de set de 2 lamparas Dory",
      },
    ],
    characteristics: [
      "7 seats",
      "1 large suitcase",
      "1 small suitcase",
      "4 doors",
      "Manual transmission",
      "Air Conditioning",
    ],
    rates: [
      {
        ver: true,
        name_rate: "AR - Most Inclusive",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 752.99,
      },
      {
        name_rate: "AR - Most Inclusive",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "4M - Inclusive LDW",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "F2 - Inclusive + Gas",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
      {
        name_rate: "SC - Inclusive + GPS",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
    ],
  },
  {
    id: 3,
    name: "Group C",
    description: "Luxury",
    car_type: "GROUP C (ECAR) KIA OR SIMILAR",
    convertible: true,
    seats5: true,
    seats7orMore: false,
    manual: false,
    img: [
      {
        src: "./imagenes/kia.png",
        alt: "Imagen representativa de set de 3 lamparas Dory",
      },
    ],
    characteristics: [
      "5 seats",
      "1 large suitcase",
      "1 small suitcase",
      "4 doors",
      "Automatic transmission",
      "Air Conditioning",
      "Convertible",
    ],
    rates: [
      {
        name_rate: "AR - Most Inclusive",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 752.99,
      },
      {
        name_rate: "4M - Inclusive LDW",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 626.09,
      },
      {
        name_rate: "F2 - Inclusive + Gas",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 926.09,
      },
      {
        name_rate: "SC - Inclusive + GPS",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 626.09,
      },
      {
        name_rate: "HB - Inclusive Light",
        rate_inclusions: [
          "Unlimited mileage",
          "LDW - Loss Damage Waiver",
          "TPL - Third Party Liability",
          "Local and state TAX",
          "Airport surcharge",
          "First additional driver",
          "Tank of gas",
          "RSN - Roadside assistance",
          "GPS - Satellite Navigator",
        ],
        price: 726.09,
      },
    ],
  },
];
var groups = groupsData;
const app = new Vue({
  router,
  data: {
    groups,
  },
  methods: {
    filterCarA: function () {
      //console.log(this.groupsData.filter((group) => group.name === "Group A"));
      console.log(groupsData);
      this.groups = groupsData.filter((group) => group.name === "Group A");
    },
    filterCarB: function () {
      this.groups = groupsData.filter((group) => group.name === "Group B");
    },
    filterCarC: function () {
      this.groups = groupsData.filter((group) => group.name === "Group C");
    },
    filterAll: function () {
      this.groups = groupsData;
    },

    filter5Seats: function () {
      this.groups = this.groups.filter((group) => group.seats5 === true);
    },
    filterAutomatic: function () {
      this.groups = this.groups.filter((group) => group.manual === false);
    },
    filterManual: function () {
      this.groups = this.groups.filter((group) => group.manual === true);
    },

    filter7Seats: function () {
      this.groups = this.groups.filter((group) => group.seats7orMore === true);
    },

    filterConvertible: function () {
      this.groups = this.groups.filter((group) => group.convertible === true);
    },
    modalFuncion: function (item) {
      //console.log(item["rate_inclusions"]);
      let myrates = item["rate_inclusions"];
      //alert(myrates);
      popupWrapper = document.createElement("div");
      (popupWrapper.className += "popupContainer"), "container";
      popupWrapper.style.background = "rgba(0, 0, 0, 0.5)";
      popupWrapper.style.position = "fixed";
      popupWrapper.style.width = "100%";
      popupWrapper.style.height = "100%";
      popupWrapper.style.top = "0";
      popupWrapper.style.left = "0";

      popup = document.createElement("div");
      popup.style.width = "500px";
      popup.style.borderRadius = "6px";
      popup.className += "row";
      popup.style.background = "white";
      popup.style.margin = "10% auto";
      popup.style.padding = "20px";
      popup.style.postition = "relative";
      popupWrapper.appendChild(popup);

      tituloOferta = document.createElement("h2");
      ofertaNodo = document.createTextNode("Rate Inclusions");
      tituloOferta.className += "col-6";
      tituloOferta.style.color = "#d5002b";
      tituloOferta.appendChild(ofertaNodo);
      popup.appendChild(tituloOferta);

      divBtn = document.createElement("div");

      divBtn.style.textAlign = "right";

      divBtn.className += "col-6";

      button = document.createElement("button");
      button.textContent = "x";
      button.classList.add("btn");
      button.addEventListener(
        "click",
        function () {
          location.reload();
        },
        false
      );

      //button.style.textAlign = "right";
      divBtn.appendChild(button);
      popup.appendChild(divBtn);

      rates = document.createElement("p");
      rates.className += "col-12";
      ratesNodo = document.createTextNode(item["name_rate"]);
      rates.appendChild(ratesNodo);
      popup.appendChild(rates);

      //boton

      listado = document.createElement("ul");
      listado.className += "col-12";
      listado.style.listStyle = "none";

      popup.appendChild(listado);

      for (var i = 0; i < item["rate_inclusions"].length; i++) {
        lista = document.createElement("li");
        lista.style.marginLeft = "6px";
        lista.style.marginBottom = "4px";
        vineta = document.createElement("img");
        vineta.src = "./imagenes/vineta1.png";
        vineta.style.marginRight = "8px";
        lista.appendChild(vineta);
        ofertaNodo = document.createTextNode(item["rate_inclusions"][i]);
        lista.appendChild(ofertaNodo);
        listado.appendChild(lista);
      }

      body.appendChild(popupWrapper);
    },
  },
}).$mount("#app");
