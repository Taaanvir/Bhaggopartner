import { useLanguage } from '../context/LanguageContext'

export function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="stack-lg">
      <section className="section card padded support-card">
        <h1>{t.contact.pageTitle}</h1>
        <img src="/images/cs.png" alt={t.contact.supportImageAlt} />
        <p className="support-hours">{t.contact.dayHours}</p>
        <p className="support-hours">{t.contact.timeHours}</p>
        <p>{t.contact.intro}</p>
        <div className="center-row">
          <a className="cta" href="https://t.me/BhaggoPartnersSupport_bot?start=w46997251">
            {t.contact.telegramSupport}
          </a>
        </div>
      </section>

      <section className="section card padded support-grid">
        <article className="card support-tile">
          <h3>{t.contact.tiles[0].title}</h3>
          <p>{t.contact.tiles[0].text}</p>
        </article>
        <article className="card support-tile">
          <h3>{t.contact.tiles[1].title}</h3>
          <p>{t.contact.tiles[1].text}</p>
        </article>
        <article className="card support-tile">
          <h3>{t.contact.tiles[2].title}</h3>
          <p>{t.contact.tiles[2].text}</p>
        </article>
      </section>
    </div>
  )
}
