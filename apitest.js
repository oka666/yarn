import axios from 'axios';


// axios.post('https://reqres.in',{
//     "name": "Jerry",
//     "job": "cat"
// }).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

// axios.get('https://reqres.in/api/unknown/2').then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

// axios.post('https://reqres.in/api/register', {
//     "email": "eve.holt@reqres.in",
//     "password": "pistol"
// }).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

// axios.put('https://reqres.in/api/users/2', {
//     "name": "morpheus",
//     "job": "zion resident"
// }).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

// axios.patch('https://reqres.in/api/users/2', {
//     "name": "morpheus",
//     "job": "zion resident"
// }).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

axios.delete('https://reqres.in/api/users/2').then(function(response){
    console.log(response);
}).catch(function(err){
    console.error(err);
});