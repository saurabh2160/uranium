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
        if(movid==obj[i].id){
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

router.get('/math', function (req, res) {
    let a = [1,2,3,5,6,7] 
    let min=Math.min(...a);
    let max=Math.max(...a);
    let missing = [];
    for ( let i = min ; i <=max; i++ ) {
        if (a.indexOf(i)<0) {
            missing.push(i);
        }
    }res.send(missing.toString())
});
router.get('/mathnew', function (req, res) {
    let a = [33,34,35,37,38,40,42,44]
    let min=Math.min(...a);
    let max=Math.max(...a);
    let missing = [];
    for ( let i = min ; i <=max; i++ ) {
        if (a.indexOf(i)<0) {
            missing.push(i);
        }
    }res.send(missing.toString())
});

// adding this comment for no reason

// 08 april



















   module.exports = router;