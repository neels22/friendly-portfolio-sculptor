
import { Code, Database, Layout, Layers, PenTool, ScreenShare, Cpu, Shield, BarChart, BookOpen } from 'lucide-react';

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
    { 
      name: 'ML/AI', 
      icon: <Cpu className="w-4 h-4" /> 
    },
    { 
      name: 'Security', 
      icon: <Shield className="w-4 h-4" /> 
    },
    { 
      name: 'Analytics', 
      icon: <BarChart className="w-4 h-4" /> 
    },
    { 
      name: 'Learning', 
      icon: <BookOpen className="w-4 h-4" /> 
    },
  ];

  return (
    <div className="h-full w-full p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-100">
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
      
      <div className="mt-6 p-4 bg-neutral-50 border border-neutral-100 rounded-md">
        <h3 className="text-md font-medium text-neutral-800 mb-2">Expertise</h3>
        <p className="text-sm text-neutral-600">
          Specialized in modern web frameworks, cloud infrastructure, and responsive design. Experienced in building scalable applications with a focus on performance and user experience.
        </p>
      </div>
    </div>
  );
};

export default Skills;
