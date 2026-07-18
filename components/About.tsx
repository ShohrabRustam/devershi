'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-8">
          <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Software developer passionate about creating reliable, high-performance applications.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 text-[var(--muted)] text-lg">
          <p>
            With 3+ years of experience in full-stack development, I've built and shipped web applications
            that solve real-world problems and deliver value to users and businesses.
          </p>
          <p>
            My expertise spans React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Redis, AWS, and modern
            DevOps practices, with a strong focus on scalable architecture and clean code.
          </p>
        </div>
      </div>
    </section>
  );
}
