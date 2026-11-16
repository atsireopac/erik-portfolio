
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { profile } from '../lib/content';

const sections = [
  [
    'Experiência',
    'Sustentação de sistemas, infraestrutura, redes e DevOps.',
    '/experiencia',
  ],
  [
    'Formação',
    'Graduação, pós-graduação e formação técnica.',
    '/formacao',
  ],
  [
    'Certificações',
    'Cursos, certificados e badges verificáveis.',
    '/certificacoes',
  ],
  [
    'Projetos',
    'Engenharia de software e projetos pessoais.',
    '/projetos',
  ],
  [
    'Laboratórios',
    'Prática de segurança em ambientes autorizados.',
    '/laboratorios',
  ],
];

export default function Home() {
  return (
    <main className="shell">
      {/* Apresentação profissional */}
      <section className="section terminal">
        <div className="prompt" style={{ marginBottom: 26 }}>
          $ whoami
        </div>

        <div className="hero-profile">
          <div className="hero-content">
            <h1
              style={{
                fontSize: 'clamp(36px, 6vw, 68px)',
                lineHeight: 1.05,
                margin: '0 0 14px',
              }}
            >
              {profile.name}
              <span className="cursor" style={{ color: '#4ade80' }}>
                _
              </span>
            </h1>

            <p style={{ color: '#86efac', fontSize: 18 }}>
              {profile.role}
            </p>

            <p
              className="muted"
              style={{
                maxWidth: 740,
                lineHeight: 1.8,
              }}
            >
              {profile.about}
            </p>

            {/* Tecnologias */}
            <div style={{ margin: '22px 0' }}>
              {profile.skills.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Botões principais */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <Link className="btn" href="/projetos">
                Ver projetos
              </Link>

              <Link className="btn secondary" href="/certificacoes">
                Ver conquistas
              </Link>
            </div>

            {/* Redes profissionais */}
            <div className="social-links">
              <a
                href="https://github.com/atsireopac"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Erik Barbosa"
                className="social-link"
              >
                <Github size={23} aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/erikbarbosadacosta/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Erik Barbosa"
                className="social-link"
              >
                <Linkedin size={23} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Foto profissional */}
          <div className="hero-photo">
            <Image
              src="/perfil.png"
              alt="Retrato profissional de Erik Barbosa"
              width={320}
              height={320}
              priority
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Navegação pelas seções */}
      <section className="section">
        <div className="prompt">$ ls ./trajetoria/</div>

        <h2>Explore minha trajetória</h2>

        <div className="grid">
          {sections.map(([name, description, href]) => (
            <Link className="card" key={href} href={href}>
              <h3 style={{ color: '#86efac' }}>
                {name} ↗
              </h3>

              <p className="muted">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Conquistas recentes */}
      <section className="section terminal">
        <div className="prompt">
          $ cat conquistas-recentes.txt
        </div>

        <h2>Aprendizado contínuo</h2>

        <p>
          ✓ Introdução à Cibersegurança — Cisco Networking Academy (2026)
        </p>

        <p>
          ✓ Linux Essentials — Linux Professional Institute (LPI)
        </p>

        <p className="muted">
          ↻ Conceitos Básicos de Redes — Cisco Networking Academy
          (em andamento)
        </p>
      </section>
    </main>
  );
}
