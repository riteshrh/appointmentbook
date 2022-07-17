window.onload=function(){


    var cur = localStorage.getItem("current");
    var data = localStorage.getItem(cur);
    data = JSON.parse(data);
    console.log(data);
    document.getElementById("main").innerHTML=` <div class="card-body" style="text-align:center">
    <h2 class="card-title" id="name">${data.name}</h2>
    <p class="card-text" id="age">${data.age}</p>
    <p class="card-text" id="address">${data.address}</p>
    <p class="card-text" id="description">${data.description}</p>
    <p class="card-text" id="description">${data.slot}</p>

    <a href="home_page.html" class="btn btn-primary"  style="margin-top: 15px;" >Back</a>
    
  </div>`




}