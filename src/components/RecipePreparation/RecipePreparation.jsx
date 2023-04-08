import { nanoid } from 'nanoid';
export const RecipePreparation = ({ recipe }) => {
  const { instructions, preview } = recipe;
  const items = instructions
    .split('\r\n')
    .filter(elem => {
      if (!elem) return false;
      if (!isNaN(elem)) return false;
      if (elem.toLowerCase().includes('step')) return false;
      return true;
    })
    .map((item, index) => {
      let slicedItem = item;
      for (let i = 0; i < 2; i++) {
        if (!isNaN(slicedItem[i]) || slicedItem[i] === '.') {
          slicedItem = slicedItem.slice(i + 1);
        }
      }
      return (
        <li key={nanoid()}>
          <span>{index + 1}</span>
          <p>{slicedItem}</p>
        </li>
      );
    });

  return (
    <div>
      <h2>Recipe Preparation</h2>
      <div>{items}</div>
      <div>
        <img src={preview} alt="poster" />
      </div>
    </div>
  );
};
