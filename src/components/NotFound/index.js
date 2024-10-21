// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const toggleBackgroundTheme = isDarkTheme ? 'dark-color-theme' : ''
      const toggleHeadingColor = isDarkTheme ? 'light-color' : ''
      const toggleDescriptionColor = isDarkTheme ? 'light-color-desc' : ''

      return (
        <>
          <Navbar />
          <div className={`bg-container ${toggleBackgroundTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-icon"
            />
            <h1 className={`heading ${toggleHeadingColor}`}>Lost Your Way?</h1>
            <p className={`description ${toggleDescriptionColor}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
