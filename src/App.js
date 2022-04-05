import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App container">
          <div className="alert alert-info">
            <h3 className="text-danger">Ini Project Pertama React JS</h3>
            <p>Belajar React JS itu mudah</p>
            <button className="mr-1 btn btn-success">Setuju</button>
            <button className="btn btn-info">Iya Dong</button>
            <div className="App container col-sm-6">
              <Alert type="danger" header="Fatal Error">
                Ini adalah alert dengan tipe danger
              </Alert>
              <Alert type="success" header="Berhasil">
                Ini adalah alert dengan tipe success
              </Alert>
              <Alert type="warning" header="Warning">
                Ini adalah alert dengan tipe warning
              </Alert>
            </div>
          </div>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
