let xp = 1000;
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

let nomeDeHeroi = [
    ["Lkj", xp, nivel[0]], // Ferro
    ["mrt", xp, nivel[3]], // Ouro
    ["hgr", xp, nivel[7]]  // Ascendente
];

for (let c = 0; c < nomeDeHeroi.length; c++) {
    let nivelHeroi = nomeDeHeroi[c][2]; // agora é string

    // Adiciona XP conforme nível atual
    if (nivelHeroi === "Ferro" || nivelHeroi === "Bronze") {
        nomeDeHeroi[c][1] += 2000;
    } else if (nivelHeroi === "Prata" || nivelHeroi === "Ouro") {
        nomeDeHeroi[c][1] += 5500; 
    }  else if (nivelHeroi === "Platina" || nivelHeroi === "Ascendente") {
        nomeDeHeroi[c][1] += 8000;
    } else if (nivelHeroi === "Imortal" || nivelHeroi === "Radiante") {
        nomeDeHeroi[c][1] += 10000;
    }

    // Atualiza nível conforme XP
    switch (true) {
    case (nomeDeHeroi[c][1] <= 1000):
        nomeDeHeroi[c][2] = "Ferro";
        break;

    case (nomeDeHeroi[c][1] <= 2000):
        nomeDeHeroi[c][2] = "Bronze";
        break;

    case (nomeDeHeroi[c][1] <= 5000):
        nomeDeHeroi[c][2] = "Prata";
        break;

    case (nomeDeHeroi[c][1] <= 7000):
        nomeDeHeroi[c][2] = "Ouro";
        break;

    case (nomeDeHeroi[c][1] <= 8000):
        nomeDeHeroi[c][2] = "Platina";
        break;

    case (nomeDeHeroi[c][1] <= 9000):
        nomeDeHeroi[c][2] = "Ascendente";
        break;

    case (nomeDeHeroi[c][1] <= 10000):
        nomeDeHeroi[c][2] = "Imortal";
        break;

    default:
        nomeDeHeroi[c][2] = "Radiante";
}

    console.log(
        "Jogador " + (c + 1) + 
        " | Nome: " + nomeDeHeroi[c][0] + 
        " | XP: " + nomeDeHeroi[c][1] + 
        " | Nível: " + nomeDeHeroi[c][2]
    );
}



