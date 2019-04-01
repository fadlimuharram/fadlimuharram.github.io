import React, { PureComponent } from "react";

// const MyGoal = () => (
//   <div class="targetgoal" id="mygoal">
//     <h3 class="heading-secondary">Target Saya Selanjutnya</h3>
//     <p class="targetgoal--currentgoal">
//       -- Lulus Sertifikasi Dicoding kelas MADE --
//     </p>
//     <ul>
//       <li>
//         <span id="days" />hari
//       </li>
//       <li>
//         <span id="hours" />jam
//       </li>
//       <li>
//         <span id="minutes" />menit
//       </li>
//       <li>
//         <span id="seconds" />detik
//       </li>
//     </ul>
//   </div>
// );

class MyGoal extends PureComponent {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    this.countDown = new Date("May 06, 2019 00:00:00");
    this.interval = setInterval(() => {
      let now = new Date().getTime(),
        distance = this.countDown - now;
      this.setState({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second)
      });
    }, second);
  }

  render() {
    return (
      <div class="targetgoal" id="mygoal">
        <h3 class="heading-secondary">Target Saya Selanjutnya</h3>
        <p class="targetgoal--currentgoal">
          -- Lulus Sertifikasi Azure Cloud Developer --
        </p>
        <ul>
          <li>
            <span id="days">{this.state.days}</span>
            hari
          </li>
          <li>
            <span id="hours">{this.state.hours}</span>
            jam
          </li>
          <li>
            <span id="minutes">{this.state.minutes}</span>
            menit
          </li>
          <li>
            <span id="seconds">{this.state.seconds}</span>
            detik
          </li>
        </ul>
      </div>
    );
  }
}

export default MyGoal;
