// Farm Events Array of Objects
const farmEvents = [
  {
    name: "Sunflower Picking",
    season: "spring",
    description: "Walk the rows and cut your own bouquet fresh from the field during the first sunflower bloom of the season.",
    image: "sunflower.png",
    dates: "Mid-May through June"
  },

  {
    name: "Strawberry Picking",
    season: "spring",
    description: "Pick fresh strawberries right from the field during weekend U-Pick events.",
    image: "strawberry.png",
    dates: "April through June weekends"
  },

  {
    name: "Asparagus Picking",
    season: "spring",
    description: "Harvest fresh asparagus straight from the field during our spring U-Pick season.",
    image: "asparagus.png",
    dates: "April through June weekends"
  },

  {
    name: "Baby Animal Visits",
    season: "spring",
    description: "Meet chicks, ducklings, and baby goats in the barn during the spring season.",
    image: "baby.png",
    dates: "April through June"
  },

  {
    name: "Garden Seedlings & Transplants",
    season: "spring",
    description: "Shop vegetable plants, flowers, and garden starters for your home garden.",
    image: "seeding.png",
    dates: "April through June"
  },

  {
    name: "Blueberry Picking",
    season: "summer",
    description: "Pick fresh blueberries at peak ripeness in our berry fields.",
    image: "blueberry.png",
    dates: "July through early August"
  },

  {
    name: "Summer Produce Market",
    season: "summer",
    description: "Fresh tomatoes, zucchini, cucumbers, peppers, sweet corn, and green beans available daily.",
    image: "produce.png",
    dates: "July through August"
  },

  {
    name: "Sunflower Picking",
    season: "summer",
    description: "Enjoy the second sunflower bloom and cut your own bouquet.",
    image: "sunflower.png",
    dates: "Late July"
  },

  {
    name: "Farm-to-Table Dinner",
    season: "summer",
    description: "Ticketed outdoor dinners featuring ingredients grown right here on the farm.",
    image: "dinner.png",
    dates: "Select Saturday evenings"
  },

  {
    name: "Corn Maze",
    season: "fall",
    description: "Explore our 5-acre corn maze featuring a brand-new design every year.",
    image: "corn.png",
    dates: "Labor Day through November"
  },

  {
    name: "Pumpkin Patch",
    season: "fall",
    description: "Choose from over 20 pumpkin varieties with U-Pick and pre-picked options.",
    image: "pumpkin.png",
    dates: "September through November"
  },

  {
    name: "Hayrides",
    season: "fall",
    description: "Take a relaxing tractor-pulled ride around the farm and enjoy the fall scenery.",
    image: "hayride.png",
    dates: "Weekends through October"
  },

  {
    name: "Apple Cider Pressing",
    season: "fall",
    description: "Watch apples being pressed into fresh cider and take a jug home.",
    image: "cider.png",
    dates: "September through November"
  },

  {
    name: "Fall Harvest Festival",
    season: "fall",
    description: "Enjoy food vendors, live music, crafts, and family activities during our biggest event of the year.",
    image: "harvest.png",
    dates: "Last two weekends of October"
  },

  {
    name: "Fall Decorations",
    season: "fall",
    description: "Browse gourds, Indian corn, mums, and seasonal decorations for your home.",
    image: "decor.png",
    dates: "September through November"
  },

  {
    name: "Holiday Market",
    season: "winter",
    description: "Shop local artisans, farm-made gifts, and holiday decorations.",
    image: "holiday.png",
    dates: "First three weekends of December"
  },

  {
    name: "Christmas Trees & Wreaths",
    season: "winter",
    description: "Choose-and-cut or pre-cut Christmas trees along with fresh handmade wreaths.",
    image: "christmas.png",
    dates: "December"
  },

  {
    name: "Farm Store",
    season: "winter",
    description: "Our farm store remains open year-round with seasonal products and gifts.",
    image: "estore.png",
    dates: "January through March (reduced hours)"
  }
];

//  CREATE CARD — builds one event card element
const createCard = (event) => {

  // outer column div
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-4";

  // article card
  const card = document.createElement("article");
  card.className = "event-card season-border-" + event.season;

  // image wrapper
  const imgWrap = document.createElement("div");
  imgWrap.className = "event-card-img-wrap";

  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name + " at Hollow Creek Farm";
  img.className = "event-card-img";
  // Image credit: Provided Hollow Creek Farm asset folder. Licensed for class use.

  imgWrap.appendChild(img);

  // card body
  const body = document.createElement("div");
  body.className = "event-card-body";

  const tag = document.createElement("span");
  tag.className = "event-tag tag-" + event.season;
  tag.textContent = event.season.charAt(0).toUpperCase() + event.season.slice(1);

  const title = document.createElement("h3");
  title.className = "event-card-title";
  title.textContent = event.name;

  const dates = document.createElement("p");
  dates.className = "event-card-dates";
  dates.textContent = event.dates;

  const desc = document.createElement("p");
  desc.className = "event-card-desc";
  desc.textContent = event.description;

  // put body together
  body.appendChild(tag);
  body.appendChild(title);
  body.appendChild(dates);
  body.appendChild(desc);

  // put card together
  card.appendChild(imgWrap);
  card.appendChild(body);

  col.appendChild(card);

  return col;
};

//  RENDER EVENTS — filters array and builds cards
const renderEvents = (filter) => {
  const grid = document.getElementById("events-grid");
  const emptyMsg = document.getElementById("events-empty");

  // clear the grid
  grid.innerHTML = "";

  // filter the array — "all" shows everything
  let eventsToShow = [];

  if (filter === "all") {
    eventsToShow = farmEvents;
  } else {
    farmEvents.forEach((event) => {
      if (event.season === filter) {
        eventsToShow.push(event);
      }
    });
  }

  // show empty message if nothing matches
  if (eventsToShow.length === 0) {
    emptyMsg.classList.remove("d-none");
    return;
  }

  emptyMsg.classList.add("d-none");

  // build and append each card
  eventsToShow.forEach((event) => {
    const card = createCard(event);
    grid.appendChild(card);
  });
};

//  FILTER BUTTONS 
const initFilter = () => {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

      // remove active from all buttons
      buttons.forEach((b) => b.classList.remove("active"));

      // add active to the clicked button
      btn.classList.add("active");

      // re-render with the selected season
      renderEvents(btn.dataset.filter);
    });
  });
};

//  ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderEvents("all");
  initFilter();
});