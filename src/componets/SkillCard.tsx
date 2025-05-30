const SkillCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      id="skill"
      className="card shadow-xl dark:bg-blend-lighten p-4 flex flex-col justify-between hover:bg-base hover:shadow-2xl transition-shadow duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center mb-4">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
