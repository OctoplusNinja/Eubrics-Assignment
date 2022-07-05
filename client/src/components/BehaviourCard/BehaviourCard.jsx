import "./BehaviourCard.css";

import { Card } from "antd";

function BehaviourCard(props) {
  return (
    <Card
      onClick={() => {
        props.setBehaviour(props.behaviour + 2);
      }}
      hoverable
      style={{
        width: 240,
        backgroundColor: "#937DC2",
      }}
    >
      {props.description}
    </Card>
    //  <div className="Card">{props.description}</div>
  );
}

export default BehaviourCard;
