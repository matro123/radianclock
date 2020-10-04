
function gettime() {

    let date = new Date;
    let seconds = date.getSeconds();
    console.log(seconds);
    let minutes = date.getMinutes();
    console.log(minutes);
    let hours = date.getHours();
    console.log(hours);

    let angleSeconds = 90 + (seconds * 6);
    let angleHours = 90 + (hours * 30) + (minutes / 2);
    let angleMinutes = 90 + (minutes * 6);

    let aiguilleSecondes = document.querySelector(".secondes");
    let aiguilleMinutes = document.querySelector(".minutes");
    let aiguilleHeures = document.querySelector(".heures");

    aiguilleSecondes.style.transform = "rotate(" + angleSeconds + "deg)";
    aiguilleMinutes.style.transform = "rotate(" + angleMinutes + "deg)";
    aiguilleHeures.style.transform = "rotate(" + angleHours + "deg)";
    
  }
  gettime()