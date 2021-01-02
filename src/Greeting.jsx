import React from 'react';


const main2 = {
    backgroundColor : '#ffebcd',
    padding : '20px 30px',
    width : 'auto',
    borderRadius : '20px',
    fontSize : '2em', 
    fontFamily : 'arial',
    fontWeight : 'bold',
    boxShadow : '0 0 0.75em rgba(0,0,0,0.5)'
};

var d = new Date();
var hours = d.getHours();
  
const span1 = {
  color : '#d87093'
}
  
const span2 = {}

let greeting = '';
if (hours>=1 && hours<12) {
  greeting = "Good Morning";
  span2.color = "green";
}
else if(hours>=12 && hours<19){
  greeting = "Good Afternoon";
  span2.color = "orange";
}
else{
  greeting = "Good Night";
  span2.color = "black";
}
function Greeting(){
    return(
        <>
            <div style = {main2}>
                <p><span style={span1}>Hello Everyone,</span><span style = {span2}>{` ${greeting}`}</span></p>
            </div>
        </>
    );
}

export default Greeting;