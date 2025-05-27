const ProfileCard: React.FC = () => {
  return (
    <div
      className="relative h-[20rem] w-full flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-indigo-600 to-purple-700 animate-gradient-shift"
    >
      {/* Background overlay elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.1)_0%,transparent_25%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_70%,rgba(255,255,255,0.1)_0%,transparent_25%)]"></div>

      {/* Content */}
      <div className="relative z-10 px-8 py-12 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Abdulhaki Mustefa
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-white/90 drop-shadow-md">
          Software Developer
        </h2>
      </div>
    </div>
  );
};

export default ProfileCard;
