import * as React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from 'pages/Register';
import SigninPage from 'pages/Signin';
import WelcomePage from 'pages/Welcome';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { PrivateRoute, RestrictedRoute } from 'service/routes';

import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const MainPage = React.lazy(() => import('pages/Main'));
const CategoriesPage = React.lazy(() => import('pages/Categories'));
const AddRecipesPage = React.lazy(() => import('pages/AddRecipes'));
const MyRecipesPage = React.lazy(() => import('pages/MyRecipes'));
const FavoritesPage = React.lazy(() => import('pages/Favorites'));
const RecipesPage = React.lazy(() => import('pages/Recipe'));
const ShoppingListPage = React.lazy(() => import('pages/ShoppingList'));
const SearchPage = React.lazy(() => import('pages/Search/Search'));
const ErrorPage = React.lazy(() => import('pages/404/Error'));
const ConfirmationPage = React.lazy(() =>
  import('pages/Confirmation/Confirmation')
);

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
      <>
        <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute component={<SigninPage />} />}
        />
      </>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PrivateRoute component={<MainPage />} />} />
        <Route
          path="categories/:categoryName"
          element={
            <PrivateRoute
              redirectTo="/welcome"
              component={<CategoriesPage />}
            />
          }
        />

        <Route
          path="add"
          element={<PrivateRoute component={<AddRecipesPage />} />}
        />
        <Route
          path="my"
          element={<PrivateRoute component={<MyRecipesPage />} />}
        />
        <Route
          path="favorites"
          element={<PrivateRoute component={<FavoritesPage />} />}
        />
        <Route
          path="shopping-list"
          element={<PrivateRoute component={<ShoppingListPage />} />}
        />
        <Route
          path="search"
          element={<PrivateRoute component={<SearchPage />} />}
        />
        <Route
          path="recipe/:recipeId"
          element={<PrivateRoute component={<RecipesPage />} />}
        />
        <Route
          path="verify/:verificationToken"
          element={<PrivateRoute component={<ConfirmationPage />} />}
        />
        <Route
          path="/current/subscribe/:subscribedToken"
          element={<PrivateRoute component={<ConfirmationPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
