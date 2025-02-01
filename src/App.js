import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import store from './redux/store';

import Navbar from './components/Navbar';
import LoginBar from './components/LoginBar';
import PrivateRoute from './components/PrivateRoute';
import Listing from './pages/Listing';
import Details from './pages/Details';
import Login from './pages/Login';
import AddListing from './pages/AddListing';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <LoginBar />
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/add" 
              element={
                <PrivateRoute>
                  <AddListing />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
