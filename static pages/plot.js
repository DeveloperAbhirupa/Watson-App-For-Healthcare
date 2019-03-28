var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
 // The type of chart we want to create
 type: 'line',

 // The data for our dataset
 data: {
     labels: ['November', 'December','January', 'February', 'March'],
     datasets: [{
         label: 'Systolic Pressure',
         // backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(255, 99, 132)',
         data: [120,125,118,125,129]
     },
     {
         label: 'Diastolic Pressure',
         // backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(47, 6, 99)',
         data: [83,82,85,79,85]
     },
     {
         label: 'Pulse Rate',
         // backgroundColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(4, 79, 35)',
         data: [65,70,72,70,68]
     },

   ]
 },

 // Configuration options go here
 options: {}
});
// var chart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {}
// });
// data: [{
//     x: 10,
//     y: 20
// }, {
//     x: 15,
//     y: 10
// }]
