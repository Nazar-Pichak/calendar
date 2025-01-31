document.addEventListener("DOMContentLoaded", function () {
    let datum = new Date();
    let aktualniRok = datum.getFullYear();
    let aktualniMesic = datum.getMonth();
    let aktualniDen = datum.getDate();
    let pocetDniVMesici = new Date(aktualniRok, aktualniMesic + 1, 0).getDate();

    let prvniDenMesice = new Date(aktualniRok, aktualniMesic, 1).getDay();

    let mesice = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
    let dniTydne = ['po', 'út', 'st', 'čt', 'pá', 'so', 'ne'];

    let tabulkaProMesic = document.createElement('table');
    let hlavicka = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        bunka = document.createElement('th');
        bunka.textContent = dniTydne[i];
        hlavicka.appendChild(bunka);
    }

    tabulkaProMesic.appendChild(hlavicka);

    for (let i = 1; i <= 42; i++) {

        if (i % 7 === 1) {
            radek = document.createElement('tr');
            tabulkaProMesic.appendChild(radek);
        }

        bunka = document.createElement('td');

        if (i >= prvniDenMesice && i < pocetDniVMesici + prvniDenMesice) {
            bunka.textContent = i - prvniDenMesice + 1;
            if (bunka.textContent == aktualniDen) {
                bunka.style.backgroundColor = "rgb(97, 97, 236)";
                bunka.style.color = 'rgb(240, 231, 231)';
            }
        } else {
            bunka.textContent = "🎲";
            bunka.style.backgroundColor = '#ceccc1';
        }


        radek.appendChild(bunka);
    }

    let aktualniMesicRok = document.createElement('h1');
    aktualniMesicRok.textContent = `${mesice[aktualniMesic]} 🎲 ${aktualniRok}`;

    let clanek = document.createElement('p');
    clanek.textContent = ' Vítejte na naší stránce s kalendářem! Tento kalendář vám pomůže sledovat aktuální měsíc a dny v týdnu. Můžete si prohlédnout, který den je dnes, a také vidět, kolik dní zbývá do konce měsíce. Doufáme, že vám tento kalendář bude užitečný a usnadní vám plánování vašich aktivit.'
    let clanekKontainer = document.createElement('div');
    clanekKontainer.setAttribute('class', 'clanek-kontejner');
    clanekKontainer.appendChild(clanek);

    let kontainerKalendar = document.createElement('div');
    kontainerKalendar.setAttribute('class', 'kalendar-kontejner');
    kontainerKalendar.appendChild(aktualniMesicRok);
    kontainerKalendar.appendChild(tabulkaProMesic);

    document.body.appendChild(clanekKontainer);
    document.body.appendChild(kontainerKalendar);

});