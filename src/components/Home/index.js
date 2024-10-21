// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const toggleBackgroundTheme = isDarkTheme ? 'dark-color-theme' : ''
      const toggleHeadingColor = isDarkTheme ? 'light-color' : ''
      return (
        <>
          <Navbar />
          <div className={`bg-container ${toggleBackgroundTheme}`}>
            <img src={homeUrl} alt="home" className="icon" />
            <h1 className={`heading ${toggleHeadingColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
