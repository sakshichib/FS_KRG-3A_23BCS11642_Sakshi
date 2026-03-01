import Navbar from "../components/Navbar";

function Dashboard() {
  return (
     <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>Dashboard</h2>
          <p>Welcome to EcoTrack</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;