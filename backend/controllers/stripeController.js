const stripe = require('stripe')("sk_test_51LSf8DKHkRwGWsYa5kyQShaVZsE0uuERpqsZJSNYtMOuSYzsCKsN0Ey5xr2buvFdBB19laRCekVgN1fMyN6Kh73J00Szkvmujm");

const makePayment = (req, res) => {
    stripe.charges.create(
    {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "eur",
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
}

module.exports = {
    makePayment
}