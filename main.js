var typed = new Typed('#element', {
    strings: ["Silchar","Assam"],
    typeSpeed: 100,
    backspeed:100,
    backdelay:1000,
    loop:true
  });
  var tablinks = document.getElementsByClassName("tab-links")
  var tabcontents = document.getElementsByClassName("tab-contents")
  function opentab(tabname){
      for(tablink of tablinks){
          tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
         tabcontent .classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabname).classList.add("active-tab");
  }
  

  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  
  const colors = [
    
    // "#ffb56b",
    // "#fdaf69",
    // "#f89d63",
    // "#f59761",
    // "#ef865e",
    // "#ec805d",
    // "#e36e5c",
    // "#df685c",
    // "#d5585c",
    // "#d1525c",
    // "#c5415d",
    // "#c03b5d",
    // "#b22c5e",
    // "#ac265e",
    // "#9c155f",
    // "#950f5f",
    // "#830060",
    // "#7c0060",
    // "#680060",
    // "#60005f",
    // "#48005f",
    // "#3d005e"
    "#014700", "#025800", "#046801", "#057902", "#078a03", "#0a9b04", "#0dab05", "#10bc06", "#13cd08", "#17de09", "#1bee0b", "#1fff0d"
];
  
  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  
  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz4ZFDSa9FGQy_0u_U3XZ0ErSRP4vQkwsMCA0NtrSensEAJCwWhoi1oiMBhvBH87SJU/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

/* 
background: linear-gradient(90deg, #014700, #025800, #046801, #057902, #078a03, #0a9b04, #0dab05, #10bc06, #13cd08, #17de09, #1bee0b, #1fff0d);*/