import { wefuzz,threado,eagleowl,fabolic } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    designer,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Engineer",
        company_name: "Freelance",
        icon: designer,
        iconBg: "#accbe1",
        date: "Aug 2023 - Present",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",

            "Delivered scalable frontend solutions across 5+ products—including dashboards, marketingwebsites, and dynamic  UIcomponents—resulting in a 25% increase in development efficiency and improved UX consistency. ",
            
            "Built and maintained a shared UI component library using TypeScript andstyled-components,cutting redundant code by 40% and accelerating feature rollout by 30%.",
        ],
    },
    {
        title: "Frontend Engineer",
        company_name: "Wefuzz",
        icon: wefuzz,
        iconBg: "#fbc3bc",
        date: "Nov 2022 - Jun 2023",
        points: [
            "Built a high-performance frontend dashboard for a bug bounty management app using TypeScript and Next.js, reducing page load time by 35%.",

            "Supervised a junior frontend developer, enforcing coding standards and best practices, resulting in a 40% improvement in code review efficiency.",
            
            "Optimized website performance through code splitting, minification, and image compression, improving the Lighthouse performance score by 25%.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "EagleOwl",
        icon: eagleowl,
        iconBg: "#b7e4c7",
        date: "Aug 2021 - Oct 2022",
        points:[
            "Developed pixel-perfect, responsive webpages from design mockups, improved load times by 20%.",
            "Developed and maintained responsive web applications using React, Redux, and JavaScript ES6, achieving 99.9% uptime and 25% faster feature deployment.",
            "Partnered with cross-functional teams (design, QA, back-end) in 5+ projects to deliver user-centric applications, increasing user satisfaction scores by 15%, reducing integration bugs by 30%."
          ],
    },
    {
        title: "Software Engineer consultant",
        company_name: "Threado",
        icon: threado,
        iconBg: "#a2d2ff",
        date: "Jan 2021 - JUl 2021",
        points: [
      "Developed interactive UI components using React and Next.js, boosting user engagement by 25% and reducing time-to-interaction by 40%.",
  "Applied responsive design principles to ensure seamless performance, reducing mobile bounce rates by 30%.",
        ],
    },
    {
        title: "Executive Software Engineer",
        company_name:"Fabolic",
        icon: fabolic,
        iconBg: "#a2d2ff",
        date: "Jul 2017 - Oct 2018",
        points: [
            "Built and maintained a custom WordPress site with a responsive theme, 90+ PageSpeed score, custom plugin/API integrations.",
            "Implemented SEO best practices and schema markup, increasing organic search traffic by 35%.",
            "Integrated third-party analytics and tracking tools, improving user behavior insights and conversion optimization.",
        ]
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Anurag1096',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/anurag-chakravarty-832338a6',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];