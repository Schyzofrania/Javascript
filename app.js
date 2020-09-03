// Créer élément card présent dans le document HTML et l'ajouter à l'élément dont la classe vaut "cards"
// /!\ Interdiction d'utiliser la propriété "innerHTML" /!\

/* 
Contenu du paragraphe pour la card : 

    It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, 
    that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels. 
    I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise
    about our mamas.
*/

const cards = document.querySelector(".cards")
const div = document.createElement("div")
const img = document.createElement("div")
const badge = document.createElement("div")
const lien = document.createElement("img")
const titre = document.createElement("div")
const h1 = document.createElement("h1")
const content = document.createElement("div")
const p = document.createElement("p")
const footer = document.createElement("footer")
const button1 = document.createElement("button")
const button2 = document.createElement("button")


cards.append(div)
div.classList.add("card")

div.append(img)
img.classList.add("card--image")

img.append(badge)
badge.classList.add("card--badge")
badge.innerText = "2018"

img.append(lien)
lien.setAttribute("src", "https://placeimg.com/350/200/arch")
lien.setAttribute("alt", "dummy image")

div.append(titre)
titre.classList.add("card--title")
titre.append(h1)
h1.innerText = "Card Title"

div.append(content)
content.classList.add("card--content")
content.append(p)
p.innerText = `It may comfort you to know that Fry's death took only fifteen seconds, 
                yet the pain was so intense,that it felt to him like fifteen years. 
                And it goes without saying, it caused him to empty his bowels.
                I don't know what you did, Fry, but once again, you screwed up! 
                Now all the planets are gonna start cracking wiseabout our mamas.`

div.append(footer)
footer.append(button1)
button1.classList.add("card--button")
button1.innerText = "SHOW MORE"
footer.append(button2)
button2.classList.add("card--button")
button2.innerText = "PURCHASE"
