import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://img.freepik.com/free-vector/purchasing-habits-abstract-concept-vector-illustration-generate-consumer-habit-marketing-research-millennial-purchasing-preference-shopping-habitual-buying-behavior-abstract-metaphor_335657-2881.jpg?w=740&t=st=1704209106~exp=1704209706~hmac=ddf12afa1b3b1d8325c88b071e62ec0e842410a0983efa18a03058f3810cce07"
      className="cart-empty-img"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/products">
      <button type="button" className="shop-now-btn">
        Shop Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
