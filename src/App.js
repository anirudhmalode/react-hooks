import { Divider } from '@mui/material';
import './App.css';
import UseCallback from './hooks/UseCallback';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <UseState />
      <Divider />
      <UseEffect />
      <Divider />
      <UseMemo />
      <Divider />
      <UseCallback />
      <Divider />
    </div>
  );
}

export default App;
