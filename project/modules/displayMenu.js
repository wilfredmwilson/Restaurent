import roti from '../images/roti.jpg'
import salade from '../images/salade.jpg'
import spa from '../images/spa.jpg'
export const plats = [
  {
    titre: "Alfam",
    description:
    "Alfahm is an Arabic grilled chicken. This chicken recipe is very popular in the middle east as it is marinated with Arabian spice and barbequed in a charcoal grill or in the oven.",
    src: `${roti}`,
  },
  {
    titre: "Noodles",
    description:
      "noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. ",
    src: `${spa}`,
  },
  {
    titre: "Salad",
    description:
      "A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.",
    src: `${salade}`,
  },
];
export function displayMenu(plats) {
 
  content.textContent = "";

  
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

 
  for (const plat of plats) {
    
    const card = document.createElement("div");
    card.classList.add("card");

    
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

   
    const img = document.createElement("img");
    img.setAttribute("src", plat.src); 

    
    const h2elmt = document.createElement("h2");
    h2elmt.textContent = plat.titre;

   
    const pelmt = document.createElement("p");
    pelmt.textContent = plat.description;
    pelmt.classList.add("pelmt")
    
    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

   
    imgContainer.appendChild(img);

    textContainer.appendChild(h2elmt);
    textContainer.appendChild(pelmt)

   
    card.appendChild(imgContainer);
    card.appendChild(textContainer);

  
    cardContainer.appendChild(card);
  }


  content.appendChild(cardContainer);
}