import { Router } from "express";
import { getByArtistName, 
    login, 
    callback, 
    topUser, 
    getAccessToken, 
    me, 
    currentPlaying, 
    playSong, 
    pauseSong, 
    nextSong, 
    previousSong, 
    getByAlbum,
    currentPlaybackState,
    getActiveDevices 
} from "../Controllers/spotify.controller.js";

const routerSpotify = Router();


routerSpotify.get('/artist/:artist', getByArtistName);
routerSpotify.get('/album/:album', getByAlbum)
routerSpotify.get('/login', login);
routerSpotify.get('/callback', callback);
routerSpotify.get('/top', topUser);
routerSpotify.get('/token', getAccessToken);
routerSpotify.get('/me', me);
routerSpotify.get('/currentplaying', currentPlaying)
routerSpotify.get('/currentplaybackstate', currentPlaybackState)
routerSpotify.get('/play', playSong)
routerSpotify.get('/pause', pauseSong)
routerSpotify.get('/next', nextSong)
routerSpotify.get('/previous', previousSong)
routerSpotify.get('/devices', getActiveDevices)

export default routerSpotify;