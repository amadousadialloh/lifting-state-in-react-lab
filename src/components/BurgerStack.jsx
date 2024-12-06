const BurgerStack = ({ stack, removeBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ color: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeBurger(ingredient)} type="button">
            -
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
