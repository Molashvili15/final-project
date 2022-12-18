//img-slider
let slide =[
    "image/slider-img1.jpg",
    "image/slider-img2.jpg",
    "image/slider-img3.jpg",
]
let index=0;
function changeImg(){
    let myslide = document.querySelector(".my-img-slider");
    myslide.src = slide[index];

    if(index < slide.length - 1){
      index++; 
    } else { 
        index = 0;
    }

    setTimeout("changeImg()", 5000);
}
window.onload=changeImg;

function skillAnimationScroll() {
    window.addEventListener("scroll", () => {
        let skillsList = document.querySelector('.skills-list');
        let skills = document.querySelectorAll(".skill");
        let contentPosition = skillsList.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        

        if(contentPosition < screenPosition) {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.add('active');
            }
        }else {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.remove('active');
            }
        }
    })
}

skillAnimationScroll();


function showServiceText(){
    let servicesBox = document.querySelectorAll(".services-box");
    
    for(let i = 0; i < servicesBox.length; i++){

        servicesBox[i].addEventListener("mouseover", function() {
            let servicesChild = this.children;
            servicesChild[0].style.display = "none";
            servicesChild[1].style.display = "block";
        })

        servicesBox[i].addEventListener("mouseout", function() {
         let servicesChild = this.children;
            servicesChild[0].style.display = "block";
            servicesChild[1].style.display = "none";
        })
    }
}

showServiceText()

function recommendations(){

    let button1 = document.querySelector(".button1");
    let button2 = document.querySelector(".button2");
    let button3 = document.querySelector(".button3");
    let recommendationPar =document.querySelector(".recommendation-par");
    let personRecImg = document.querySelector(".person-rec-img");
    let profession = document.querySelector(".profession");
    let nameRecommendationPerson=document.querySelector(".name-recommendation-person")


    button1.addEventListener("click",()=>{
        recommendationPar.innerText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore..";
        personRecImg.src="image/recommendation/person1.png";
        profession.innerText="Graphic Designer";
        nameRecommendationPerson.innerText="Mau Thomas";
    })
    button2.addEventListener("click",()=>{
        recommendationPar.innerText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatum dolorum et odit nemo, laboriosam debitis animi cupiditate, voluptates atque porro, alias ut. Saepe, eos. Illo voluptatum magni reiciendis perferendis...";
        personRecImg.src="image/recommendation/person2.png";
        profession.innerText="web-developer";
        nameRecommendationPerson.innerText="Lily Thomas";
    })

    button3.addEventListener("click",()=>{
        recommendationPar.innerText=".Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatum dolorum et odit nemo, laboriosam debitis animi cupiditate,..";
        personRecImg.src="image/recommendation/person3.png";
        profession.innerText="project-meneger";
        nameRecommendationPerson.innerText="Nick jonson";
    })
}

recommendations()


function showRosaText(){
    let rosaItem = document.querySelectorAll(".rosa-item");

    for(let i = 0; i < rosaItem.length; i++){

        rosaItem[i].addEventListener("mouseover", function() {
            let rosaChild = this.children;
            rosaChild[0].style.display = "none";
            rosaChild[1].style.display = "block";
            rosaChild[1].style.display="flex"
        })

        rosaItem[i].addEventListener("mouseout", function() {
            let rosaChild = this.children;
            rosaChild[0].style.display = "block";
            rosaChild[1].style.display = "none";
        })
    }
}

showRosaText()



    let name= document.getElementById("name");
    let email=document.getElementById("email");
    let website=document.getElementById("website");
    let message=document.getElementById("message")


    let form=document.getElementById("form");

    form.addEventListener("submit", event => {
        event.preventDefault();
        
        const formData={
            name: name.value,
            email: email.value,
            website: website.value,
            message: message.value,
        }

        fetch("http://api.kesho.me/v1/user-test/contact",{
            method:'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json',
            }
        }).then(function(response){
            return response.text();
        }).then(function(text){
            console.log(text);
        }).catch(function(error){
            console.error(error);
        })
    });



//data filter

function dataFilter(){

const liItem=document.querySelectorAll(".project-list-box ul li");
const projectBox=document.querySelectorAll(".project-box");

liItem.forEach(li=>{
    li.addEventListener("click",function(){
        liItem.forEach(li =>{
            li.className="";
        })
        li.className="activeproject";
    

        // console.log(li.textContent);
        let value = li.textContent;
        updatedValue = value.replace("_"," ");

        projectBox.forEach(content=>{
        content.style.display="none";
        if(content.getAttribute("data-filter") == updatedValue.toLowerCase() || updatedValue=="All"){
            content.style.display="flex";
        }
    })
    })
    
})
}
dataFilter();

function showInfo(){
    let projectRelative = document.querySelectorAll(".project-relative");

    for(let i = 0; i < projectRelative.length; i++){

        projectRelative[i].addEventListener("mouseover", function() {
            let Child = this.children;
            Child[1].style.display = "block";
        })

        projectRelative[i].addEventListener("mouseout", function() {
            let Child = this.children;
            Child[0].style.display = "block";
            Child[1].style.display = "none";
        })
    }
}
showInfo()