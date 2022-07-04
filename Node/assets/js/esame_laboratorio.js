function toggle_dark() {
  var body = document.body;
  body.classList.toggle("bootstrap-dark");
  body.classList.toggle("bootstrap");
  var main = document.getElementById("main");
  main.classList.toggle("bootstrap");
  var footer = document.getElementById("foot");
  footer.classList.toggle("bootstrap");
  if(body.classList.value==="bootstrap-dark"){
    save_dark(true);
  }
  else{
    save_dark(false);
  }

}
function save_dark(bool){
  var data = {"date":Date.now(),"dark":false};
  if(bool===true){
    data["dark"]=true;
  }
  data=JSON.stringify(data);
  localStorage.setItem("dark",data);
}
function check_dark_preset(){
  var data = localStorage.getItem("dark");
  data=JSON.parse(data);
  var delta=Date.now()-data["date"];
  delta=Math.floor((delta/1000)/(3600*24)); //delta = giorni
  if(delta>10){
    localStorage.removeItem("dark");
  }
  else{
    if (data["dark"]===true){
      let btn = document.getElementById("dark");
      btn.classList.toggle("active");
      btn.ariaPressed="true";
      var body = document.body;
      body.classList.toggle("bootstrap-dark");
      body.classList.toggle("bootstrap");
      var main = document.getElementById("main");
      main.classList.toggle("bootstrap");
      var footer = document.getElementById("foot");
      footer.classList.toggle("bootstrap")
    }
  }

}
