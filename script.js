

function dark(){
    const fn=  document.getElementById("body").style;
    fn.backgroundColor="rgb(40, 38, 38)";
    document.getElementById("header").style.color="#f0f0f0"
    fn.border="5px solid #f0f0f0"
    fn.color="#ffffff"
    
}

function bright(){
  
    const fn=  document.getElementById("body").style;
    fn.background="white";
    document.getElementById("header").style.color="#000000";
    fn.border="5px body #000000"
    fn.color="#000000"

   
}

function changeBackground() {
    
    // Generate random RGB color values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    // Set the background color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("header").style.color="#000000"
    document.getElementById("body").style.border="5px solid #000000"
  }