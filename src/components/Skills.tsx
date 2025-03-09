
import { Code, Database, Layout, Layers, PenTool, ScreenShare } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skills: Skill[] = [
    { 
      name: 'Frontend', 
      icon: <Layout className="w-4 h-4" /> 
    },
    { 
      name: 'Backend', 
      icon: <Database className="w-4 h-4" /> 
    },
    { 
      name: 'UI/UX', 
      icon: <PenTool className="w-4 h-4" /> 
    },
    { 
      name: 'Architecture', 
      icon: <Layers className="w-4 h-4" /> 
    },
    { 
      name: 'DevOps', 
      icon: <ScreenShare className="w-4 h-4" /> 
    },
    { 
      name: 'Coding', 
      icon: <Code className="w-4 h-4" /> 
    },
  ];

  return (
    <div className="w-full md:w-1/3 p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-100">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border border-neutral-100 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
