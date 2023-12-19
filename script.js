
document.querySelector('.navigation').addEventListener("click", function (event) {

  if (event.target.innerText == 'About me') window.location.href = './index.html';  

  else if (event.target.innerText == 'My experience') window.location.href = './myExperience.html';

  else if (event.target.innerText == 'My demo projects') window.location.href = './myDemoProjects.html';
});



