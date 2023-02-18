import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { lazy } from 'react';

const About = lazy(() => import('pages/About'));
const Products = lazy(() => import('pages/Products'));
const NotFound = lazy(() => import('pages/NotFound'));
const ProductDetails = lazy(() => import('pages/ProductDetails'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));
// import About from 'pages/About';
// import Products from 'pages/Products';
// import NotFound from 'pages/NotFound';
// import ProductDetails from 'pages/ProductDetails';
// import Mission from './Mission';
// import Team from './Team';
// import Reviews from './Reviews';
// import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
