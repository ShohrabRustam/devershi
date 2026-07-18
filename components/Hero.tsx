'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-[radial-gradient(circle_at_top_left,rgba(124,156,255,0.24),transparent_32%)]"
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center py-16">
          <div>
            <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
              Software Developer • Full-Stack • Backend Systems
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Building scalable web applications with{' '}
              <span className="text-[var(--accent)]">React, Node.js, TypeScript, and AWS</span>.
            </h1>
            <p className="text-[var(--muted)] text-lg max-w-2xl mb-6">
              I'm a software developer with 3+ years of experience delivering modern, user-friendly web applications
              and backend services across various domains.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-block px-5 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#96aeff] text-[#04111d] font-semibold hover:-translate-y-0.5 transition-transform"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="inline-block px-5 py-3 rounded-full border border-[var(--border)] text-[var(--text)] font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white/[0.06] border border-[var(--border)] backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <h3 className="font-bold text-xl mb-4">Core Focus</h3>
            <ul className="space-y-3 text-[var(--muted)]">
              <li>• Full-Stack Development</li>
              <li>• RESTful APIs & Microservices</li>
              <li>• Modern Frontend Frameworks</li>
              <li>• Cloud Infrastructure & DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
