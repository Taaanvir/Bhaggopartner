const benefits = [
  { icon: '/images/elementb1.png', title: 'Easy to Join', text: 'Quick onboarding, instant tracking link, and immediate campaign readiness.' },
  { icon: '/images/elementb2.png', title: 'Big Commission', text: 'Up to 50% revenue share with top-performing partner slabs.' },
  { icon: '/images/elementb3.png', title: 'Lifetime Revenue', text: 'Keep earning from quality users with strong long-term retention.' },
  { icon: '/images/elementb4.png', title: 'Flexible Promotion', text: 'Run traffic from social, communities, or content properties with flexibility.' },
]

const steps = [
  { icon: '/images/sign-up.svg', title: 'Step 01 · Register', text: 'Submit your affiliate application and get approved fast.' },
  { icon: '/images/promote.svg', title: 'Step 02 · Promote', text: 'Launch your tracking links with ready-to-use creative assets.' },
  { icon: '/images/earning.svg', title: 'Step 03 · Convert', text: 'Drive first deposits with a high-converting product experience.' },
  { icon: '/images/approved.svg', title: 'Step 04 · Scale', text: 'Expand campaigns with partner support and optimization.' },
]

const products = [
  { image: '/images/cricket.png', name: 'Sportsbook' },
  { image: '/images/livecasino.png', name: 'Live Casino' },
  { image: '/images/slot.png', name: 'Slots' },
  { image: '/images/crash.png', name: 'Crash Games' },
  { image: '/images/table.png', name: 'Table Games' },
  { image: '/images/fishing.png', name: 'Fishing Games' },
]

const faqs = [
  {
    q: 'How fast can I start earning?',
    a: 'Most partners can start driving traffic within 24 hours after approval, with real-time performance tracking.',
  },
  {
    q: 'How often do payouts happen?',
    a: 'Payouts follow a regular cycle, supported by transparent reporting and clear commission breakdowns.',
  },
  {
    q: 'Do I get campaign support?',
    a: 'Yes. You receive dedicated support for creatives, campaign strategy, and conversion improvements.',
  },
]

export function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero-slider card" aria-label="Promote Bhaggo and Earn Premium Rewards">
        <picture className="hero-slide">
          <source media="(max-width: 700px)" srcSet="/images/mobile.bn-BD.png" />
          <img src="/images/desktop.bn-BD.png" alt="Promote Bhaggo and Earn Premium Rewards" />
        </picture>
      </section>

      <section className="card promo-strip">
        <div>
          <h3>Lanka Retreat Race</h3>
          <p>Campaign period: 01 February 2026 - 30 April 2026</p>
          <a className="cta promo-join" href="https://lankaretreat.pages.dev/" target="_blank" rel="noreferrer">
            Join Now
          </a>
        </div>
        <div className="promo-prizes">
          <article className="reward-card top-one">
            <h4>Top 1</h4>
            <p>Full Package</p>
          </article>
          <article className="reward-card top-two">
            <h4>Top 2-3</h4>
            <p>Half Package</p>
          </article>
          <article className="reward-card top-three">
            <h4>Top 4-7</h4>
            <p>Partial Package</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Why become a Bhaggo affiliate</h2>
        <div className="grid-4">
          {benefits.map((item, index) => (
            <article key={item.title} className="card feature">
              <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section card padded">
        <div>
          <h2>About Bhaggo Affiliate</h2>
          <p>
            Bhaggo combines strong conversion flow, reliable user retention, and transparent affiliate reporting for both
            beginner and advanced partners.
          </p>
          <p>
            Instead of short-term campaigns, the program is built for sustainable monthly earnings backed by responsive
            support and clear payout structure.
          </p>
        </div>
      </section>

      <section className="section card padded commission-highlight">
        <div>
          <h2>Highest commission in market</h2>
          <p>Tier-based structure designed to reward quality traffic and long-term partner growth.</p>
          <div className="commission-table-wrap" role="region" aria-label="Commission structure table">
            <table className="commission-table">
              <thead>
                <tr>
                  <th>Active Players</th>
                  <th>Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 - 10 Active Players</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>10 - 19 Active Players</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>20 or more active players</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>How to start in 4 steps</h2>
        <div className="grid-4">
          {steps.map((item) => (
            <article key={item.title} className="card feature">
              <img src={item.icon} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Products you can promote</h2>
        <div className="products-grid">
          {products.map((item) => (
            <article key={item.name} className="card product">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Frequently asked questions</h2>
        <div className="stack-sm">
          {faqs.map((item) => (
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
