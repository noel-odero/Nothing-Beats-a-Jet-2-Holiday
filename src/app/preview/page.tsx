import RoadmapPreview, { type RoadmapData } from '@/components/RoadmapPreview';

const sampleRoadmap: RoadmapData = {
  title: 'Electrical Engineering TVET Pathway',
  description:
    'Explore hands-on modules to become an in-demand electrical technician and engineer in Rwanda. Build core skills and get job-ready.',
  modules: [
    {
      name: 'Safety & Tools',
      description: 'Electrical safety, PPE, measurement tools.',
    },
    {
      name: 'Basic Circuits',
      description: 'Ohm’s law, series/parallel, breadboarding.',
    },
    {
      name: 'Wiring & Installations',
      description: 'Residential wiring, conduits, panels.',
    },
    {
      name: 'Machinery & Motors',
      description: 'AC/DC motors, starters, maintenance.',
    },
    {
      name: 'Solar & Renewables',
      description: 'PV systems, inverters, battery banks.',
    },
    {
      name: 'Diagnostics',
      description: 'Troubleshooting, multimeters, fault isolation.',
    },
  ],
  salaries: [
    { level: 'entry', range: 'RWF 250k - 400k / mo' },
    { level: 'mid', range: 'RWF 400k - 700k / mo' },
    { level: 'senior', range: 'RWF 700k - 1.2M / mo' },
  ],
  companies: [
    { name: 'REG' },
    { name: 'MTN Rwanda' },
    { name: 'BK Tech House' },
    { name: 'Andela' },
    { name: 'BBOXX' },
    { name: 'Jibu' },
    { name: 'Irembo' },
    { name: 'Habona' },
  ],
};

export default function PreviewPage() {
  return (
    <div className="font-sans w-full bg-[radial-gradient(1200px_600px_at_50%_-100px,#0b1220_40%,#05070b_100%)] min-h-screen text-white">
      <div className="container-responsive py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Preview Roadmap</h1>
          <p className="text-white/70 text-sm sm:text-base mt-1">
            A quick look at a TVET pathway with modules, salaries, and hiring
            companies.
          </p>
        </div>

        <RoadmapPreview roadmapData={sampleRoadmap} />
      </div>
    </div>
  );
}
