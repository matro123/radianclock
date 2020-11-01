const aiguilleH = document.querySelector('.aiguilleH');
const aiguilleMin = document.querySelector('.aiguilleMin');
const aiguilleSec = document.querySelector('.aiguilleSec');


function timeloop() {
    const time = new Date();

    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours() % 12 ;

    let rotateSeconds = (((seconds / 60)*360) * (Math.PI / 180) + (3 * Math.PI / 2));
    let rotateMinutes = (((minutes / 60)*360) * (Math.PI / 180) + (3 * Math.PI / 2));
    let rotatesHours = (((hours / 12)*360)* (Math.PI / 180) + (3 * Math.PI / 2));


    aiguilleH.style.transform = "translateY(-3em) rotate(-" + rotatesHours + "rad)";
    aiguilleMin.style.transform = "translateY(-4em) rotate(-" + rotateMinutes + "rad)";
    aiguilleSec.style.transform = "translateY(-4.5em) rotate(-" + rotateSeconds + "rad)";

}

setInterval(timeloop, 1000);