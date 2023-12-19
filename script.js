
let text = document.querySelector('.text');

document.querySelector('.navigation').addEventListener("click", function (event) {

  if (event.target.innerText == 'About me'){

    text.style.opacity = 0;
    setTimeout(function(){
      window.location.href = './index.html';
    },1200);
  }

  else if (event.target.innerText == 'My experience'){
    
    text.style.opacity = 0;
    setTimeout(function(){
      window.location.href = './myExperience.html';
    },1200);
  }

  else if (event.target.innerText == 'My demo projects'){

    text.style.opacity = 0;
    setTimeout(function(){
      window.location.href = './myDemoProjects.html';
    },1200);
  }

});

