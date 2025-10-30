

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from './octofitapp-small.svg';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="me-2" style={{height: '40px'}} />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
              <div className="card shadow-lg" style={{ width: '28rem' }}>
                <div className="card-body">
                  <h1 className="card-title display-5 mb-3">Bem-vindo ao <span className="text-primary">Octofit Tracker</span>!</h1>
                  <p className="card-text">Acompanhe suas atividades, equipes, treinos e veja o ranking de desempenho. Use o menu acima para navegar.</p>
                  <Link to="/activities" className="btn btn-primary m-2">Ver Atividades</Link>
                  <Link to="/leaderboard" className="btn btn-success m-2">Ver Leaderboard</Link>
                  <Link to="/teams" className="btn btn-info m-2">Ver Equipes</Link>
                  <Link to="/users" className="btn btn-warning m-2">Ver Usuários</Link>
                  <Link to="/workouts" className="btn btn-danger m-2">Ver Treinos</Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
