import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit {
  steps = [
 {
    label: 'Education',
    period: '2015 – 2019',
    organization: 'Nagpur University, India',
    role: 'Bachelor of Engineering in Information Technology',
    location: '',
    details: [
      'Courses: Data Structures, Design and Analysis of Algorithms, Networking, Operating Systems, SDLC, Object-Oriented Programming, DBMS, Software Engineering & Project Management, Agile Methodologies, System Design, Network Programming, Cloud Computing'
    ],
    active: true
  },
    {
    label: 'Software Developer',
    period: 'Oct 2019 – Feb 2022',
    organization: 'Atos Syntel',
    role: 'Software Developer',
    location: 'Pune, India',
    details: [
      'Developed and maintained enterprise-level desktop application and web application in the healthcare domain.',
      'Built responsive desktop interfaces using .NET UI frameworks such as WinForms and WPF.',
      'Created and maintained reusable NuGet packages to ensure consistency and promote code reuse across projects.',
      'Performed thorough unit testing.',
      'Implemented CI/CD pipelines with Azure DevOps and used Git for efficient version control and collaboration.',
      'Technologies: WinForms, WPF, Angular, .NET Core 6, ASP.NET MVC, .NET Core Web API, C#, JavaScript, TypeScript, HTML5, CSS3, Azure DevOps, Git, Visual Studio 2019.'
    ],
    active: false
  },
   {
    label: 'Software Developer',
    period: 'Feb 2022 – June 2024',
    organization: 'IBM India',
    role: 'Software Developer',
    location: 'Pune, India',
    details: [
      'Developed, maintained and implemented scalable applications using Angular 14, .NET Core 6, ASP.NET MVC, and .NET Core Web API.',
      'Utilized AG Grid for efficient data management and built RESTful APIs, microservices, and middleware components.',
      'Led the development of reusable components adopted across five applications, improving consistency, efficiency, and boosting performance by 25%.',
      'Developed a Content Management System (CMS) used by multiple applications, streamlining content handling workflows.',
      'Designed and implemented a Reference Data Management System to provide essential data to downstream applications.',
      'Resolved critical defects across multiple modules, improving overall application stability and reducing issue resolution time.',
      'Participated in the IBM WatsonX Challenge as part of a 10-member team, contributing to innovative solutions.',
      'Technologies: Angular 14, .NET Core 6, ASP.NET MVC, .NET Core Web API, C#, JavaScript, TypeScript, Azure DevOps, Git, Visual Studio 2022.'
    ],
    active: false
  },
 
  {
    label: 'Senior Software Developer',
    period: 'July 2024 – May 2025',
    organization: 'Tech Mahindra (Full-time job)',
    role: 'Sr. Software Developer',
    location: 'Nagpur, India',
    details: [
      'Developed and maintained scalable logistics applications aligned with evolving business requirements.',
      'Enhanced key modules of the Symphony Application, including real-time tracking, route management, order processing, and inventory reservation to improve logistics efficiency and system reliability.',
      'Led the development of user interfaces using Angular 16, focusing on performance, user experience, and reusable component architecture.',
      'Spearheaded the mobile adaptation of the Symphony application, improving responsiveness and development efficiency.',
      'Optimized the existing codebase, resulting in a 30% reduction in load times and improved overall performance.',
      'Ensured continuous integration and deployment through automated pipelines using Azure DevOps, with effective version control via Git.',
      'Utilized a robust technology stack including Angular 16, C#, TypeScript, JavaScript, CSS, and development tools such as Visual Studio 2022 and Visual Studio Code.'
    ],
    active: false
  },
];


  ngOnInit() {
    this.animateSteps();
  }

  animateSteps() {
    let delay = 1000;

   
     const loopAnimation = () => {
    // Reset all steps except the first one
    this.steps.forEach((step, index) => {
      step.active = index === 0;
    });

    // Sequentially activate steps after the first with delay
    for (let i = 1; i < this.steps.length; i++) {
      setTimeout(() => {
        this.steps[i].active = true;
      }, delay * i);
    }

    // Repeat the animation after total duration
    setTimeout(loopAnimation, delay * this.steps.length + 1000);
  };
    loopAnimation();
  }
  
}
