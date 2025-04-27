import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#DBDED2]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#33342E]/10 bg-[#DBDED2]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#33342E]">
            Kaustav Kr. Sinha Ray
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-[#33342E] hover:text-[#33342E]/80">
              About
            </Link>
            <Link href="#education" className="text-[#33342E] hover:text-[#33342E]/80">
              Education
            </Link>
            <Link href="#skills" className="text-[#33342E] hover:text-[#33342E]/80">
              Skills
            </Link>
            <Link href="#projects" className="text-[#33342E] hover:text-[#33342E]/80">
              Projects
            </Link>
            <Link href="#testimonials" className="text-[#33342E] hover:text-[#33342E]/80">
              Testimonials
            </Link>
            <Link href="#contact" className="text-[#33342E] hover:text-[#33342E]/80">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#33342E] hover:bg-[#33342E]/90">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="container flex flex-col-reverse items-center gap-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#33342E] sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-[#33342E]"> Kaustav </span>
              </h1>
              <h2 className="text-2xl font-medium text-[#33342E]/80 sm:text-3xl">
                Frontend Developer & UI/UX Designer
              </h2>
              <p className="max-w-md text-[#33342E]/70">
                I create beautiful, functional, and accessible web experiences with a focus on user-centered design.
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#CCE08E] text-[#33342E] hover:bg-[#CCE08E]/80">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#33342E] text-[#33342E]">
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="#" className="text-[#33342E] hover:text-[#33342E]/80">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#33342E] hover:text-[#33342E]/80">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#33342E] hover:text-[#33342E]/80">
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#CCE08E] md:h-80 md:w-80">
              <Image
                src="https://i.pinimg.com/736x/46/e9/af/46e9af316a7559beeaf7c2193f3df8bf.jpg"
                alt="Kaustav Kr. Sinha Ray"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-[#33342E]">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#DBDED2] sm:text-4xl">About Me</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#CCE08E]">Personal Details</h3>
                <div className="space-y-2 text-[#DBDED2]">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#CCE08E]" /> Berhampore, WB
                  </p>
                  <p>
                    I'm a passionate frontend developer with 5+ years of experience creating engaging web experiences.
                    My journey in tech began when I built my first website at 15, and I've been hooked ever since.
                  </p>
                  <p>
                    When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes, or
                    attending local tech meetups. I believe in continuous learning and pushing the boundaries of what's
                    possible on the web.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#CCE08E]">My Approach</h3>
                <div className="space-y-2 text-[#DBDED2]">
                  <p>
                    I approach each project with a user-first mindset, ensuring that the end product is not only
                    visually appealing but also intuitive and accessible. I believe that great design should be
                    inclusive and serve all users regardless of their abilities.
                  </p>
                  <p>
                    My technical expertise combined with an eye for design allows me to bridge the gap between
                    functionality and aesthetics. I'm constantly exploring new technologies and design trends to stay at
                    the forefront of the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#33342E] sm:text-4xl">
              Educational Qualifications
            </h2>
            <div className="mx-auto max-w-3xl space-y-8">
              <Card className="border-[#33342E]/10 bg-white/50">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[#33342E]">Master of Computer Application</h3>
                      <p className="text-[#33342E]/70">Lovely Professional University</p>
                    </div>
                    <div className="rounded-full bg-[#CCE08E] px-4 py-1 text-sm font-medium text-[#33342E]">
                      2024 - Present
                    </div>
                  </div>
                  <p className="mt-4 text-[#33342E]/80">
                    Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors and received
                    the Outstanding Graduate Student Award.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#33342E]/10 bg-white/50">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[#33342E]">Bachelor of Computer Application</h3>
                      <p className="text-[#33342E]/70">GLA University, Mathura, UP</p>
                    </div>
                    <div className="rounded-full bg-[#CCE08E] px-4 py-1 text-sm font-medium text-[#33342E]">
                      2021 - 2024
                    </div>
                  </div>
                  <p className="mt-4 text-[#33342E]/80">
                    Focused on Software Engineering and Design. Participated in multiple hackathons and led the Web
                    Development Club.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#33342E]/10 bg-white/50">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[#33342E]">UI/UX Design Certification</h3>
                      <p className="text-[#33342E]/70">Nielsen Norman Group</p>
                    </div>
                    <div className="rounded-full bg-[#CCE08E] px-4 py-1 text-sm font-medium text-[#33342E]">2019</div>
                  </div>
                  <p className="mt-4 text-[#33342E]/80">
                    Comprehensive certification covering user research, information architecture, interaction design,
                    and usability testing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-[#CCE08E]/30">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#33342E] sm:text-4xl">Skills & Expertise</h2>
            <Tabs defaultValue="technical" className="mx-auto max-w-3xl">
              <TabsList className="grid w-full grid-cols-3 bg-[#33342E]/10">
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-[#CCE08E] data-[state=active]:text-[#33342E]"
                >
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="data-[state=active]:bg-[#CCE08E] data-[state=active]:text-[#33342E]"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  value="soft"
                  className="data-[state=active]:bg-[#CCE08E] data-[state=active]:text-[#33342E]"
                >
                  Soft Skills
                </TabsTrigger>
              </TabsList>
              <TabsContent value="technical" className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "JavaScript/TypeScript", level: 95 },
                    { name: "React & Next.js", level: 90 },
                    { name: "HTML5 & CSS3", level: 95 },
                    { name: "Node.js", level: 80 },
                    { name: "GraphQL", level: 75 },
                    { name: "Git & CI/CD", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-[#33342E]">{skill.name}</span>
                        <span className="text-sm text-[#33342E]/70">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#33342E]/10">
                        <div className="h-full bg-[#33342E]" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "UI/UX Design", level: 90 },
                    { name: "Figma", level: 95 },
                    { name: "Adobe XD", level: 85 },
                    { name: "Responsive Design", level: 95 },
                    { name: "Design Systems", level: 90 },
                    { name: "Accessibility", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-[#33342E]">{skill.name}</span>
                        <span className="text-sm text-[#33342E]/70">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#33342E]/10">
                        <div className="h-full bg-[#33342E]" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="soft" className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: "Communication", level: 90 },
                    { name: "Problem Solving", level: 95 },
                    { name: "Team Collaboration", level: 90 },
                    { name: "Project Management", level: 85 },
                    { name: "Adaptability", level: 90 },
                    { name: "Time Management", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-[#33342E]">{skill.name}</span>
                        <span className="text-sm text-[#33342E]/70">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#33342E]/10">
                        <div className="h-full bg-[#33342E]" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#33342E] sm:text-4xl">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
                  tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                  image: "https://i.pinimg.com/736x/9d/42/4b/9d424bc84b651d2087b6442dc4a98035.jpg",
                },
                {
                  title: "Health & Fitness App",
                  description:
                    "Mobile-first web application for tracking workouts, nutrition, and health metrics with data visualization.",
                  tech: ["React", "Redux", "Chart.js", "Firebase"],
                  image: "https://i.pinimg.com/736x/f3/89/d5/f389d569da6e4e3bfcb88500695708f1.jpg",
                },
                {
                  title: "Creative Agency Website",
                  description:
                    "Responsive website for a creative agency featuring animated interactions and a custom CMS.",
                  tech: ["Next.js", "GSAP", "Sanity.io", "Framer Motion"],
                  image: "https://i.pinimg.com/736x/ca/a9/da/caa9daf8052e37d0aa44b33c9ccdd810.jpg",
                },
                {
                  title: "Task Management Dashboard",
                  description:
                    "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
                  tech: ["React", "TypeScript", "Socket.io", "Node.js"],
                  image: "https://i.pinimg.com/736x/9c/68/a3/9c68a38cb056441679a8ff61e5cde73a.jpg",
                },
                {
                  title: "Event Booking Platform",
                  description:
                    "Comprehensive travel booking platform with search, filtering, and booking capabilities.",
                  tech: ["Next.js", "GraphQL", "MongoDB", "Mapbox"],
                  image: "https://i.pinimg.com/736x/30/bb/0d/30bb0d1157598381501bc86373e7e80f.jpg",
                },
                {
                  title: "AI Content Generator",
                  description:
                    "Web application that leverages AI to generate various types of content for marketing and social media.",
                  tech: ["React", "OpenAI API", "Express", "PostgreSQL"],
                  image: "https://i.pinimg.com/736x/4c/8e/00/4c8e00c995d166548caccf1234641de0.jpg",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden border-[#33342E]/10 bg-white/50">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#33342E]">{project.title}</h3>
                    <p className="mb-4 text-[#33342E]/70">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#CCE08E] px-3 py-1 text-xs font-medium text-[#33342E]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" className="border-[#33342E] text-[#33342E]">
                        View Details
                      </Button>
                      <Button variant="ghost" className="text-[#33342E]">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-[#33342E]">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#DBDED2] sm:text-4xl">What People Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "Product Manager at TechCorp",
                  content:
                    "Jane transformed our product with her exceptional frontend skills. Her attention to detail and user-focused approach resulted in a 40% increase in user engagement.",
                },
                {
                  name: "Sarah Williams",
                  role: "CEO at DesignHub",
                  content:
                    "Working with Jane was a game-changer for our startup. She not only delivered a beautiful website but also provided valuable insights that improved our overall product strategy.",
                },
                {
                  name: "Michael Chen",
                  role: "CTO at InnovateTech",
                  content:
                    "Jane's technical expertise is matched only by her creativity. She consistently delivered solutions that exceeded our expectations and helped us stand out in a competitive market.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-[#DBDED2]/10 bg-[#DBDED2]/5">
                  <CardContent className="p-6">
                    <div className="mb-4 text-[#CCE08E]">{"★".repeat(5)}</div>
                    <p className="mb-6 text-[#DBDED2]">{testimonial.content}</p>
                    <div>
                      <h4 className="font-semibold text-[#CCE08E]">{testimonial.name}</h4>
                      <p className="text-sm text-[#DBDED2]/70">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#33342E] sm:text-4xl">Get In Touch</h2>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <Card className="border-[#33342E]/10 bg-white/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#33342E]">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCE08E]">
                        <Mail className="h-5 w-5 text-[#33342E]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#33342E]/70">Email</p>
                        <p className="font-medium text-[#33342E]">kaustav.raysinha@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CCE08E]">
                        <MapPin className="h-5 w-5 text-[#33342E]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#33342E]/70">Location</p>
                        <p className="font-medium text-[#33342E]">Berhampore, WB</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="mb-2 font-medium text-[#33342E]">Follow Me</h4>
                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#33342E] text-[#DBDED2] hover:bg-[#33342E]/90"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#33342E] text-[#DBDED2] hover:bg-[#33342E]/90"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#33342E] text-[#DBDED2] hover:bg-[#33342E]/90"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-[#33342E]/10 bg-white/50">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#33342E]">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#33342E]">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-[#33342E]/20 bg-white/50 px-3 py-2 text-[#33342E] focus:border-[#CCE08E] focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#33342E]">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-[#33342E]/20 bg-white/50 px-3 py-2 text-[#33342E] focus:border-[#CCE08E] focus:outline-none"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-[#33342E]">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-[#33342E]/20 bg-white/50 px-3 py-2 text-[#33342E] focus:border-[#CCE08E] focus:outline-none"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#33342E]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-[#33342E]/20 bg-white/50 px-3 py-2 text-[#33342E] focus:border-[#CCE08E] focus:outline-none"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-[#33342E] hover:bg-[#33342E]/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#33342E]/10 bg-[#DBDED2] py-8">
        <div className="container text-center">
          <p className="text-[#33342E]/70">© {new Date().getFullYear()} Kaustav Kr. Sinha Ray 12417607. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
