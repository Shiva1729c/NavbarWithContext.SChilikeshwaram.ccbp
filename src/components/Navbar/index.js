// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const toggleBackgroundTheme = isDarkTheme ? 'dark-theme' : ''
      const toggleLinkColor = isDarkTheme ? 'light-color' : ''

      return (
        <div className={`navbar-container ${toggleBackgroundTheme}`}>
          <div className="nav-content">
            <img src={websiteLogoUrl} alt="website logo" className="logo" />
            <ul className="home-about-container">
              <Link to="/" className="link">
                <li className={`navbar-link ${toggleLinkColor}`}>Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className={`navbar-link ${toggleLinkColor}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="theme-btn"
              onClick={onToggleTheme}
            >
              <img src={themeLogoUrl} alt="theme" className="logo" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
