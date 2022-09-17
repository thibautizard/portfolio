import React, { Component } from "react";
import Card from "../components/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoughNotation } from "react-rough-notation";
import parse from "html-react-parser";
import "./realisations.scss";

export default class realisations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("data/projets.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ ...data, selected: 0 }, () => console.log(this.state))
      );
  }

  displayPanel = (index) => {
    return () => {
      this.setState({ selected: index }, () => {
        document.querySelector(".projetinformations").style.display = "block";
      });
    };
  };

  hidePanel = (e) => {
    if (
      e.target === document.querySelector(".projetinformations") ||
      e.target === document.querySelector(".projetinformations .cross") ||
      e.target === document.querySelector(".projetinformations .cross path")
    ) {
      document.querySelector(".projetinformations").style.display = "none";
    }
  };

  render() {
    const selected = this.state.projets?.at(this.state.selected || 0);

    return (
      selected && (
        <section id="realisations">
          <RoughNotation
            className="titre"
            type="underline"
            iterations="4"
            animationDelay="1000"
            animationDuration="3000"
            color="var(--secondary-color)"
            show="true"
          >
            Mes projets
          </RoughNotation>
          <div className="projets">
            {this.state.projets?.map((projet, i) => (
              <Card {...projet} key={i} displayPanel={this.displayPanel(i)} />
            ))}
          </div>

          {/* Panneau d'information */}
          <div className="projetinformations" onClick={this.hidePanel}>
            <div className="panel">
              <div className="presentation">
                <h3 className="titrePanel">{selected?.title}</h3>
                <p className="date_realisation">
                  <b> ~ {parse(selected?.date)}</b>
                </p>
                <ul className="stack">
                  {selected?.stack.map((techno) => (
                    <img
                      src={`img/icons/${techno.toLowerCase()}.png`}
                      title={techno}
                      alt={techno}
                      onerror="() => this.style.display='none'"
                    />
                  ))}
                </ul>
                <p className="description">
                  {parse(selected?.description_long)}
                </p>
              </div>

              <div className="illustrations">
                <img class="bg" src="https://picsum.photos/400/400" />
              </div>
              <FontAwesomeIcon className="cross" icon="circle-xmark" />
            </div>
          </div>
        </section>
      )
    );
  }
}
