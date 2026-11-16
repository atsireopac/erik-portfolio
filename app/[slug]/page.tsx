
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { pages, type PageSlug } from '../../lib/content';

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in pages)) {
    notFound();
  }

  const page = pages[slug as PageSlug];

  return (
    <main className="shell">
      <section className="section">
        <div className="prompt">
          $ cat /{slug}/README.md
        </div>

        <h1 style={{ fontSize: 'clamp(30px,5vw,48px)' }}>
          {page.title}
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 780,
            lineHeight: 1.7,
          }}
        >
          {page.intro}
        </p>

        <div className="grid" style={{ marginTop: 30 }}>
          {page.items.map((item, i) => (
            <article className="card" key={i}>

              {/* Imagem individual da certificação */}
              {'badgeImage' in item &&
                typeof item.badgeImage === 'string' && (
                  <div
                    style={{
                      textAlign: 'center',
                      marginBottom: 24,
                    }}
                  >
                    <Image
                      src={item.badgeImage}
                      alt={`Badge da certificação ${item.title}`}
                      width={220}
                      height={220}
                      style={{
                        width: '100%',
                        maxWidth: 220,
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )}

              {/* Nome da formação, experiência ou certificação */}
              <h2
                style={{
                  fontSize: 19,
                  color: '#86efac',
                  marginTop: 0,
                }}
              >
                {item.title}
              </h2>

              {/* Instituição e período */}
              <p
                className="prompt"
                style={{
                  fontSize: 13,
                }}
              >
                {item.meta}
              </p>

              {/* Descrição */}
              {'description' in item &&
                typeof item.description === 'string' && (
                  <p
                    className="muted"
                    style={{
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                )}

              {/* Link oficial para verificar a certificação */}
              {'badgeUrl' in item &&
                typeof item.badgeUrl === 'string' && (
                  <a
                    className="btn"
                    href={item.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 16,
                      display: 'inline-block',
                    }}
                  >
                    Verificar credencial ↗
                  </a>
                )}

            </article>
          ))}
        </div>

        <p style={{ marginTop: 32 }}>
          <Link className="btn secondary" href="/">
            ← Voltar ao início
          </Link>
        </p>
      </section>
    </main>
  );
}
