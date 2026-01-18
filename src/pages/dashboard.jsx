import {logs} from "../data/logs";

const Dashboard = () => {
    const totalCarbon = logs.reduce((sum, log) => sum + log.carbon, 0);
    return ( 
        <div> 
            <h2>Dahboard</h2> 
            <p>Total Carbon Footprint: {totalCarbon} kg CO<sub>2</sub></p>
    
            <ul>
                {logs.map((log) => (
                    <li key={log.id}>
                        {log.activity} = {log.carbon} kg CO<sub>2</sub>
                    </li>
                ))}
            </ul>
        </div> 
    );
};


export default Dashboard;