import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function Homepage() {

	const cart = useSelector(state => {
		return state.cart;
	});

  return (
    <div>
			{cart.cartItems.length} adet ürün sepette
			<br />
			{/* İç linklerde href kullanımı YASAK */}
			{/* <a href="/posts">Posts</a> */}
			{/* <a href="https://google.com" target="_blank">
				Google
			</a> */}
			<Link to={"/posts"}>Posts</Link>
		</div>
  )
}

export default Homepage;