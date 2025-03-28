import { BrowserRouter } from 'react-router';
import Navigator from './components/Navigator';
import Router from './components/Router';

function App() {

  return (
    <BrowserRouter>
      <Navigator />
      <Router />
    </BrowserRouter>
  );
}

export default App;