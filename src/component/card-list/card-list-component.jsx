import { Component } from "react";
import "./card-list.styles.css";
import "../card/card-component";
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
