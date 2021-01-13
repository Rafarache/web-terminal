// Imports

// Components
import Terminal from './components/terminal'
import Instructions from './components/instructions'

// Default Css
import './App.css';

function App() {
  return (
      <div className="app">
          <Instructions />
          <Terminal></Terminal>
      </div>
  );
}

export default App;
