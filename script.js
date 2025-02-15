const ajouterBtn = document.querySelector("#ajouter")
const dialog = document.querySelector("dialog")
const fermerBtn = document.querySelector("#annulerBtn")
const tbody = document.querySelector("tbody")
const titre = document.querySelector("#titre")
const genre = document.querySelector("#genre")
const auteur = document.querySelector("#auteur")
const date = document.querySelector("#date")
const pages = document.querySelector("#pages")
const dejaVu = document.querySelector("#estLu")
const confirmerBtn = document.querySelector("#confirmerBtn")
const form = document.querySelector("form")
const monLibrairie = [];


function Livre(id, genre, titre, auteur, dateEdition, nbrPages, estLu) {
    this.id = id
    this.genre = genre
    this.titre = titre
    this.auteur = auteur
    this.dateEdition = dateEdition
    this.nbrPages = nbrPages
    this.estLu = estLu
}

function ajouterUnLivre(genre, titre, auteur, dateEdition, nbrPages, estLu) {
    let id = monLibrairie.length === 0 ? 1 : monLibrairie.length + 1;
    let newLivre = new Livre(id, genre, titre, auteur, dateEdition, nbrPages, estLu)
    monLibrairie.push(newLivre)
    tbody.innerHTML = ""
    afficherLesLivre()
}

function afficherLesLivre() {
    for (let livre of monLibrairie) {
        let newLigne = document.createElement("tr")
        let content = `<td>${livre.id}</td>
                <td>${livre.genre}</td>
                <td>${livre.titre}</td>
                <td>${livre.auteur}</td>
                <td>${livre.dateEdition}</td>
                <td>${livre.nbrPages}</td>
                <td>${livre.estLu ? "OUI" : "NON"}</td>
                <td><button>modifier</button></td>
                <td><button>supprimer</button></td>`
        newLigne.innerHTML = content
        tbody.appendChild(newLigne)
    }
}


ajouterBtn.addEventListener("click", () => {
    dialog.showModal()
})

fermerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.close()
})

confirmerBtn.addEventListener("click", (e) => {
    console.log(titre.value)
    if (form.checkValidity()) {
        const genreValue = genre.value
        const titreValue = titre.value
        const auteurValue = auteur.value
        const dateValue = date.value
        const pagesValue = pages.value
        const estLuValue = dejaVu.checked
        ajouterUnLivre(genreValue, titreValue, auteurValue, dateValue, pagesValue, estLuValue)
        form.reset()
        dialog.close()
    }
})
