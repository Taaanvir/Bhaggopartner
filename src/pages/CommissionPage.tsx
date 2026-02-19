import { useLanguage } from '../context/LanguageContext'

export function CommissionPage() {
  const { t } = useLanguage()

  return (
    <div className="stack-lg">
      <section className="section card padded commission-hero">
        <h1>{t.commission.pageTitle}</h1>
        <p>{t.commission.pageIntro}</p>
        <div className="commission-table-wrap" role="region" aria-label={t.commission.tableAriaLabel}>
          <table className="commission-table">
            <thead>
              <tr>
                <th>{t.commission.tableHeaders.activePlayers}</th>
                <th>{t.commission.tableHeaders.commission}</th>
              </tr>
            </thead>
            <tbody>
              {t.commission.tableRows.map((row) => (
                <tr key={row.players}>
                  <td>{row.players}</td>
                  <td>{row.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="center-row">
          <a className="cta" href="https://english-bhaggopartnerform.my.canva.site/">
            {t.commission.joinNow}
          </a>
        </div>
      </section>

      <section className="section card padded">
        <h2>{t.commission.termsTitle}</h2>
        <div className="stack-sm">
          {t.commission.terms.map((item, index) => (
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
