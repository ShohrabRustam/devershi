'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by AI with natural language processing and context awareness.',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization, reporting, and export capabilities.',
      tech: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      title: 'Social Media Platform',
      description: 'Modern social networking platform with posts, comments, likes, and real-time notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    },
    {
      title: 'Portfolio Builder',
      description: 'No-code portfolio builder with drag-and-drop editor, templates, and custom domain support.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Vercel'],
      github: 'https://github.com/ShohrabRustam',
      demo: '#',
      image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center text-white text-6xl font-bold`}>
                {project.title.charAt(0)}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
