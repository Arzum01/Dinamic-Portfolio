function changeColor() {
    const color = document.getElementById("name");
    color.style.color = "white";
}
function hideMessage() {
    const message = document.getElementById("hide");
    message.style.display="none";
}
function showMessage() {
    const message = document.getElementById("hide");
    message.style.display="block";
}


    

function addSkill() {
    const ul = document.getElementById("skills-list");
    const newSkill = document.createElement("li");
    newSkill.textContent = "New skill";
    ul.appendChild(newSkill);
}
function addProject(projectName) {
    const container = document.getElementById("newProject");
    if (container) {
        const newProjectDiv = document.createElement("div");
        newProjectDiv.className = "project-card";
        newProjectDiv.innerHTML = `<h3>${projectName}</h3><p>Dinamik əlavə edilən layihə təsviri</p>`;
        container.appendChild(newProjectDiv);
    }
}

// function checkForm() {
//     const form = document.getElementById("contact-form");
//     const errorDisplay = document.getElementById("error-message");
//     form.addEventListener("submit", function(event) {
//         const nameValue = document.getElementById('name').value.trim();
//         const emailValue = document.getElementById('email').value.trim();
//         event.preventDefault();
//         if (nameValue === "" || emailValue === "") {
//            errorDisplay.style.color="orange";
//            errorDisplay.innerHTML="Zehmet olmasa xanalari doldurun";
//         } else {
            
//             errorDisplay.style.color="green";
//             errorDisplay.innerHTML="Ugurlu";
//         }
//     });
// }
// function checkForm(event) {
//     // Səhifənin yenilənməsini dərhal dayandırırıq
//     event.preventDefault(); 

//     const form = document.getElementById("contact-form");
//     const errorDisplay = document.getElementById("error-message");
//     form.addEventListener("submit", function(event) {
//         const nameValue = document.getElementById('name').value.trim();
//         const emailValue = document.getElementById('email').value.trim();
//         event.preventDefault();
//         if (nameValue === "" || emailValue === "") {
//            errorDisplay.style.color="orange";
//            errorDisplay.innerHTML="Zehmet olmasa xanalari doldurun";
//         } else {
            
//             errorDisplay.style.color="green";
//             errorDisplay.innerHTML="Ugurlu";
//         }
//     });
// }
document.getElementById("contact-form").addEventListener("submit", function(event) {
    
    // 1. Brauzerin səhifəni yeniləməsini ABSOLUT olaraq dayandırırıq
    event.preventDefault(); 

    const errorDisplay = document.getElementById("error-message");
    const nameValue = document.getElementById('contact-name').value.trim();
    const emailValue = document.getElementById('email').value.trim();

    // 2. Yoxlama prosesi
    if (nameValue === "" || emailValue === "") {
        errorDisplay.style.color = "orange";
        errorDisplay.innerHTML = "Zəhmət olmasa xanaları doldurun";
    } else {
        errorDisplay.style.color = "green"; 
        errorDisplay.innerHTML = "Uğurlu";
    }
});


const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show"); 
    } else {
        backToTopButton.classList.remove("show");
    }

    });
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
