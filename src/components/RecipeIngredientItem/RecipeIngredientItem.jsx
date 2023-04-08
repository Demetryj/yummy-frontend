export const RecipeIngredientItem = ({ ingredient }) => {
  console.log(ingredient);
  const { thb, ttl, measure, _id } = ingredient;
  return (
    <div>
      <div>
        <img src={thb} alt="poster" />
      </div>
      <label htmlFor="ingridient">{ttl}</label>
      <p>{measure}</p>
      <input
        type="checkbox"
        name="ingridient"
        value={ttl}
        id="ingridient"
        // onChange={handleToggle}
      />
    </div>
  );
};
