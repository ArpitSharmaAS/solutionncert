const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});


function checkScreenWidth() {
  // Get the screen width
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let one = document.getElementById('one');
  let ch2 = document.getElementById('ch2');
  let ch3 = document.getElementById('ch3');
  let ch4 = document.getElementById('ch4');
  let ch5 = document.getElementById('ch5');
  let ch6 = document.getElementById('ch6');
  let ch7 = document.getElementById('ch7');
  let ch8 = document.getElementById('ch8');
  let ch9 = document.getElementById('ch9');
  let ch10 = document.getElementById('ch10');
  let ch11 = document.getElementById('ch11');
  let ch12 = document.getElementById('ch12');
  let ch13 = document.getElementById('ch13');
  let ch14 = document.getElementById('ch14');
  // Check if the screen width is less than or equal to 455 pixels
  if (screenWidth <= 680) {
    one.href = '12.png'
    ch2.href = 'chapter2.png'
    ch3.href = 'chapter3.png'
    ch4.href = 'ch4.png'
    ch5.href = 'chapter5.png'
    ch6.href = 'chapter6.png'
    ch7.href = 'chapter7.png'
    ch8.href = 'chapter8.png'
    ch9.href = 'chapter9.png'
    ch10.href = 'chapter10.png'
    ch11.href = 'chapter11.png'
    ch12.href = 'chapter12.png'
    ch13.href = 'chapter13.png'
    ch14.href = 'chapter14.png'
    console.log("find")
  }
}

 // Attach the function to the window resize event
 window.addEventListener('resize', checkScreenWidth);

 // Initial check when the page loads
 window.onload = checkScreenWidth;