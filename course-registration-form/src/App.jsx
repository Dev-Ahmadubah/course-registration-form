
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>Course Registration System</h1>
          <p className="subtitle">Join our online learning platform and start your journey today</p>
        </header>
        <main className="app-main">
          <RegistrationForm />
        </main>
      </div>
    </div>
  );
}

export default App;

