import BehaviourCard from "../BehaviourCard/BehaviourCard";
import "./Behaviours.css";

function Behaviours(props) {
  function handleClick(behaviour) {
    console.log(behaviour);
  }
  return (
    <div className="Behaviours">
      {props.behaviours.map((b, idx) => {
        // console.log(b);
        return (
          <BehaviourCard
            handleClick={handleClick}
            setBehaviour={props.setBehaviour}
            description={b.table_description}
            behaviour={idx}
            name={b.tables_name}
            key={b.tables_name}
          />
        );
      })}
      {/* <BehaviourCard />
      <BehaviourCard />
      <BehaviourCard />
      <BehaviourCard />
      <BehaviourCard /> */}
    </div>
  );
}

export default Behaviours;
