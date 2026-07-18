'use client';

export default function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Git',
    'REST APIs',
    'GraphQL',
    'Tailwind CSS',
    'Testing',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white/[0.03]">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-8">
          <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Technologies and concepts I work with.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-[var(--border)] px-4 py-2 rounded-full text-[var(--muted)] text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
