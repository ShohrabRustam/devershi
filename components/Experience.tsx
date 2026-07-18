'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2024 – Present',
      location: 'Remote',
      description:
        'Led development of microservices architecture using Node.js and TypeScript. Built scalable REST APIs serving 100K+ daily users. Implemented CI/CD pipelines and AWS infrastructure.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations',
      period: 'Mar 2022 – Dec 2023',
      location: 'San Francisco, CA',
      description:
        'Developed responsive web applications using React and Next.js. Integrated payment systems and third-party APIs. Collaborated with cross-functional teams to deliver projects on time.',
    },
    {
      title: 'Software Developer Intern',
      company: 'StartupHub',
      period: 'Jun 2021 – Feb 2022',
      location: 'New York, NY',
      description:
        'Built frontend components with React and TypeScript. Implemented authentication and authorization flows. Participated in code reviews and agile development processes.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-white/[0.03]">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-8">
          <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Professional background and impact.
          </h2>
        </div>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="bg-white/[0.05] border border-[var(--border)] rounded-2xl p-5"
            >
              <h3 className="font-bold text-xl mb-2">
                {exp.title} — {exp.company}
              </h3>
              <p className="text-[var(--accent)] text-sm mb-3">
                {exp.period} • {exp.location}
              </p>
              <p className="text-[var(--muted)]">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
