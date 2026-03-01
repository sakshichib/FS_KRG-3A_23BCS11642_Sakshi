import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  
  const [waterIntake, setWaterIntake] = useState(0);
  const [dailyTarget, setDailyTarget] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  useEffect(() => {
    const saved = localStorage.getItem("waterIntake");
    if (saved) {
      setWaterIntake(Number(saved));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("waterIntake", waterIntake);
  }, [waterIntake]);

  useEffect(() => {
    const fetchTip = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setTip(data.slip.advice);
        setError("");
      } catch (err) {
        setError("Failed to fetch health tip.");
      } finally {
        setLoading(false);
      }
    };

    fetchTip();
  }, []);

  const addWater = useCallback(() => {
    setWaterIntake((prev) => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setWaterIntake((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const resetWater = useCallback(() => {
    setWaterIntake(0);
  }, []);

  const percentage = Math.min(
    (waterIntake / dailyTarget) * 100,
    100
  );

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Water Tracker</h2>

          {/* Counter Display (React.memo optimized) */}
          <CounterDisplay count={waterIntake} />

          <p className="progress">
            {waterIntake} / {dailyTarget} glasses completed
          </p>

          <p>Progress: {percentage.toFixed(0)}%</p>

          {/* Progress Bar */}
          <div
            style={{
              height: "10px",
              background: "#ddd",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${percentage}%`,
                height: "100%",
                background: "#2e7d32",
                borderRadius: "5px",
                transition: "0.3s",
              }}
            />
          </div>

          {/* Editable Daily Target */}
          <div style={{ marginTop: "15px" }}>
            <label>Set Daily Target: </label>
            <input
              type="number"
              value={dailyTarget}
              min="1"
              onChange={(e) =>
                setDailyTarget(Number(e.target.value))
              }
              style={{ width: "60px", marginLeft: "5px" }}
            />
          </div>

          {/* Goal Message */}
          {waterIntake >= dailyTarget && (
            <p className="success">Goal Achieved 🎉</p>
          )}

          {/* Buttons */}
          <div style={{ marginTop: "15px" }}>
            <button onClick={addWater}>+</button>
            <button onClick={removeWater}>-</button>
            <button onClick={resetWater}>Reset</button>
          </div>

          <hr style={{ margin: "20px 0" }} />

          {/* API Section */}
          <h3>Today’s Health Tip</h3>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <p>{tip}</p>}
        </div>
      </div>
    </div>
  );
}

export default WaterTracker;