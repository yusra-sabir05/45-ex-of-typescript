function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return (album);
}
console.log(make_album("billie eilish", "bad guy"));
console.log(make_album("selena gomez", "who says"));
console.log(make_album("cardi b", "i love it", 22));
