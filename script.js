// Farm Events Array of Objects
const farmEvents = [
  {
    name: "Sunflower U-Pick",
    season: "spring",
    description: "Walk the rows and cut your own bouquet fresh from the field. A beloved tradition that brings visitors back year after year.",
    image: "sunflower.png",
    dates: "Mid-May through June, Late July bloom"
  },
  {
    name: "Strawberry Picking",
    season: "spring",
    description: "Pick fresh strawberries right off the vine during U-Pick weekends. Perfect for jam-making or eating straight from the basket.",
    image: "strawberry.png",
    dates: "April through June weekends"
  },
  {
    name: "Baby Animal Visits",
    season: "spring",
    description: "Meet chicks, ducklings, and baby goats in the restored 1890s barn. A favorite for the little ones in the family.",
    image: "baby.png",
    dates: "April through June"
  },
  {
    name: "Blueberry Picking",
    season: "summer",
    description: "Visit the berry fields and pick fresh blueberries at peak ripeness. Bring a bucket and take home as many as you like.",
    image: "blueberry.png",
    dates: "July through early August"
  },
  {
    name: "Farm-to-Table Dinner",
    season: "summer",
    description: "A ticketed dinner experience in the covered pavilion featuring dishes made from produce grown right here on the farm.",
    image: "dinner.png",
    dates: "Select Saturday evenings"
  },
  {
    name: "Corn Maze",
    season: "fall",
    description: "A 5-acre maze with a brand-new design every year. Challenge your family, get a little lost, and find your way out before dark.",
    image: "corn.png",
    dates: "Labor Day through November"
  },
  {
    name: "Pumpkin Patch",
    season: "fall",
    description: "Choose from more than 20 pumpkin varieties — U-Pick or pre-picked. From tiny decorators to giant carving pumpkins.",
    image: "pumpkin.png",
    dates: "September through November"
  },
  {
    name: "Hayrides",
    season: "fall",
    description: "Climb aboard the tractor-pulled wagon for a scenic ride around the farm. The fall foliage makes this one not to miss.",
    image: "hayride.png",
    dates: "Weekends through October"
  },
  {
    name: "Apple Cider Pressing",
    season: "fall",
    description: "Watch fresh cider get pressed on-site and take a jug home. You can taste the difference when it's made right here.",
    image: "cider.png",
    dates: "September through November"
  },
  {
    name: "Fall Harvest Festival",
    season: "fall",
    description: "The biggest event of the year — food vendors, live music, a craft fair, and all the farm fun you can fit into a weekend.",
    image: "harvest.png",
    dates: "Last two weekends of October"
  },
  {
    name: "Holiday Market",
    season: "winter",
    description: "Local artisans, farm-made gifts, handcrafted wreaths, and warm cider. The perfect way to start the holiday season.",
    image: "holiday.png",
    dates: "First three weekends of December"
  },
  {
    name: "Christmas Trees",
    season: "winter",
    description: "Choose-and-cut your own tree or pick from our pre-cut selection. Fresh-cut Fraser firs, Douglas firs, and more.",
    image: "christmas.png",
    dates: "December"
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