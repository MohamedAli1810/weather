let x = "london"
async function search(name){
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5bc7e132eaa645a6969122324242406&q=${name}&days=3&aqi=no&alerts=no`);
    let t1 = await t.json();
    console.log(t1.location);
    display1(t1.location, t1.current),
    display2(t1.forecast.forecastday)
}
search(x);
document.getElementById("search").addEventListener("keyup", name=>{
    search(name.target.value)
}
);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function display1(locaiton, current) {
    if (current) {
        var date = new Date(current.last_updated.replace(" ", "T"));
        let box = ` <div class="rounded-start-4 p-0 col-lg-4 sty mb-5 pb-5">
                      <div class="mb-5">
                        <div class="head rounded-start-4 d-flex justify-content-between" >
                          <h3 class="h6 py-2 ps-2">${days[date.getDay()]}</h3>
                          <h3 class="h6 py-2 pe-2">${date.getDate() + month[date.getMonth()]}</h3>
                        </div>
                        <h4 class="py-3 ps-3">${locaiton.name}</h4>
                        <h6 class="position-relative text-light h1 ps-3 py-3 ">
                          ${current.temp_c} <sub class="position-absolute text-light ">o</sub>
                          <span class="ms-3 text-light">C</span>
                        </h6>
                        <img src="https:${current.condition.icon}" class="pe-3 py-3" width="95" alt="">
                        <h5 class="text-primary py-3 ps-3 h6">${current.condition.text}</h5>
                        <span class="ps-3 me-3 ">
                          <img src="./image/imgae4.png" width="22" height="22" alt="">
                         ${current.cloud}%
                        </span>
                        <span class="me-3">
                          <img src="./image/imgae5.png" width="22" height="22" alt="">
                          ${current.wind_kph} km/h
                        </span>
                        <span class="me-3">
                          <img src="./image/imgae6.png" width="22" height="22" alt="">
                          ${current.wind_dir}
                        </span>
                      </div>
                    </div>`;
        document.getElementById("forecast").innerHTML = box
    }
}
function display2(namea) {
    let t = "";
    for (let i = 1; i < namea.length; i++){
        t += `<div class=" ${ i == 2 ? " rounded-end-4 sty " : " sty1 " } p-0 col-lg-4  mb-5 pb-5">
              <div class="mb-5 w-100 d-flex flex-column justify-content-center align-items-center">
              <div class="${ i == 2 ? " rounded-end-4 head " : " head2  " } p-0 w-100 text-center" >
              <h3 class="h6 p-2">${days[new Date(namea[i].date.replace(" ", "T")).getDay()]}</h3>
              </div>
              <img src="https:${namea[i].day.condition.icon}" class="p-3" width="95" alt="">
              <h6 class="position-relative text-light h1 p-3 ">
              ${namea[i].day.maxtemp_c} <sub class="position-absolute text-light ">o</sub>
              <span class="ms-3 text-light">C</span>
              </h6>
              <h6 class="position-relative p-3 ">
              ${namea[i].day.mintemp_c} <sub class="position-absolute">o</sub>
              <span class="ms-2">C</span>
              </h6>
              <h5 class="text-primary p-3 h6">${namea[i].day.condition.text}</h5>
              </div>
              </div>
              `;}
    document.getElementById("forecast").innerHTML += t
}
