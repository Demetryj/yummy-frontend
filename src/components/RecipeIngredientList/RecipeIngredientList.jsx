export const RecipeIngredientList = ingredients => {
  return (
    <container>
      <ul>
        {ingredients.map(item => (
          <li key={item.id}>
            <div>
              <img src={getImage(item.thb)} alt="poster" />
            </div>
            <label for="ingridient">{item.ttl}</label>
            <p>{measure}</p>
            <input
              type="checkbox"
              name="ingridient"
              value={item.ttl}
              id="ingridient"
              onChange={handleToggle}
            />
          </li>
        ))}
      </ul>
    </container>
  );
};
// export const filteredIngredients = (ingredients, receiptIngredients) => {
//   return ingredients.filter(ingredient =>
//     ingredient._id.includes(receiptIngredients.id)
//   );
// };
// const arrayObj = [{
//     "object": {
//       id: "1",
//       name: 'obj1',
//       checkId: '001',
//     }
//   },
//   {
//     "object": {
//       id: "2",
//       name: 'obj2',
//       checkId: '002',
//     }
//   },
//   {
//     "object": {
//       id: '3',
//       name: 'obj3',
//       checkId: '003',
//     }
//   },
//   {
//     "object": {
//       id: "4",
//       name: 'obj4',
//       checkId: '004',
//     }
//   }
// ];

// const arrayCheckIds = ['003', '001'].map(e=>''+Number(e));

// console.log(arrayObj.filter(e => arrayCheckIds.includes(e.object.id)).map(e => e.object.name));
