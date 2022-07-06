import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&szie=100*100`}
          alt={`monster ${name}`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
