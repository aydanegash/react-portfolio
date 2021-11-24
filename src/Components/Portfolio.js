import React, { Component } from "react";
import Fade from "react-reveal";
import { Card, Button } from "react-bootstrap";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;


      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          <a href={projects.url}>
          <img alt={projects.title} src={projectImage} />
                </a> 
            <div style={{ textAlign: "center" }}>{projects.title}</div>
         </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade bottom duration={800}>
        <h2> My Work</h2>
        </Fade>
        <Fade bottom duration={1000}>
          <div class="row">
            <div class="column">
              <div class="card">
                  <img alt="Sprouts of this World" src="/images/portfolio/sprouts-of-this-world.jpg"></img>
                  <div class="container">
                    <a href="https://sprout-of-this-world.herokuapp.com/"><h1> Sprout of this World</h1></a>
                    <p1>This app helps struggling plant parents everywhere struggling with watering their plants on time. A watering schedule can be created and an inventory of plants.</p1>  
                    <a href="https://github.com/ksdevinney/sprout-of-this-world"><h2> Github</h2></a>  
                  </div>
                </div>
              </div>
            <div class="column">
              <div class="card">
                <img alt="Got Munchies" src="/images/portfolio/got-munchies.jpg"></img>
                  <div class="container">
                  <a href="https://jonathan-jablonski.github.io/got-munchies/"><h1> Got Munchies</h1></a>
                    <p1>Not sure where to eat? This app will help people decide the best place to eat when you don't have the will power left to figure out where to go.</p1> 
                    <a href="https://github.com/aydanegash/got-munchies"><h2> Github</h2></a> 
                  </div>
                </div>
              </div>  
              <div class="column">
              <div class="card">
              <img alt="Password Generator" src="/images/portfolio/password-generator.jpg"></img>
                  <div class="container">
                  <a href="https://aydanegash.github.io/password-generator/"><h1> Password Generator</h1></a>
                    <p1>In the age of hacking, having a strong password is of the utmost importance. This app will help generate a strong unique password every time.</p1>
                    <a href="https://github.com/aydanegash/password-generator"><h2> Github</h2></a>  
                  </div>
                </div>
              </div>
            <div class="column">
            <div class="card">
              <img alt="Coding Quiz" src="/images/portfolio/coding-quiz.jpg"></img>
              <div class="container">
              <a href="https://aydanegash.github.io/quiz-quiz/"><h1> Coding Quiz</h1></a>
              <p>Test your coding knowledge with this fun quiz. This is a great app for coding beginners.</p>
              <a href="https://github.com/aydanegash/quiz-quiz"><h2> Github</h2></a>  
            </div>
            </div>
              </div>
            <div class="column">
            <div class="card">
              <img alt="Note Taker" src="/images/portfolio/note-taker.jpg"></img>
              <div class="container">
              <a href="https://nameless-brook-20588.herokuapp.com/"><h1> Note Taker</h1></a>
              <p>Do you have a lot on your mind? Jot it down on this note taking app. </p>
              <a href="https://github.com/aydanegash/note-taker2"><h2> Github</h2></a> 
            </div>
            </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
