import React from 'react';

const main1 = {
    backgroundColor : '#ffebcd',
    padding : '20px 30px',
    width : 'auto',
    borderRadius : '20px',
    fontSize : '4em', 
    fontFamily : 'arial',
    fontWeight : 'bold',
    boxShadow : '0 0 0.75em rgba(0,0,0,0.5)',
    marginBottom : '50px'
}

var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();


const para = {
    textAlign : 'center'
  }

if (hours>=1 && hours<12) {
    para.color = "green";
}
else if(hours>=12 && hours<19){
    para.color = "orange";
}
else{
    para.color = "black";
}

var ampm = (hours>=12)?"PM":"AM";
if (hours>12) {
  hours = hours - 12;
}
hours = (hours<10)?'0'+hours:hours;
min = (min<10)?'0'+min:min;
sec = (sec<10)?'0'+sec:sec;
function Time(){
    return (
        <>
        <div style = {main1}>
            <p style = {para}>{hours}:{min}:{sec} {ampm}</p>
        </div>
        </>
    );
}

export default Time;