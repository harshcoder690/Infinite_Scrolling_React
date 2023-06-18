import './App.css';
import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import AuthContext from './contexts/AuthContext';
import { AuthReducer } from './reducers/AuthReducer';
function App() {

  const [IsAuthenticated, dispatchIsAuthenticated] = useReducer(AuthReducer, {
    IsAuthenticated: false
  });

  const provider = {
    IsAuthenticated,
    dispatchIsAuthenticated
  }

  return (
    <div className="App">
      <AuthContext.Provider value={provider}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
