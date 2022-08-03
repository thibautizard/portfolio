AOS.init();

window.addEventListener("scroll", (_) => {
  const scroll = document.querySelector(".scroll");
  const position = parseInt(window.scrollY);
  scroll.setAttribute("data-aos-delay", "0");
  scroll.style.opacity = position !== 0 ? "0" : "1";
});

// Création des miniatures
const cardHTML = (card) => {
  const i = Math.floor(Math.random() * 8 + 1);

  return `<div class="outer-card">
            <div class="card">
              <img class="bg" src="">

              <section class="description">
                <p class="title bg-${i}"> ${card.title} </p>
                <div class="details">
                <span>${card.description}</span>
                  <div class="buttons">
                    <button class="psp">En savoir plus</button>
                    ${
                      card.prev
                        ? `<button class="prev"><a href=${card.prev} target="_blank"></a></button>`
                        : ""
                    }
                 </div>
                </div>
              </section>

              <div class="overlay"></div>

            </div>
          </div>`;
};

const cardsInfos = {
  projets: [
    {
      title: "Statcraft",
      description:
        "Statcraft est une application web qui fournit des statistiques de consultation sur le site insee.fr",
      prev: "",
    },

    {
      title: "Tout sur ma ville",
      description:
        "Tout sur ma ville est une application web et mobile pour obtenir des informations sur n'importe quelle ville française",
    },

    {
      title: "Sisam",
      description:
        "Sisam est une application pour gérer l'allocation des bureaux",
    },

    {
      title: "Frustration",
      description:
        "Frustration est un média en ligne indépendant dont j'ai assuré la refonte sur Wordpress",
    },

    {
      title: "Classico",
      description:
        "Classico est une application mobile pour lire des classiques de la littérature française libres de droit",
    },

    {
      title: "Truc de dev",
      description:
        "Mon blog personnel où je documente mes apprentissages et mes découvertes récentes dans le milieu du web",
    },
  ],

  maquettes: [
    {
      title: "Reservia",
      description: "Page d'accueil d'un site de réservations",
      prev: "https://thibautizard.github.io/book_reservia/",
    },

    {
      title: "Oh my food",
      description:
        "Une application pour sélectionner un restaurant et comparer divers menus",
    },

    {
      title: "Groupomania",
      description: "Un réseau social d'entreprise pour échanger des memes",
    },

    {
      title: "La Chouette Agence",
    },
  ],
};

document
  .querySelectorAll(".carroussel.projets .container")
  .forEach(
    (container) =>
      (container.innerHTML = cardsInfos.projets.map(cardHTML).join("\n"))
  );

document
  .querySelectorAll(".carroussel.maquettes .container")
  .forEach(
    (container) =>
      (container.innerHTML = cardsInfos.maquettes.map(cardHTML).join("\n"))
  );

const cards = Array.from(document.querySelectorAll(".card"));
const rotationIntensity = getComputedStyle(
  document.documentElement
).getPropertyValue("--rotation-intensity");
const overlayFactor = getComputedStyle(
  document.documentElement
).getPropertyValue("--overlay-factor");

cards.forEach((card) => {
  card.addEventListener("pointermove", animateCard);
  card.addEventListener("mouseout", restoreCardDimensions);
});

function animateCard(e) {
  let card = e.currentTarget;
  let overlay = card.querySelector(".overlay");
  let image = card.querySelector("img");

  card.style.transitionDuration = "0ms";
  overlay.style.transitionDuration = "0ms";
  image.style.transitionDuration = "0ms";

  let rect = card.getBoundingClientRect();

  const [x, y] = [e.clientX - rect.left, e.clientY - rect.top];

  // Overlay
  overlay.style.transform = `translate3d(${-(
    (x * (100 / overlayFactor)) / rect.width -
    50 / overlayFactor
  )}%,
                                         ${-(
                                           (y * (100 / overlayFactor)) /
                                             rect.height -
                                           50 / overlayFactor
                                         )}%,
                                         0)`;

  overlay.style.opacity =
    Math.abs(rect.width / 2 - x) / rect.width +
    Math.abs(rect.height / 2 - y) / rect.height;

  card.style.transform = `rotateX(${
    -(y / (rect.height / 2) - 1) * rotationIntensity
  }deg)
                          rotateY(${
                            (x / (rect.width / 2) - 1) * rotationIntensity
                          }deg)`;

  image.style.transform = `scale(1.1)
                           translateX(${
                             ((rect.width - x) / rect.width - 0.5) * 25
                           }px)
                           translateY(${
                             ((rect.height - y) / rect.height - 0.5) * 25
                           }px)`;
}

function restoreCardDimensions(e) {
  let card = e.currentTarget;
  let overlay = card.querySelector(".overlay");
  let image = card.querySelector("img");

  card.style.transitionDuration = "500ms";
  overlay.style.transitionDuration = "500ms";
  image.style.transitionDuration = "500ms";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  image.style.transform = "scale(1.05)";
  overlay.style.opacity = "0";
}
