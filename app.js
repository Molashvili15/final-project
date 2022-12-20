let slide =[
    "images/facebook.png",
    "images/youtube.png",
    "images/twitter.png",
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
        recommendationPar.innerText="Mixeil knows :   SQL and Database ABAP Development Programming, Salesforce System configuration: Process Builder, Workflows, Data Loader, Approval Processes, Validation Rules, Custom Objects, etc.net Real Time Software UML Tools";
        personRecImg.src="images/dis1.jpg";
        profession.innerText="C++ Developer";
        nameRecommendationPerson.innerText="Mixeil soselia";
    })
  
    button2.addEventListener("click",()=>{
        recommendationPar.innerText="Sony knows : HTML (Hypertext Markup Language),CSS (Cascading Style Sheets) and Javascript";
        personRecImg.src="images/dis2.svg";
        profession.innerText="web-developer";
        nameRecommendationPerson.innerText="Sony Thomas";
    })

    button3.addEventListener("click",()=>{
        recommendationPar.innerText="Nicks Skills and Knowledge Required: Experience in Project Management, IT / Network and Infrastructure, Field Customer Service. Strong customer service acumen. General appreciation of IT and network design. Proficient in utilizing business tools such as: E-mail, Microsoft Project, Visio, Word, Excel, and PowerPoint.";
        personRecImg.src="images/dis3.svg";
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

        fetch("https://borjomi.loremipsum.ge/api/send-message",{
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



function dataFilter(){

const liItem=document.querySelectorAll(".project-list-box ul li");
const projectBox=document.querySelectorAll(".project-box");

liItem.forEach(li=>{
    li.addEventListener("click",function(){
        liItem.forEach(li =>{
            li.className="";
        })
        li.className="activeproject";
    

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