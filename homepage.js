

window.onload = function (){
    var row = document.getElementById('row_main');
    let len = localStorage.length;
    if(localStorage.getItem("current")!=undefined)
    {
        len-=1;
    }
    document.getElementById("appointments").textContent ="Total Appointments : "+len;

    for(let i=0;i<localStorage.length;i++)
    {
        let val = localStorage.getItem(localStorage.key(i));
        let temp = JSON.parse(val);
        console.log(temp);
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        div3.style="text-align:center";
        let h = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let a = document.createElement('a');
        div1.className="col-sm-3";
        div2.className="card";
        div3.className ="card-body";
        h.className="card-title";
        p1.className="card-text";
        p2.className="card-text";
        p3.className="card-text";
        a.className = "btn btn-primary";
        h.textContent=temp.name;
        p1.textContent= temp.address;
        p2.textContent = "Age : "+temp.age+" years ";
        p3.textContent ="Appointment Time : "+temp.slot;
        a.textContent="View";
        div2.addEventListener('click',function(){

            console.log(temp);
            localStorage.setItem("current",temp.name);
            location.replace("view_page.html");

        })
        
        div3.appendChild(h);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(p3);
        div3.appendChild(a);
        div2.appendChild(div3);
        div1.appendChild(div2);
        row.appendChild(div1);
        

       


        // const details = `<div class="card">
        // <div class="card-body" style="text-align:center">
        //     <h5 class="card-title name">Mallikarjuna</h5>
        //     <p class="card-text ">Head Injury</p>
        //     <p class="card-text age">Age : 21 years</p>
        //     <p class="card-text time">Appointment Date : 25-01-2022</p>
        //     <a href="#" class="btn btn-primary">view</a>
        // </div>
        // </div>`;
        // patient.innerHTML+= details;
        // patient.getElementsByClassName("name").value = temp.name;
        // patient.getElementsByClassName("age").value = temp.age;
        // patient.getElementsByClassName("time").value = temp.slot;   

    //     <div class="col-sm-3">
    //     <div class="card">
    //       <div class="card-body" style="text-align:center">
    //         <h5 class="card-title">Mallikarjuna</h5>
    //         <p class="card-text">Head Injury</p>
    //         <p class="card-text">Age : 21 years</p>
    //         <p class="card-text">Appointment Date : 25-01-2022</p>
    //         <a href="#" class="btn btn-primary">view</a>
    //       </div>
    //     </div>
    //   </div>

    }
}





