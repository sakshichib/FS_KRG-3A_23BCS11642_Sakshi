import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Logs from './pages/logs';
import Dashboard from "./pages/dashboard";
import {logs} from './data/logs';
import Login from './pages/login';
import DashboardLayout from './pages/DashboardLayout';
import DashboardAnalytics from './pages/DashboardAnalytics';
import DashboardSummary from './pages/DashboardSummary';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header title="EcoTrack - Carbon Footprint Tracker Experiment 1" />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route index element={<DashboardSummary />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
          <Route path="summary" element={<DashboardSummary />} />
          <Route
            path="/logs"
            element={
              <ProtectedRoute>
                <Logs logs={logs} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
