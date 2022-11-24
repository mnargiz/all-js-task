let box=document.getElementById("yoxlamaa");
let innerBox=document.createElement("div");
innerBox.classList.add("fabrics-info");
let objects=[
{image:"red-1.png",info:"Рогожка",name:"Альпийская деревенька"},
{image:"orange-2.png",info:"Рогожка",name:"Альпийская деревенька"},
{image:"cream-3.png",info:"Рогожка",name:"Альпийская деревенька"},
{image:"green-4.png",info:"Рогожка",name:"Альпийская деревенька"}
];
for (let i = 0; i < objects.length; i++) {
    box.append(innerBox);
    innerBox.innerHTML=` 
    <img src="/photo/${objects[i].image}" alt="fabric" class="fabricsimg">
    <p class="fabrics-info-first">${objects[i].name}</p>
    <p class="fabric-name">${objects[i].info}</p>
    <p class="main-information">
        <span class="main-information-first">Ширина</span>&nbsp;
        <span class="main-information-second">1.5 м</span>
    </p>
    <p class="main-infoo">
        <span class="main-information-first">Состав</span>&nbsp;
        <span class="main-information-second">100%</span>
    </p>
    <p>
        <span class="main-information-first">Плотность</span>&nbsp;
        <span class="main-information-second">170 гр/м2</span>
    </p>
    <img src="/photo/linemain.png" alt="line">
    <p class="price-fabric-info">
        <span class="price-main-info-already">240 ₽ / м</span>
        <span class="price-main-info-before">360 ₽ / м</span>
        <span class="korzinu">В корзину</span>
    </p>`;
    
}
