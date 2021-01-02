import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

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

const span1 = {
  color : '#d87093'
}

const span2 = {}
const para = {
  textAlign : 'center'
}
let greeting = '';
if (hours>=1 && hours<12) {
  greeting = "Good Morning";
  span2.color = "green";
  para.color = "green";
}
else if(hours>=12 && hours<19){
  greeting = "Good Afternoon";
  span2.color = "orange";
  para.color = "orange";
}
else{
  greeting = "Good Night";
  span2.color = "black";
  para.color = "black";
}
var ampm = (hours>=12)?"PM":"AM";
if (hours>12) {
  hours = hours - 12;
}
hours = (hours<10)?'0'+hours:hours;
min = (min<10)?'0'+min:min;
sec = (sec<10)?'0'+sec:sec;

ReactDOM.render(
  <>
    <div style = {main1}>
      <p style = {para}>{hours}:{min}:{sec} {ampm}</p>
    </div>
    <div style = {main2}>
      <p><span style={span1}>Hello Everyone,</span><span style = {span2}>{` ${greeting}`}</span></p>
    </div>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
