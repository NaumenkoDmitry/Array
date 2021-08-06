function Phone (model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
  const newPhones = [];

  for(let i = 0; i < amount; i++) {
    newPhones.push(new Phone (
      `Model ${i}`, 
      'Panasonic', 
      getRandomInt(5000, 50000),
      'black',
      Math.random() >= 0.5
    ))
  }

  return newPhones;
}

const phones = getPhones(50);

console.table(phones);

//1
function getPhoneNumber(phoneArray){
  let res = 0;
  const forEachCollback = function(phone,index,arr){
    if(phone.inStock){
      res++;
    }
  };
  phoneArray.forEach(forEachCollback);
  return res;
}

//2
const phoneInStock = phones.filter(function(phone){
  return phone.inStock;
});

//3
const phoneDicount = phoneInStock.map(function(phone){
  if(phone.price > 30000){
    phone.price = Math.round(phone.price * 0.7);
  }
  return phone;
})



//1.1
function PhoneInform(phoneArray){
  const callback = function(phone){
    console.log(`${phone.manufacturer} ${phone.model} Цена - ${phone.price} сейчас ${phone.inStock}`);

  }
  phoneArray.forEach(callback);
}





