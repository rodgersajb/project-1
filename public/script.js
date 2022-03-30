// Create an event listener for the hamburger icon

const hamburgerIcon = document.querySelector('i')
const theX = document.querySelector('.x')
let header = document.querySelector('h1');
let slideOutList = document.querySelector('.slideOutList');
let slideInList = document.querySelector('.x');
let headerContact = document.querySelector('.contactHeader');
let blogHeader = document.querySelector('.blogging');


hamburgerIcon.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(slideOutList);
    

    if (event.target.tagName === "I") {
        slideOutList.style.right = "30%";
        header.style.opacity = "0";
        hamburgerIcon.style.visibility = "hidden";
        slideInList.style.visibility = "visible";
        headerContact.style.height = "100vh";
        blogHeader.style.height = "100vh";
        
    }

    
    

})

theX.addEventListener('click', function(event) {
    
    if (event.target.tagName === 'DIV') {
        slideOutList.style.right = "-300px";
        header.style.opacity = "1";
        hamburgerIcon.style.visibility = "visible";
        slideInList.style.visibility = "hidden";
        headerContact.style.height = "auto";
        blogHeader.style.height = "100vw";
    
        
    }
})

console.log(theX)
