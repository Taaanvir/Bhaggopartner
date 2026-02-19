export function ContactPage() {
  return (
    <div className="stack-lg">
      <section className="section card padded support-card">
        <h1>Partner Support</h1>
        <img src="/images/cs.png" alt="Support" />
        <p className="support-hours">Monday - Saturday</p>
        <p className="support-hours">10:00 AM - 7:00 PM (GMT +6)</p>
        <p>
          Need campaign or commission support? Our affiliate team is available on Telegram for fast response.
        </p>
        <div className="center-row">
          <a className="cta" href="https://t.me/BhaggoPartnersSupport_bot?start=w46997251">
            Telegram Support
          </a>
        </div>
      </section>

      <section className="section card padded support-grid">
        <article className="card support-tile">
          <h3>Campaign Guidance</h3>
          <p>Get ad-angle suggestions, promo focus, and optimization recommendations for better conversion.</p>
        </article>
        <article className="card support-tile">
          <h3>Tracking & Reports</h3>
          <p>Need help reading reports? Our team helps validate traffic quality and commission calculations.</p>
        </article>
        <article className="card support-tile">
          <h3>Urgent Help</h3>
          <p>For urgent affiliate issues, contact Telegram support and include your partner ID for fastest handling.</p>
        </article>
      </section>
    </div>
  )
}
