import FotoProfile from "./AssetPorto/LogoVS.png";
import VSTravel from "./AssetPorto/VSTravel1.png";
import Akses1 from "./AssetPorto/AksesEDU.png";
import { desc } from "framer-motion/client";


const Projects_Data = [
  {
    id: 1,
    img: VSTravel, // path gambar
    title: "VSTravel",
    
    github: "https://github.com/fabijandito/VSTravel",
    live: "https://vs-travel-flax.vercel.app/",
    desc: "A travel agency web application for booking trips with accommodation and meal options.",
    longDesc: "VSTravel is a comprehensive travel agency web application designed to streamline the trip booking process for users. The platform offers a user-friendly interface that allows users to easily search for and book trips, complete with accommodation and meal options for durations of 4 to 5 days. Key features of VSTravel include a detailed trip catalog, secure payment processing, and personalized user accounts for managing bookings. The application is built using modern web technologies to ensure a seamless and responsive experience across all devices.",
    features:["Customizable trip itineraries",
      "Destination recommendations",
      "Budget tracking system"],
    technologies:["HTML","CSS","Javascript"]
  },

   {
    id: 2,
    img: Akses1, // path gambar
    title: "Akses EDU",
    desc: "An educational platform providing students with access to learning resources and interactive tools.",
    longDesc: "Akses EDU is an educational platform designed to provide students with access to a wide range of learning resources and tools. The platform features interactive lessons, quizzes, and multimedia content to enhance the learning experience. Akses EDU also includes a community forum where students can collaborate and share knowledge. The platform is built with a focus on user engagement and accessibility, ensuring that students of all backgrounds can benefit from its offerings.",
    features:[ "Interactive learning materials",
      "Practice quizzes with instant results",
      "Mentor Q&A feature"],
    github: "https://github.com/fabijandito/AksesEdu1",
    
    live: "https://akses-edu1.vercel.app/",
    technologies:["HTML","CSS","Javascript"]
  },

  
  
];

export default Projects_Data
