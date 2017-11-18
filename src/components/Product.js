import React from "react"
import { connect } from 'react-redux'
// 引入actions
import actions from '../redux/actions'
import http from 'axios'
import '../style/Product.css'
class Product extends React.Component {
  constructor () {
    super()
    this.state = {
      product: [],
      activePageIndex: 0,
      category: 'all'
    }
  }
  componentWillMount () {
    http.get('http://10.3.158.68:8081/product').then(res => {
      this.setState({
        product: res.data
      })
    })
  }
  changeCategory (item) {
    this.setState({
      category: item.category,
      activePageIndex: 0
    })
  }
  changePage (index) {
    this.setState({
      activePageIndex: index
    })
  }
  addCart (item) {
    this.props.addCart(item)
  }
  render () {
    let product = this.state.product
    if (this.state.category !== 'all') {
      product = product.filter(item => {
        return item.category === this.state.category
      })
    }
    let categorys = [
      { name: '所有商品', id: 0, category: 'all' },
      { name: '热销榜', id: 1, category: 'hot' },
      { name: '牛奶面包', id: 2, category: 'milk' },
      { name: '新鲜水果', id: 3, category: 'fruit' }
    ]
    let nowPageProduct = []
    nowPageProduct = product.slice(this.state.activePageIndex * 3, this.state.activePageIndex * 3 + 3)
    let pageIndex = Math.ceil(product.length / 3)
    let pageIndexArr = []
    for (let i = 1; i <= pageIndex; i++) {
      pageIndexArr.push(i)
    }
    return (
      <div class="pro">
        <div class="content">
          <div class="btn-group">
            {categorys.map((item, index) => {
              return (
                <p key={item.id}>
                  <button type="button" class={this.state.category === item.category ? 'btn btn-default btn-lg active' : 'btn btn-default btn-lg'} onClick={this.changeCategory.bind(this, item)}>{item.name}</button>
                </p>
              )
            })}
          </div >
          <div class="detial">
            {nowPageProduct.map((item, index) => {
              return (
                <div class="jumbotron" key={item.id}>
                  <div class="msg">
                    <b>{item.name}</b>
                    <p>{item.details}</p>
                  </div>
                  <div class="btn-group">
                    <p>
                      <button type="button" class="btn btn-primary price">¥ {item.price.toFixed(2)}</button>
                    </p>
                    <p>
                      <button type="button" class="btn btn-success" onClick={this.addCart.bind(this, item)}>添加到购物车</button>
                    </p>
                  </div>
                </div >
              )
            })}
            <nav aria-label="Page navigation">
              <ul class="pagination">
                {pageIndexArr.map((item, index) => {
                  return (
                    <li key={item} class={this.state.activePageIndex === index ? 'active' : ''} onClick={this.changePage.bind(this, index)}>
                      <a href="#">{item}</a>
                    </li>
                  )
                })}
              </ul >
            </nav >
          </div >
        </div >
      </div >
    )
  }
}
// 遍历 redux 中的 state 并添加到 App 组件的 props 中
function mapStateToProps(state) {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCart (item) {
      dispatch(actions.addCart(item))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)