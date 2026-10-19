// let names = prompt("Ismingizni kiriting kiriting")
// let ages = +prompt("Hozirgi yilni kiriting")
// let age = +prompt("Tug'ilgan yilingizni kiriting")
// let a = ages - age
// console.log("Salom " + names + " sening yoshing " + a + " da");


let son = +prompt("Ishlamoqchi bo'lgan misollarni sonini kiriting")
function yangi() {
   for (let i = 0; i <= son; i++) {
    son = son + i

   
    if (son == 1) {
      let gear = +prompt("5 / 1")
      console.log("To'g'ri javob 5 Siz kiritgan son " + gear);
    }
    else if (son == 2) {
      let gear2 = +prompt("3 * 2")
      console.log("To'g'ri javob 6 Siz kiritgan son " + gear2);
    }
    else if (son == 3) {
      let gear3 = +prompt("7 + 5")
      console.log("To'g'ri javob 12 Siz kiritgan son " + gear3);
    }
    else if (son == 4) {
      let gear4 = +prompt("12 - 8")
      console.log("To'g'ri javob 4 Siz kiritgan son " + gear4);
    }
    else if (son == 5) {
      let gear5 = +prompt("32 + 67")
      console.log("To'g'ri javob 1 Siz kiritgan son " + gear5);
    }
   
    
    }
    
   
   
   
  
    
}
 console.log(yangi());
   

