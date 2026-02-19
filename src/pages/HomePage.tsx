import { useLanguage } from '../context/LanguageContext'

const benefits = [
  { icon: '/images/elementb1.png' },
  { icon: '/images/elementb2.png' },
  { icon: '/images/elementb3.png' },
  { icon: '/images/elementb4.png' },
]

const steps = [
  { icon: '/images/sign-up.svg' },
  { icon: '/images/promote.svg' },
  { icon: '/images/earning.svg' },
  { icon: '/images/approved.svg' },
]

const products = [
  { image: '/images/cricket.png' },
  { image: '/images/livecasino.png' },
  { image: '/images/slot.png' },
  { image: '/images/crash.png' },
  { image: '/images/table.png' },
  { image: '/images/fishing.png' },
]

const heroSlides = [
  {
    desktop: '/images/desktop.bn-BD.png',
    mobile: '/images/mobile.bn-BD.png',
  },
  {
    desktop: '/images/luxury-retreat-desktop-1920x490.jpg',
    mobile: '/images/luxury-retreat-mobile-828x1060.jpg',
    alt: 'Luxury Retreat Promotion',
  },
]

export function HomePage() {
  const { t } = useLanguage()
  const currentHeroSlide = heroSlides[0]

  return (
    <div className="stack-lg">
      <section className="hero-slider" aria-label={t.home.heroAriaLabel}>
        <picture className="hero-slide">
          {currentHeroSlide.mobile ? <source media="(max-width: 700px)" srcSet={currentHeroSlide.mobile} /> : null}
          <img src={currentHeroSlide.desktop} alt={t.home.heroAlt} />
        </picture>
      </section>

      <section className="card promo-strip">
        <div>
          <h3>{t.home.promoTitle}</h3>
          <p>{t.home.promoPeriod}</p>
          <a className="cta promo-join" href="https://lankaretreat.pages.dev/" target="_blank" rel="noreferrer">
            {t.home.promoJoinNow}
          </a>
        </div>
        <div className="promo-prizes">
          <article className="reward-card top-one">
            <img className="reward-badge" src="https://www.betjuicy.com/leaderboard/raffles-first.svg" alt={t.home.promoBadges.top1Alt} />
            <h4>{t.home.promoBadges.top1Label}</h4>
            <p>{t.home.promoBadges.top1Text}</p>
          </article>
          <article className="reward-card top-two">
            <img className="reward-badge" src="https://www.betjuicy.com/leaderboard/raffles-second.svg" alt={t.home.promoBadges.top23Alt} />
            <h4>{t.home.promoBadges.top23Label}</h4>
            <p>{t.home.promoBadges.top23Text}</p>
          </article>
          <article className="reward-card top-three">
            <img className="reward-badge" src="https://www.betjuicy.com/leaderboard/raffles-third.svg" alt={t.home.promoBadges.top47Alt} />
            <h4>{t.home.promoBadges.top47Label}</h4>
            <p>{t.home.promoBadges.top47Text}</p>
          </article>
        </div>
      </section>

      <section className="section why-affiliate-section">
        <h2>{t.home.whyTitle}</h2>
        <p className="section-intro">{t.home.whyIntro}</p>
        <div className="grid-4 why-affiliate-grid">
          {benefits.map((item, index) => (
            <article key={item.icon} className="card feature">
              <img src={item.icon} alt="" />
              <h3>{t.home.benefits[index].title}</h3>
              <p>{t.home.benefits[index].text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card padded">
        <div>
          <h2>{t.home.aboutTitle}</h2>
          <p>{t.home.aboutP1}</p>
          <p>{t.home.aboutP2}</p>
        </div>
      </section>

      <section className="section card padded commission-highlight">
        <div>
          <h2>{t.home.commissionTitle}</h2>
          <p>{t.home.commissionIntro}</p>
          <div className="commission-table-wrap" role="region" aria-label={t.home.commissionTableAriaLabel}>
            <table className="commission-table">
              <thead>
                <tr>
                  <th>{t.home.commissionHeaders.activePlayers}</th>
                  <th>{t.home.commissionHeaders.commission}</th>
                </tr>
              </thead>
              <tbody>
                {t.home.commissionRows.map((row) => (
                  <tr key={row.players}>
                    <td>{row.players}</td>
                    <td>{row.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{t.home.stepsTitle}</h2>
        <div className="grid-4">
          {steps.map((item, index) => (
            <article key={item.icon} className="card feature">
              <img src={item.icon} alt="" />
              <h3>{t.home.steps[index].title}</h3>
              <p>{t.home.steps[index].text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section">
        <h2>{t.home.productsTitle}</h2>
        <div className="products-grid">
          {products.map((item, index) => (
            <article key={item.image} className="card product">
              <img src={item.image} alt={t.home.products[index]} />
              <h3>{t.home.products[index]}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.home.faqTitle}</h2>
        <div className="stack-sm">
          {t.home.faqs.map((item) => (
            <article key={item.q} className="card faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
