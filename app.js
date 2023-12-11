const input=document.querySelector('#search')
const btn=document.querySelector('#btn')
const list=document.querySelector('.list')
const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')




const drinks=[
    {title:'DaDa', price:105, size:'1 litr', img:'https://dastarkhan24.kz/upload/iblock/9a8/9a820be7fd47608d9bfe8a35d7be51c1.jpg'},
    {title:'J7', price:141, size:'1 litr', img:'https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/e3/45/b13d9ef13198cxd8081xd23ab3c6.jpg'},
    {title:'Rich', price:114, size:'1 litr', img:'https://dastarkhan24.kz/upload/iblock/321/321ffc8c4585edb6af2bcba6fd307228.jpg'},
    {title:'Sprait', price:85, size:'1 litr', img:'https://wasabi.kg/wp-content/uploads/2022/03/269.970.jpg'},
    {title:'Sadocshok', price:140, size:'1 litr', img:'https://img.fozzyshop.com.ua/180748-thickbox_default/sok-sadochok-yablochnyj-pryamogo-otzhima.jpg'},
    {title:'Dobry', price:134, size:'1 litr', img:'https://storage.yandexcloud.net/zp-prod-uploads/uploads/679c603cd669847a6ba92b32784ea941.png'},
    
];
const drink=[
    {title:'Tutifruti', price:30, size:'1 litr', img:'https://images.satu.kz/151801080_napitok-gazirovannyj-tuti-fruti.jpg'},
    {title:'Flash', price:45, size:'1 litr', img:'https://irkmarket.ru/images/virtuemart/product/069433.jpg'},
    {title:'Kvass', price:40, size:'1 litr', img:'https://www.gourmetplanet.com.au/assets/full/991801.jpg?20230529144303'},
    {title:'Legenda', price:45, size:'1 litr', img:'https://res.cloudinary.com/ecolife/image/upload/f_auto/v1678780459/116413_44822a986b.png'},
    {title:'Kumyz', price:45, size:'1 litr', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kumys-bottle.jpg/1200px-Kumys-bottle.jpg'},
    {title:'Asu', price:45, size:'1 litr', img:'https://globus-online.kg/upload/iblock/242/2423edfc7ef55fa58f36f07bca059d68.png'},
    
];


const drinksArray = [...drinks, ...drink];



function showall(array) {
     list.innerHTML=''
    for (const all of array) {
        list.innerHTML+=`
        <div class="content">
       
        <img  src='${all.img}' /> 
        <h5>${all.title}</h5>
        <h5>Баасы: ${all.price}сом</h5>
        <h5>${all.size}</h5>
        
        
       </div>
        `
    }
    
}


input.onchange=()=>{
    const drinksFilter=drinksArray.filter(el=>el.title.toLowerCase()===input.value.toLowerCase())
    showall(drinksFilter)
}


btn.onclick=()=>{
    
    showall(drinksArray)
}
btn1.onclick=()=>{
showall(drinks)
}
btn2.onclick=()=>{
showall(drink)
}
