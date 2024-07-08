export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  // Set the baseURL accordingly
  const baseURL = 'portfolio-website';
  export const gridItems = [
    {
      id: 1,
      title: "Adaptable and Flexible",
      description: "Thriving in dynamic environments and embracing change with a positive attitude.",
      className: "lg:col-span-3 md:col-span-7 md:row-span-10 lg:min-h-[60vh] md:h-[70vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: `${baseURL}/b1.svg`,
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-4",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-6",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: `${baseURL}/grid.svg`,
      spareImg: `${baseURL}/b4.svg`,
    },
  
    {
      id: 5,
      title: "Passionate Learner",
      description: "Always eager to learn and grow, looking for opportunities.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: `${baseURL}/b5.svg`,
      spareImg: `${baseURL}/grid.svg`,
    },
    {
      id: 6,
      title: "Get in Touch Now!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Course Team Project - Contact Book",
      des: "Created a Contact Book in Java, following software engineering principles to enhance code readability and maintainability.",
      img: `${baseURL}/tp.svg`, // Replace with an appropriate image URL
      iconLists: [`${baseURL}/java.svg`, `${baseURL}/git.svg`, `${baseURL}/junit.svg`, `${baseURL}/oop.svg`], // Replace with actual tech stack icons
      link: "https://github.com/songfangyl/Team-Project-EzContact", // Replace with actual project link if available
    },
    {
      id: 2,
      title: "NiHao - Task Management Program",
      des: "A comprehensive task management program with features to add, delete, mark, unmark, and search tasks.",
      img: `${baseURL}/nihao.svg`,
      iconLists: [`${baseURL}/java.svg`, `${baseURL}/git.svg`, `${baseURL}/junit.svg`, `${baseURL}/oop.svg`],
      link: "https://github.com/songfangyl/Task-Manager",
    },
    {
      id: 3,
      title: "Hackathon AI Model",
      des: "Utilized coding and AI skills to build a model that finds optimized solutions for real-life problems.",
      img: `${baseURL}/busicase.svg`,
      iconLists: [`${baseURL}/python.svg`, `${baseURL}/oop.svg`],
      link: "https://github.com/songfangyl/BusiCase",
    },
    {
      id: 4,
      title: "Pandemonium - 2D Platformer Game",
      des: "A complete 2D platformer game developed using C# and Unity, featuring game mechanisms, skill trees, and more, built with OOP principles.",
      img: `${baseURL}/game.svg`,
      iconLists: [`${baseURL}/csharp.svg`, `${baseURL}/unity.svg`, `${baseURL}/oop.svg`], 
      link: "https://github.com/songfangyl/Pandemonium-2D-Platformer",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: `${baseURL}/cloud.svg`,
      nameImg: `${baseURL}/cloudName.svg`,
    },
    {
      id: 2,
      name: "appwrite",
      img: `${baseURL}/app.svg`,
      nameImg: `${baseURL}/appName.svg`,
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: `${baseURL}/host.svg`,
      nameImg: `${baseURL}/hostName.svg`,
    },
    {
      id: 4,
      name: "stream",
      img: `${baseURL}/s.svg`,
      nameImg: `${baseURL}/streamName.svg`,
    },
    {
      id: 5,
      name: "docker.",
      img: `${baseURL}/dock.svg`,
      nameImg: `${baseURL}/dockerName.svg`,
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Backend Developer at Ant International",
      desc: "Designed and implemented micro-services using Spring Boot, conducted system analysis and database table design.",
      className: "md:col-span-2",
      thumbnail: `${baseURL}/exp1.svg`,
    },
    {
      id: 2,
      title: "Software Developer Intern at All Round Square",
      desc: "Designed website appearance using JavaScript, HTML, and CSS for responsiveness, and implemented dynamic content rendering with Jinja syntax and jQuery.",
      className: "md:col-span-2",
      thumbnail: `${baseURL}/exp2.svg`,
    },
    {
      id: 3,
      title: "Team Lead, King Edward VII Hall Web",
      desc: "Led a team of 8 members to maintain and update hall landing page, developed a new camera and equipment borrowing system.",
      className: "md:col-span-2",
      thumbnail: `${baseURL}/exp4.svg`,
    },
    {
      id: 4,
      title: "Teaching Assistant at NUS",
      desc: "Guided two classes of approximately 20 undergraduate students during lab sessions, enhanced students' understanding of core concepts in Computer Organization.",
      className: "md:col-span-2",
      thumbnail: `${baseURL}/exp3.svg`,
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: `${baseURL}/git.svg`,
      link: "https://github.com/songfangyl/",
    },
    {
      id: 2,
      img: `${baseURL}/insta.svg`,
      link: "https://www.instagram.com/fangyl_10/",
    },
    {
      id: 3,
      img: `${baseURL}/link.svg`,
      link: "https://www.linkedin.com/in/song-fang-yi-259400258",
    },
  ];