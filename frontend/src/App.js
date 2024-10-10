// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';

const App = () => {
  const [status, setStatus] = useState('');  // Store the database status here

  const getDatabaseStatus = async () => {
    setStatus('Checking database status...');

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/db-status`);
      const data = await response.json();

      setStatus(`${data.status}. Time: ${data.time}`);
    } catch (error) {
      setStatus('Error fetching database status.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Check PostgreSQL Database Status</h1>
      <button onClick={getDatabaseStatus} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Database Status
      </button>
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        {status}
      </div>
    </div>
  );
};

export default App;
