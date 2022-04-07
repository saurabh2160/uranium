const express = require('express');
//const logger = require('./logger')
const router = express.Router();

let arr=['iron man','spiderman','superman','batman'];
router.get('/GET-movies', function(req, res) {
    res.send(arr)
})

router.get('/movies/:indexNumber', function (req, res) {
   let mov=Number(req.params.indexNumber)
   if(mov>=arr.length){
       res.send("use a valid index")
   }else{
    res.send(arr[mov])
   }
});
let obj= [ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name: 'Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]
   router.get('/flim', function(req, res) {
    res.send(obj)
}) 
router.get('/films/:filmId', function (req, res) {
    let result='invalid id'
    let movid=Number(req.params.filmId)
    for(let i=0;i<obj.length;i++){
        if(obj[i].id==movid){
            result="Id = "+obj[i].id+ " " +"Name = "+obj[i].name;
        }
    } 
    res.send(result);
 });
//  router.get('/films/:filmId', function (req, res) {
//     let movid=Number(req.params.filmId)
//     const rest=obj.find((x,index)=>x.id==movid)
//     if(!rest){
//         res.send("invalid id")
//     }else{
//     res.send("Id = "+rest.id+ " " +"Name = "+rest.name);
//     }
//  });

module.exports = router;
// adding this comment for no reason