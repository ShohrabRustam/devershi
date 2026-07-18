'use client';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Built a full-stack e-commerce solution with payment integration, inventory management, and admin dashboard using Next.js and PostgreSQL.',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Developed a WebSocket-based chat app with real-time messaging, user presence, and file sharing capabilities using Node.js and React.',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Created a data visualization platform with interactive charts, custom reports, and real-time metrics using React, D3.js, and Redis.',
    },
    {
      title: 'API Gateway Service',
      description:
        'Designed and implemented a microservices gateway handling authentication, rate limiting, and request routing for multiple backend services.',
    },
    {
      title: 'Task Management System',
      description:
        'Built a collaborative project management tool with drag-and-drop interface, notifications, and team features using React and MongoDB.',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description:
        'Automated deployment workflows using GitHub Actions, Docker, and AWS ECS, reducing deployment time by 70% and improving reliability.',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-8">
          <p className="text-[var(--accent-2)] uppercase tracking-[0.22em] text-xs font-bold mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Selected work that reflects my engineering approach.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white/[0.05] border border-[var(--border)] rounded-2xl p-5"
            >
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-[var(--muted)] text-sm">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
