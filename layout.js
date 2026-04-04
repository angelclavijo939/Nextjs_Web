import "./globals.css"; // reemplaza styles.css

export const metadata = {
  title: "NEXUS TECH — Proyectos · Marketing Digital · IA",
  description:
    "Empresa líder en tecnología, marketing digital e inteligencia artificial. Transformamos ideas en soluciones digitales de alto impacto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* ── PRELOADER ── */}
        <div id="preloader">
          <div className="preloader-logo">NEXUS TECH</div>
        </div>

        {/* ── WHATSAPP FLOTANTE ── */}
        <a
          className="whatsapp-float"
          href="https://wa.me/573112241803"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* ── HEADER ── */}
        <header id="header">
          <a href="/" className="logo">
            <div className="logo-icon">⚡</div>
            NEXUS TECH
          </a>

          {/* El hamburger necesita interactividad → extraer a un Client Component si se requiere */}
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menú"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="nav-menu" id="nav-menu" role="navigation">
            <a href="#hero">Inicio</a>
            <a href="#services">Servicios</a>
            <a href="#about">Quién Soy</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contacto</a>
          </nav>
        </header>

        {/* ── CONTENIDO DE PÁGINA ── */}
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer id="footer">
          <div className="container">
            <div className="footer-grid">
              {/* Marca */}
              <div className="footer-brand">
                <div className="logo" style={{ marginBottom: "20px" }}>
                  <div className="logo-icon">⚡</div>
                  NEXUS TECH
                </div>
                <p className="footer-desc">
                  Empresa líder en tecnología, marketing digital e inteligencia
                  artificial. Transformamos ideas en soluciones de alto impacto.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    𝕏
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    ig
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    ▶
                  </a>
                </div>
              </div>

              {/* Enlaces rápidos */}
              <div className="footer-col">
                <h4>Enlaces Rápidos</h4>
                <div className="footer-links">
                  <a href="/politicas">Políticas de privacidad</a>
                  <a href="#blog">Blog</a>
                  <a href="/soporte">Soporte técnico</a>
                  <a href="#about">Quién soy</a>
                  <a href="#services">Servicios</a>
                </div>
              </div>

              {/* Servicios */}
              <div className="footer-col">
                <h4>Servicios</h4>
                <div className="footer-links">
                  <a href="/diseno-web">Diseño Web</a>
                  <a href="/desarrollo-software">Software</a>
                  <a href="/marketing-digital">Marketing Digital</a>
                  <a href="/servicios-ia">Servicios IA</a>
                  <a href="/negocios">Negocios</a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter">
                <h4>Newsletter</h4>
                <p>Recibe las últimas novedades en tecnología e IA.</p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="tucorreo@email.com"
                    aria-label="Email para newsletter"
                  />
                  {/* onClick requiere un Client Component — ver nota abajo */}
                  <button className="newsletter-btn">→</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2025 Nexus Tech. Todos los derechos reservados.
              </p>
              <div className="footer-legal">
                <a href="/politicas">Privacidad</a>
                <a href="/politicas">Términos</a>
                <a href="/soporte">Soporte</a>
                <a href="mailto:info@nexustech.co">Contacto</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
