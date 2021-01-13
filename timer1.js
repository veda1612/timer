const timer1= timer(10);*/
const scheduleBeep = function(delay) {
    delay = Number(delay);
    if(delay > 0 && !isNaN(delay)) {
      setTimeout(() => {
      process.stdout.write('beep\n');
   
      }, delay*1000);
        
    }
}

const args = process.argv.slice(2);
//console.log(args);
for(let item of args) {
    scheduleBeep(item);
}
