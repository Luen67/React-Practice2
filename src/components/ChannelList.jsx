import ChannelCard from "./ChannelCard";

export default function ChannelList(){
    return (
        <main className="channels-container">
            <ChannelCard name="Charlando" isnew={false} viewers={547219} genres="IRL" image="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"/>
            <ChannelCard name="Anime World" isnew={true} viewers={5372} genres="RPG" image="https://static-cdn.jtvnw.net/ttv-boxart/637756067_IGDB-285x380.jpg"/>
            <ChannelCard name="Eventos Especiales" isnew={false} viewers={547219} genres="IRL" image="https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg"/>
            <ChannelCard name="Fortnite" isnew={false} viewers={547219} genres="Shooter,RPG" image="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"/>
            <ChannelCard name="The Simpsons" isnew={false} viewers={547219} genres="Plataformas" image="https://static-cdn.jtvnw.net/ttv-boxart/2897_IGDB-285x380.jpg"/>
            <ChannelCard name="Dragon Ball" isnew={true} viewers={547219} genres="Acción" image="https://static-cdn.jtvnw.net/ttv-boxart/317912951_IGDB-285x380.jpg"/>
            <ChannelCard name="Grand Theft Auto V" isnew={false} viewers={547219}  image="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"/>
            <ChannelCard name="Call of Duty" isnew={false} viewers={547219}  image="https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg"/>
            <ChannelCard name="Pokemon" isnew={false} viewers={547219} genres="RPG,Estrategia" image="https://static-cdn.jtvnw.net/ttv-boxart/329951934_IGDB-285x380.jpg"/>
            <ChannelCard name="EA Sports FC 24" isnew={false} viewers={547219} genres="Simulación" image="https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg"/>
        </main>
    );
}