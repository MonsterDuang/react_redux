import React from "react"
import { connect } from 'react-redux'
// 引入actions
import actions from '../redux/actions'
import '../style/Cart.css'
class Cart extends React.Component {
  incCart (index) {
    this.props.incCart(index)
  }
  decCart (index) {
    this.props.decCart(index)
  }
  delCart (index) {
    this.props.delCart(index)
  }
  render () {
    return (
      <div class="cart">
        <div class="container-fluid">
          <h2>你的购物车</h2>
          <div class={this.props.carts.length === 0 ? 'alert alert-warning empty' : 'hide'}>
            这个购物车中没有任何商品
          </div>
          <div class={this.props.carts.length === 0 ? 'hide' : ''}>
            <table class="table">
              <thead>
                <tr>
                  <th>数量</th>
                  <th>商品名称</th>
                  <th class="text-right">单价</th>
                  <th class="text-right">小计</th>
                </tr>
              </thead>
              <tbody>
                {this.props.carts.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td class="text-center store-number">
                        <div class="input-group input-i">
                          <div class="input-group-btn">
                            <button type="button" class="btn btn-default" onClick={this.decCart.bind(this, index)}>-</button>
                          </div>
                          <input type="text" class="form-control" value={item.count} />
                          <div class="input-group-btn">
                            <button type="button" class="btn btn-default" onClick={this.incCart.bind(this, index)}>+</button>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">{item.name}</td>
                      <td class="text-right">￥ {item.price.toFixed(2)}</td>
                      <td class="text-right">￥ {(item.count * item.price).toFixed(2)}</td>
                      <td>
                        <button class="btn btn-sm btn-warning" onClick={this.delCart.bind(this, index)}>删除</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div >
        </div >
      </div >
    )
  }
}
// 遍历 redux 中的 state 并添加到 App 组件的 props 中
function mapStateToProps(state) {
  return {
    carts: state.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    incCart (index) {
      dispatch(actions.incCart(index))
    },
    decCart (index) {
      dispatch(actions.decCart(index))
    },
    delCart(index) {
      dispatch(actions.delCart(index))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)