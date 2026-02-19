const terms = [
  'You must be 18 years or older to become an affiliate.',
  'Agents cannot open player accounts with their own referral links.',
  'Suspicious behavior, abuse, or duplicate account activity may lead to suspension.',
  'Promotions are strictly one-person use and duplicate identity/payment data is not allowed.',
  'Draw, refund, canceled, opposite-side, or non-active bets are excluded from valid turnover.',
  'All affiliates must comply with Bhaggo’s website terms and promotional policy updates.',
  'Bhaggo reserves the right to update or discontinue promotions without prior notice.',
]

export function CommissionPage() {
  return (
    <div className="stack-lg">
      <section className="section card padded commission-hero">
        <h1>Commission Structure</h1>
        <p>Competitive, transparent, and optimized for scalable affiliate performance.</p>
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
        <div className="center-row">
          <a className="cta" href="https://english-bhaggopartnerform.my.canva.site/">
            Join Now
          </a>
        </div>
      </section>

      <section className="section card padded">
        <h2>Terms & Conditions</h2>
        <div className="stack-sm">
          {terms.map((item, index) => (
            <article key={item} className="card term-item">
              <span>{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
