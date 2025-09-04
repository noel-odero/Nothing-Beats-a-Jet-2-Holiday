import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="section bg-background">
        <div className="container-responsive grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <span className="chip w-fit bg-[--color-accent] text-[--color-accent-foreground]">
              Next.js + Tailwind PWA
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Make TVET attractive, transparent, and connected to industry
            </h1>
            <p className="text-[17px] text-muted-foreground max-w-prose">
              A mobile-first platform linking TVET learners, prospective
              students, and private sector institutions in one ecosystem—closing
              Rwanda’s skills gap with stories, credentials, and real
              opportunities.
            </p>
            <div className="flex items-center gap-3">
              <a href="#get-started" className="btn-primary h-11 px-5">
                Get started
              </a>
              <a href="#learn-more" className="btn-outline h-11 px-5">
                Learn more
              </a>
            </div>
            <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[--color-brand]"></span>{' '}
                PWA, offline-ready
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[--color-brand]"></span>{' '}
                Modular & scalable
              </div>
            </div>
          </div>
          <div className="relative h-[260px] md:h-[380px] rounded-[--radius-lg] overflow-hidden shadow-[--shadow-lg]">
            <Image
              src="/window.svg"
              alt="Platform preview"
              fill
              className="object-contain p-10 opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Audience value props */}
      <section id="learn-more" className="section bg-[--color-surface]">
        <div className="container-responsive grid gap-6">
          <h2 className="text-3xl">
            One platform. Three audiences. Shared outcomes.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <h3 className="text-xl">Prospective learners</h3>
              <p className="mt-2 text-muted-foreground">
                Discover success stories, career roadmaps, expected salaries,
                and accredited institutions.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Guided exploration flows</li>
                <li>• Salary transparency</li>
                <li>• Institution finder</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl">TVET students</h3>
              <p className="mt-2 text-muted-foreground">
                Gamified learning, digital badges, auto-CVs, job matching, and
                leaderboards.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• XP and streaks</li>
                <li>• Verified badges</li>
                <li>• Jobs and internships</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl">Employers</h3>
              <p className="mt-2 text-muted-foreground">
                Track students, issue credentials, and hire from a verified
                talent pool.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Dashboard & reports</li>
                <li>• Digital credentialing</li>
                <li>• Direct outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="section bg-background">
        <div className="container-responsive grid gap-6">
          <h2 className="text-3xl">Real stories, real outcomes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[--color-surface] border border-[--color-border]" />
                  <div>
                    <p className="font-medium">Alice U.</p>
                    <p className="text-xs text-muted-foreground">
                      Automotive Tech • Year 2
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  “I earned badges, built my CV automatically, and matched with
                  a paid internship within 3 weeks.”
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  <div className="chip">+2 badges</div>
                  <div className="chip">CV ready</div>
                  <div className="chip">Internship</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="section bg-[--color-surface]">
        <div className="container-responsive grid gap-6">
          <h2 className="text-3xl">Built for outcomes</h2>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              {
                title: 'Gamified learning',
                desc: 'XP, streaks, and missions keep motivation high.',
              },
              {
                title: 'Digital badges',
                desc: 'Verified skills via portable credentials.',
              },
              {
                title: 'Auto-generated CV',
                desc: 'One tap to export a polished resume.',
              },
              {
                title: 'Job matching',
                desc: 'Recommendations from employer needs.',
              },
              {
                title: 'Leaderboards',
                desc: 'Celebrate progress and friendly competition.',
              },
            ].map((f) => (
              <div key={f.title} className="card">
                <h3 className="text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employers portal */}
      <section className="section bg-background">
        <div className="container-responsive grid gap-6 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl">Employers: engage early, hire faster</h2>
            <p className="mt-3 text-muted-foreground max-w-prose">
              Track learners, issue digital credentials, and access a verified
              talent pool. Get insights through dashboards and reports to inform
              hiring and training.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Pipeline visibility and filters</li>
              <li>• Badge issuance and verification</li>
              <li>• Analytics on skills supply</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#get-started" className="btn-primary h-11 px-5">
                Join employer beta
              </a>
              <a href="#demo" className="btn-outline h-11 px-5">
                View demo
              </a>
            </div>
          </div>
          <div className="relative h-[220px] md:h-[320px] rounded-[--radius-lg] overflow-hidden shadow-[--shadow-lg] order-1 md:order-2">
            <Image
              src="/globe.svg"
              alt="Employers dashboard"
              fill
              className="object-contain p-10 opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Credibility / trust */}
      <section className="section bg-[--color-surface]">
        <div className="container-responsive grid gap-6">
          <h2 className="text-3xl">Why it matters</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card text-center">
              <p className="text-4xl font-semibold">70%+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Of new jobs often require degrees—closing doors to STARs
              </p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-semibold">1 ecosystem</p>
              <p className="text-sm text-muted-foreground mt-1">
                Students, learners, and employers connected in one place
              </p>
            </div>
            <div className="card text-center">
              <p className="text-4xl font-semibold">Mobile-first</p>
              <p className="text-sm text-muted-foreground mt-1">
                PWA optimized for low-bandwidth and offline moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="get-started" className="section bg-background">
        <div className="container-responsive">
          <div className="card flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl">Be part of Rwanda’s skills story</h3>
              <p className="text-muted-foreground mt-1">
                Try the prototype with mock data today—integrations coming soon.
              </p>
            </div>
            <div className="flex gap-3">
              <a className="btn-primary h-11 px-5" href="#">
                Try prototype
              </a>
              <a className="btn-outline h-11 px-5" href="#">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section bg-[--color-surface]">
        <div className="container-responsive flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TVET Platform • Next.js + Tailwind
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Terms
            </a>
            <a className="hover:underline" href="#">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
