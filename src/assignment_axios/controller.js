const axios = require('axios');
const { send } = require('express/lib/response');

let getSdistrict = async function (req, res) {
    try {
        let districtid = req.query.district_id
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}`,
            headers: {}
        };
        let result = await axios(options)
        res.status(200).send({ status: true, data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getweather = async (req, res) => {
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        res.status(200).send({ temprature: result.data.main.temp })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let sortedcities = async (req, res) => {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let sortcites = []
        for (let i = 0; i < cities.length; i++) {
            let obj = cities[i]
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=cfb09e65843bcd73db4e2929ab7ef5d7`)
            let temp = result.data.main.temp
            sortcites.push({
                city: obj,
                temp: temp
            })
        }
        let sorted = sortcites.sort((a, b) => { return a.temp - b.temp })
        res.status(200).send({ sorted })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let memes = async (req, res) => {
    try {
        let data = req.query
        let result = await axios.post(`https://api.imgflip.com/caption_image?template_id=${data.template_id}&text0=${data.text0}&text1=${data.text1}&username=${data.username}&password=${data.password}`)
        res.status(200).send(result.data)
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getSdistrict = getSdistrict
module.exports.getweather = getweather
module.exports.sortedcities = sortedcities
module.exports.memes = memes
