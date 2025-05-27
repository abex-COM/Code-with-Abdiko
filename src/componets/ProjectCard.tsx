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
    <div className="card bg-base-100 shadow-xl p-4 flex flex-col justify-between">
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
