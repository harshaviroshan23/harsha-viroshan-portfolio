'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Github, Linkedin, Instagram, Sparkles, Cpu, Clapperboard, Lightbulb, Orbit, Download, Mail, ExternalLink, Code2, Layers3, Zap } from 'lucide-react';

const projects = [
  { number: '01', type: 'INNOVATION · PROTOTYPE', title: 'Aqua Guard', desc: 'A water-focused safety concept exploring how thoughtful engineering can solve real-world problems.', tag: 'IN PROGRESS', visual: 'water' },
  { number: '02', type: 'CREATIVE · VIDEO', title: 'Visual experiments', desc: 'A home for edits, motion experiments, and visual stories. Replace these cards with your finished work.', tag: 'CREATIVE STUDIO', visual: 'visual' },
  { number: '03', type: 'ENGINEERING · IDEAS', title: 'Ideas in motion', desc: 'A growing collection of prototypes, technical explorations, and concepts worth bringing to life.', tag: 'EXPLORING', visual: 'grid' },
];

const skills = [
  { icon: Cpu, title: 'Engineering', desc: 'Mechanical systems · Problem solving' },
  { icon: Code2, title: 'Technology', desc: 'Learning by building · Digital tools' },
  { icon: Clapperboard, title: 'Creative work', desc: 'Video editing · Visual storytelling' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Concepts · Prototyping · Experimentation' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    const reveal = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); reveal.disconnect(); };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
    setFormStatus('Opening your email app…');
    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  const nav = [['About', '#about'], ['Work', '#work'], ['Journey', '#journey'], ['Contact', '#contact']];

  return (
    <main className={lightMode ? 'site light-mode' : 'site'}>
      <div className="noise" aria-hidden="true" />
      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <a href="#home" className="brand" aria-label="Harsha Viroshan home"><span className="brand-mark">H<span>V</span></span><span className="brand-name">HARSHA <b>VIROSHAN</b></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
        <div className="nav-actions"><button className="mode-toggle" onClick={() => setLightMode(!lightMode)} aria-label="Toggle light mode"><span /> {lightMode ? 'LIGHT' : 'DARK'}</button><a className="nav-cta" href="#contact">LET'S TALK <ArrowUpRight size={14}/></a></div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb orb-one" aria-hidden="true"/><div className="hero-orb orb-two" aria-hidden="true"/>
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot"/> ENGINEERING × CREATIVITY × IDEAS <span className="eyebrow-line"/></div>
          <h1 className="hero-title"><span className="title-small">THE MIND BEHIND</span><span className="title-main">HARSHA</span><span className="title-last">VIROSHAN<span className="title-period">.</span></span></h1>
          <div className="hero-bottom"><p className="hero-tagline">Built different.<br/><em>Driven by purpose.</em></p><div className="hero-intro"><p>I’m an engineering student, creative thinker, and builder-in-progress — exploring the space where technology meets imagination.</p><a href="#work" className="text-link">EXPLORE MY WORLD <ArrowDownRight size={17}/></a></div></div>
        </div>
        <div className="hero-visual" aria-label="Abstract orbital visual representing ideas and innovation"><div className="visual-halo halo-a"/><div className="visual-halo halo-b"/><div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-ring ring-c"/><div className="visual-core"><div className="core-monogram">H<span>V</span></div><div className="core-cross">✳</div></div><span className="orbit-label label-top">IDEA → IMPACT</span><span className="orbit-label label-bottom">ALWAYS IN BETA</span><span className="orbit-point point-a"/><span className="orbit-point point-b"/><span className="orbit-point point-c"/></div>
        <div className="hero-index"><span>01 / 04</span><span className="index-line"/><span>PORTFOLIO 2026</span></div>
        <a href="#about" className="scroll-cue"><span className="scroll-wheel"/> SCROLL TO EXPLORE</a>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length: 2}).map((_, i) => <span key={i}>ENGINEERING <b>✳</b> CREATIVE DIRECTION <b>✳</b> TECHNOLOGY <b>✳</b> INNOVATION <b>✳</b> BUILDING WHAT’S NEXT <b>✳</b></span>)}</div></section>

      <section className="section about-section" id="about">
        <div className="section-kicker reveal"><span>01</span><span className="kicker-rule"/> A LITTLE ABOUT ME</div>
        <div className="about-layout"><div className="about-copy reveal"><h2>Curious by nature.<br/><span>Builder by choice.</span></h2><p className="lead">I like taking ideas apart, understanding how they work, and imagining how they could work better.</p><p>My world sits at the intersection of mechanical engineering, technology, and visual creativity. I’m learning, experimenting, and turning curiosity into things people can see, use, and experience.</p><p>This portfolio is my evolving playground — a snapshot of what I’m exploring today and what I’ll build next.</p><a className="text-link" href="#journey">GET TO KNOW MY JOURNEY <ArrowRight size={16}/></a></div>
          <div className="portrait-card reveal"><div className="portrait-frame"><div className="portrait-scan"/><img className="profile-photo" src="/harsha-profile.png" alt="Portrait of Harsha Viroshan"/><div className="portrait-corner corner-tl"/><div className="portrait-corner corner-br"/></div><div className="portrait-footer"><span>FIG. 001 — THE HUMAN BEHIND THE IDEAS</span><span className="live-tag"><i/> CURRENTLY EVOLVING</span></div><div className="portrait-note">A work in progress,<br/>just like the person.</div></div></div>
        <div className="principles reveal"><div><span className="principle-number">01</span><h3>Stay curious.</h3><p>Ask better questions.</p></div><div><span className="principle-number">02</span><h3>Make it real.</h3><p>Learn through doing.</p></div><div><span className="principle-number">03</span><h3>Keep evolving.</h3><p>Progress over perfection.</p></div></div>
      </section>

      <section className="section work-section" id="work"><div className="section-kicker reveal"><span>02</span><span className="kicker-rule"/> SELECTED WORK & EXPERIMENTS</div><div className="section-heading reveal"><h2>Ideas don’t stay<br/><span>ideas forever.</span></h2><p>A few things I’m building, exploring, or bringing to life. The best work is still ahead.</p></div>
        <div className="project-grid">{projects.map((p, i) => <article className={`project-card project-${p.visual} reveal`} key={p.number}><div className="project-art"><div className="art-grid"/><div className={`art-graphic graphic-${p.visual}`} aria-hidden="true">{p.visual === 'water' ? <><div className="water-drop">◒</div><div className="water-ring wr-1"/><div className="water-ring wr-2"/><div className="water-ring wr-3"/></> : p.visual === 'visual' ? <><div className="visual-slab slab-1"/><div className="visual-slab slab-2"/><div className="visual-slab slab-3"/><span className="play-mark">▶</span></> : <><div className="cube cube-1"/><div className="cube cube-2"/><div className="cube cube-3"/><div className="cube-line"/></>}</div><span className="project-number">{p.number}</span><span className="project-open"><ArrowUpRight size={19}/></span><span className="project-tag">{p.tag}</span></div><div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><a href="#contact" className="project-link">LET’S BUILD SOMETHING <ArrowUpRight size={14}/></a></div></article>)}</div>
        <div className="work-note reveal"><Sparkles size={16}/><span>More work is on the way. This space will grow as new projects come to life.</span></div>
      </section>

      <section className="section achievements-section" id="achievements"><div className="section-kicker reveal"><span>03</span><span className="kicker-rule"/> MILESTONES & RECOGNITION</div><div className="section-heading reveal"><h2>Progress worth<br/><span>remembering.</span></h2><p>A space for the certificates, awards, and moments that mark the journey. We’ll add your real details here.</p></div><div className="achievement-grid"><article className="achievement-card reveal"><span className="achievement-icon">✳</span><span className="achievement-label">CERTIFICATES</span><h3>Learning in action</h3><p>Add course certificates, workshops, or technical credentials here.</p><span className="achievement-foot">DETAILS TO BE ADDED <ArrowUpRight size={14}/></span></article><article className="achievement-card reveal"><span className="achievement-icon">↗</span><span className="achievement-label">AWARDS & HONOURS</span><h3>Moments that matter</h3><p>Add awards, competition results, and recognitions you’re proud of.</p><span className="achievement-foot">DETAILS TO BE ADDED <ArrowUpRight size={14}/></span></article><article className="achievement-card reveal"><span className="achievement-icon">⌘</span><span className="achievement-label">EXPERIENCE</span><h3>Always growing</h3><p>Add clubs, leadership roles, events, and hands-on experiences.</p><span className="achievement-foot">DETAILS TO BE ADDED <ArrowUpRight size={14}/></span></article></div></section>

      <section className="section skills-section" id="journey"><div className="section-kicker reveal"><span>03</span><span className="kicker-rule"/> THE TOOLKIT</div><div className="section-heading reveal"><h2>Different interests.<br/><span>One curious mind.</span></h2><p>I’m building my toolkit one project, experiment, and lesson at a time.</p></div><div className="skills-grid">{skills.map(({icon: Icon, title, desc}, i) => <div className="skill-card reveal" key={title}><div className="skill-top"><span>0{i+1}</span><Icon size={23} strokeWidth={1.5}/></div><h3>{title}</h3><p>{desc}</p><div className="skill-line"><span style={{width: `${68 + i * 7}%`}}/></div><span className="skill-status">IN PROGRESS <span>↗</span></span></div>)}</div>
        <div className="journey-banner reveal"><div className="journey-symbol"><Orbit size={42} strokeWidth={1}/></div><div><span className="micro-label">THE NEXT CHAPTER</span><h3>Still learning. Always building.</h3><p>Every project starts with a question. The journey is finding out what comes next.</p></div><a href="#contact" className="round-arrow" aria-label="Contact me"><ArrowUpRight/></a></div>
      </section>

      <section className="section creative-section" id="creative"><div className="section-kicker reveal"><span>04</span><span className="kicker-rule"/> THE CREATIVE STUDIO</div><div className="creative-layout"><div className="creative-copy reveal"><h2>Not everything<br/>needs a <span>blueprint.</span></h2><p>Some things need a timeline, a good cut, a frame that feels right, or a story worth telling. This is where my visual side lives.</p><p className="small-note">Your video edits and designs will live here. Add thumbnails, short descriptions, and links to the finished work when you’re ready.</p><a href="#contact" className="text-link">HAVE A CREATIVE PROJECT? <ArrowUpRight size={16}/></a></div><div className="creative-gallery reveal"><div className="gallery-tile tile-large"><div className="gallery-art art-motion"><div className="motion-circle mc-a"/><div className="motion-circle mc-b"/><div className="motion-bar"/><span>01 / MOTION</span></div><div className="gallery-caption"><span>VIDEO EDITING</span><ArrowUpRight size={16}/></div></div><div className="gallery-tile tile-small tile-purple"><div className="purple-art"><div className="purple-shape ps-a"/><div className="purple-shape ps-b"/><div className="purple-shape ps-c"/><span>FRAME<br/>YOUR<br/>IDEAS.</span></div><div className="gallery-caption"><span>VISUAL DESIGN</span><ArrowUpRight size={16}/></div></div><div className="gallery-tile tile-small tile-type"><div className="type-art"><span>MAKE</span><span>IT <i>MEAN</i></span><span>SOMETHING<span className="type-dot">.</span></span></div><div className="gallery-caption"><span>DESIGN STUDIES</span><ArrowUpRight size={16}/></div></div></div></div>
      </section>

      <section className="quote-section"><div className="quote-glow"/><div className="quote-mark">“</div><blockquote className="reveal">The goal isn’t to have all the answers.<br/><span>It’s to keep building better questions.</span></blockquote><div className="quote-credit"><span className="kicker-rule"/> A PRINCIPLE, NOT A FINISH LINE</div></section>

      <section className="section contact-section" id="contact"><div className="section-kicker reveal"><span>05</span><span className="kicker-rule"/> YOUR MOVE</div><div className="contact-layout"><div className="contact-copy reveal"><span className="micro-label">HAVE AN IDEA?</span><h2>Let’s make<br/><span>something matter.</span></h2><p>Got a project, a creative collaboration, or an interesting problem to solve? I’m open to good ideas and conversations.</p><div className="social-links"><a href="https://www.linkedin.com/in/harsha-viroshan-510738407/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LINKEDIN <ArrowUpRight size={13}/></a><a href="https://github.com/harshaviroshan23" target="_blank" rel="noreferrer"><Github size={17}/> GITHUB <ArrowUpRight size={13}/></a></div><p className="social-note">Find me on LinkedIn and GitHub. Let’s connect and build something meaningful.</p></div><form className="contact-form reveal" onSubmit={sendMessage}><div className="form-heading"><span>01 — SEND A NOTE</span><Mail size={18}/></div><label>Your name<input required name="name" placeholder="What should I call you?"/></label><label>Your email<input required name="email" type="email" placeholder="you@example.com"/></label><label>What’s on your mind?<textarea required name="message" rows="4" placeholder="Tell me a little about it…"/></label><button className="submit-button" type="submit">OPEN EMAIL DRAFT <ArrowUpRight size={17}/></button><p className="form-hint">This opens your email app with the message pre-filled. Add your real email in the code before launch.</p>{formStatus && <p className="form-status">{formStatus}</p>}</form></div></section>

      <footer className="footer"><a href="#home" className="footer-brand"><span className="brand-mark">H<span>V</span></span><span>HARSHA VIROSHAN</span></a><span className="footer-tagline">BUILT DIFFERENT. DRIVEN BY PURPOSE.</span><div className="footer-right"><span>DESIGNED TO EVOLVE © 2026</span><button onClick={() => setEasterEgg(!easterEgg)} className="easter-button" aria-label="Reveal a secret">✳</button></div></footer>
      {easterEgg && <div className="easter-toast"><Sparkles size={18}/><div><strong>You found the signal.</strong><span>Stay curious. Keep building. — HV</span></div><button onClick={() => setEasterEgg(false)} aria-label="Close secret"><X size={16}/></button></div>}
    </main>
  );
}
