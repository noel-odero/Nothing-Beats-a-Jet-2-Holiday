"use client";
import Link from "next/link";
import Image from "next/image";
import { Play, BadgeCheck, ChevronDown, Star, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockReviews, Review } from "@/lib/mock";

const people = [
  {
    name: "Jean Bosco Nshimiyimana",
    role: "Electrical Engineer",
    salary: "RWF 450,000/month",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Aline Uwamariya",
    role: "Fashion Designer",
    salary: "RWF 380,000/month",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Eric Ndayambaje",
    role: "Construction Supervisor",
    salary: "RWF 520,000/month",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Grace Umutoni",
    role: "Automotive Technician",
    salary: "RWF 400,000/month",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

// Hardcoded translations
const translations = {
  en: {
    nav: {
      home: "Home",
      exploreCareers: "Explore Careers",
      successStories: "Success Stories",
      forStudents: "For Students",
      forInstitutions: "For Institutions",
      login: "Login",
      joinNextwork: "Join Nextwork",
    },
    hero: {
      badge: "Connecting TVET Students & Institutions",
      title: "Bridge the skills gap in Rwanda.",
      description:
        "Many young people miss out on TVET opportunities due to lack of awareness, while institutions struggle to find skilled talent. NextWork connects students with career paths, institutions with qualified graduates, and builds Rwanda's workforce.",
      exploreCareers: "Explore Careers",
      seeStories: "See Success Stories",
      stats: {
        students: "Students Connected",
        institutions: "Partner Institutions",
        placement: "Job Placement Rate",
      },
    },
    testimonials: {
      quote1:
        '"NextWork showed me that TVET careers can be just as rewarding as university degrees. I\'m now earning RWF 450,000 as an electrical engineer."',
      quote2:
        '"The platform connected me with the right institution and helped me build skills that employers actually want. I got hired before graduation."',
      quote3:
        '"My family is proud of my success. TVET education through NextWork changed my life completely."',
    },
    impact: {
      title: "Our Impact",
      students: "Students Connected",
      institutions: "Partner Institutions",
      placement: "Job Placement Rate",
      salary: "Average Starting Salary",
    },
    reviews: "What people say",
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What is NextWork?",
          a: "NextWork is a digital platform that connects TVET students, prospective learners, and private sector institutions in Rwanda to bridge the skills gap and improve youth employability.",
        },
        {
          q: "How does NextWork help students?",
          a: "We provide gamified learning experiences, digital badges, CV building tools, job matching, and leaderboards to support TVET students throughout their educational journey.",
        },
        {
          q: "What benefits do institutions get?",
          a: "Institutions can issue digital credentials, track student progress, connect with qualified talent, and increase their engagement in skills development programs.",
        },
        {
          q: "Is NextWork only for TVET students?",
          a: "No! NextWork serves prospective learners exploring career paths, current TVET students, and private sector institutions looking to invest in workforce development.",
        },
        {
          q: "How much does it cost to use NextWork?",
          a: "NextWork offers free access for students and competitive pricing for institutions. Contact us to learn about our flexible plans.",
        },
        {
          q: "What career paths are available on NextWork?",
          a: "We cover all major TVET fields including electrical engineering, construction, automotive, fashion design, hospitality, and many more with transparent salary information.",
        },
        {
          q: "How do I get started?",
          a: "Simply sign up as a student to explore careers and success stories, or contact us to register your institution and start connecting with skilled graduates.",
        },
      ],
    },
    features: {
      title:
        "Empowering students. Connecting institutions. Building Rwanda's future.",
      gamifiedLearning: {
        title: "Gamified Learning",
        description:
          "Interactive courses with digital badges, leaderboards, and progress tracking to keep students engaged.",
      },
      careerExploration: {
        title: "Career Exploration",
        description:
          "Discover TVET career paths with real salary data, success stories, and clear progression routes.",
      },
      jobMatching: {
        title: "Job Matching",
        description:
          "Connect qualified graduates with employers through our intelligent matching system.",
      },
      digitalCredentials: {
        title: "Digital Credentials",
        description:
          "Institutions can issue verifiable digital certificates and track student achievements.",
      },
      cvBuilder: {
        title: "CV Builder",
        description:
          "Students create professional CVs showcasing their TVET skills and achievements.",
      },
      mobileFirst: {
        title: "Mobile-First Design",
        description:
          "Access NextWork anywhere with our mobile-optimized platform designed for young learners.",
      },
    },
    footer: {
      copyright:
        "© 2025 NextWork. Connecting TVET students with opportunities in Rwanda.",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      signupInstitution: "Sign up as Institution",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza",
      exploreCareers: "Shakisha Imyuga",
      successStories: "Inkuru z'Intsinzi",
      forStudents: "Ku banyeshuri",
      forInstitutions: "Ku kigo",
      login: "Injira",
      joinNextwork: "Jya muri NextWork",
    },
    hero: {
      badge: "Guhuza Abanyeshuri ba TVET n'Ibigo",
      title: "Gusiba icunga ry'ubuhanga mu Rwanda.",
      description:
        "Urubyiruko rwinshi rutabona amahirwe yo kwiga ubuhanga kubera kutamenyana, mu gihe ibigo bishakisha abanyeshuri babifitiye ubuhanga. NextWork ihuza abanyeshuri n'inzira z'umwuga, ibigo n'abo barangije amashuri bafite ubuhanga, kandi ikubaka abakozi b'u Rwanda.",
      exploreCareers: "Shakisha Imyuga",
      seeStories: "Reba Inkuru z'Intsinzi",
      stats: {
        students: "Abanyeshuri bahuriwe",
        institutions: "Ibigo Bifatanyije",
        placement: "Igipimo cy'Akazi",
      },
    },
    testimonials: {
      quote1:
        "\"NextWork yanerekeje ko imyuga ya TVET ishobora kuba inyungu nk'impamyabumenyi za kaminuza. Ubu ngira amafaranga 450,000 RWF nk'umuhanga w'amashanyarazi.\"",
      quote2:
        '"Urubuga rwamfashe kubona ikigo cyiza kandi cyamfasha kubaka ubuhanga abacuruzi basaba rwose. Nabonetse akazi mbere yo kurangiza amashuri."',
      quote3:
        '"Umuryango wanjye wishimira intsinzi yanjye. Amashuri ya TVET binyuze muri NextWork yahinduye ubuzima bwanjye burundu."',
    },
    impact: {
      title: "Ingaruka Zacu",
      students: "Abanyeshuri bahuriwe",
      institutions: "Ibigo Bifatanyije",
      placement: "Igipimo cy'Akazi",
      salary: "Umushahara w'Ibanze",
    },
    reviews: "Ibyo abantu bavuga",
    faq: {
      title: "Ibibazo Bikunze Kubazwa",
      items: [
        {
          q: "NextWork ni iki?",
          a: "NextWork ni urubuga rw'ikoranabuhanga ruhuza abanyeshuri ba TVET, abashaka kwiga, n'ibigo by'abikorera mu Rwanda kugira ngo basibe icunga ry'ubuhanga kandi bateze imbere akazi k'urubyiruko.",
        },
        {
          q: "NextWork ifasha abanyeshuri gute?",
          a: "Dutanga uburambe bw'imikino mu kwiga, ibimenyetso bya digitale, ibikoresho byo kubaka CV, guhuriza akazi, n'imbonerahamwe z'iterambere kugira ngo dufashe abanyeshuri ba TVET mu rugendo rwabo rw'uburezi.",
        },
        {
          q: "Ibigo bibona inyungu ki?",
          a: "Ibigo bishobora gutanga impamyabushobozi za digitale, gukurikirana iterambere ry'abanyeshuri, guhuza n'abanyeshuri babafitiye ubuhanga, no kongera uruhare mu gahunda z'iterambere ry'ubuhanga.",
        },
        {
          q: "NextWork ni kubanyeshuri ba TVET gusa?",
          a: "Oya! NextWork ifasha abashaka kwiga bashakisha inzira z'umwuga, abanyeshuri ba TVET b'ubu, n'ibigo by'abikorera bishaka gushora imari mu gutezimbere abakozi.",
        },
        {
          q: "Gukoresha NextWork bihenze kangahe?",
          a: "NextWork itanga ubwisanzure bw'ubuntu ku banyeshuri n'ibiciro bihwanye ku bigo. Dusabire ukumenye ku migendo yacu yoroshye.",
        },
        {
          q: "Ni izihe nzira z'umwuga ziboneka kuri NextWork?",
          a: "Dutwara ibice byinshi bya TVET harimo ubwubatsi bw'amashanyarazi, ubwubatsi, ibinyamakuru, imyambarire, ubushake, n'ibindi byinshi bifite amakuru y'imishahara asobanutse.",
        },
        {
          q: "Ntangira gute?",
          a: "Gusa kwiyandikisha nk'umunyeshuri kugira ngo ushakishe imyuga n'inkuru z'intsinzi, cyangwa uduhamagare kugira ngo wandikishe ikigo cyawe kandi utangire guhuza n'ababyeyi bafite ubuhanga.",
        },
      ],
    },
    features: {
      title:
        "Gutera imbere abanyeshuri. Guhuza ibigo. Kubaka ejo hazaza h'u Rwanda.",
      gamifiedLearning: {
        title: "Kwiga kw'Imikino",
        description:
          "Amasomo akorana n'ibimenyetso bya digitale, imbonerahamwe z'iterambere, no gukurikirana iterambere kugira ngo abanyeshuri bagume bashishikajwe.",
      },
      careerExploration: {
        title: "Gushakisha Imyuga",
        description:
          "Menya inzira z'umwuga wa TVET hamwe n'amakuru y'imishahara nyayo, inkuru z'intsinzi, n'inzira z'iterambere zisobanutse.",
      },
      jobMatching: {
        title: "Guhuriza Akazi",
        description:
          "Huza ababyeyi bafite ubuhanga n'abacuruzi binyuze mu sisitemu yacu y'ubwenge.",
      },
      digitalCredentials: {
        title: "Impamyabushobozi za Digitale",
        description:
          "Ibigo bishobora gutanga impamyabushobozi za digitale zijyanye kandi bikakurikirana ibyatsinzwe n'abanyeshuri.",
      },
      cvBuilder: {
        title: "Kubaka CV",
        description:
          "Abanyeshuri bakora CV z'umwuga zerekana ubuhanga bwabo bwa TVET n'ibyatsinzwe.",
      },
      mobileFirst: {
        title: "Igishushanyo Mbere ya Telefoni",
        description:
          "Bona NextWork ahantu hose hamwe n'urubuga rwacu rwahinduwe kugira ngo ruzane ku banyeshuri bato.",
      },
    },
    footer: {
      copyright:
        "© 2025 NextWork. Guhuza abanyeshuri ba TVET n'amahirwe mu Rwanda.",
      privacy: "Amabanga",
      terms: "Amategeko",
      contact: "Duhamagare",
      signupInstitution: "Iyandikishe nk'Ikigo",
    },
  },
};

function FAQAccordion({ language }: { language: "en" | "rw" }) {
  const items = translations[language].faq.items;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.q} className="py-2">
            <button
              className="w-full flex items-center justify-between py-3 text-left"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <p className="text-white/90 text-lg">{item.q}</p>
              <ChevronDown
                className={`size-5 text-white/70 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-white/70 text-[15px] leading-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const reviews: Review[] = mockReviews;
  const [language, setLanguage] = useState<"en" | "rw">("en");
  const t = translations[language];

  return (
    <div className="font-sans w-full bg-[radial-gradient(1200px_600px_at_50%_-100px,#0b1220_40%,#05070b_100%)] text-white">
      <header className="border-b border-white/10">
        <nav className="container-responsive w-full flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-white/10 grid place-items-center font-bold">
              NW
            </div>
            <span className="font-bold text-lg">NextWork</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="#" className="hover:text-white">
              {t.nav.home}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.nav.exploreCareers}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.nav.successStories}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.nav.forStudents}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.nav.forInstitutions}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "rw" : "en")}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Languages className="size-4" />
              {language === "en" ? "RW" : "EN"}
            </button>
            <Link
              href="/auth"
              className="hidden sm:inline text-sm text-white/80 hover:text-white"
            >
              {t.nav.login}
            </Link>
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                {t.nav.joinNextwork}
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="container-responsive pt-12 md:pt-20 pb-32">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 w-max text-xs text-white/80">
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-white/70 max-w-xl">{t.hero.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/onboarding">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    {t.hero.exploreCareers}
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {t.hero.seeStories}
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-white/60">
                <span>500+ {t.hero.stats.students}</span>
                <span>50+ {t.hero.stats.institutions}</span>
                <span>95% {t.hero.stats.placement}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 md:pt-60">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative size-32 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white font-bold text-sm text-center max-w-[10rem] leading-snug">
                    {person.name}
                  </p>
                  <p className="text-xs text-white/70 text-center">
                    {person.role}
                  </p>
                  <p className="text-xs text-green-400 text-center font-medium">
                    {person.salary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-responsive bg-white rounded-4xl text-black p-6 md:px-12 md:py-20 mb-20">
          <div className="flex flex-wrap gap-3 pb-6 border-b border-black/10">
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm hover:bg-black/10">
              <span className="size-2 rounded-full bg-green-600"></span>
              Electrical Engineering
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm hover:bg-black/10">
              <span className="size-2 rounded-full bg-blue-600"></span>
              Fashion Design
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm hover:bg-black/10">
              <span className="size-2 rounded-full bg-purple-600"></span>
              Construction
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm hover:bg-black/10">
              <span className="size-2 rounded-full bg-orange-600"></span>
              Automotive
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-8 items-start">
            <div className="space-y-5">
              <p className="text-gray-900 text-lg font-medium leading-7">
                {t.testimonials.quote1}
              </p>
              <p className="text-gray-900 text-lg font-medium leading-7">
                {t.testimonials.quote2}
              </p>
              <p className="text-gray-900 text-lg font-medium leading-7">
                {t.testimonials.quote3}
              </p>

              <div className="pt-4">
                <button
                  aria-label="Play success story"
                  className="group relative inline-grid place-items-center size-16 rounded-full bg-gradient-to-b from-green-500 to-green-600 text-white shadow-[0_8px_20px_rgba(34,197,94,0.35)] hover:brightness-110"
                >
                  <Play className="size-7 translate-x-[2px]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {people.map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative size-20 rounded-full overflow-hidden ring-1 ring-black/10">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-[13px] font-medium">
                    <span>{person.name.split(" ")[0]}</span>
                    <BadgeCheck className="size-4 text-green-600" />
                  </div>
                  <div className="text-[12px] text-neutral-500">
                    {person.role}
                  </div>
                  <div className="text-[11px] text-green-600 font-medium">
                    {person.salary}
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                <div className="size-12 rounded-full bg-green-100 grid place-items-center">
                  <span className="text-sm font-semibold text-green-600">
                    500+
                  </span>
                </div>
                <div className="text-[12px] text-neutral-600">Students</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-responsive pt-12 md:pt-20 pb-32">
          <h1 className="text-2xl sm:text-3xl text-center font-bold mb-12">
            {t.impact.title}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white/70">
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs">{t.impact.students}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs">{t.impact.institutions}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-xs">{t.impact.placement}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">RWF 400K+</div>
              <div className="text-xs">{t.impact.salary}</div>
            </div>
          </div>
        </section>

        <section className="container-responsive pb-12 md:pb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            {t.reviews}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative size-20 rounded-full overflow-hidden border border-white/15">
                    <Image
                      src={r.avatar}
                      alt={r.author}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span>{r.author}</span>
                    </div>
                    <div className="text-xs text-white/60">{r.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < r.rating ? "text-yellow-400" : "text-white/20"
                      }`}
                      fill={i < r.rating ? "#facc15" : "none"}
                    />
                  ))}
                </div>
                <p className="text-white/80 leading-7 text-[15px]">
                  {r.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-responsive pb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            {t.faq.title}
          </h2>
          <FAQAccordion language={language} />
        </section>

        <section className="container-responsive pb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            {t.features.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.gamifiedLearning.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.gamifiedLearning.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.careerExploration.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.careerExploration.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.jobMatching.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.jobMatching.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.digitalCredentials.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.digitalCredentials.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.cvBuilder.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.cvBuilder.description}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold mb-1">
                {t.features.mobileFirst.title}
              </div>
              <p className="text-white/70 text-sm">
                {t.features.mobileFirst.description}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container-responsive py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.footer.terms}
            </Link>
            <Link href="#" className="hover:text-white">
              {t.footer.contact}
            </Link>
            <Link href="/onboarding" className="hover:text-white">
              {t.footer.signupInstitution}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
