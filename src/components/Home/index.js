import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Elevate Your Style, Capture Every Glance</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Immerse yourself in the ever-changing breeze of fashion, a daily language that speaks volumes. Wardrobes echo the spirit of the times, and we find ourselves in the midst of a fashion revolution. Your style is your unique voice, a statement that resonates. Embrace the constant evolution of fashion, celebrating the new and exciting trends in your own exceptional way.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://img.freepik.com/free-photo/full-shot-woman-online-fashion-shopping_23-2150460081.jpg?w=900&t=st=1704208666~exp=1704209266~hmac=cb8ad0064c6b5478992eaa8d448899e3a398d33c7a2a6b8850d3914f1f6bebfa"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home