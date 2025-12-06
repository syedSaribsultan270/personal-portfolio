export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">YourName</h1>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl text-center space-y-8">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
              YN
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Full-stack developer passionate about building beautiful, functional web experiences
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building responsive, 
              user-friendly applications that make a difference.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js',
              'Tailwind CSS', 'Python', 'PostgreSQL', 'Git',
              'Docker', 'AWS', 'GraphQL', 'REST APIs'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl text-center font-medium shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack online shopping platform with payment integration',
                tags: ['Next.js', 'Stripe', 'PostgreSQL']
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task manager with real-time updates',
                tags: ['React', 'Firebase', 'Tailwind']
              },
              {
                title: 'Analytics Dashboard',
                description: 'Data visualization dashboard for business metrics',
                tags: ['TypeScript', 'D3.js', 'Node.js']
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-800 group"
              >
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 rounded-full font-medium hover:scale-105 transition-transform"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-zinc-900 dark:border-zinc-100 rounded-full font-medium hover:scale-105 transition-transform"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
