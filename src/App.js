import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLayout from './components/PageLayout/PageLayout';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import User from './pages/User/User';

import { store } from './store/configureStore';

import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/'
            element={
              <PageLayout>
                <Home />
              </PageLayout>
            }
          />
          <Route
            path='/user'
            element={
              <PageLayout>
                <User />
              </PageLayout>
            }
          />
          <Route
            path='*'
            element={
              <PageLayout>
                <NotFound />
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
