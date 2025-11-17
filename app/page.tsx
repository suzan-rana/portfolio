export default function Home() {
  const contact = [
    { label: "Email", value: "suzan.rnaa@gmail.com", href: "mailto:suzan.rnaa@gmail.com" },
    { label: "Phone / Whatsapp", value: "+977 9848 497 112", href: "tel:+9779848497112" },
    { label: "LinkedIn", value: "linkedin.com/in/suzan-rana", href: "https://www.linkedin.com/in/suzan-rana" },
    { label: "GitHub", value: "github.com/suzan-rana", href: "https://github.com/suzan-rana" },
    { label: "Resume", value: "Download PDF", href: "/suzanrana_resume.pdf" },
  ];

  const focusAreas = [
    {
      title: "Frontend",
      stack: "React, Next.js, SvelteKit, Tailwind CSS, accessible HTML/CSS, responsive systems",
    },
    {
      title: "Backend & APIs",
      stack: "Python, Django, Node.js, NestJS, Express, GraphQL/REST, microservices, TypeORM, Prisma, Drizzle",
    },
    {
      title: "Data & Infrastructure",
      stack: "PostgreSQL, MySQL, MongoDB, Redis, ChromaDB, Supabase, AWS (Lambda, ECS, RDS), Docker, CI/CD",
    },
    {
      title: "AI & Automation",
      stack: "LangGraph, LangChain, RAG pipelines, chatbots, vector search, workflow automation, instrumentation",
    },
  ];

  const experiences = [
    {
      role: "Backend & Data Engineer",
      company: "Morgenland Teppiche",
      location: "Hamburg, Germany",
      period: "Aug 2024 – Sept 2025",
      summary:
        "Owned the European rug retailer's 100k+ SKU catalog and pricing feeds, bringing order to a multi-locale commerce engine.",
      highlights: [
        "Orchestrated feed generation for Amazon, OTTO, Home24, Wayfair, Check24, Meta, Pinterest, and Google Merchant Center to keep merchandising consistent across 13 locales.",
        "Automated bulk updates and validation workflows that cut manual catalog edits by 40% while improving product data accuracy.",
        "Stabilized ingestion, enrichment, and export pipelines so sales and marketing teams could trust the data that powers campaigns.",
      ],
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Hyteno",
      location: "Paris, France",
      period: "Oct 2022 – Sept 2024",
      summary:
        "Led the build-out of a multi-tenant restaurant SaaS covering white-labeled sites, ordering, and CRM tooling.",
      highlights: [
        "Composed a service mesh with NestJS, RabbitMQ, Redis, and PostgreSQL Aurora on AWS ECS/RDS to keep 100+ clients responsive.",
        "Shipped automation-heavy features (menu versioning, delivery ops, marketing workflows) that reduced franchise onboarding from weeks to days.",
        "Mentored the team on fault-tolerant deploys, observability, and clean API contracts to keep releases predictable.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "LancemeUp",
      location: "Kathmandu, Nepal",
      period: "Jan 2022 – Oct 2022",
      summary:
        "Delivered excellent rated polish for a productivity SaaS focused on collaboration surfaces.",
      highlights: [
        "Implemented whiteboards, live chat, and Jira-style boards in React/Next.js with real-time collaboration primitives.",
        "Optimized rendering and bundle strategy to trim load times by 25% while keeping every interaction snappy.",
        "Partnered with backend leads to rationalize API usage, simplifying state management and lowering data latency.",
      ],
    },
  ];

  const projects = [
    {
      name: "Hourtag — Time & Work Management",
      url: "https://hourtag.com",
      summary:
        "NestJS + Next.js platform for time tracking, budgeting, and delivery health.",
      details:
        "Integrated AWS services, notifications, and live updates so teams can audit utilization without friction.",
    },
    {
      name: "Hyteno Engine — Restaurant OS",
      url: "https://hyteno.com",
      summary:
        "Backend spine for a multi-tenant ordering and site builder suite.",
      details:
        "Designed microservices, queue topologies, and payment gateway integrations that keep local businesses online 24/7.",
    },
  ];

  const education = [
    "Bachelor's in Information Technology — Lumbini City College, Tribhuwan University (Expected 2025)",
    "+2 Science (Computer Science) — New Horizon College (2020)",
  ];

  return (
    <div className="bg-white text-black">
      <main className="mx-auto max-w-3xl px-8 py-12">

        <section className="mb-8">
          <h1 className="mb-1 text-4xl font-normal">
            Suzan Rana
          </h1>
          <p className="mb-6 text-base text-[#666666]">
            Full-Stack Programmer with about 5 Years of experience working in Tech.
          </p>

          <p className="mb-4 text-xl leading-relaxed">
            Building backend systems, AI agents, and SaaS products that keep distributed teams shipping calmly.
          </p>
          <p className="mb-6 leading-relaxed text-[#666666]">
            I am based in Kathmandu, Nepal and specialize in developing reliable, production-grade platforms. With expertise in Python, Django, LangGraph, React, Node.js, TypeScript, PostgreSQL, AWS, and agentic systems, I focus on building scalable data pipelines, automating processes, and implementing LLM-based solutions. My work is driven by a commitment to technical precision, thoughtful system design, and delivering impactful results through every phase of development.
          </p>

          <div className="space-y-1 text-sm">
            {contact.map((item) => (
              <div key={item.label}>
                <span className="text-[#666666]">{item.label}: </span>
                <a href={item.href}>{item.value}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium">Core Practice</h2>
          <div className="space-y-3">
            {focusAreas.map((area) => (
              <div key={area.title}>
                <p className="font-medium">{area.title}</p>
                <p className="text-sm text-[#666666]">{area.stack}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <article key={exp.company} className="space-y-2">
                <div>
                  <p className="font-medium">
                    {exp.role}, {exp.company}
                  </p>
                  <p className="text-sm text-[#666666]">
                    {exp.location} — {exp.period}
                  </p>
                  <p className="text-sm italic text-[#666666]">{exp.summary}</p>
                </div>
                <ul className="space-y-1 text-sm">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium">Products in Production</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <article key={project.name} className="space-y-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  {project.name}
                </a>
                <p className="text-sm text-[#666666]">{project.summary}</p>
                <p className="text-sm">{project.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium">Education</h2>
          <ul className="space-y-1 text-sm">
            {education.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2 text-sm text-[#666666]">
          <p>
            References available from leaders at Hyteno, Lancemeup, and Maison
            et Architecture on request.
          </p>
          <p>
            Currently open to  engineering roles where backend rigor,
            AI-native workflows, and thoughtful mentorship matter.
          </p>
        </section>
      </main>
    </div>
  );
}
