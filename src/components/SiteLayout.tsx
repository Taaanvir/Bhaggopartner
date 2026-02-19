import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/home', external: false },
  { label: 'Commission Structure', to: '/commission', external: false },
  { label: 'Lanka Retreat Promo', to: 'https://lankaretreat.pages.dev/', external: true },
  { label: 'Contact Us', to: '/contact', external: false },
] as const

export function SiteLayout() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en')
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="header">
        <div className="header-top">
          <div className="page-wrap top-row">
            <a className="logo" href="/home">
              <img src="/images/bg.png" alt="Bhaggo" />
            </a>
            <div className="top-right">
              <div className="top-actions">
                <a className="cta" href="https://english-bhaggopartnerform.my.canva.site/">
                  Join Now
                </a>
              </div>
              <div className="language-selector">
                <button
                  type="button"
                  className="language-button"
                  aria-haspopup="listbox"
                  aria-expanded={languageOpen}
                  onClick={() => setLanguageOpen((prev) => !prev)}
                >
                  <img src={language === 'en' ? '/images/en.png' : '/images/bn.png'} alt="Selected language flag" />
                  <span>{language === 'en' ? 'EN' : 'BN'}</span>
                </button>

                {languageOpen ? (
                  <div className="language-menu" role="listbox" aria-label="Language options">
                    <button
                      type="button"
                      className={language === 'en' ? 'language-item active' : 'language-item'}
                      onClick={() => {
                        setLanguage('en')
                        setLanguageOpen(false)
                      }}
                    >
                      <img src="/images/en.png" alt="UK flag" />
                      <span>EN</span>
                    </button>
                    <button
                      type="button"
                      className={language === 'bn' ? 'language-item active' : 'language-item'}
                      onClick={() => {
                        setLanguage('bn')
                        setLanguageOpen(false)
                      }}
                    >
                      <img src="/images/bn.png" alt="Bangladesh flag" />
                      <span>BN</span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <nav className="page-wrap nav-row">
            {navItems.map((item) =>
              item.external ? (
                <a key={item.label} href={item.to} className="nav-link" target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </header>

      <main className="page-wrap page-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="page-wrap footer-inner">
          <div className="footer-logos">
            <img src="/images/bhaggologo.svg" alt="Bhaggo" />
            <img src="/images/cr-18.png" alt="18+" />
            <img src="/images/gt.png" alt="Gaming Therapy" />
            <img src="/images/gamingcuracao.png" alt="Gaming Curacao" />
          </div>
          <p>Copyright 2025 | Bhaggo Partners. All Rights Reserved | 18+</p>
        </div>
      </footer>
    </div>
  )
}
