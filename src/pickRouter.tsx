// internal imports of sources
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from 'react-router-dom';
// internal crafted imports of sources
import Authentication from './components/confirmation/index';
import ThemeContext from './Store/ContextApi';

const initialData = {
  payload: [{ Username: '', Password: '' }],
};

const ConstructRouter = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <ThemeContext.Provider value={null}>
        <Route path="/" element={Authentication} />
        <Route path="/login/:status" />
        <Route path="/register:status" />
      </ThemeContext.Provider>
    </Routes>
  )
);

export default ConstructRouter;
