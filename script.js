const lendas = ['Bloodhound', 'Gibraltar', 'Lifeline', 'Pathfinder', 'Wraith', 'Bangalore', 'Caustic', 'Mirage', 'Octane'//, 'Wattson', 'Crypto', 'Revenant', 'Loba', 'Rampart', 'Horizon', 'Fuse', 'Valkyrie', 'Seer', 'Ash', 'Mad Maggie', 'Newcastle', 'Vantage'//
];

let arrayObjLendas = [
{
    lenda: 'Bloodhound',
    idade: 0,
    tipo: 'Rastreador Tecnológico',
    heranca: 'Raven\'s Bite',
    meta: true,
    habilidades: ['Olho do Pai de Todos', ' Rastreador', ' Fera da Caça'],
    foto: "./Media/Bloodhound/Img/bloodhound.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/bloodhound'
}, 
{
    lenda: 'Gibraltar',
    idade: 30,
    tipo: 'Fortaleza Blindada',
    heranca: 'War Club',
    meta: true,
    habilidades: ['Domo de Proteção', ' Escudo de Arma', ' Bombardeio Defensivo'],
    foto: "./Media/Gibraltar/Img/gibraltar.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/makoa-gibraltar'
}, 
{
    lenda: 'Lifeline',
    idade: 24,
    tipo: 'Médica de Combate',
    heranca: 'Shock Sticks',
    meta: true,
    habilidades: ['Drone Dr. Cura', ' Médica de Combate', ' 	Cápsula de Suprimentos'],
    foto: "./Media/Lifeline/Img/lifeline.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/lifeline'
}, 
{
    lenda: 'Pathfinder',
    idade: 0,
    tipo: 'Batedor Avançado',
    heranca: 'Boxing Gloves',
    meta: true,
    habilidades: ['Gancho', ' 	Fontes Internas', ' 	Arma de Tirolesa'],
    foto: "./Media/Pathfinder/Img/pathfinder.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/pathfinder'
}, 
{
    lenda: 'Wraith',
    idade: 32,
    tipo: 'Guerreira Interdimensional',
    heranca: 'Kunai',
    meta: true,
    habilidades: ['Adentrando o Vazio', ' Vozes do Vazio', ' Fenda Dimensional'],
    foto: "./Media/Wraith/Img/wraith.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/wraith'
}, 
{
    lenda: 'Bangalore',
    idade: 38,
    tipo: 'Combatente Profissional',
    heranca: 'Cold Steel',
    meta: false,
    habilidades: ['	Lançador de Fumaça', ' Asas nos pés', ' Estrondo do trovão'],
    foto: "./Media/Bangalore/Img/bangalore.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/bangalore'
}, 
{
    lenda: 'Caustic',
    idade: 48,
    tipo: 'Caçador Tóxico',
    heranca: 'Death Hammer',
    meta: false,
    habilidades: ['Armadilha de Gás Nox', ' Visão Nox', ' Granada de Gás Nox'],
    foto: "./Media/Caustic/Img/caustic.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/caustic'
}, 
{
    lenda: 'Mirage',
    idade: 30,
    tipo: 'Trapaceiro Ilusionista',
    heranca: 'Too Much Witt',
    meta: false,
    habilidades: ['Astúcia', ' Agora Você Me Vê...', ' 	Animação da Festa'],
    foto: "./Media/Mirage/Img/mirage.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/mirage'
}, 
{
    lenda: 'Octane',
    idade: 24,
    tipo: 'Acrobata de Alta Velocidade',
    heranca: 'Butterfly Knife',
    meta: true,
    habilidades: ['Estimulante', ' Reparo Rápido', ' Suporte de Salto'],
    foto: "./Media/Octane/Img/octane.png",
    imgSkills: '',
    background: '',
    link: 'https://www.ea.com/pt-br/games/apex-legends/about/characters/octane'
}];

const verificaBooleano = () => {
    let verificacao = [arrayObjLendas.map(obj => obj.meta)] === true;
    return verificacao
};

console.log(verificaBooleano());

// let soLendaTrue = []
// for (obj of arrayObjLendas) {
//     if (obj.meta === true) {
//         soLendaTrue.push(obj)
//     } else {
//         alert('O item não foi adicionado!')
//     };
// };

// console.log(soLendaTrue);

let somaIdade = 0
for (obj in arrayObjLendas) {
    somaIdade += arrayObjLendas[obj].idade
};

console.log(`Soma da idade das Lendas: ${somaIdade}`);

for (obj in arrayObjLendas) {
    arrayObjLendas[obj].lenda = arrayObjLendas[obj].lenda.toUpperCase()
};

const relatorioString = () => {    
    for (obj of arrayObjLendas) {        
        for (chave in obj) {
            console.log(`${chave}: ${obj[chave]}`);
        };
        console.log(`\n`);
    };
};

console.log(relatorioString());

for (i in arrayObjLendas) {

    const itIsMeta = () => {
        let lendaMeta
        if (arrayObjLendas[i].meta === true) {
            return lendaMeta = 'Sim'
        } else {
            return lendaMeta = 'Não'
        }
    };

    let divSections = document.getElementById("sections")
    let section = document.createElement('section')
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    let li6 = document.createElement('li')
    
    divSections.appendChild(section)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)

    let imagem = document.createElement('img')
    imagem.src = arrayObjLendas[i].foto
    section.insertAdjacentElement("afterbegin", imagem)

    let aLenda = document.createElement('a')
    aLenda.setAttribute('href', arrayObjLendas[i].link)
    aLenda.setAttribute('target', '_blank')
    aLenda.setAttribute('class', 'lenda')
    aLenda.innerHTML = arrayObjLendas[i].lenda

    li1.appendChild(aLenda)
    li2.innerHTML = `Idade: ${arrayObjLendas[i].idade}`
    li3.innerHTML = `Tipo: ${arrayObjLendas[i].tipo}`
    li4.innerHTML = `Herança: ${arrayObjLendas[i].heranca}`
    li5.innerHTML = `Meta: ${itIsMeta()}`
    li6.innerHTML = `Skills: ${arrayObjLendas[i].habilidades}`
};

const buscaLenda = (array, string) => {
    for (i in array) {
        for (chave in array[i]) {
            if (array[i][chave] === string) {
                
                const itIsMeta = () => {
                    let lendaMeta
                    if (array[i].meta === true) {
                        return lendaMeta = 'Sim'
                    } else {
                        return lendaMeta = 'Não'
                    }
                };

                let main = document.getElementById('container-main')
                let divSections = document.createElement("div")
                let section = document.createElement('section')
                let ul = document.createElement('ul')
                let li1 = document.createElement('li')
                let li2 = document.createElement('li')
                let li3 = document.createElement('li')
                let li4 = document.createElement('li')
                let li5 = document.createElement('li')
                let li6 = document.createElement('li')
            
                divSections.setAttribute('id', 'sections')
                divSections.setAttribute('class', 'sections')
                main.appendChild(divSections)
                divSections.appendChild(section)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                ul.appendChild(li5)
                ul.appendChild(li6)

                let imagem = document.createElement('img')
                imagem.src = array[i].foto
                section.insertAdjacentElement("afterbegin", imagem)

                let aLenda = document.createElement('a')
                aLenda.setAttribute('href', array[i].link)
                aLenda.setAttribute('target', '_blank')
                aLenda.setAttribute('class', 'lenda')
                aLenda.innerHTML = array[i].lenda

                li1.appendChild(aLenda)
                li2.innerHTML = `Idade: ${array[i].idade}`
                li3.innerHTML = `Tipo: ${array[i].tipo}`
                li4.innerHTML = `Herança: ${array[i].heranca}`
                li5.innerHTML = `Meta: ${itIsMeta()}`
                li6.innerHTML = `Skills: ${array[i].habilidades}`
        }
    }
    }
};

let buscarLenda = (event) => {
    event.preventDefault()
    let input = document.getElementById('input')
    input = input.value.toUpperCase()
    let div = document.getElementById('sections')
    if (input === "") {
        alert ('Nenhuma Lenda encontrada!')
    } else {
        div = div.remove()
        buscaLenda(arrayObjLendas, input)
    }
}