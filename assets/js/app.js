let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function() {
    console.log("oui");
    body.classList.toggle('open')
});

// const loader = document.querySelector('.loader');

// window.addEventListener('load', () => {
//     console.log('load')
//     loader.classList.add('fondu-out');
// })

// A PROPOS
//____________________________

const text1_options = [
    "HandBall",
    "Chasse sous-marine",
    "Cuisine",
    "Jeux video",
    "Nouvelles technologies"
  ];
  const text2_options = [
    "Je suis un grand passionné de Handball. J’ai pratiqué ce sport en tant qu’arrière/ailier gauche pendant 10 ans au club SRVHB. Aujourd’hui je soutiens toujours les matchs de ce club.",
    "Etant né sur la côte et ayant un grand père passionné par l’archéologie sous-marine, j’ai toujours baigné dans le milieu marin. J’ai appris a chassé dès mon plus jeune âge. Aujourd’hui j’aime plonger pour le plaisir.",
    "Je suis un grand gourmand, j’adore découvrir les spécialités culinaires et culturelles propres à chaque régions et pays. J’aime prendre le temps de concocter un bon petit plat pour satisfaire mon appétit.",
    "J’aime me détendre avec le monde de Nintendo, comme Zelda (Breath of the Wild) qui est un univers plein de découvertes et d’aventures, mais aussi pendant les parties entre amis sur Super Smash Brosh Ultimate. J’aime aussi satisfaire mon esprit de compétition sur Valorant.",
    "Je suis très curieux par l’innovation, j’aime beaucoup découvrir les nouvelles technologies."
  ];
  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1", "#d0a8ff"];
  const image_options = [
    "./assets/img/handball.png",
    "./assets/img/chasse-sous-marine.png",
    "./assets/img/cuisine.png",
    "./assets/img/jeux-video.png",
    "./assets/img/nouvelle-technologie.png"  
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  