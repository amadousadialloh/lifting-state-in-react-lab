const IngredientList = ({ availableIngredients, addBurger }) => {
  return (
    <>
      <ul>
        {availableIngredients.map((ingridient, index) => (
          <li style={{ color: ingridient.color }} key={index}>
            {ingridient.name}{" "}
            <button onClick={() => addBurger(ingridient)} type="button">
              +
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
