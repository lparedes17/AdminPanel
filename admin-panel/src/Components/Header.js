import React, {Component} from 'react';
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            database:{
                spotify_country:'',
                spotify_name: '',
                spotify_email:'',
                spotify_id:'',
                spotify_ms:0,
                spotify_coins:0,
                spotify_playlist:{},

                spotify_artist:{},

                spotify_album:{},
                spotify_multiplier_playlist:0,
                spotify_multiplier_artist:0,
                spotify_multiplier_album:0
            },
            playlist_multiplier:0,
            album_multiplier:0,
            artist_multiplier:0,
            id:""
        }
        this.onChangeAlbumMultiplier = this.onChangeAlbumMultiplier.bind(this);
        this.onChangeArtistMultiplier = this.onChangeArtistMultiplier.bind(this);
        this.onChangePlaylistMultiplier = this.onChangePlaylistMultiplier.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        axios.get('http://localhost:4000/spotifys').then(res =>{
                console.log(res.data);
                this.setState({
                    database: res.data[0],
                    id:res.data[0]._id,
                })
                console.log(this.state.database);
                console.log(this.state.id);
        }

        )
    }

    onChangePlaylistMultiplier(event){
        this.setState({
            playlist_multiplier:event.target.value,
            database:{
                spotify_country:this.state.database.spotify_country,
                spotify_name: this.state.database.spotify_name,
                spotify_email:this.state.database.spotify_email,
                spotify_id:this.state.database.spotify_id,
                spotify_ms:this.state.database.spotify_ms,
                spotify_coins:this.state.database.spotify_coins,
                spotify_playlist:this.state.database.spotify_playlist,

                spotify_artist:this.state.database.spotify_artist,

                spotify_album:this.state.database.spotify_album,
                spotify_multiplier_playlist:event.target.value,
                spotify_multiplier_artist:this.state.database.spotify_multiplier_artist,
                spotify_multiplier_album:this.state.database.spotify_multiplier_album
            },
        })


    }
    onChangeAlbumMultiplier(event){
        this.setState({
            album_multiplier:event.target.value,
            database:{
                spotify_country:this.state.database.spotify_country,
                spotify_name: this.state.database.spotify_name,
                spotify_email:this.state.database.spotify_email,
                spotify_id:this.state.database.spotify_id,
                spotify_ms:this.state.database.spotify_ms,
                spotify_coins:this.state.database.spotify_coins,
                spotify_playlist:this.state.database.spotify_playlist,

                spotify_artist:this.state.database.spotify_artist,

                spotify_album:this.state.database.spotify_album,
                spotify_multiplier_playlist:this.state.database.spotify_multiplier_playlist,
                spotify_multiplier_artist:this.state.database.spotify_multiplier_artist,
                spotify_multiplier_album:event.target.value,
            },
        })


    }
    onChangeArtistMultiplier(event){
        this.setState({
            artist_multiplier:event.target.value,
            database:{
                spotify_country:this.state.database.spotify_country,
                spotify_name: this.state.database.spotify_name,
                spotify_email:this.state.database.spotify_email,
                spotify_id:this.state.database.spotify_id,
                spotify_ms:this.state.database.spotify_ms,
                spotify_coins:this.state.database.spotify_coins,
                spotify_playlist:this.state.database.spotify_playlist,

                spotify_artist:this.state.database.spotify_artist,

                spotify_album:this.state.database.spotify_album,
                spotify_multiplier_playlist:this.state.database.spotify_multiplier_playlist,
                spotify_multiplier_artist:event.target.value,
                spotify_multiplier_album:this.state.database.spotify_multiplier_album
            },
        })


    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.state.database);
        axios.post('http://localhost:4000/spotifys/update/' + this.state.id,this.state.database).then(res=>
        {
            console.log(res.data);
            axios.get('http://localhost:4000/spotifys/' + this.state.id).then(res=>{ console.log(res.data);})
        })
        console.log('Form submitted:');
        console.log(`Player Multiplier: ${this.state.playlist_multiplier}`);
        console.log(`Artist Multiplier: ${this.state.artist_multiplier}`);
        console.log(`Album Multiplier: ${this.state.album_multiplier}`);
        console.log(event)


        this.setState({
            play_multiplier: '',
            artist_multiplier:'',
            album_multiplier:''
        })


    }
    render() {
        return(
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="play__multiplier">Change Mulitiplier for Playlists:</label>
                    <input onChange={this.onChangePlaylistMultiplier} value={this.state.playlist_multiplier} type="number" id="play__multiplier"  name="play__multiplies"/>
                    <br/>
                    <label htmlFor="artists__multiplier">Change Mulitiplier for Artists:</label>
                    <input onChange={this.onChangeArtistMultiplier} value={this.state.artist_multiplier} type="number" id="artist_multiplier" name="artists__multiplies"/>
                    <br/>
                    <label htmlFor="album__multiplier">Change Mulitiplier for Albums:</label>
                    <input onChange={this.onChangeAlbumMultiplier} value={this.state.album_multiplier} type="number" id="album__multiplier" name="album__multiplies"/>
                    <br/>

                    <button>
                        <span>Change Multiplier</span>
                    </button>
                </form>

            </div>
        )
    }

}

export default Header;