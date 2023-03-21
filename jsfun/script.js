// const veg={
//     name:'tamil',
//     menu:["idly",'sosa','veg','dyu','dsa'],
//     starter:['chicken','mutton','fish'],
//     order:function(start,menus){
//         console.log(this.name)

//         return[this.starter[start],this.menu[menus]]

//     },
//     openinf:{fri:{
//         open:999,
//         close:9988
//     }}
// }

// console.log(veg.order(0,2))

// let nested=[2,4,[5,6]];
// const [i ,,j]=nested;
// console.log(i,j)

// const {name,starter,menu}=veg;

// console.log(veg);

// let a=111;
// let b=45;
// const{openinf}=veg;
// const {fri:{open:o,close:c}}=openinf
// console.log(openinf)
// console.log(o,c)

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const [players1,players2]=game.players;

// const [gk,...fieldplayer]=players1;

//   const allplayer=[...players1,...players2];

//   const player1final=[...players1,'thiago','counti','asdd']

// const{odds:{team1,x:draw,team2}}=game;

// const printGoals=function(){

// };

// const weekdays=['mon','tuesday','wednesday','thrusday','fri','sat','sun']

// const openinghours={
//   [weekdays[0]]:{
//     open:12,
//     close:13
//   }
//   ,
//   [weekdays[1]]:{
//     open:17,
//     close:38
//   }
//   ,[weekdays[2]]:{
//     open:29,
//     close:30
//   }
//   ,
//   [weekdays[3]]:{
//     open:21,
//     close:22
//   }
// }
// const restaurant={
//   name:'tamil selvan',
//   location:'bangalore,vaniyambadi',
//   categories:['italian','pizzeria'],
//   starterMenu:['focaccia','bruschetta','Garlic','Bread'],
//   mainMenu:['pizza','pasta','Risotto'],
//   openinghours,
//   weekdays

// }

// // console.log(restaurant.openinghours.fri?.open)

// // for(const day of weekdays){
// //   console.log(day);
// //    const open=restaurant.openinghours[day]?.open
// //   console.log(`On ${day},we open at ${open}`)
// // }

// // for(const res of object.keys(restaurant)){
// //   console.log(res)
// // }

// const entries=Object.entries(openinghours);
// for(const [key,{open,close}] of entries){
//   console.log(`${key} ${open} ${close}`)
// }

// for (const [i,players] of game.scored.entries()){
//   console.log(`goal ${Number(i + 1)}: ${players}`)
// }

// const entries=Object.entries(game.odds)

// let average=0;
// for(const odd of Object.values(game.odds)){
//   average+=odd;
//   average/=Object.values(game.odds).length;

// }
// console.log(average)

// for (const [team,odd] of Object.entries(game.odds)){
//   const teamstr=team=='x'?'draw':`victory ${game[team]}`
//    console.log(`odd of ${teamstr} ${odd}`)
// }

// const marks= new Set([
//   40,20,350,60,70
// ]);
// marks.add(10);
// marks.add(15);
// marks.delete(15)
// marks.delete(40)
// console.log(marks)

// const nameList=new Map();
// nameList.set('name','tamilselvan').set('lastName','jai sankar')

// console.log(nameList)
// console.log(nameList.get('name'))

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   ]);

//   const events=[...new Set(gameEvents.values())]

//   console.log(events)
//   gameEvents.delete(64)
//   console.log(gameEvents)
//   console.log(gameEvents)

//   console.log(`an event happend, on average,every ${90/gameEvents.size} mintues`)

//   for (const [min ,event] of gameEvents){
//     const game = min<=45?"first":"second " ;

//  console.log(` [${game} Half]${min}: ${event}`)

//   }

// const airline='TAP Air Portugal'
// const plane='A320';

// console.log(plane[0])
// console.log(airline.length)

// console.log(plane.indexOf('r'))

// console.log(airline.slice(4,8))

// console.log(airline.slice(0,airline.lastIndexOf(' ')))
// console.log(airline.slice(-2))

// const checkMiddeleSeat=function(seat){
//   const sea=seat.slice(-1)

//   if   ( sea==='B'||sea==='E'){
//     console.log("urs seat are in middele")
//   }
//   else{
//     console.log("bye")
//   }
// }

// checkMiddeleSeat('11B')
// checkMiddeleSeat('11e')

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())

// const priceGB='288,974'
// const priceUs=priceGB.replace('4','$').replace(',','.')
// console.log(priceUs)

// const announcement='all are same but same '

// console.log(announcement.replaceAll('same','different'))

// //boolean
// const planse='A23neo'

// console.log(planse.startsWith('A2'))
// console.log(planse.includes('A23'))

// console.log('tamil selvan'.split(' '))
// const [firstName,lastName]='tamil selvan'.split(' ')
// console.log(firstName)

// console.log(['mr.',firstName,lastName.toUpperCase()].join(' '))
// const capitalize=function(name){
//   const namesUpper=[];
//   const names=name.split(' ')

//   for( const n of names){
//    namesUpper.push (n[0].toUpperCase()+n.slice(1))
//   }
//   console.log(namesUpper.join(' '))
// }
// capitalize('thksadm sdnakfdjs akjdnfk kasjfdg')

// //padding
// const message='tamil selvan'
// console.log(message.padStart(25,'-').padEnd(35,'~'))

// const maskCreditCard=function(number){
//   const str=number+'';
//   const last =str.slice(-4);

//   return last.padStart(str.length,'*');
// }

// console.log(maskCreditCard(123456789089))
// const captial=function(name)
// {
// const name2=name.toLowerCase();
//   const namefull=[];
//   const names=name2.split('_')
//   for (const n of names){
// namefull.push(n[0].toUpperCase()+n.slice(1))

//   }
//   console.log(namefull.join(''))
// }

// captial('underscore_case')
// captial('first_name')
// captial('Some_variable')
// captial('calculate_AGE')
// captial('delayed_departure')
// document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('button'));

// const bookings=[];
// const createBooking=function(flightNm,numPassenger=1,price=199){

// const booking
// ={
//   flightNm,
//   numPassenger,
//   price
// };
// console.log(booking)
// bookings.push(booking)
// }

// createBooking('LH123',20,12000)

// const flight='LH234';
// const jonas={
//   name:'tamil selvan',
//   passport:246875746536
// }

// const checkIn=function(flightNm,passenger){
// flightNm='LH999';
// passenger.name='Mr'+passenger.name;
// }
// checkIn(flight,jonas)
// const oneWord=function(str){
//   return str.replace(/ /g,'').toLowerCase();
// }

// const upperFirstWord=function(str){
//   const [first,...others]=str.split(' ');
//   return[first.toUpperCase(),...others].join(' ');

// }

// const transFormer=function(str,fn){
//   console.log(`Transformed string :${fn(str)}`)
// }
// transFormer('fahkfajd akjdslfald aldsjnflads',upperFirstWord)
// transFormer('the asjfkasnd xlcmalsdc',oneWord)
// const greet=function(greeting){
//   return function(name)
//   {
//     console.log(`${greeting} ${name}`)
//   }
// }

// const greetr=greet('hey')

// greetr('tamil')
// greetr('selvan')
// greetr('ds')

// const filght1={
//   airline:'tamil',
//   lataCode:'LH',
//   booking:[],
//   book(flightNm,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.lataCode} ${flightNm}`)
//     this.booking.push({flight: `${this.lataCode} ${flightNm}`})
//   },

// }

// filght1.book(239,'tamilselvan')
// filght1.book(369,'selvan')

// const selvan={
//   name:'selvan',
//   latacode:'En',
//   booking:[],

// }
// const book=filght1.book;

// // book(23,'fjsfkjfgkjaf')
// book.call(filght1,434,'artatfgaf');

// const addTax=(rate,value)=>value+value*rate;

// const addVAT=addTax.bind(null,0.1);
// console.log(addVAT(100))

// const add=function(rate){
//   return function(value){
//     return value+value*rate;
//   }
// }
// const vit=add(0.1)
// console.log(vit(100));

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers:new Array(4).fill(0),
//   registerNewAnswer(){
//     const answer=Number(prompt(`${this.question} \n${this.options.join('\n')} \n {write an options number}`))
//   typeof answer==='number'&& answer< this.answers.length&&this.answers[answer]++;
//   console.log(this.answers)

//   this.displayResult();
//   this.displayResult('string')
//   },
// displayResult(type='array'){
//   if(type==='array'){
//     console.log(this.answers);
//   }
//   else if(type ==='string'){
//     console.log(`poll results are ${ this.answers.join(', ')}`)
//   }
// }

// };
// // poll.registerNewAnswer();
//  document.querySelector('.btb').addEventListener('click',poll.registerNewAnswer.bind(poll))
// // document.querySelector('.btb').addEventListener('click',poll.displayResult.bind(poll))

// (
//   function(){
//     const header =document.querySelector('h1')
//    header.style.color='red';
//    document.querySelector('body').addEventListener('mouseover',function(){
//     header.style.color='blue';
//    })
//   }
// ());

// console.log(arr.slice(2));
// let arr1=arr.slice(2);
// console.log(arr1)
// console.log(arr1[3])
// console.log(arr.slice(-2));
// //splice

// console.log(arr.splice(-1))
// console.log(arr)
// console.log(arr.splice(1,2))
// console.log(arr)
// console.log(arr2.reverse())
// console.log(arr2)
// let arr=['a','b','c','d','e'];

// let arr2=['j','i','h']

// const letters=arr.concat(arr2);
// console.log(letters)

// //join

// console.log(letters.join('-'));

// const arr=[23,11,64]
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr.slice(-1).at(0));

// console.log(arr.at(-1))

// for(const arr1 of arr ){
//   console.log(arr1)
// }

// arr.forEach(function(arr1){
// console.log(arr1)
// })

// arr.forEach(function(mov,i,arr){
//   console.log(mov)
//   console.log(i)
//   console.log(arr)
// })

// const arr2=new Set([34,54,21,23,44,54])
// console.log(arr2)

// arr3=arr2.entries();
// console.log(arr3)

// const arr4=new Map([
//   ['tamil','selvan'],
//   ['key','value'],
//   ['selvan','tamil']

// ])
// console.log(arr4)
// arr4.forEach(function(value,key){
//   console.log(value,key)
// })

// const CheckDogs=function(dogsJulia,dogsKate){
// const dogsJuliaCorrected=dogsJulia.slice();
// dogsJuliaCorrected.splice(0,1);
// dogsJuliaCorrected.splice(-2);
// const dogs=dogsJuliaCorrected.concat(dogsKate);
// dogs.forEach(function(dog,i){
//   if(dog>=3){
//     console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
//   }
//   else{
//     console.log(`Dog number ${i+1} is an pubby, and is ${dog} years old`)
//   }
// })

// }

// CheckDogs([3,5,2,12,7],[4,1,15,8,3])

// console.log(true%0);
// console.log(!"tamil");

// const t=function(firstName,callback){
// if(!firstName){
// console.log(firstName)
// }
// }
// t("tamil")
// t(null)

// (
//   function(){
//     var a=b=5;
//   }
// )
// ();
// console.log(b);

// const euroToUsd = 1.1;
// const movements = [100, -200, -400, 400, 100, 34, 56, -87];

// const move = movements.map(function (move, i) {
//   // console.log(move * euroToUsd, i + 1);
// });


// for (let movew of movements) 
//    console.log(movew)

// const mo=movements.map(mov=> mov*euroToUsd);


// movements.map((mov,i,arr)=>{
  
// })

// const marks=[230,43,2231,34,45,33,34,56,78];

// const maxmimum=marks.reduce((acc,mov)=>{
//   if(acc>mov)
//   return acc
//   else
//   return mov
// },marks[0])

// console.log(maxmimum);
// const ages=[5,2,4,1,15,8,3];

// const  calcAverageHumanAge=function(ages){
//  const  Humanage=ages.map(age=>{
//     if(age<=2)
//      return age*2
//   else
//    return 16+age*4
 

    
//   })
  
//   console.log(Humanage);
//   const adults=Humanage.filter(age => age>=18)
//   console.log(adults)

//  const average=adults.reduce((acc,age)=>acc+age,0)/adults.length;

//   console.log(average)
// }
// // calcAverageHumanAge(ages)



// const calcAverage=ages=>ages.map(ages=> ages<=2 ? ages*2:ages*4+16)
//   .
//   filter(ages=> ages>=18)
//   .reduce((arr,ages,i,arr1)=>arr+ages/arr1.length,0)
  

// console.log(calcAverage([5,2,4,1,15,8,3]));

// const any=[200,300,500,600,-444,22,-45,21]
// console.log(any.includes(-444))

// const somev=any.some(acc=>acc<500)
// console.log(somev)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];
// 1.
// dogs.forEach((dog)=>{
//   dog.recommendedFood=Math.trunc(dog.weight**0.75 *28);
// })

// console.log(dogs)

// const dogSar=dogs.find(dog=>dog.owners.includes('Sarah'))
// console.log(`Sarah dog is eating ${dogSar.curFood>dogSar.recommendedFood?'Much':'less'}`)

// const ownerEatTooMuch=dogs.filter(dogs=> dogs.curFood>dogs.recommendedFood).flatMap(dogs=> dogs.owners)
// const ownerEatTooLittle=dogs.filter(dogs=> dogs.curFood<dogs.recommendedFood).flatMap(dogs=> dogs.owners)
// console.log(ownerEatTooLittle)
// console.log(ownerEatTooMuch)

// console.log(`${ownerEatTooMuch.join(' and ') } dogs eat too much!`)
// console.log(`${ownerEatTooLittle.join(' and ') } dogs eat too Little !`)

// console.log(dogs.some(dog=>dog.curFood===dog.recommendedFood))

// const check=dogs=>dogs.curFood > (dogs.recommendedFood* 0.90) && dogs.curFood < (dogs.recommendedFood*
//   1.10)
// console.log(dogs.some(check))


// console.log(dogs.filter(check))

// //8

// // const dogsCopy=dogs.slice().sort((a,b)=> )

// console.log(dogs.slice().sort((a,b)=>a.recommendedFood-b.recommendedFood));

// const Person =function(firstname,dateOfbirth){
//   this.firstname=firstname;
//   this.dateOfbirth=dateOfbirth;

// }

// const Tamil=new Person("tamil",2001);
// // console.log(Tamil)

// Person.prototype.calcAge=function(){
//   console.log(2022-this.dateOfbirth)
// }

// Tamil.calcAge()/


const Car=function(Model,Speed){
  this.Model=Model;
  this.Speed=Speed;

}

const BMW=new Car("BMW",120);



Car.prototype.accelerate=function(){
    this.Speed +=10;

    console.log(`${this.Model} going at ${this.Speed} Km/hr`)

   
}
Car.prototype.brake=function(){
  this.Speed -=5;

  console.log(`${this.Model} going at ${this.Speed} Km/hr`)

 
}

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();


class Car1{
  constructor(Model,Speed){
    this.Model=Model;
  this.Speed=Speed;

  }

  get speedus(){
    return this.Speed/1.6;
  }
  set speedus(Speed){
    this.Speed=Speed*1.6
  }


}


const BMW1=new Car1("BMW",120);
console.log(BMW1)

