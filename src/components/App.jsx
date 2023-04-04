import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from 'pages/Register';
import Signin from 'pages/Signin';
import Main from 'pages/Main';
import NoPage from 'pages/NoPage';

import { Layout } from './SharedLayout';

const Categories = React.lazy(() => import('../pages/Categories'));
const AddRecipes = React.lazy(() => import('../pages/AddRecipes'));
const MyRecipes = React.lazy(() => import('../pages/MyRecipes'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const ShoppingList = React.lazy(() => import('../pages/ShoppingList'));
const Search = React.lazy(() => import('../pages/Search'));

export const App = () => {
  return (
    <Routes>
      <Route path="/start">
        <Route path="Register" element={<Register />} />
        <Route path="Signin" element={<Signin />} />
      </Route>
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
