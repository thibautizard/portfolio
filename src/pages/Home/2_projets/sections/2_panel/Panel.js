import React from "react";

// CSS
import "./panel.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBan } from "@fortawesome/free-solid-svg-icons";

// Libraries
import parse from "html-react-parser";

function PanelProjet(props) {
  return (
    props.displayPanel && (
      <div className="projetinformations">
        <div className="panel">
          <div className="presentation">
            <h3 className="titrePanel">{props.title}</h3>
            <p className="date_realisation">
              <b> ~ {parse(props.date)}</b>
            </p>
            <ul className="stack">
              {props.stack.map((techno) => (
                <img
                  src={require(`./icons/${techno.toLowerCase()}.png`)}
                  title={techno}
                  alt={techno}
                  onerror="() => this.style.display='none'"
                  loading="lazy"
                />
              ))}
            </ul>
            <p className="description">{parse(props.description_long)}</p>
            {props.prev ? (
              <a
                href={props.prev}
                className="panel_lien activated"
                target="_blank"
              >
                {" "}
                {props.prev_text}
              </a>
            ) : (
              <a className="panel_lien" href="">
                {" "}
                <FontAwesomeIcon icon={faBan}></FontAwesomeIcon> Cette
                application n'est pas publique
              </a>
            )}
          </div>
          <div className="illustrations">
            {props.illustrations.map((illustration) => {
              return (
                <img
                  class="bg"
                  loading="lazy"
                  src={require(`../../img/${props.title.toLowerCase()}/framed_compressed/${illustration}`)}
                />
              );
            })}
          </div>

          <FontAwesomeIcon
            className="cross"
            icon={faCircleXmark}
            onClick={props.hidePanel}
          />
        </div>
      </div>
    )
  );
}

export default PanelProjet;
