import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import Konva from "konva";
class ColoredRect extends React.Component {
  state = {
    color: "green",
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

class Particle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.X,
      y: this.props.Y,
      vx: this.props.velocityX,
      vy: this.props.velocityY,
      ax: this.props.velocityY,
      ay: this.props.accelerationX,
      color: Konva.Util.getRandomColor(),
      //   timer: this.props.timer,
    };
    // console.log(this.props.X);
    // this.state.timer;
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.move();
    }, 1000 / 60);
  }
  move() {
    var newWidth = this.state.x + this.state.vx;
    var newHeight = this.state.y + this.state.vy;
    // console.log(this.state.x, this.state.y);
    this.setState({
      x: newWidth >= window.innerWidth ? 0 : newWidth,
      y: newHeight >= window.innerHeight ? 0 : newHeight,
    });
  }
  render() {
    return (
      <Rect
        x={this.state.x}
        y={this.state.y}
        width={10}
        height={10}
        fill={this.state.color}
      />
    );
  }
}
class Background extends React.Component {
  constructor(props) {
    super(props);
    this.particles = [];
    for (let i = 0; i < 50; i++) {
      this.particles.push(
        <Particle
          X={Math.random() * Math.floor(200)}
          Y={Math.random() * Math.floor(200)}
          velocityX={Math.random() * Math.floor(2)}
          velocityY={Math.random() * Math.floor(2)}
        />
      );
    }
    // console.log(this.particles);
  }

  componentDidMount() {}

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* <Text text="Try click on rect" /> */}
          {/* <Particle
            X={500}
            Y={200}
            velocityX={1}
            velocityY={1}
            timer={this.timerID}
          /> */}
          {this.particles}
          {/* <ColoredRect /> */}
        </Layer>
      </Stage>
    );
  }
}
export default Background;
// /*--------------------
// Vars
// --------------------*/
// const deg = (a) => (Math.PI / 180) * a;
// const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));
// const opt = {
//   particles: window.width / 500 ? 1000 : 500,
//   noiseScale: 0.009,
//   angle: (Math.PI / 180) * -90,
//   h1: rand(0, 360),
//   h2: rand(0, 360),
//   s1: rand(20, 90),
//   s2: rand(20, 90),
//   l1: rand(30, 80),
//   l2: rand(30, 80),
//   strokeWeight: 1.2,
//   tail: 82,
// };
// const Particles = [];
// let time = 0;
// document.body.addEventListener("click", () => {
//   opt.h1 = rand(0, 360);
//   opt.h2 = rand(0, 360);
//   opt.s1 = rand(20, 90);
//   opt.s2 = rand(20, 90);
//   opt.l1 = rand(30, 80);
//   opt.l2 = rand(30, 80);
//   opt.angle += deg(random(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

//   for (let p of Particles) {
//     p.randomize();
//   }
// });

// /*--------------------
// Particle
// --------------------*/
// class Particle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.lx = x;
//     this.ly = y;
//     this.vx = 0;
//     this.vy = 0;
//     this.ax = 0;
//     this.ay = 0;
//     this.hueSemen = Math.random();
//     this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
//     this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
//     this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
//     this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
//   }

//   randomize() {
//     this.hueSemen = Math.random();
//     this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
//     this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
//     this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
//     this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
//   }

//   update() {
//     this.follow();

//     this.vx += this.ax;
//     this.vy += this.ay;

//     var p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
//     var a = Math.atan2(this.vy, this.vx);
//     var m = Math.min(this.maxSpeed, p);
//     this.vx = Math.cos(a) * m;
//     this.vy = Math.sin(a) * m;

//     this.x += this.vx;
//     this.y += this.vy;
//     this.ax = 0;
//     this.ay = 0;

//     this.edges();
//   }

//   follow() {
//     let angle =
//       noise(
//         this.x * opt.noiseScale,
//         this.y * opt.noiseScale,
//         time * opt.noiseScale
//       ) *
//         Math.PI *
//         0.5 +
//       opt.angle;

//     this.ax += Math.cos(angle);
//     this.ay += Math.sin(angle);
//   }

//   updatePrev() {
//     this.lx = this.x;
//     this.ly = this.y;
//   }

//   edges() {
//     if (this.x < 0) {
//       this.x = width;
//       this.updatePrev();
//     }
//     if (this.x > width) {
//       this.x = 0;
//       this.updatePrev();
//     }
//     if (this.y < 0) {
//       this.y = height;
//       this.updatePrev();
//     }
//     if (this.y > height) {
//       this.y = 0;
//       this.updatePrev();
//     }
//   }

//   render() {
//     stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
//     line(this.x, this.y, this.lx, this.ly);
//     this.updatePrev();
//   }
// }

// /*--------------------
// Setup
// --------------------*/
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   for (let i = 0; i < opt.particles; i++) {
//     Particles.push(new Particle(Math.random() * width, Math.random() * height));
//   }
//   strokeWeight(opt.strokeWeight);
// }

// /*--------------------
// Draw
// --------------------*/
// function draw() {
//   time++;
//   background(0, 100 - opt.tail);

//   for (let p of Particles) {
//     p.update();
//     p.render();
//   }
// }

// /*--------------------
// Resize
// --------------------*/
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
