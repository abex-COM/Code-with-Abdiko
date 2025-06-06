import { Briefcase, Code, GraduationCap } from "lucide-react";
import About from "../componets/About";
import ProfileCard from "../componets/Hero";
import ProjectCard from "../componets/ProjectCard";
import SkillCard from "../componets/SkillCard";
import ExperienceTimeline from "../componets/ExperienvceTimeline";
import ContactUs from "../componets/ContactUs";
const timelineData = [
  {
    icon: <Briefcase className="text-gray-700" />,
    title: "Intern at SSGI Company",
    subtitle: "Summer 2024",
  },
  {
    icon: <GraduationCap className="text-gray-700" />,
    title: "BSc in Computer Science",
    subtitle: "Haramaya University, Graduated 2025",
  },
  {
    icon: <Code className="text-gray-700" />,
    title: "React & React Native Projects",
    subtitle:
      "Developed several apps including chatbots, dashboards, and mobile UIs",
  },
];

const projectData = [
  {
    title: "Abbabiyo",
    description:
      "Abbabiyo is a multilingual AI assistant for Ethiopian farmers, offering farming tips, disease detection, and real-time updates",
    link: "#",
  },
  {
    title: "Grading System",
    description:
      "Grading System is a simple web app that helps Ethiopian students and educators calculate GPAs, manage grades, and track academic performance with ease.",
    link: "#",
  },
  {
    title: "Project Monitoring System",
    description:
      "Project Monitoring System is a comprehensive tool designed to help organizations track project progress, manage resources, and ensure timely delivery.",
    link: "#",
  },
  {
    title: "Attenzo",
    description:
      "Attenzo Mobile is a mobile app for taking and managing employee attendance efficiently. It simplifies tracking work hours and attendance records, helping organizations streamline workforce management..",
    link: "#",
  },
];
const skills = [
  "React",
  "React Native",
  "Javascript",
  "python",
  "c++",
  "Node js",
];
export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto p-4 ">
        <ProfileCard />
        <About />
        <div className="m-8 shadow-md p-2">
          <h1 className="mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-100">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <div className="m-8 shadow-md p-2">
          <h1 className="mb-8">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-blend-color-burn">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill} />
            ))}
          </div>
        </div>
        <div id="experience" className="m-8 shadow-md p-2">
          <h1 className="mb-8">Experience & Education</h1>
          {timelineData.map((item, index) => (
            <ExperienceTimeline
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
