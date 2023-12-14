export default function Streamer(props){
    return(
        <div className="streamer-container">
            <div className="avatar_streamer-container avatar_streamer-container-disabled">
                <img src={props.image} alt="" className="avatar-streamer"/>
            </div>
            <div className="streamer_name-container">
                <p className="streamer-name">{props.name}</p>
                <p className="streamer-description">{props.description}</p>
            </div>
            <div className="streamer_status-container">                
                {
                props.status === "Conectado"? 
                    <div>
                        <div className="streamer_status-icon"></div>
                        <span className="streamer-viewers">{props.viewers}</span>
                    </div> 
                    : 
                    <span className="streamer-viewers">{props.status}</span>                    
                }                
            </div>
        </div>
    );
}