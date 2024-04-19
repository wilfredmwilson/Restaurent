
import platAccueil from '../images/platAccueil1.png'
export function displayHome() {
  const content = document.getElementById("content");
  content.textContent=" "

  const contentText = document.createElement("div");
  const contentImg = document.createElement("div");
  const img=document.createElement("img");


const h1Element = document.createElement("h1");
const spanElement1 = document.createElement("span");
const spanElement2 = document.createElement("span");


const text1 = document.createTextNode("It's not just ");
const text2 = document.createTextNode("Food");
const text3 = document.createTextNode("Its a ");
const text4 = document.createTextNode("Experience");
const text5 = document.createTextNode(".");


img.src= platAccueil;
img.setAttribute("alt","@");


spanElement1.appendChild(text2);
spanElement2.appendChild(text4);


h1Element.appendChild(text1);
h1Element.appendChild(spanElement1);
h1Element.appendChild(document.createTextNode(" "));
h1Element.appendChild(text3);
h1Element.appendChild(spanElement2);
h1Element.appendChild(text5)

  

contentText.classList.add("content-text");
contentImg.classList.add("content-img");

contentText.appendChild(h1Element);
contentImg.appendChild(img)
content.appendChild(contentText);
content.appendChild(contentImg)
}
