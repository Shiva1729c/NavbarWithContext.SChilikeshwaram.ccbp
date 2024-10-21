// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const toggleBackgroundTheme = isDarkTheme ? 'dark-color-theme' : ''
      const toggleHeadingColor = isDarkTheme ? 'light-color' : ''

      return (
        <>
          <Navbar />
          <div className={`bg-container ${toggleBackgroundTheme}`}>
            <img src={homeUrl} alt="about" className="icon" />
            <h1 className={`heading ${toggleHeadingColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
