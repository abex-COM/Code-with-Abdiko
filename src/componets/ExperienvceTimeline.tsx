// ExperienceTimeline.tsx
import type { JSX } from "react";

const ExperienceTimeline: React.FC<{
  title: string;
  subtitle: string;
  icon: JSX.Element;
}> = ({ title, subtitle, icon }) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="space-y-6 border-l-2 border-gray-200 pl-4">
        <div className="relative">
          <div className="absolute -left-9 -top-9 bg-white rounded-full border-2 border-gray-300 p-1 ">
            {icon}
          </div>
          <h3 className="text-md font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceTimeline;
