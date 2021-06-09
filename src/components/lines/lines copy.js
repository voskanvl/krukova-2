import React from "react";

export const arrLines = [
  {
    "Косметические услуги": [
      {
        0: {
          title: "Маски",
          description:
            "Косметические маски воздействуют на кожу лица более интенсивно, нежели средства для ежедневного ухода. Маски для лица решают самые разные проблемы: увлажняют, питают, разглаживают кожу, возвращают ей здоровый и отдохнувший вид.",
          img: (
            <img
              src={require("../../media/cosmetic/mask/99d57faab1df61108ed506653d1daa42.jpg")}
              alt=""
            />
          ),
          costs: [
            { name: "Шоколадная маска", price: 1500 },
            { name: "Огуречная маска", price: 1000 },
            { name: "Маска из экстракта огавы", price: 1700 },
            { name: "Маска аля Тартар в ассортименте", price: 1900 },
            { name: "Маска с эффектом чистки кармы", price: 2100 },
            { name: "Композитная, мелко дисперсная маска", price: 2500 },
            { name: "Маска по методу «Деструктив ликвид»", price: 2700 }
          ]
        }
      },

      {
        1: {
          title: "Пилинг",
          description:
            "— Задача любого пилинга — отшелушивание верхних слоёв эпидермиса; в случае с глубинным пилингом — глубоких слоёв, то есть дермы. Удаление ороговевших клеток улучшает дыхание, кровоснабжение и микроциркуляцию кожи. В ней запускаются процессы регенерации ткани и начинает активно синтезироваться коллаген и эластин. Результат — кожа становится упругой, эластичной и обретает сияние и молодость.",
          img: (
            <img
              src={require("../../media/cosmetic/pilling/b112ba8b5cf3e8345e0385496a609a74.jpg")}
              alt=""
            />
          ),
          costs: [
            { name: "Косметический", price: 1500 },
            { name: "Микродермабразия", price: 2000 },
            { name: "Броссаж или брашинг", price: 2500 },
            { name: "Химический пилинг", price: 2500 },
            { name: "Ультразвуковой", price: 2700 }
          ]
        }
      },
      {
        2: {
          title: "Ботокс",
          description:
            "Похорошеть и помолодеть с помощью уколов красоты – нет ничего проще! Хотите высокие скулы и полные губы, четкий овал лица и ясный взгляд – сегодня инъекционные методики позволяют откорректировать практически все. О том, как далеко шагнул прогресс, потакая нам в погоне за красотой, разберем на примере ведущих трендов в инъекционной косметологии",
          img: (
            <img
              src={require("../../media/cosmetic/botox/hype-ru-1200-630-k-zp51l0QuaPp4s8c75zb0r.jpeg")}
              alt=""
            />
          ),
          costs: [
            { name: "Инъекционная блефаропластика", price: 3000 },
            { name: "Для губ", price: 3500 },
            { name: "Для верхней трети лица", price: 4500 },
            { name: "Для скул", price: 4500 },
            { name: "Для моделирования лица", price: 6000 },
            { name: "Для кожи", price: "по запросу" }
          ]
        }
      }
    ]
  },
  {
    "Леш услуги": [
      {
        cilia: {
          title: "Ресницы",
          description: ""
        }
      },
      "Брови"
    ]
  },
  { "Маникюр Педикюр Эриляция": ["Маникюр", "Педикюр", "Эпиляция"] }
];
