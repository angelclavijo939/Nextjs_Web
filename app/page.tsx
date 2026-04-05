"use client";
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

const services = [
  { icon: "🎨", name: "Diseño Web", tag: "UI/UX · Creadores", href: "/diseno-web.html", delay: "" },
  { icon: "💻", name: "Desarrollo de Software", tag: "Python · JS · PHP · SQL", href: "/desarrollo-software.html", delay: "reveal-delay-1" },
  { icon: "✍️", name: "Escritura y Traducción", tag: "Audio · Video · Idiomas", href: "/escritura-traduccion.html", delay: "reveal-delay-2" },
  { icon: "📈", name: "Marketing Digital", tag: "SEO · Redes · SEM", href: "/marketing-digital.html", delay: "reveal-delay-1" },
  { icon: "🤖", name: "Servicios de IA", tag: "Chatbots · Modelos · Apps", href: "/servicios-ia.html", delay: "reveal-delay-2" },
  { icon: "🏢", name: "Negocios", tag: "Consultoría · BI · Gestión", href: "/negocios.html", delay: "reveal-delay-3" },
];

const testimonials = [
  { text: "El equipo de Nexus Tech transformó completamente nuestra presencia digital. El nuevo sistema de IA que desarrollaron redujo nuestros tiempos de respuesta en un 70%. Increíble trabajo.", name: "Carlos Mendoza", role: "CEO, TechStart Colombia", avatar: "https://randomuser.me/api/portraits/men/32.jpg", delay: "" },
  { text: "Implementaron una estrategia de marketing digital que triplicó nuestras ventas en tres meses. Su enfoque en SEO y redes sociales fue exactamente lo que necesitábamos para crecer.", name: "Valentina Ríos", role: "Directora de Marketing, GrowUp", avatar: "https://randomuser.me/api/portraits/women/44.jpg", delay: "reveal-delay-1" },
  { text: "El chatbot de IA que desarrollaron para nuestra tienda online atiende el 80% de las consultas automáticamente. Ahorramos horas de trabajo y nuestros clientes están encantados.", name: "Andrés Suárez", role: "Fundador, Ecommerce Pro", avatar: "https://randomuser.me/api/portraits/men/68.jpg", delay: "reveal-delay-2" },
];

const blogPosts = [
  { img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=70", alt: "IA Generativa", tag: "IA", title: "El Futuro de la IA Generativa en los Negocios 2025", excerpt: "Descubre cómo las empresas están adoptando modelos de lenguaje avanzados para automatizar procesos y generar valor competitivo.", author: "Ana Torres", authorImg: "https://randomuser.me/api/portraits/women/22.jpg", likes: 142, delay: "" },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=70", alt: "SEO 2025", tag: "Marketing", title: "SEO en la Era de la Inteligencia Artificial: Guía Completa", excerpt: "Las estrategias de posicionamiento han cambiado radicalmente. Aprende a optimizar tu presencia web con las nuevas reglas de búsqueda.", author: "Luis García", authorImg: "https://randomuser.me/api/portraits/men/45.jpg", likes: 98, delay: "reveal-delay-1" },
  { img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=70", alt: "Desarrollo Web", tag: "Desarrollo", title: "Arquitecturas Modernas para Aplicaciones Web de Alto Rendimiento", excerpt: "Microservicios, serverless y edge computing: las tecnologías que definen la próxima generación de aplicaciones empresariales.", author: "Sofia Perea", authorImg: "https://randomuser.me/api/portraits/women/55.jpg", likes: 76, delay: "reveal-delay-2" },
];

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(post.likes);
  function toggleLike() {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  }
  return (
    <article className={`blog-card reveal ${post.delay}`}>
      <Image src={post.img} alt={post.alt} width={600} height={340} className="blog-img" style={{ objectFit: "cover" }} />
      <div className="blog-content">
        <span className="blog-tag">{post.tag}</span>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <div className="blog-author">
            <Image src={post.authorImg} alt={post.author} width={32} height={32} className="blog-author-img" />
            <span>{post.author}</span>
          </div>
          <button className="blog-likes" onClick={toggleLike} aria-label="Me gusta">
            <span>{liked ? "♥" : "♡"}</span>
            <span className="like-count">{count}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="hero-video-bg">
          <iframe src="https://player.vimeo.com/video/384836251?autoplay=1&loop=1&muted=1&background=1" frameBorder="0" allow="autoplay; fullscreen" title="Video fondo servidor" />
        </div>
        <div className="hero-img-bg" />
        <div className="hero-overlay" />
        <div className="hero-particles" id="heroParticles" />
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot" />Tecnología · IA · Marketing Digital</div>
          <h1 className="hero-title">Transformamos Ideas en<br /><span className="highlight">Soluciones Digitales</span><br />de Alto Impacto</h1>
          <p className="hero-desc">Expertos en desarrollo web, inteligencia artificial y marketing digital. Impulsamos tu negocio hacia el futuro tecnológico.</p>
          <div className="cta-group">
            <Link href="#services" className="btn-primary">Explorar Servicios ↓</Link>
            <Link href="#contact" className="btn-secondary">Habla con Nosotros</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-arrow" /></div>
      </section>

      <section id="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones integrales para cada necesidad digital</p>
          <span className="glow-line" />
          <div className="services-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={`service-btn reveal ${s.delay}`}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-tag">{s.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal">
              <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Experta en tecnología" width={800} height={600} className="about-img" style={{ objectFit: "cover" }} />
            </div>
            <div className="about-content reveal reveal-delay-2">
              <span className="about-badge">// Quién Soy</span>
              <h2 className="about-title">Innovación y Experiencia<br />al Servicio de tu <span>Empresa</span></h2>
              <p className="about-text">Soy una profesional apasionada por la tecnología con más de 8 años de experiencia en desarrollo de software, inteligencia artificial y marketing digital.</p>
              <p className="about-text">Combino creatividad técnica con visión estratégica para entregar soluciones que no solo funcionan perfectamente, sino que generan resultados medibles y sostenibles.</p>
              <div className="about-stats">
                {[{ number: "120+", label: "Proyectos" }, { number: "8+", label: "Años exp." }, { number: "98%", label: "Satisfacción" }].map((s) => (
                  <div key={s.label} className="stat-item">
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="btn-primary">Trabajemos Juntos →</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="testimonials">
        <div className="container">
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">Experiencias reales de quienes confían en nosotros</p>
          <span className="glow-line" />
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className={`testimonial-card reveal ${t.delay}`}>
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="author-avatar" />
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="blog">
        <div className="container">
          <h2 className="section-title">Últimos Artículos</h2>
          <p className="section-subtitle">Conocimiento actualizado sobre tecnología e innovación</p>
          <span className="glow-line" />
          <div className="blog-grid">
            {blogPosts.map((post) => (<BlogCard key={post.title} post={post} />))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section id="contact">
        <svg className="atom-bg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#00f5ff" strokeWidth="1">
            <ellipse cx="200" cy="200" rx="160" ry="60"><animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="8s" repeatCount="indefinite" /></ellipse>
            <ellipse cx="200" cy="200" rx="160" ry="60"><animateTransform attributeName="transform" type="rotate" from="60 200 200" to="420 200 200" dur="10s" repeatCount="indefinite" /></ellipse>
            <ellipse cx="200" cy="200" rx="160" ry="60"><animateTransform attributeName="transform" type="rotate" from="120 200 200" to="480 200 200" dur="12s" repeatCount="indefinite" /></ellipse>
            <circle cx="200" cy="200" r="12" fill="#00f5ff" opacity="0.6" />
          </g>
        </svg>
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info reveal">
              <h2>Hablemos de tu<br />Próximo Proyecto</h2>
              <p>Estamos listos para llevar tu idea al siguiente nivel. Cuéntanos qué necesitas y te daremos una solución a medida.</p>
              <div className="contact-detail"><div className="contact-icon">📧</div><span><a href="mailto:info@nexustech.co">info@nexustech.co</a></span></div>
              <div className="contact-detail"><div className="contact-icon">📍</div><span>Bogotá, Colombia</span></div>
              <div className="contact-detail"><div className="contact-icon">⏰</div><span>Lun–Vie · 8:00 AM – 6:00 PM</span></div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
