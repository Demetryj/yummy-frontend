import * as React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import RegisterPage from 'pages/Register';
// import SigninPage from 'pages/Signin';
// import WelcomePage from 'pages/Welcome';
import { SharedLayout } from 'components/SharedLayout';

import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const MainPage = React.lazy(() => import('pages/Main'));
const CategoriesPage = React.lazy(() => import('pages/Categories'));
// const AddRecipesPage = React.lazy(() => import('pages/AddRecipes'));
// const MyRecipesPage = React.lazy(() => import('pages/MyRecipes'));
// const FavoritesPage = React.lazy(() => import('pages/Favorites'));
const RecipesPage = React.lazy(() => import('pages/Recipe'));
// const ShoppingListPage = React.lazy(() => import('pages/ShoppingList'));
// const SearchPage = React.lazy(() => import('pages/Search'));
const ErrorPage = React.lazy(() => import('pages/404/Error'));
// const ConfirmationPage = React.lazy(() =>
// import('pages/Confirmation/Confirmation')
// );

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'refreshing'
  ) : (
    <Routes>
      {/* <>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </> */}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        {/* <Route path="/add" element={<AddRecipesPage />} />
        <Route path="/my" element={<MyRecipesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/recipe/:recipeId" element={<RecipesPage />} />
        {/*  <Route
          path="/verify/:verificationToken"
          element={<ConfirmationPage />}
        />
        <Route
          path="/current/subscribe/:subscribedToken"
          element={<ConfirmationPage />}
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
