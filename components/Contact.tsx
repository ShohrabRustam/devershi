'use client';

export default function Contact() {
  return (
    <footer id="contact" className="py-12 px-4 sm:px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-[var(--border)] pt-8">
          <div>
            <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
              Contact
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's connect.</h2>
            <p className="text-[var(--muted)]">
              your.email@example.com • +1 (555) 123-4567 • San Francisco, CA
            </p>
          </div>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-5 py-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[#96aeff] text-[#04111d] font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
}
