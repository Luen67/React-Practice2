import Streamer from "./Streamer";

export default function StreamerList(){
    return (
        <aside>
            <p className="title_menu-streamer">Para ti</p>
            <h2 className="title_channel-followed">Canales que sigo</h2>
            <Streamer name="TheMexicanRunner" description="Cuphead" status="Conectado" viewers={282} image="https://static-cdn.jtvnw.net/jtv_user_pictures/a52db632-68f2-4c51-b9e3-f489e0f45a26-profile_image-70x70.png"/>
            <Streamer name="Rubius" description="" status="Desconectado" viewers={0} image="https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-70x70.jpg"/>
            <Streamer name="ZeroTG_" description="" status="Desconectado" viewers={0} image="https://static-cdn.jtvnw.net/jtv_user_pictures/f3cbbcff-e7f3-4656-89fd-28df59d9b3aa-profile_image-70x70.png"/>
        </aside>
    );
}