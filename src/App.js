import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cart from "./components/Cart"
import Product from "./components/Product"
import './style/Reset.css'
class App extends React.Component {
  render () {
    let carts = this.props.carts
    let totalCount = 0
    let totalPrice = 0
    for (let item of carts) {
      totalCount += item.count
      totalPrice += item.count * item.price
    }
    return (
      <Router> 
        <div class="app">
          <header>
            <Link to='/'>
              <h3>商店</h3>
            </Link>
            <div>
              <span>您的购物车有 {totalCount} 件,¥ {totalPrice.toFixed(2)}</span>
              <Link to="/cart">
                <button class="btn btn-default">checkout</button>
              </Link>
            </div>
          </header>
          <Route exact path="/" component={Product} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    )
  }
}
// 遍历 redux 中的 state 并添加到 App 组件的 props 中
function mapStateToProps (state) {
  return {
    carts: state.cart
  }
}
export default connect(mapStateToProps)(App)