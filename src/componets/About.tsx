import profileImage from "../assets/images/profile.jpg"; // Import the image

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="lg:text-3xl text-sm font-bold mb-4">About Me</h1>

      <div className=" flex container mx-auto p-4  justify-center flex-col items-center">
        <img
          className="rounded-full avatar avatar-md w-[150px] h-[150px] mx-auto mb-4"
          src={profileImage}
          alt="Profile"
        />
        <p>Software Developer</p>
      </div>
      <p>
        I’m a passionate software developer with a focus on creating innovative
        solutions. My expertise spans various programming languages and
        frameworks, allowing me to tackle diverse projects with creativity and
        precision. I thrive on challenges and am always eager to learn and grow
        in the ever-evolving tech landscape.
      </p>
    </div>
  );
};

export default About;
