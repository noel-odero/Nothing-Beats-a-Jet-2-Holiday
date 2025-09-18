import RoadmapPreview, { type RoadmapData } from '@/components/RoadmapPreview';

const mlTvetRoadmap: RoadmapData = {
  title: 'Welding Fundamentals — TVET Career Roadmap',
  description:
    'Practical pathway for TVET learners to become industry-ready welders: safety, materials, tools, core welding processes, quality control, and hands-on fabrication.',
  modules: [
    {
      name: 'Workshop Safety & PPE',
      description:
        'Hazard awareness, fire safety, ventilation, protective gear, safe tool handling, first aid basics.',
    },
    {
      name: 'Materials & Basic Metallurgy',
      description:
        'Steel types, alloys, heat effects (HAZ), corrosion, and how materials respond to heat.',
    },
    {
      name: 'Tools, Setup & Maintenance',
      description:
        'Power sources, regulators, torches, grinders, clamps, and daily equipment checks.',
    },
    {
      name: 'Welding Processes Overview',
      description:
        'SMAW (stick), GMAW/MIG, GTAW/TIG, and oxy-acetylene—pros/cons, consumables, typical use cases.',
    },
    {
      name: 'Joints, Positions & Symbols',
      description:
        'Butt, lap, tee, corner joints; flat, horizontal, vertical, overhead; reading welding symbols.',
    },
    {
      name: 'SMAW Fundamentals & Practice',
      description:
        'Electrode selection, striking/arc length, bead types, fillet welds, common defects and fixes.',
    },
    {
      name: 'Measuring, Layout & Fit-up',
      description:
        'Using squares, gauges, and jigs; tolerances; preparing edges; tacking strategies for alignment.',
    },
    {
      name: 'Quality Control & Inspection',
      description:
        'Visual inspection, weld defects (porosity, undercut), NDT basics (dye-penetrant, magnetic).',
    },
    {
      name: 'Fabrication Project & Portfolio',
      description:
        'Build a simple frame or bracket to spec; finishing, documentation, and safety checklist.',
    },
  ],
  salaries: [
    { level: 'entry', range: 'RWF 250k - 450k / mo' },
    { level: 'mid', range: 'RWF 450k - 800k / mo' },
    { level: 'senior', range: 'RWF 800k - 1.2M / mo' },
  ],
  companies: [
    { name: 'C&H Garments' },
    { name: 'NPD Ltd' },
    { name: 'Ameki Color' },
    { name: 'Skol Brewery' },
    { name: 'SULFO Rwanda' },
    { name: 'Prime Cement' },
    { name: 'Inyange Industries' },
    { name: 'Utexrwa' },
  ],
};

export default function CareerPage() {
  return (
    <div className="font-sans w-full bg-white min-h-screen text-slate-900 relative">
      {/* Subtle purple gradient background blending into white */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-purple-50 via-fuchsia-50 to-transparent"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">
              Live Learning Path
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900">
            Welding Fundamentals
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Master the art of Welding through our comprehensive TVET pathway.
            From fundamentals to industry deployment, build real-world skills
            that matter.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>9 Modules</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>6-12 Months</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Industry Ready</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="group relative px-8 py-4 rounded-full font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] bg-gradient-to-r from-purple-600 to-indigo-600">
            <span className="relative z-10">Start Learning Journey</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur opacity-0 group-hover:opacity-60 transition-opacity duration-200"></span>
          </button>

          <button className="px-8 py-4 bg-white border border-slate-200 rounded-full font-semibold text-slate-900 hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02] shadow-sm">
            Download Roadmap
          </button>

          <button className="px-8 py-4 bg-white border border-slate-200 rounded-full font-semibold text-slate-900 hover:bg-slate-50 transition-all duration-200 hover:scale-[1.02] shadow-sm">
            Share with Network
          </button>
        </div>

        <RoadmapPreview roadmapData={mlTvetRoadmap} />
      </div>
    </div>
  );
}
