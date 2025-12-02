// const questions = [
//     {
//         bike :"img/hayabusa.jpg",
//         option : ["Daytona 675r", "Hayabusa", "Panigale v4", "Ninja zx14r"],
//         correct : 1,

//     },
//     {
//         bike :"img/916.jpg",
//         option : ["Ducati 916", "Ducati scrambler", "Panigale v4", "Ninja zx14r"],
//         correct : 0,

//     },
//     {
//         bike :"img/daytona.jpg",
//         option : ["Daytona 675r", "CBR650R", "benelli 600i", "zx6r"],
//         correct : 0,

//     },
//     {
//         bike :"img/gsxr.jpg",
//         option : ["Yamaha R1", "Superleggera v4", "GSXR1000", "kawasaki zx14r"],
//         correct : 2,

//     },
//     {
//         bike :"img/hp4race.jpg",
//         option : ["Suzuki Katana", "BMW G1250GS", "Panigale v4", "HP4 Race"],
//         correct : 3,

//     },
//     {
//         bike :"img/m1k.jpg",
//         option : ["Suzuki Katana", "M1000RR", "GSX750R", "kawasaki zx14r"],
//         correct : 1,

//     },
//     {
//         bike :"img/rush.jpg",
//         option : ["Brutale 1000rr", "Panigale v4", "Ducati scramble", "Rush 1000rr"],
//         correct : 3,

//     },
//     {
//         bike :"img/s1k.jpg",
//         option : ["S1000RR", "Ducati Supersport", "Panigale v4", "GSXR1000"],
//         correct : 0,

//     },
//     {
//         bike :"img/streetfighter.jpg",
//         option : ["CFMoto 450sr", "panigale 899", "Streetfighter V4", "kawasaki zx10r"],
//         correct : 2,

//     },
//     {
//         bike :"img/superleggera.jpg",
//         option : ["RC990", "Superleggera", "Panigale v4", "Kawasaki zx14r"],
//         correct : 1,

//     },
//     {
//         bike :"img/superveloce.jpg",
//         option : ["Vyrus 987 ", "Ducati 1299", "Superveloce", "Supperleggera V4"],
//         correct : 3,

//     },
//     {
//         bike :"img/vyrus.jpg",
//         option : ["Ninja zx14r", "Vyrus 987", "Panigale v4", "Superveloce"],
//         correct : 1,

//     },
//     {
//         bike :"img/zx10r.jpg",
//         option : ["Ninja zx6r", "Ninja zx10r", "Panigale v4", "kawasaki zx14r"],
//         correct : 1,

//     },
//     {
//         bike :"img/v4r.jpg",
//         option : ["Ninja H2", "Ducati 899", "Panigale v4r", "kawasaki zx14r"],
//         correct : 2,

//     },
//     {
//         bike :"img/h2.jpg",
//         option : ["Ninja H2", "Superveloce", "Panigale v4", "kawasaki zx14r"],
//         correct : 0,

//     },


// ]

// let img = document.getElementById("bike-img");
// let nextButton = document.getElementById("next");
// let optionButtons = document.querySelectorAll(".choose button")

// let currentIndex = 0;
// let score = 0;

// function showQuestion(){
//     const q = questions[currentIndex];
//     img.src = q.bike;
//     optionButtons.forEach((btn, idx) => {
//         btn.innerText = q.option[idx];

//         btn.disabled = false;
//         btn.style.backgroundColor = "";
        
//     });
// }

// optionButtons.forEach((btn, idx)=>{
//     btn.addEventListner("click", ()=>{
//         const q = questions[currentIndex];
//         if(idx === q.correct){
//             score++;
//             btn.style.backgroundColor = "lightgreen";
//         }
//         else{
//             btn.style.backgroundColor = "lightcoral";

//             optionButtons[q.correct].style.backgroundColor = "lightgreen";

//         }
//         optionButtons.forEach(b => b.disabled = true)

            
//         nextButton.disabled = false;
        

//     })
// })
// nextButton.addEventListner("click", ()=>{
//     currentIndex++;
//     if (currentIndex < questions.length){
//         showQuestion();
//     }
//     else{
//         alert("Quiz over! Your score: " + score + " / " + questions.length);
//     }
// });
// showQuestion();

const questions = [ {
        bike :"img/hayabusa.jpg",
        option : ["Daytona 675r", "Hayabusa", "Panigale v4", "Ninja zx14r"],
        correct : 1,

    },
    {
        bike :"img/916.jpg",
        option : ["Ducati 916", "Ducati scrambler", "Panigale v4", "Ninja zx14r"],
        correct : 0,

    },
    {
        bike :"img/daytona.jpg",
        option : ["Daytona 675r", "CBR650R", "benelli 600i", "zx6r"],
        correct : 0,

    },
    {
        bike :"img/gsxr.jpg",
        option : ["Yamaha R1", "Superleggera v4", "GSXR1000", "kawasaki zx14r"],
        correct : 2,

    },
    {
        bike :"img/hp4race.jpg",
        option : ["Suzuki Katana", "BMW G1250GS", "Panigale v4", "HP4 Race"],
        correct : 3,

    },
    {
        bike :"img/m1k.jpg",
        option : ["Suzuki Katana", "M1000RR", "GSX750R", "kawasaki zx14r"],
        correct : 1,

    },
    {
        bike :"img/rush.jpg",
        option : ["Brutale 1000rr", "Panigale v4", "Ducati scramble", "Rush 1000rr"],
        correct : 3,

    },
    {
        bike :"img/s1k.jpg",
        option : ["S1000RR", "Ducati Supersport", "Panigale v4", "GSXR1000"],
        correct : 0,

    },
    {
        bike :"img/streetfighter.jpg",
        option : ["CFMoto 450sr", "panigale 899", "Streetfighter V4", "kawasaki zx10r"],
        correct : 2,

    },
    {
        bike :"img/superleggera.jpg",
        option : ["RC990", "Superleggera", "Panigale v4", "Kawasaki zx14r"],
        correct : 1,

    },
    {
        bike :"img/superveloce.jpg",
        option : ["Vyrus 987 ", "Ducati 1299", "Superveloce", "Supperleggera V4"],
        correct : 2,

    },
    {
        bike :"img/vyrus.jpg",
        option : ["Ninja zx14r", "Vyrus 987", "Panigale v4", "Superveloce"],
        correct : 1,

    },
    {
        bike :"img/zx10r.jpg",
        option : ["Ninja zx6r", "Ninja zx10r", "Panigale v4", "kawasaki zx14r"],
        correct : 1,

    },
    {
        bike :"img/v4r.jpg",
        option : ["Ninja H2", "Ducati 899", "Panigale v4r", "kawasaki zx14r"],
        correct : 2,

    },
    {
        bike :"img/h2.jpg",
        option : ["Ninja H2", "Superveloce", "Panigale v4", "kawasaki zx14r"],
        correct : 0,

    },
  ];

let img = document.getElementById("bike-img");
let optionButtons = document.querySelectorAll(".choose button");  // use querySelectorAll
let nextButton = document.getElementById("next");                 // consistent variable name

let currentIndex = 0;
let score = 0;

function showQuestion(){
  const q = questions[currentIndex];
  img.src = q.bike;
  optionButtons.forEach((btn, idx) => {
    btn.innerText = q.option[idx];   // set each button text properly
    btn.disabled = false;
    btn.style.backgroundColor = "";
  });
  nextButton.disabled = true;        // disable Next until answer chosen
}

optionButtons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {       // correct spelling
    const q = questions[currentIndex];
    if (idx === q.correct) {
      score++;
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.style.backgroundColor = "lightcoral";
      optionButtons[q.correct].style.backgroundColor = "lightgreen";
    }
    optionButtons.forEach(b => b.disabled = true);
    nextButton.disabled = false;
  });
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    alert("Quiz over! Your score: " + score + " / " + questions.length);
    
  }
});



// initial load
showQuestion();


