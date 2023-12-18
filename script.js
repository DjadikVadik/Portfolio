
let aboutMe = `Hello! 
My name is Vadim. I am seeking a position as a software developer in a friendly team. For over six years, I have been working as a fitness trainer and rehabilitation specialist at "Yes Fitness premium." What I value most in a job is the opportunity to grow and unleash my potential.Starting as a fitness trainer, I consistently pursued self-education, enhancing my knowledge in anatomy, biomechanics, physiology, and biochemistry. I took rehabilitation courses and was invited to lead biomechanics courses in the bodybuilding federation of the Odessa region. However, I reached a point where further development seemed limited. To advance, I had to either enroll in a medical university or open my fitness studio, neither of which was feasible for me.Since school, I've been intrigued by mathematical problems, leading me to explore programming in my free time. I stumbled upon a small "Ruby" programming language course on YouTube, wrote a few simple programs, and found it fascinating. Subsequently, I pursued formal education in programming, mastering languages such as C++, C#, and JavaScript. Always at the top of my class, I found genuine interest in the subject.Upon embarking on a job search in the programming field, I immediately informed my previous employer, "Yes Fitness premium," about my decision, as I believe transparency is crucial. My management understood and appreciated my dedication, allowing me to continue working while freelancing on various projects.I am a highly motivated individual, always eager to learn and step out of my comfort zone. Besides my passion for physical activity, I enjoy playing chess. My experience as a fitness trainer has equipped me with excellent communication skills, vital for establishing connections with diverse individuals.If you are seeking a determined and development-oriented team member, you have found your candidate! On this page, you can explore my freelance work and view demonstration projects.`;


let myExperience = `Profile:
As a Junior C# Backend Developer, I have completed courses at the computer academy "Step," gaining expertise in C#, ASP.Net Core (MVC, Web API), Entity Framework, ADO.NET, SQL, Git, and JavaSript. I also have experience working as a freelance developer, creating ASP Net Core applications for e-commerce websites and website parsers, with additional projects involving JavaScript. I am now seeking a position where I can apply my skills to contribute to a dynamic and innovative team.

Skills:
C#, ASP.Net Core (MVC, Web API), Entity Framework, ADO.NET, SQL, Git, OOP, SOLID principles, UML, XML, JSON, HTML, CSS, JavaScript

Work Experience:
ASP Net Core Developer Freelance (March 2022 - Present):
- Created and maintained ASP Net Core applications for e-commerce websites, resulting in increased traffic and sales for clients.
- Developed website parsers to automate data collection and analysis, improving business efficiency and decision-making.
- Implemented JavaScript in various freelance projects, demonstrating versatility in full-stack development.

Education and Certifications:
- "Step" Computer Academy (October 2021 - October 2022)
- Cisco Networking Academy(October 2022): Course Completion Certificate "IT Essentials."

Projects Highlights:
- Integrated JavaScript into various projects, showing proficiency in full-stack development.
- Achieved measurable results in e-commerce applications, contributing to increased traffic and sales.

Technological Proficiency:
- Applied SOLID principles and Object-Oriented Programming in project development.
- Utilized JavaScript for dynamic and interactive web features.

Soft Skills:
Strong problem-solving skills, adaptability, and attention to detail.`;

let myDemoProjects = `<span style="font-weight: bold;">Calculator:</span>
<p style="text-indent: 5%;"> This is a calculator application. You can evaluate its functionality by following this link. 
The application is written using HTML, CSS, and JavaScript. The entire design of the application, including the logic, was crafted 
personally without the use of external code. Additionally, a custom JavaScript function has been implemented for performing calculation 
operations.</p>
<a href="https://djadikvadik.github.io/Calculator/calculator.html" target="_blank">https://djadikvadik.github.io/Calculator/calculator<wbr>.html</a>

<br><br><br><span style="font-weight: bold;">Market:</span>
<p style="text-indent: 5%;">This is a web application developed on ASP.NET Core, providing an HTTP API to manage objects. The project is structured 
using the "onion" architecture to facilitate project scalability.<br><br>

Project Structure:<br>
- Data models representing tasks.<br>
- Entity Framework database context, including DbSet<TodoItem> for interacting with the tasks table.<br>
- Controllers handling HTTP requests to manage tasks, including methods for retrieving all tasks, getting specific tasks by Id, creating new tasks, updating tasks, and deleting tasks.<br>
- Business models representing business tasks.<br>
- Business controllers handling the project's business logic.<br><br>

Usage:<br>
1. After launching the API application, you can interact with the following endpoints:<br>
   - GET /api/todo - Retrieve a list of all tasks.<br>
   - GET /api/todo/{id} - Get information about a task based on its Id.<br>
   - POST /api/todo - Create a new task.<br>
   - PUT /api/todo/{id} - Update information about a task based on its Id.<br>
   - DELETE /api/todo/{id} - Delete a task based on its Id.<br>

2. Entity Framework is used for interacting with the database, automatically creating and updating the database schema based on data models.</p>
<a href="https://github.com/DjadikVadik/Market.git" target="_blank">https://github.com/DjadikVadik/Market.git</a>

<br><br><br><span style="font-weight: bold;">Parser:</span>

<p style="text-indent: 5%;">This application serves as a website parser and utilizes the "onion" architecture. The project operates with the console 
for simplicity in demonstration, but the console can be easily replaced with a desktop or ASP.NET Core application if needed. 
For database interaction, the application employs the ADO.NET framework.
At the start, the application creates a database using the ADO.NET framework, along with stored procedures for efficient database operations. 
The project also includes repositories and models for working with the database.
Further, a separate parser library, using repositories, stores all data from the website (including images) in this database. Subsequently, 
repositories are used to retrieve everything from the database, which is then demonstrated on the console.<br><br>

Structure:<br><br>

- Library with a class for creating the database.<br>
- Library with models and repositories for database operations.<br>
- Library with business models for transforming database models into business models.<br>
- Library with business controllers for implementing business logic.<br>
- Library for the parser itself.<br>
- Console application for working with all these libraries</p>
<a href="https://github.com/DjadikVadik/PARSER.git" target="_blank">https://github.com/DjadikVadik/PARSER.git</a>

<br><br><br><span style="font-weight: bold;">Portfolio:</span>
<p>This is the project you are currently viewing. I hope you liked it!</p>`;  

let contein = document.querySelector('.conteiner');
let text = document.querySelector('span');
text.innerText = aboutMe;

document.querySelector('.navigation').addEventListener("click", function (event) {

  if (event.target.innerText == 'About me'){

    contein.style.backgroundImage = 'url("./beackgraund/1.jpg")';

    text.style.opacity = 0;
    setTimeout(function(){
      text.innerText = aboutMe;
      text.style.opacity = 1;
    },1200);
  }

  else if (event.target.innerText == 'My experience'){

    contein.style.backgroundImage = 'url("./beackgraund/2.jpg")';
    
    text.style.opacity = 0;
    setTimeout(function(){
      text.innerText = myExperience;
      text.style.opacity = 1;
    },1200);
  }

  else if (event.target.innerText == 'My demo projects'){

    contein.style.backgroundImage = 'url("./beackgraund/3.jpg")';

    text.style.opacity = 0;
    setTimeout(function(){
      text.innerHTML = myDemoProjects;
      text.style.opacity = 1;
    },1200);
  }

});

