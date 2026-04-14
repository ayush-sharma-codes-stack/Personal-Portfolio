// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Typing
new Typed("#typing", {
  strings: ["Aayush", "Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Scroll Animation
ScrollReveal().reveal('.card', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.skill', {
  delay: 200,
  origin: 'left',
  distance: '30px'
});

// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

fetch("https://api.github.com/users/ayush-sharma-codes-stack/repos")
.then(res => res.json())
.then(data => {
  let container = document.getElementById("projects");

  data.slice(0,0).forEach(repo => {
    container.innerHTML += `
      <div class="card">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <div class="buttons">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
        </div>
      </div>
    `;
  });
});

const input = document.getElementById("chatInput");
const body = document.getElementById("chatBody");
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let msg = input.value;
        body.innerHTML += "<p>You: " + msg + "</p>";
        let reply = "I am Aayush, a web developer and programmer.";
        body.innerHTML += "<p>Bot: " + reply + "</p>";
        input.value = "";
    }
});



window.onscroll = ()=>{
    let scrolled =(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
}