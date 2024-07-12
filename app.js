// Class 12 ,17

// ----isNaN()-----
// ----Number()-----
// ----toString()-----
// ----toFixed()-----
// ----new Date-----
// ----ver-----
// ----let-----
// ----object-----
// ----setInterval-----
// ----setTimeout-----
// ----switch(){}-----
// ----while(){}-----
// ----do()while{}-----












// ----isNaN()-----


// let price = "23542";
// console.log(isNaN(price))




// ----Number()-----

// let num = "43";
// let num2 = "hello world";

// console.log(Number(num));
// console.log(Number(num2));



// ----toString()-----


// let num = 25;
// let num2 = 25;
// num = num.toString();
// num2=num2.toString();
// console.log(num+num2);



// ----toFixed()-----


// let bill = 2.5684162;
// console.log(bill.toFixed(3));



////////////====class 13====//////////


// let now=new Date()
// console.log(now)

// let date=now.getDate()
// let time=now.getTime()
// let year=now.getFullYear()
// let Day=now.getDay()
// let horus=now.getHours();
// console.log(date,time,year,Day,horus)

// let DayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let day=DayArray[now.getDay()];
// console.log(day);

// let MonthArray= ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let month=MonthArray[now.getMonth()];
// console.log(month);





////////////====class 14====//////////


// function fullName(firstName, lastName) {
//     let newFullName = firstName +" "+ lastName;
//     return newFullName;
// }
// console.log(fullName("Arslan","Ali"));



// ----ver-----

// function varScoping() {
//     var num = 1;
  
//     if (true) {
//       var num = 2;
//       console.log(num); // will print 2
//     }
  
//     console.log(num); // will print 2
//   }
//   varScoping()
  
// ----let-----


  // function letScoping() {
  //   let num = 3;
  
  //   if (true) {
  //     let num= 4;
  //     console.log(num); // will print 2
  //   }
  
  //   console.log(num); // will print 1
  // }
  // letScoping()












////////////====class 15====//////////




// console.warn("Arslan");
// console.error("Arslan");

// let user = {};
// let fruits = [];

// user.name = 'haider';
// fruits.push("apple");
// console.log(user,fruits)



// function createBook(bookName, author, pages, topic) {
//   let book = {
//       name: bookName,
//       author , // author: author,
//       pages,
//       topic
//   }
//   return book;
// }

// let book1 = createBook("The Lean Startup", "Eric", 500, "Startup");

// let book2 = createBook("Personal MBA", "Josh", 700, "Business");

// let book3 = createBook("Bahar Shariat", "Mufti Amjad", 9000, "Islamic");

// console.log(book1,book2,book3 );



// let user = {
//   name : "Arslan",
//   age: 18,
//   email:"abc@gmail.com"
// }

// console.log(user.age,user.lastname="ali")






////////////====class 16====//////////




// let h1=document.querySelectorAll("h1");

// let num=1
// function time(){time=setInterval
// h1[0].innerHTML+=num++
// console.log(num++)
// }1000

// // }
// function stopbutton(){
//   clearInterval(time())
// }


// function startbutton(){
//   time()
// }



// let num=1

// let fun= setInterval(()=>{
//   console.log(num++)
// },1000)

// let fun2= ()=>{
//   clearInterval(fun)
// } 




// let fun=setTimeout(() => {
// document.write('Hello world')
// }, 1000);







////////////====class 17====//////////


// let  dayName=prompt("enter day to check holiday or working day").toUpperCase()

// switch (dayName){
//   case "Monday".toUpperCase():
//     console.log("Working day")
//     break
//   case "tuesday".toUpperCase():
//     console.log("Working day")
//     break
//     case "wednesday".toUpperCase():
//       console.log("Working day")
//       break
//     case "friday".toUpperCase():
//       console.log("Working day")
//       break
//       case "saturday".toUpperCase():
//         console.log("Working day")
//         break
//         default: "Sunday"
//         console.log("Holiday")
// }



// let i=0

// while(i<100){
// console.log(i);
// i++
// }




// let str = "";
// while (str !== "Exit") {
//     str = prompt('enter any string.');

// }




// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100)











// function greet(user) {
//   console.log('Expert Web Developer', user);
// }
// greet("Arslan")




// function revertOriginalHeading(el) {
//   console.log(el);
//   el.innerHTML = 'Hello World';

  
// }
// revertOriginalHeading("hello javascript")