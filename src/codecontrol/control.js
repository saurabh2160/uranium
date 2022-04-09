let player =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
let controller=function (req, res) {
    let output={}
    let data = req.body
    const a = player.find(x =>x.name == data.name)
    if (a) {
        output = {
            data: "User already Exists",
            status: false
        }
    }
    else if(!a){
        player.push(data)
        output={ data: player,status:true}
    }
     res.send(output)
}
module.exports.controller=controller;