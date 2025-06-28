import type { Pizza as PizzaType } from '../constants/pizzaData'

type PizzaProps = {
  pizzaObj: PizzaType
}

const Pizza = ({ pizzaObj: { name, ingredients, photoName, price, soldOut }}: PizzaProps) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza