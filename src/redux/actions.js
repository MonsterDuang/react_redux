// 定义一些action的方法
export default {
  addCart (item) {
    item.count++
    return { type: 'ADD_CART', data: item }
  },
  incCart (index) {
    return { type: 'INC_CART', data: index }
  },
  decCart (index) {
    return { type: 'DEC_CART', data: index }
  },
  delCart(index) {
    return { type: 'DEL_CART', data: index }
  }
}