import Image from 'next/image'
import image from '../../public/image.jpg'

import {
  BsGithub,
  BsLinkedin,
  BsArrowUpRight,
  BsEnvelope,
  BsCodeSlash,
  BsRobot,
  BsLightningCharge,
} from 'react-icons/bs'

import { SiFigma } from 'react-icons/si'

export default function Home() {
  const skills = [
    {
      title: 'Software Engineering',
      description:
        'Building scalable applications, event-driven systems, APIs, and intuitive products.',
      items: ['Java', 'Spring Boot', 'React', 'Apache Kafka', 'SQL', 'REST APIs'],
    },
    {
      title: 'AI / ML',
      description:
        'Exploring NLP, LLMs, generative AI, computer vision, and intelligent applications.',
      items: [
        'Python',
        'NLP',
        'LLMs',
        'Generative AI',
        'Computer Vision',
        'Scikit-learn',
      ],
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Automating development workflows and learning to build reliable cloud-native systems.',
      items: ['AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'OpenShift'],
    },
    {
      title: 'Creative Technology',
      description:
        'I enjoy the space where engineering, design, interaction, and product thinking meet.',
      items: ['Figma', 'Next.js', 'UI/UX', 'Prototyping', 'Product Thinking'],
    },
  ]

  const projects = [
    {
      number: '01',
      type: 'PROFESSIONAL • PRIVACY • DISTRIBUTED SYSTEMS',
      title: 'PII Sanitization Platform',
      description:
        'Led the development of an automated real-time PII sanitization platform, modernizing a legacy workflow into a scalable web application. The platform transformed a manual process taking several days into an automated workflow completed within hours.',
      stack: ['React', 'Java', 'Spring Boot', 'Apache Kafka', 'SQL'],
      confidential: true,
    },
    {
      number: '02',
      type: 'AI • NLP • PRODUCT',
      title: 'Profsistant AI',
      description:
        'An AI-powered research assistant that combines Google Scholar discovery, Gemini-powered research analysis, reading management, research-gap generation, personalized planning, and interactive dashboards.',
      stack: [
        'Python',
        'Gemini',
        'LLMs',
        'Streamlit',
        'Google Scholar API',
        'Plotly',
      ],
      link: 'https://github.com/Namslay26/ProfsistantAI',
      linkText: 'View on GitHub',
    },
    {
      number: '03',
      type: 'COMPUTER VISION • CREATIVE TECH',
      title: 'Gesture-Based Control',
      description:
        'A real-time computer vision system that recognizes hand gestures and translates them into controls for the mouse, keyboard, brightness, and audio — creating a touch-free human-computer interface.',
      stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      link: 'https://github.com/Namslay26/gesture-recognition-project',
      linkText: 'View project',
    },
    {
      number: '04',
      type: 'PRODUCT • DESIGN • ENTREPRENEURSHIP',
      title: 'The Michpelled Store',
      description:
        'An independent print-on-demand creative business where I handle product ideation, visual design, storefront operations, marketing, customer communication, and fulfillment end-to-end.',
      stack: ['Product Design', 'Visual Design', 'E-commerce', 'Branding'],
      link: 'https://www.instagram.com/themichpelledstore/',
      linkText: 'Explore the brand',
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#111111]">
      {/* NAVIGATION */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f4]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight transition hover:opacity-60"
          >
            SNEHA MICHELLE
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#work" className="transition hover:opacity-50">
              Work
            </a>

            <a href="#experience" className="transition hover:opacity-50">
              Experience
            </a>

            <a href="#about" className="transition hover:opacity-50">
              About
            </a>

            <a href="#contact" className="transition hover:opacity-50">
              Contact
            </a>
          </div>

          <a
            href="https://github.com/Namslay26"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium"
          >
            GitHub
            <BsArrowUpRight />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Hero Text */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
              Software Engineer • AI/ML • Creative Technology
            </p>

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
              I build
              <br />
              <span className="font-semibold">intelligent systems</span>
              <br />
              &amp; thoughtful products.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-black/60 lg:text-xl">
              I&apos;m Sneha — a software engineer working across AI/ML,
              distributed systems, data privacy, and creative technology. I
              enjoy turning complex technical problems into useful, intuitive
              experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Explore my work
              </a>

              <a
                href="mailto:vsnehamichelle@gmail.com"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Identity Map + Photo */}
          <div className="relative flex min-h-[360px] w-full items-center justify-center sm:min-h-[420px] lg:min-h-[500px]">
            {/* Horizontal connection line */}
            <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-black/10" />

            {/* Vertical connection line */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-black/10" />

            {/* AI / ML */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 text-center">
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-black" />

              <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                AI / ML
              </p>
            </div>

            {/* Privacy */}
            <div className="absolute left-[4%] top-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-black" />

              <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                Privacy
              </p>
            </div>

            {/* Systems */}
            <div className="absolute right-[4%] top-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-black" />

              <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                Systems
              </p>
            </div>

            {/* Creativity */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
              <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-black" />

              <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                Creativity
              </p>
            </div>

            {/* Photo */}
            <div className="relative z-10">
              <div className="absolute -inset-3 rounded-[2rem] border border-black/10" />

              <div className="relative h-60 w-48 overflow-hidden rounded-[1.5rem] bg-black shadow-xl transition-transform duration-500 hover:-translate-y-1 lg:h-72 lg:w-56">
                <Image
                  src={image}
                  alt="Sneha Michelle"
                  fill
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                  priority
                />
              </div>

              {/* Name */}
              <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  Sneha Michelle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current role */}
        <div className="mt-20 flex items-center gap-6 border-t border-black/10 pt-6">
          <span className="text-xs uppercase tracking-[0.2em] text-black/40">
            Currently
          </span>

          <span className="text-sm">
            Building privacy-focused distributed systems at Bank of America
          </span>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="work"
        className="bg-[#111111] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Selected work
              </p>

              <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/50">
              A mix of professional engineering, AI experimentation, computer
              vision, and creative projects.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group grid gap-8 py-10 transition md:grid-cols-[80px_1fr_2fr] md:items-start lg:py-14"
              >
                <span className="font-mono text-sm text-white/30">
                  {project.number}
                </span>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-white/40">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-tight transition group-hover:text-white/70 lg:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/60 lg:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.confidential ? (
                    <span className="mt-6 inline-block text-xs text-white/30">
                      Professional project • Details intentionally limited
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition hover:text-white/60"
                    >
                      {project.linkText}
                      <BsArrowUpRight />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="skills" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
              What I work with
            </p>

            <h2 className="max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl">
              Engineering with a little bit of everything.
            </h2>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`border-b border-r border-black/10 p-8 lg:p-10 ${
                  index === 0 ? 'bg-white' : ''
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs text-black/30">
                    0{index + 1}
                  </span>

                  {index === 0 && <BsCodeSlash className="text-xl" />}
                  {index === 1 && <BsRobot className="text-xl" />}
                  {index === 2 && <BsLightningCharge className="text-xl" />}
                  {index === 3 && <SiFigma className="text-xl" />}
                </div>

                <h3 className="text-xl font-semibold">{skill.title}</h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
                  {skill.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-black/5 px-3 py-1.5 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-black/10 bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                Experience
              </p>

              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                Where I&apos;ve been building.
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold">Bank of America</h3>

                  <p className="mt-1 text-sm text-black/50">
                    Officer, Software Engineer 1B
                  </p>
                </div>

                <span className="text-sm text-black/40">
                  2026 — Present
                </span>
              </div>

              <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold">Bank of America</h3>

                  <p className="mt-1 text-sm text-black/50">
                    Software Engineer
                  </p>
                </div>

                <span className="text-sm text-black/40">2024 — 2026</span>
              </div>

              <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold">Capgemini</h3>

                  <p className="mt-1 text-sm text-black/50">
                    Software Engineer Intern
                  </p>
                </div>

                <span className="text-sm text-black/40">2024</span>
              </div>

              <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold">PlastiSkul</h3>

                  <p className="mt-1 text-sm text-black/50">
                    PSK Meta Network Intern
                  </p>
                </div>

                <span className="text-sm text-black/40">2023</span>
              </div>

              <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="text-lg font-semibold">Facilio</h3>

                  <p className="mt-1 text-sm text-black/50">
                    Frontend Developer Intern
                  </p>
                </div>

                <span className="text-sm text-black/40">2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="px-6 py-24 lg:px-10 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
      
      {/* Heading */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
          A little about me
        </p>

        <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          I like building things.
          <br />
          <span className="text-black/40">
            And bringing people together.
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-7 text-lg leading-8 text-black/60">
        <p>
          I&apos;m a software engineer who enjoys working at the intersection
          of <span className="text-black">engineering, AI, privacy, and design</span>.
          I like taking complicated problems, understanding what is really
          happening underneath them, and turning them into things that feel
          simple and intuitive.
        </p>

        <p>
          But some of the things I enjoy most have very little to do with
          writing code. I&apos;ve hosted multiple enterprise-level events,
          facilitated smaller team and community events, and genuinely enjoy
          being the person who gets people in a room excited about an idea.
        </p>

        <p>
          For the past two years, I&apos;ve also been a Sunday school teacher,
          teaching around 20 children each year. It has taught me a surprising
          amount about communication — especially how to take something
          complicated, understand your audience, and explain it in a way that
          actually sticks.
        </p>

        <p>
          I&apos;m naturally curious and tend to have several things going on
          at once. One day I might be exploring an LLM or experimenting with
          an AI product; another day I&apos;m designing something in Figma,
          working on a side project, preparing a presentation, or figuring
          out how to make a team experience a little better.
        </p>

        <p>
          I care a lot about <span className="text-black">how things are built</span>
          — clean engineering practices, good documentation, thoughtful
          interfaces, and making knowledge easier to share. I&apos;m happiest
          when I can build something useful and then help someone else
          understand it.
        </p>

        <p className="text-black">
          At the core, I&apos;m a builder, a communicator, and a perpetual
          learner — with a slightly unhealthy number of ideas I want to try.
        </p>
      </div>
    </div>

    {/* Personal qualities */}
    <div className="mt-20 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: '01',
          title: 'Curious',
          text: 'Always learning, experimenting, and asking how things could work better.',
        },
        {
          number: '02',
          title: 'Communicator',
          text: 'I enjoy turning complex ideas into stories, presentations, and conversations people understand.',
        },
        {
          number: '03',
          title: 'Builder',
          text: 'I like taking ideas from “what if?” to something people can actually use.',
        },
        {
          number: '04',
          title: 'Community-minded',
          text: 'Whether it is a team, classroom, or event, I enjoy creating spaces where people feel involved.',
        },
      ].map((item) => (
        <div
          key={item.number}
          className="border-b border-r border-black/10 p-7 lg:p-8"
        >
          <span className="font-mono text-xs text-black/30">
            {item.number}
          </span>

          <h3 className="mt-8 text-lg font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-black/50">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* LEADERSHIP & COMMUNITY */}
<div className="mt-20">
  <div className="relative overflow-hidden rounded-[2rem] bg-black">
    <div className="relative aspect-[16/8] w-full">
      <Image
        src="/IMG_4766.JPG"
        alt="Sneha Michelle hosting an enterprise event"
        fill
        className="object-cover object-center transition duration-700 hover:scale-[1.02]"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Beyond engineering
        </p>

        <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h3 className="max-w-xl text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Sometimes the most interesting part of building something is
            bringing people along with you.
          </h3>

          <span className="whitespace-nowrap text-xs text-white/50">
            600+ people • Event hosting
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* CREATIVE STRIP */}
      <section className="bg-[#e8e4dc] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                Beyond code
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-2xl leading-relaxed tracking-tight sm:text-3xl lg:text-4xl">
                Design. Product thinking. Visual storytelling. Building things
                just because I want to see if I can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#111111] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Let&apos;s connect
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-tight tracking-[-0.04em] sm:text-7xl">
            Have an interesting problem?
            <br />
            <span className="text-white/40">Let&apos;s talk.</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="mailto:vsnehamichelle@gmail.com"
              className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5"
            >
              <BsEnvelope />
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/sneha-michelle-v-1b73b0213/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              <BsLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/Namslay26"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              <BsGithub />
              GitHub
            </a>
          </div>

          <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
            <span>© {new Date().getFullYear()} Sneha Michelle</span>

            <span>Built with Next.js + Tailwind</span>
          </div>
        </div>
      </section>
    </main>
  )
}