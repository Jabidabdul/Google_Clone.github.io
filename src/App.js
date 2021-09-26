import React from 'react'
import './App.css'

export default function App() {

  let [time, setTime] = React.useState('');
  let [back, setBack] = React.useState({});
  React.useEffect(() => {
    let time = setInterval(() => {
      let date = new Date().toLocaleString();
      let seconds = new Date().getSeconds();
      setTime(date);

      let even = {
        backgroundColor: "black",
        color: 'white',
        height: "100vh",
        width: "100%"
      };
      let odd = {
        backgroundColor: "white",
        color: 'black',
        height: "100vh",
        width: "100%"
      };
      if (seconds % 2 === 0) {
        // console.log(back)
        setBack(even);
      }
      else setBack(odd)
      return clearInterval(time)
    }, 1000);
  })
  return (
    <div style={back}>
      {time}

    </div>
  )
}
