let xp = 0;
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

let nomeDeHeroi = [
    ["Lkj", xp, 0], // nível Ferro (índice 0)
    ["mrt", xp, 3], // nível Ouro (índice 3)
    ["hgr", xp, 5]  // nível Ascendente (índice 5)
];

for (let c = 0; c < nomeDeHeroi.length; c++) {
    let nivelHeroi = nomeDeHeroi[c][2]; 

    if (nivelHeroi >= 0 && nivelHeroi <= 3) {
        nomeDeHeroi[c][1] += 1000;
    } else if (nivelHeroi >= 4 && nivelHeroi <= 5) {
        nomeDeHeroi[c][1] += 5000;
    } else if (nivelHeroi >= 6 && nivelHeroi <= 10) {
        nomeDeHeroi[c][1] += 8000;
    }

    switch(nomeDeHeroi[c][1]){
        case nomeDeHeroi[c][1] <= 1000:
            nomeDeHeroi[c][2] = nivel[0]

        case nomeDeHeroi[c][1] >= 1001 && nomeDeHeroi[c][1] <= 2000:
            nomeDeHeroi[c][2] = nivel[1]

         case nomeDeHeroi[c][1] >= 2001 && nomeDeHeroi[c][1] <= 5000:
            nomeDeHeroi[c][2] = nivel[2]

        case nomeDeHeroi[c][1] >= 5001 && nomeDeHeroi[c][1] <= 7000:
            nomeDeHeroi[c][2] = nivel[3]

        case nomeDeHeroi[c][1] >= 7001 && nomeDeHeroi[c][1] <= 8000:
            nomeDeHeroi[c][2] = nivel[4]

        case nomeDeHeroi[c][1] >= 8001 && nomeDeHeroi[c][1] <= 9000:
            nomeDeHeroi[c][2] = nivel[5]

        case nomeDeHeroi[c][1] >= 9001 && nomeDeHeroi[c][1] <= 10000:
            nomeDeHeroi[c][2] = nivel[6]

        case nomeDeHeroi[c][1] >= 10001 :
            nomeDeHeroi[c][2] = nivel[7]
    }
   

    console.log(
        "Jogador " + (c + 1) + 
        " | Nome: " + nomeDeHeroi[c][0] + 
        " | XP: " + nomeDeHeroi[c][1] + 
        " | Nível: " + nivel[nomeDeHeroi[c][2]]
    );
}

