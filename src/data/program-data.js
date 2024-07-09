import program_1 from '@assets/img/program/home-program-1.jpg';
import program_2 from '@assets/img/program/home-program-2.jpg';
import program_3 from '@assets/img/program/home-program-3.jpg';
import program_4 from '@assets/img/program/home-program-4.jpg';
import program_5 from '@assets/img/program/home-program-5.jpg';
import program_6 from '@assets/img/program/home-program-1.jpg';
import ProgramIconOne from '@svg/program-icon-1';
import ProgramIconTwo from '@svg/program-icon-2';
import ProgramIconThree from '@svg/program-icon-3';
import ProgramIconFour from '@svg/program-icon-4';
import ProgramIconFive from '@svg/program-icon-5';
import ProgramIconSix from '@svg/program-icon-6';
import author_1 from "@assets/img/program/author-1.png";

const program_data = [
  {
    id:1,
    title:'First Semister',
    img:program_1,
    description:'Build a strong foundation with essential concepts and skills.',
    largedescription:"Establish a solid foundation by learning the essential concepts and basic skills across all core subjects, setting the stage for future academic success.",
    largedescription2:" description:'Build a strong foundation with essential concepts and skills.",
    largedescription:"Establish a solid foundation by learning the essential concepts and basic skills across all core subjects, setting the stage for future academic success.",
    icon: <ProgramIconOne />,
    clrClass:'clr-1',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 175.00,
    delay:'.2s',
    programs:[
      {
        id: 1,
        title: '6-7 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:2,
    title:'Second Semister',
    img:program_2,
    description:'Dive deeper into core subjects and practical applications.',
    largedescription:"Dive deeper into the core subjects, focusing on practical applications and building upon the knowledge gained in the first semester, with an emphasis on hands-on learning.",
    largedescriptio2:"Participate in collaborative projects and interactive sessions to reinforce theoretical understanding, and begin to develop critical thinking and analytical skills through group discussions and problem-solving exercises.",
    icon: <ProgramIconTwo />,
    clrClass:'clr-2',
    delay:'.3s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 195.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:3,
    title:'Third Semister',
    img:program_3,
    description:'Enhance your knowledge with advanced topics and hands-on projects.',
    largedescription:"Enhance your understanding with advanced topics, integrating theoretical knowledge with practical projects to develop a comprehensive skill set and problem-solving abilities.",
    largedescription3:"Engage in case studies, lab work, and workshops that challenge you to apply your knowledge creatively, and work on interdisciplinary projects that require innovative approaches and teamwork.",
    icon: <ProgramIconThree />,
    clrClass:'clr-3',
    delay:'.4s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 285.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '3.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:4,
    title:'fourth Semister',
    img:program_4,
    description:'Explore specialized subjects and gain industry-relevant insights.',
    largedescription:"Explore specialized subjects tailored to your field of study, gaining industry-relevant insights and advanced practical skills that prepare you for specific career paths.",
    largedescription2:"Attend seminars from industry experts and start working on real-world simulations to hone your skills, and participate in field visits to gain exposure to professional environments and practices.",
    icon: <ProgramIconFour />,
    clrClass:'clr-4',
    delay:'.5s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 140.00,
    programs:[
      {
        id: 1,
        title: '3-4 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '4.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:5,
    title:'Fifth Semister',
    img:program_5,
    description:'Prepare for real-world challenges with comprehensive training and workshops.',
    largedescription:"Prepare for real-world challenges through comprehensive training, workshops, and internships, providing you with the experience and confidence needed to excel in your chosen profession.",
    largedescription2:"Focus on practical problem-solving, participate in industry placements, and develop a professional network, while also receiving mentorship from experienced professionals to guide your career development.",
    icon: <ProgramIconFive />,
    clrClass:'clr-5',
    delay:'.6s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 150.00,
    programs:[
      {
        id: 1,
        title: '4-5 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '5.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:6,
    title:'Sixth Semister',
    img:program_6,
    description:'Focus on elective courses tailored to your career goals.',
    largedescription:"Focus on elective courses that align with your career goals, allowing you to tailor your education to your interests and develop expertise in specialized areas.",
    largedescription2:"Engage in independent research projects, undertake advanced coursework in your chosen electives, and participate in academic conferences to present your research findings and network with peers and experts in your field.",
    icon: <ProgramIconSix />,
    clrClass:'clr-6',
    delay:'.7s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 170.00,
    programs:[
      {
        id: 1,
        title: '5-6 Yrs',
        subTitle: 'age',
      },
      {
        id: 2,
        title: '5 Days',
        subTitle: 'weekly',
      },
      {
        id: 3,
        title: '6.30 Hrs',
        subTitle: 'period',
      }
    ]
  },
  {
    id:7,
    title:'Seven Semister',
    img:program_6,
    description:'Complete your diploma with capstone projects and professional preparation.',
    largedescription:"Complete your diploma with capstone projects and professional preparation, integrating all the knowledge and skills acquired throughout your studies to demonstrate your readiness for the professional world.",
    largedescription2:"Work on a final thesis or capstone project that showcases your comprehensive understanding of the subject matter, participate in career workshops, and prepare for job interviews and professional certifications to smoothly transition into your career.",
    icon: <ProgramIconSix />,
    clrClass:'clr-6',
    delay:'.7s',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 170.00,
    programs:[
      {
        id: 1,
        title: '6 Hours',
        subTitle: 'Per Days',
      },
      {
        id: 2,
        title: '1-2',
        subTitle: 'Shift',
      },
      {
        id: 3,
        title: '2 Hrs',
        subTitle: 'period',
      }
    ]
  },
  
]

export default program_data;