// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "Members of HDI Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research conducted at the HDI lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-advising",
          title: "Advising",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/advising/";
          },
        },{id: "nav-workbench",
          title: "Workbench",
          description: "Quick links to research tools, teaching resources, and lab utilities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/workbench/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "courses-algorithm-알고리즘",
          title: 'Algorithm (알고리즘)',
          description: "This course develops methodologies for designing and analyzing effective algorithms and surveys representative techniques aimed at diverse computational goals. It also covers ideas that matter for understanding intractability in practice, including NP-completeness and approximation algorithms as central lenses on hard optimization and decision problems.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/algorithm/";
            },},{id: "courses-basic-computer-engineering-lab2-컴퓨터공학기초실험2",
          title: 'Basic Computer Engineering Lab2 (컴퓨터공학기초실험2)',
          description: "This laboratory course uses Arduino, an open-source microcontroller platform that supports approachable embedded programming, as the basis for a sequence of hands-on exercises. Working with sensors, actuators, and simple circuits, students explore how software on a microcontroller coordinates with physical hardware, building intuition for hardware–software interaction in a concrete and engaging setting.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/basic-computer-engineering-lab2/";
            },},{id: "courses-gpu-computing-gpu컴퓨팅",
          title: 'GPU Computing (GPU컴퓨팅)',
          description: "This course introduces how to carry out parallel computing using CPUs and GPUs. Parallel computing is an approach that harnesses many computing resources together to solve problems, and it has become pervasive across domains such as simulation, graphics, and artificial intelligence, where it is relied on to improve both speed and accuracy. Among the many parallel architectures in use today, multicore CPUs and GPUs are the most common platforms students will encounter in practice. The goal of the course is to build intuition for when and why parallelization pays off, and to equip students with foundational programming techniques for designing and implementing parallel programs on these mainstream architectures.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/gpu-computing/";
            },},{id: "courses-introduction-to-engineering-design-공학설계입문",
          title: 'Introduction to Engineering Design (공학설계입문)',
          description: "This course develops the foundational knowledge required to practice engineering design by walking students through a systematic creative design process, illustrated with diverse examples that connect theory to realistic constraints and decisions. In parallel, teams carry out a project-based experience that mirrors how engineering work is actually done—scoping problems, iterating concepts, communicating ideas, and integrating feedback—so that participants leave with both structured methods for design thinking and firsthand practice of collaborative engineering design.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/introduction-to-engineering-design/";
            },},{id: "courses-numerical-analysis-수치해석",
          title: 'Numerical Analysis (수치해석)',
          description: "This course covers the theory of linear systems, nonlinear equations, and related transforms alongside practical computer-based methods for realizing those ideas reliably on finite-precision hardware. Application-oriented examples are used throughout to connect algorithms to engineering problems and to show how numerical analysis is brought to bear when models must be solved, approximated, or simulated in practice.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/numerical-analysis/";
            },},{id: "courses-object-oriented-programming-design-객체지향프로그래밍설계",
          title: 'Object Oriented Programming Design (객체지향프로그래밍설계)',
          description: "This course is designed to help students build a solid foundation in modern C++ programming while developing a deep, practical understanding of object-oriented programming principles and the habits of thought needed to apply them in real software. Through lectures, exercises, and design-oriented assignments, participants learn to write clear, maintainable, and efficient code, to model problems with appropriate abstractions, and to reason about encapsulation, inheritance, polymorphism, and composition in the context of small and medium-sized systems. Emphasis is placed on moving beyond syntax to genuine design judgment—evaluating trade-offs, structuring responsibilities among classes, and refactoring toward better structure—so that graduates leave with both technical proficiency in C++ and the conceptual tools to grow as thoughtful object-oriented designers.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/object-oriented-programming-design/";
            },},{id: "courses-object-oriented-programming-lab-객체지향프로그래밍실습",
          title: 'Object Oriented Programming Lab. (객체지향프로그래밍실습)',
          description: "This laboratory course complements object-oriented programming with hands-on design practice, emphasizing implementation habits, tooling, and iterative refinement of small systems. Assignments and projects are coordinated with the paired design-oriented course so that conceptual design work and concrete coding reinforce each other across the term.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/object-oriented-programming-lab/";
            },},{id: "courses-open-source-software-design-and-lab-오픈소스소프트웨어설계및실습",
          title: 'Open Source Software Design and Lab. (오픈소스소프트웨어설계및실습)',
          description: "Open source software (OSS) is software whose source code is publicly available, and professional developers today are expected both to build on OSS responsibly and to understand how to participate in open communities. This course supports that goal by teaching Git as a representative version-control system and GitHub as a collaboration platform built on those workflows. Hands-on work uses JavaScript—widely used across OSS ecosystems—as the primary vehicle for practicing the ideas introduced in lecture.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/open-source-software-design-and-lab/";
            },},{id: "courses-probability-and-statistics-확률및통계",
          title: 'Probability and Statistics (확률및통계)',
          description: "Statistics is the discipline of learning from data; this course follows the natural progression from descriptive statistics through probability to inferential statistics. In the descriptive part, students learn how to summarize and visualize collected data in ways that reveal structure without overclaiming. The probability segment develops core ideas of chance, random variables, and distributions as the language for quantifying uncertainty. The inferential part then turns to methods for drawing justified conclusions about populations from samples, connecting each step to the earlier material.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/probability-and-statistics/";
            },},{id: "courses-seminar-for-computer-engineering-beginners-컴퓨터공학입문세미나",
          title: 'Seminar for Computer Engineering Beginners (컴퓨터공학입문세미나)',
          description: "This course is intended for entering students: it surveys the breadth of computer and information engineering and cultivates the foundational literacy expected of students in the discipline. Through introductions to research labs and ongoing work across the department, students deepen their understanding of what the field encompasses while also building a stronger sense of identity and belonging within the undergraduate program.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/seminar-for-computer-engineering-beginners/";
            },},{id: "research-optimizing-demand-responsive-transport-drt-scheduling",
          title: 'Optimizing Demand-Responsive Transport (DRT) Scheduling',
          description: "Chanjin Kim",
          section: "Research",handler: () => {
              window.location.href = "/research/optimizing_drt/";
            },},{id: "research-an-interactive-visualization-system-for-microscopic-simulation-based-safety-analysis-at-urban-intersections",
          title: 'An Interactive Visualization System for Microscopic Simulation-Based Safety Analysis at Urban Intersections',
          description: "Jeho Lee",
          section: "Research",handler: () => {
              window.location.href = "/research/sumo_visualizaion/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
