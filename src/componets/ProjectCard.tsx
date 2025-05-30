const ProjectCard: React.FC<{
  title: string;
  description: string;
  link: string;
}> = ({
  title = "Default Project Title",
  description = "Default Project Description",
  link = "#",
}) => {
  return (
    <div
      id="project"
      className="card shadow-xl dark:bg-base-200 p-4 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
      </div>
      <a href={link} className="btn btn-primary">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
