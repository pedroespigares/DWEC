function Clock() {
    document.open();
    let theDate = new Date();
    let t = theDate.getHours() + ":" + theDate.getMinutes() + ":" + theDate.getSeconds()+ "</br>";
    document.write(t);
}
    setInterval(Clock, 1000);