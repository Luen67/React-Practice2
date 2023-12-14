export default function ChannelCard(channel){
    let genresArray = channel.genres!=undefined?(channel.genres).split(','):[];
    let buttons = genresArray.map((genre,index) => {                    
        return (<button className="genre-button">{genre}</button>);
    })
    const viewers = channel.viewers.toLocaleString() + " espectadores"
    let classnameImage = "channel_card-image";
    let top = channel.isnew?-18:0;


    return(
        <article className="channel_card-container">
            <div>
                { (channel.isnew) && 
                <span className="new_channel-label">Nuevo</span> }
                <img src={channel.image} alt="" className={classnameImage}  style={{top: top + 'px'}}/>
            </div>
            <p className="channel_name-text" style={{top: top + 'px'}}>{channel.name}</p>
            <p className="channel_name-viewers" style={{top: top + 'px'}}>{viewers}</p>
            <div className="genre_buttons_container" style={{top: top + 'px'}}>
                {buttons}
            </div>
        </article>
    );
}