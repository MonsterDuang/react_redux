// 设置state的初始默认值为false
export default (state = false, action) => {

	// 初始化state,如果传入了state就接受，如果为false，就初始化
	state = state || { cart: [] }

	// 判断action 传过来的是啥并执行对应的处理
	switch (action.type){
		// 添加
		case "ADD_CART":
			// 返回新的对象,如果不是新的对象不糊更新视图 	
			let item = action.data
			var cart = state.cart
			if (cart.indexOf(item) === -1) {
				cart.push(item)
			}
			return {cart: [...cart]}
		case "INC_CART":
			let incIndex = action.data
			var cart = state.cart
			cart[incIndex].count++
			return { cart: [...cart] }
		case "DEC_CART":
			let decIndex = action.data
			var cart = state.cart
			cart[decIndex].count--
			if (cart[decIndex].count < 1) {
				cart[decIndex].count = 1
			}
			return { cart: [...cart] }
		case "DEL_CART":
			let delIndex = action.index
			var cart = state.cart
			cart.splice(delIndex, 1)
			return { cart: [...cart] }
		default:
			return state
	}
}