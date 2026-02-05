import React, { useEffect, useRef } from 'react';
import './index.css';

export default function SpacePortfolio() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe-element').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Transmission received! 🚀 I\'ll respond soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-cosmic-blue text-white overflow-x-hidden relative">
      {/* Custom CSS for animations and effects */}
      <style jsx>{`

      `}</style>

      {/* Nebula Background */}
      <div className="fixed -top-1/2 -left-1/2 w-[200%] h-[200%] -z-20 nebula pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(6,182,212,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
      </div>

      {/* Starfield Background */}
      <div className="fixed inset-0 -z-10 starfield pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-[5%] py-8 flex justify-between items-center z-50 bg-[rgba(10,22,40,0.8)] backdrop-blur-lg border-b border-purple-500/30">
        <div className="font-orbitron text-3xl font-black gradient-text-alt uppercase tracking-[3px]">
          COSMIC
        </div>
        <ul className="hidden md:flex gap-12 list-none">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white font-bold uppercase tracking-[2px] text-sm relative transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Floating Particles */}
      <div className="fixed top-[20%] left-[10%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px] shadow-cyan-400 float" />
      <div className="fixed top-[60%] left-[85%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px] shadow-cyan-400 float float-delay-2 opacity-70" />
      <div className="fixed top-[80%] left-[20%] w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_10px] shadow-purple-500 float float-delay-4" />
      <div className="fixed top-[40%] left-[70%] w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px] shadow-cyan-400 float float-delay-6 opacity-50" />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-[5%] relative">
        <div className="max-w-4xl animate-[fadeInUp_1s_ease-out]">
          <h1 className="font-orbitron text-7xl md:text-8xl font-black mb-4 gradient-text glow-pulse">
            SPACE EXPLORER
          </h1>
          <div className="text-2xl md:text-3xl mb-8 text-cyan-400 font-space-mono animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Developer • Designer • Creator
          </div>
          <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-90 font-space-mono animate-[fadeInUp_1s_ease-out_0.6s_both]">
            Navigating the infinite cosmos of code and creativity. 
            Building stellar experiences that transcend the ordinary and reach for the stars.
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <a
              href="#projects"
              className="relative px-12 py-5 font-orbitron font-bold uppercase tracking-[2px] bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] btn-shine overflow-hidden"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-12 py-5 font-orbitron font-bold uppercase tracking-[2px] bg-transparent text-white border-2 border-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:translate-y-[-3px]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 w-[30px] h-[50px] border-2 border-cyan-400 rounded-full flex justify-center pt-2.5 scroll-indicator">
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-[scrollDot_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-[5%] relative">
        <h2 className="font-orbitron text-5xl md:text-6xl font-black text-center mb-16 gradient-text-alt relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:mt-4 after:mx-auto after:rounded-full">
          About Mission
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="font-space-mono leading-relaxed text-lg opacity-90 observe-element opacity-0">
            <p>
              I'm a cosmic architect crafting digital experiences that defy gravity. 
              With a passion for pushing boundaries and exploring uncharted territories, 
              I blend cutting-edge technology with imaginative design.
            </p>
            <p className="mt-6">
              Every project is a journey through the stars, where innovation meets 
              aesthetic excellence. I believe in creating solutions that are not just 
              functional, but truly extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🚀', title: 'Frontend', skills: 'React, Vue, Next.js, Tailwind CSS, GSAP, Three.js' },
              { icon: '⚡', title: 'Backend', skills: 'Node.js, Python, PostgreSQL, MongoDB, GraphQL' },
              { icon: '🎨', title: 'Design', skills: 'Figma, Adobe XD, UI/UX, Motion Design, 3D Modeling' },
              { icon: '☁️', title: 'Cloud', skills: 'AWS, Docker, Kubernetes, CI/CD, Serverless' }
            ].map((skill, index) => (
              <div
                key={index}
                className="observe-element opacity-0 bg-purple-500/10 border border-purple-500/30 p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:translate-y-[-10px] hover:border-cyan-400 hover:shadow-[0_10px_40px_rgba(6,182,212,0.3)] relative overflow-hidden group"
              >
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(6,182,212,0.2),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="font-orbitron text-2xl mb-2 text-cyan-400 relative z-10">
                  {skill.icon} {skill.title}
                </h3>
                <p className="font-space-mono text-sm relative z-10">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-[5%] relative">
        <h2 className="font-orbitron text-5xl md:text-6xl font-black text-center mb-16 gradient-text-alt relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:mt-4 after:mx-auto after:rounded-full">
          Stellar Projects
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: '🌌',
              title: 'Nebula Dashboard',
              description: 'An immersive analytics platform with real-time data visualization and AI-powered insights. Features 3D charts and cosmic-themed UI.',
              tags: ['React', 'Three.js', 'D3.js', 'WebGL']
            },
            {
              icon: '🛸',
              title: 'Quantum Commerce',
              description: 'Next-generation e-commerce platform with AR product previews, blockchain payments, and a revolutionary shopping experience.',
              tags: ['Next.js', 'AR.js', 'Stripe', 'Web3']
            },
            {
              icon: '🌠',
              title: 'Cosmic Chat AI',
              description: 'Intelligent chatbot with natural language processing and personality customization. Built with cutting-edge AI models.',
              tags: ['Python', 'TensorFlow', 'FastAPI', 'GPT-4']
            }
          ].map((project, index) => (
            <div
              key={index}
              className="observe-element opacity-0 bg-[rgba(10,22,40,0.6)] border border-purple-500/30 rounded-3xl overflow-hidden backdrop-blur-lg transition-all duration-400 hover:translate-y-[-15px] hover:scale-105 hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] hover:border-cyan-400 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />
              <div className="w-full h-64 bg-gradient-to-br from-purple-500/30 to-cyan-400/30 flex items-center justify-center text-8xl border-b border-purple-500/30">
                {project.icon}
              </div>
              <div className="p-10">
                <h3 className="font-orbitron text-3xl mb-4 text-white">{project.title}</h3>
                <p className="font-space-mono leading-relaxed opacity-90 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-sm font-bold text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 font-bold transition-all duration-300 hover:gap-4 hover:text-white"
                >
                  Explore Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-[5%] relative">
        <h2 className="font-orbitron text-5xl md:text-6xl font-black text-center mb-16 gradient-text-alt relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 after:mt-4 after:mx-auto after:rounded-full">
          Launch Contact
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-space-mono text-xl leading-relaxed mb-12 opacity-90">
            Ready to embark on a cosmic journey together? Let's create something 
            extraordinary that transcends the boundaries of imagination.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-6 py-6 bg-[rgba(10,22,40,0.6)] border-2 border-purple-500/30 rounded-lg text-white font-space-mono text-base backdrop-blur-lg transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] placeholder:text-white/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-6 bg-[rgba(10,22,40,0.6)] border-2 border-purple-500/30 rounded-lg text-white font-space-mono text-base backdrop-blur-lg transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] placeholder:text-white/50"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full px-6 py-6 bg-[rgba(10,22,40,0.6)] border-2 border-purple-500/30 rounded-lg text-white font-space-mono text-base backdrop-blur-lg transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] placeholder:text-white/50 resize-y min-h-[150px]"
            />
            <button
              type="submit"
              className="w-full relative px-12 py-6 font-orbitron font-bold uppercase tracking-[2px] bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] btn-shine overflow-hidden"
            >
              Send Transmission
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-16">
            {[
              { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'Email', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-16 h-16 flex items-center justify-center bg-purple-500/20 border-2 border-purple-500 rounded-full text-cyan-400 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:translate-y-[-5px] hover:scale-110 hover:shadow-[0_10px_30px_rgba(139,92,246,0.5)]"
                title={social.name}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                  {social.name === 'Email' && (
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 px-[5%] border-t border-purple-500/30 bg-[rgba(10,22,40,0.8)] backdrop-blur-lg font-space-mono">
        <p>&copy; 2026 Cosmic Portfolio. All rights reserved. Designed in the stars. ✨</p>
      </footer>

    </div>
  );
}