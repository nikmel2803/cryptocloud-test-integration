export default async function handler(req, res) {
    const {email, amount } = req.query;

    const response = await fetch("https://cryptocloud.plus/api/v2/invoice/create",{
        method: 'POST',
        body: 'shop_id=OYFHGOAdCiBsoIEP&amount=5&currency=USD',
        // formData() {
        //     return {
        //         'shop_id': 'OYFHGOAdCiBsoIEP',
        //         'amount': '5',
        //         'currency': 'USD'
        //     }
        // },
        headers: {
            'Authorization': `Token ${process.env.API_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })

    const respData = await response.json();
    console.log(respData)

    res.status(200).json({ link: respData.pay_url });
}
