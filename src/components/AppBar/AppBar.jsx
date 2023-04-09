// import { Box } from '../Box';
import { NavItem } from './AppBar.styled';
// import { NavLink } from 'react-router-dom';

// const navItems = [
//   { href: '/', text: 'Main' },
//   { href: 'categories', text: 'Categories' },
//   { href: 'add', text: 'AddRecipes' },
//   { href: 'myRecipes', text: 'MyRecipes' },
//   { href: 'favorites', text: 'Favorites' },
//   { href: 'shoppingList', text: 'ShoppingList' },
//   { href: 'search', text: 'Search' },
// ];

export const AppBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavItem to={'/'}>{'Main'}</NavItem>
          </li>
          <li>
            <NavItem to={'categories'}>{'Categories'}</NavItem>
          </li>
          <li>
            <NavItem to={'add'}>{'AddRecipes'}</NavItem>
          </li>
          <li>
            <NavItem to={'favorites'}>{'Favorites'}</NavItem>
          </li>
          <li>
            <NavItem to={'shoppingList'}>{'ShoppingList'}</NavItem>
          </li>
          <li>
            <NavItem to={'search'}>{'Search'}</NavItem>
          </li>
        </ul>
      </nav>
    </div>
  );
};
