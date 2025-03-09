
import { ArrowUpRight } from 'lucide-react';

const Leadership = () => {
  return (
    <div className="group w-full md:w-2/3 p-6 bg-white/70 backdrop-blur-md border border-neutral-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in animate-delay-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900">Leadership</h2>
        <span className="text-neutral-400 group-hover:text-neutral-700 transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="bg-neutral-50 border border-neutral-100 rounded-md p-3">
          <div className="text-xs font-medium text-neutral-500 mb-1">2021 - Present</div>
          <div className="font-medium">Tech Lead</div>
          <p className="text-sm text-neutral-600 mt-1">
            Leading a team of 5 engineers to deliver scalable products
          </p>
        </div>
        <div className="bg-neutral-50 border border-neutral-100 rounded-md p-3">
          <div className="text-xs font-medium text-neutral-500 mb-1">2019 - 2021</div>
          <div className="font-medium">Senior Developer</div>
          <p className="text-sm text-neutral-600 mt-1">
            Mentored junior developers and managed critical projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
