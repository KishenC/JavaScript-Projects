function Dictionary() {
    var VideoGames = {
        "Game": "Grand Theft Auto IV",
        "Genre": "Action-adventure",
        "Platform": "PS3",
        "Release": "April 29, 2008",
        "Developer": "Rockstar North",
        "Age Rating": "18+",
    };
    delete VideoGames.Release; //This removes the Release KVP from the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = VideoGames.Developer;
}