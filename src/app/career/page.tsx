import RoadmapPreview, { type RoadmapData } from '@/components/RoadmapPreview';

const mlTvetRoadmap: RoadmapData = {
  title: 'Machine Learning — TVET Career Roadmap',
  description:
    'Hands-on pathway for TVET learners to become ML technicians/engineers: foundations, tooling, projects, and industry readiness for Rwanda and the region.',
  modules: [
    {
      name: 'Math & Logic Basics',
      description:
        'Algebra, functions, statistics, probability, and thinking in systems for ML tasks.',
    },
    {
      name: 'Python for ML',
      description:
        'Python setup, virtual envs, NumPy, pandas, matplotlib, notebooks, and scripts.',
    },
    {
      name: 'Data Handling',
      description:
        'Collecting, cleaning, labeling, and versioning data; spreadsheet to pandas workflow.',
    },
    {
      name: 'Supervised Learning',
      description:
        'Regression and classification with scikit-learn; model evaluation and baselines.',
    },
    {
      name: 'Model Deployment Basics',
      description:
        'Export, serve with FastAPI, containerize with Docker; simple cloud deploy.',
    },
    {
      name: 'Computer Vision (TVET)',
      description:
        'Image datasets, augmentation, transfer learning for defect detection and safety.',
    },
    {
      name: 'MLOps Fundamentals',
      description:
        'Experiment tracking, data/version control, monitoring; practical pipelines.',
    },
    {
      name: 'Edge & Industrial AI',
      description:
        'On-device inference, compressed models, integrating with IoT and PLC data.',
    },
    {
      name: 'Capstone & Portfolio',
      description:
        'Real local problem: agriculture, manufacturing, energy, or smart city project.',
    },
  ],
  salaries: [
    { level: 'entry', range: 'RWF 300k - 600k / mo' },
    { level: 'mid', range: 'RWF 600k - 1.1M / mo' },
    { level: 'senior', range: 'RWF 1.1M - 1.8M / mo' },
  ],
  companies: [
    { name: 'BK Tech House' },
    { name: 'Irembo' },
    { name: 'Andela' },
    { name: 'Awesomity Lab' },
    { name: 'MTN Rwanda' },
    { name: 'RISA' },
    { name: 'African Leadership University' },
    { name: 'Norrsken Network' },
  ],
};

export default function CareerPage() {
  return (
    <div className="font-sans w-full bg-[radial-gradient(1200px_600px_at_50%_-100px,#0b1220_40%,#05070b_100%)] min-h-screen text-white">
      <div className="container-responsive py-8">
        <div className="mb-6 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Machine Learning</h1>
            <p className="text-white/70 text-sm sm:text-base mt-1">
              Step-by-step guide to becoming an ML technician/engineer via the
              TVET path.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              Roadmap
            </span>
            <button
              type="button"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              Schedule Learning Time
            </button>
            <button
              type="button"
              className="rounded-full border border-white/15 bg-yellow-500/10 text-yellow-300 px-3 py-1 hover:bg-yellow-500/20"
            >
              Download
            </button>
            <button
              type="button"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              Share
            </button>
          </div>
        </div>

        <RoadmapPreview roadmapData={mlTvetRoadmap} />
      </div>
    </div>
  );
}
