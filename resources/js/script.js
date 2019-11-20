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

//JSON objects
var parsed = "";
var moviesObj = [{
    "title": "Frozen",
    "youtubeID": "TbQm5doF_Uc",
    "year": "2013"
}, 
{
    "title": "Inside Out",
    "youtubeID": "yRUAzGQ3nSY",
    "year": "2015"
}, 
{
    "title": "Ratatouille",
    "youtubeID": "NgsQ8mVkN8w",
    "year": "2007"
},
{
    "title": "Coco",
    "youtubeID": "zNCz4mQzfEI",
    "year": "2017"
}];
//console.log(moviesObj)

for (i = 0; i< moviesObj.length; i++) {
    
    var theTitle = document.querySelectorAll("h4.title")[i];
    var theYear = document.querySelectorAll("h4.year")[i];
    var youtube ="https://www.youtube.com/embed/" + moviesObj[i].youtubeID;
    var theLink = document.getElementsByClassName("modal-window")[i];
    const iframe = document.createElement("iframe");
     // sets attribute 'src' to variable 'youtube'
    iframe.setAttribute("src", youtube );
    
    //print to browser
    theTitle.innerText = moviesObj[i].title;
    theYear.innerText = "Released " + (2019-moviesObj[i].year) + " years ago";
    theLink.appendChild(iframe);

    //fetch api from omdb
    var urlApi = "http://www.omdbapi.com/?t=" + moviesObj[i].title + "&apikey=8228bbbd";
    var thePlot = document.querySelectorAll("p.plotText")[i];
    // var theStory = document.getElementsByClassName("plotText")[i];
    // const plotText = document.createElement("p");

    fetch(urlApi)
      .then(res => {
          return res.json()
      }) //transform the data into json
      .then(data => {
        console.log(data);
        console.log(data.Title);
        console.log(data.Plot);
        thePlot.innerText = data.Plot;
        //theStory.appendChild(plotText);
      })
      .catch(function(error) {
        console.log('error: ' + error);
    });
}