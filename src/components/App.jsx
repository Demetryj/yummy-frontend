import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from 'pages/Main';
import NoPage from 'pages/NoPage';

const Categories = React.lazy(() => import('../pages/Categories'));
const AddRecipes = React.lazy(() => import('../pages/AddRecipes'));
const MyRecipes = React.lazy(() => import('../pages/MyRecipes'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const ShoppingList = React.lazy(() => import('../pages/ShoppingList'));
const Search = React.lazy(() => import('../pages/Search'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="AddRecipes" element={<AddRecipes />} />
        <Route path="MyRecipes" element={<MyRecipes />} />
        <Route path="Favorites" element={<Favorites />} />
        <Route path="ShoppingList" element={<ShoppingList />} />
        <Route path="Search" element={<Search />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
