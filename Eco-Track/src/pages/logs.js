import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogs } from '../store/logsSlice';

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading logs...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Activity Logs</h3>
      <ul>
        {data.map((log, index) => (
          <li key={log.id ?? index}>
            {log.activity} - {log.carbon} kg CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Logs;   