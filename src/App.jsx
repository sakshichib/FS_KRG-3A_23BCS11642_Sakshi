import Header from "./components/Header"
import Dashboard from "./pages/dashboard"
import Logs from "./pages/logs"

const App = () => {
  return (
    <>
      <Header title="Eco Track - Experiment 1" />
      <main style={{padding: "1rem"}}>
        <Dashboard />
        <Logs />
      </main>
    </>
  );
};

export default App;
