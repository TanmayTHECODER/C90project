function addUser() {
    player_1 = document.getElementById("player1_name_input").Value;
    player_2 = document.getElementById("player2_name_input").Value;

    localStorage.setItem("player1_name", player_1)
localStorage.setItem("player2_name", player_2)

window.location = "game_page.html";
}



