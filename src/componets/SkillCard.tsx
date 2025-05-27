const SkillCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="card shadow-xl dark:bg-success/10 p-4 flex flex-col justify-between">
      <div className="flex items-center justify-center mb-4">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
