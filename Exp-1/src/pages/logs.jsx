import {logs} from "../data/logs";

const Logs = () => {
    const highImpactLogs = logs.filter(log => log.carbon >= 4);
    return ( 
        <> 
            <h2>High Carbon Activities (&gt; 4Kg)</h2> 
           
            <ul>
                {highImpactLogs.map(log => (
                    <li key={log.id}>
                        {log.activity}: {log.carbon} CO<sub>2</sub>
                    </li>
                ))}
            </ul>
        </> 
    );
};


export default Logs;