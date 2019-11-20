// // Get the modal
// var modal = document.getElementById("myModal1");
// var modal = document.getElementById("myModal2");
//
// // Get the button that opens the modal
// var btn = document.getElementById("thbn1");
// var btn = document.getElementById("thbn2");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

//Popup Trailer
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
      if (target.hasAttribute('data-target')) {
          var m_ID = target.getAttribute('data-target');
          document.getElementById(m_ID).classList.add('open');
          e.preventDefault();
      }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
      var modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
  }
}, false);

//Fetch API to get json data
var parsed = "";
var moviesObj = [{
    "title": "Frozen",
    "youtubeID": "TbQm5doF_Uc"
}, 
{
    "title": "Inside Out",
    "youtubeID": "yRUAzGQ3nSY"
}, 
{
    "title": "Ratatouille",
    "youtubeID": "NgsQ8mVkN8w"
},
{
    "title": "Coco",
    "youtubeID": "zNCz4mQzfEI"
}];

//iterate over movies
for (i = 0; i< moviesObj.length; i++) {
    //var obj=  moviesObj[i];
    var urlApi = "http://www.omdbapi.com/?t=" + moviesObj[i].title + "&apikey=8228bbbd";
    fetch(urlApi)
      .then(res => {
          return res.json()
      }) //transform the data into json
      .then(data => {
         //console.log(data.Title);
        // console.log(data.Year);
        // console.log(data.Plot);
         document.getElementById('theTitle').innerHTML = data.Title;
        // document.getElementById('plotText1').innerHTML = data.Plot;
        // document.getElementById('yFrozen').innerHTML = "<span>" + " " + (2019 - data.Year) + " " + "<span>" ;
      })
      .catch(function(error) {
        console.log('error: ' + error);
    });
    // for (var property in obj) {
    //     parsed += property + ": " + obj.title + "<br>" + urlApi + " " + "</br>";          
    // }
}

//iterate json object
for (i = 0; i< moviesObj.length; i++) {
    var obj=  moviesObj[i];
    // var movies = JSON.stringify(moviesObj);
    // var theMovies = JSON.parse(movies);
    // for (var property in obj) {
    //     parsed += property + ": " + moviesObj[property] + "<br>";          
    // }
    console.log(moviesObj[i].title)
    document.getElementById('theTitle').innerHTML = " " + moviesObj[i].title;       
} 
 

// document.getElementById("tFrozen").innerHTML = moviesObj[0].title;
// document.getElementById("tInsideout").innerHTML = moviesObj[1].title;
// document.getElementById("tRatatouille").innerHTML = moviesObj[2].title;
// document.getElementById("tCoco").innerHTML = moviesObj[3].title;

//Movie1 - Frozen
// fetch('http://www.omdbapi.com/?t=Frozen&y=2013&apikey=8228bbbd')
//       .then(res => {
//           return res.json()
//       }) //transform the data into json
//       .then(data => {
//         console.log(data);
//         document.getElementById('tFrozen').innerHTML = data.Title;
//         document.getElementById('plotText1').innerHTML = data.Plot;
//         document.getElementById('yFrozen').innerHTML = "<span>" + " " + (2019 - data.Year) + " " + "<span>" ;
//       })
//       .catch(function(error) {
//           console.log('error: ' + error);
//       });

// //Movie2 - Insideout
// fetch('http://www.omdbapi.com/?t=Inside+Out&y=2015&apikey=8228bbbd')
//       .then(res => {
//           return res.json()
//       }) //transform the data into json
//       .then(data => {
//         console.log(data);
//         document.getElementById('tInsideout').innerHTML = data.Title;
//         document.getElementById('plotText2').innerHTML = data.Plot;
//         document.getElementById('yInsideout').innerHTML = "<span>" + " " + (2019 - data.Year) + " " + "<span>" ;
//       })
//       .catch(function(error) {
//           console.log('error: ' + error);
//       });

// //Movie3 - Ratatouille
// fetch('http://www.omdbapi.com/?t=Ratatouille&y=2007&apikey=8228bbbd')
//       .then(res => {
//           return res.json()
//       }) //transform the data into json
//       .then(data => {
//         console.log(data);
//         document.getElementById('tRatatouille').innerHTML = data.Title;
//         document.getElementById('plotText3').innerHTML = data.Plot;
//         document.getElementById('yRatatouille').innerHTML = "<span>" + " " + (2019 - data.Year) + " " + "<span>" ;
//       })
//       .catch(function(error) {
//           console.log('error: ' + error);
//       });

// //Movie4 - Coco
// fetch('http://www.omdbapi.com/?t=Coco&y=2017&apikey=8228bbbd')
//       .then(res => {
//           return res.json()
//       }) //transform the data into json
//       .then(data => {
//         console.log(data);
//         document.getElementById('tCoco').innerHTML = data.Title;
//         document.getElementById('plotText4').innerHTML = data.Plot;
//         document.getElementById('yCoco').innerHTML = "<span>" + " " + (2019 - data.Year) + " " + "<span>" ;
//       })
//       .catch(function(error) {
//           console.log('error: ' + error);
//       });
