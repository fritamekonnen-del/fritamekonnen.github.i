// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});


// ==========================
// Lightbox Gallery
// ==========================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(function(image){

    image.addEventListener("click",function(){

        lightbox.style.display="flex";
        lightboxImage.src=this.src;

    });

});

closeBtn.addEventListener("click",function(){

    lightbox.style.display="none";

});

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});


// ==========================
// Scroll Animation
// ==========================

const cards = document.querySelectorAll(".card");

function revealCards(){

    const trigger = window.innerHeight * 0.85;

    cards.forEach(function(card){

        const top = card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(function(card){

    card.style.opacity="0";
    card.style.transform="translateY(80px)";
    card.style.transition="0.8s";

});

window.addEventListener("scroll",revealCards);

revealCards();


// ==========================
// Gallery Hover Effect
// ==========================

galleryImages.forEach(function(image){

    image.addEventListener("mouseover",function(){

        image.style.transform="scale(1.05) rotate(2deg)";

    });

    image.addEventListener("mouseout",function(){

        image.style.transform="scale(1)";

    });

});


// ==========================
// Welcome Message
// ==========================

window.onload=function(){

    console.log("Welcome to Our Family Website ❤️");

};
