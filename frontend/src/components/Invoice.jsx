import styled from "styled-components"
import { useSelector } from "react-redux"
import './Invoice.css'
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const Invoice = ({order}) => {
	const user = useSelector(state => state.user.currentUser)
	const {state} = useLocation();
	const { stripeData } = state

    return(
        <div className="invoice-box">
			<table cellpadding="0" cellspacing="0">
			<h1>Invoice</h1>
				<tr className="top">
					<td colSpan="2">
						<table>
							<tr>
								<td className="title">
								</td>
								<td>
									Invoice #: {order._id} <br />
									Created: {order.createdAt?.substring(0,10)}<br />
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr className="information">
					<td colSpan="2">
						<table>
							<tr>
								<td>
									HyperTech, Inc.<br />
									72 Queen Street,<br />
									London, WC50 8AL
								</td>

								<td>
									{user.username}<br />
									{user.email}
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr className="heading">
					<td>Payment Method</td>

					<td>Card #</td>
				</tr>
				<tr className="details">
					<td>Card</td>

					<td>****{stripeData.source.last4}</td>
				</tr>
				<tr className="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>
				{order.products?.map((product) => (
				  <tr className="item">
				  <td>{product.productName}</td>

				  <td>€{product.price}</td>
			  	  </tr>
				))}
				<tr className="total">
					<td></td>

					<td>Total: € {order.amount?.toFixed(2)}</td>
				</tr>
			</table>
			<Link to='/'>
				<button style={{ padding: 10, marginTop: 20 }}>Return to Homepage</button>		
			</Link>
			
		</div>
    )
}

export default Invoice 