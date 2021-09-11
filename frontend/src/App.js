import LayoutComponent from './page/MainLayout'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Route 
        path='/'
        component={LayoutComponent}
      />
    </div>
  );
}

export default App;
