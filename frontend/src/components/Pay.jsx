import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
const KEY = "pk_test_51LSf8DKHkRwGWsYaz3xqYbTU332fCKTozEWFOO3tn7cWUbX5JCZPQWqBHa7Fpsdc9R11YADv4ngZsZb06pDMT6zu00s8AIdrod"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const onToken = (token) => {
      setStripeToken(token)
    }

    useEffect(() => {
      const makeRequest = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/checkout/payment",
                {
                tokenId: stripeToken.id,
                amount: 2000,
                }
            );
            console.log(res.data)
            history.push("/success");
        } catch (error) {
            console.log(error)
        }
      }
      stripeToken && makeRequest()
    }, [stripeToken, history])

    

    return(
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>

            {stripeToken ? (<span>Processing. Please wait...</span>) :  (
            <StripeCheckout 
                name="Hypertech" 
                image="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png" 
                billingAddress
                shippingAddress
                description='Your total is €20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}>
                    Pay Now
                </button>
            </StripeCheckout>
        )}
        </div>
    )
}

export default Pay