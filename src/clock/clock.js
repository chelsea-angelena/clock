import React from 'react';


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }
  }

  render() {
    const {hours, minutes, seconds, ampm} = this.state;
    return (
      <div style={styles.container}>
      <div style={styles.border}>
      <div style={styles.clock}>
        {hours == 0 ? 12 : hours > 12 ? hours - 12 : hours}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`} {ampm}
      </div>
      </div>
      </div>
    );
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 50,
    alignItems: 'center'
  },
  border: {
    padding: 0,
    borderRadius: 8,
borderWidth: 2,
borderColor: 'black',
 borderStyle: 'solid',
 backgroundColor: 'blue',
  },
  clock: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
display: 'flex',
    alignItems: 'center',
justifyContent: 'center',
borderRadius: 8,
borderWidth: 2,
borderColor: 'black',
 borderStyle: 'solid',
 fontSize: 36,
 fontFamily: "fira Code",
 fontWeight: 'medium'
  }
}
