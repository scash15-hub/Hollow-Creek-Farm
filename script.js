// Farm Events Array of Objects

const farmEvents = [
  {
    name: "Sunflower U-Pick",
    season: "spring",
    description: "Walk the rows and cut your own bouquet fresh from the field. A beloved tradition that brings visitors back year after year.",
    image: "images/events/event-sunflower-upick-family-sunset.png",
    dates: "Mid-May through June, Late July bloom"
  },
  {
    name: "Strawberry Picking",
    season: "spring",
    description: "Pick fresh strawberries right off the vine during U-Pick weekends. Perfect for jam-making or eating straight from the basket.",
    image: "images/events/event-strawberry-picking.png",
    dates: "April through June weekends"
  },
  {
    name: "Baby Animal Visits",
    season: "spring",
    description: "Meet chicks, ducklings, and baby goats in the restored 1890s barn. A favorite for the little ones in the family.",
    image: "images/events/event-baby-animals-barn.png",
    dates: "April through June"
  },
  {
    name: "Blueberry Picking",
    season: "summer",
    description: "Visit the berry fields and pick fresh blueberries at peak ripeness. Bring a bucket and take home as many as you like.",
    image: "images/events/event-blueberry-picking.png",
    dates: "July through early August"
  },
  {
    name: "Farm-to-Table Dinner",
    season: "summer",
    description: "A ticketed dinner experience in the covered pavilion featuring dishes made from produce grown right here on the farm.",
    image: "images/events/event-farm-to-table-dinner.png",
    dates: "Select Saturday evenings"
  },
  {
    name: "Corn Maze",
    season: "fall",
    description: "A 5-acre maze with a brand-new design every year. Challenge your family, get a little lost, and find your way out before dark.",
    image: "images/events/event-corn-maze-aerial.png",
    dates: "Labor Day through November"
  },
  {
    name: "Pumpkin Patch",
    season: "fall",
    description: "Choose from more than 20 pumpkin varieties — U-Pick or pre-picked. From tiny decorators to giant carving pumpkins.",
    image: "images/events/event-pumpkin-patch.png",
    dates: "September through November"
  },
  {
    name: "Hayrides",
    season: "fall",
    description: "Climb aboard the tractor-pulled wagon for a scenic ride around the farm. The fall foliage makes this one not to miss.",
    image: "images/events/event-hayride-wagon.png",
    dates: "Weekends through October"
  },
  {
    name: "Apple Cider Pressing",
    season: "fall",
    description: "Watch fresh cider get pressed on-site and take a jug home. You can taste the difference when it's made right here.",
    image: "images/events/event-apple-cider-pressing.png",
    dates: "September through November"
  },
  {
    name: "Fall Harvest Festival",
    season: "fall",
    description: "The biggest event of the year — food vendors, live music, a craft fair, and all the farm fun you can fit into a weekend.",
    image: "images/events/event-fall-harvest-festival.png",
    dates: "Last two weekends of October"
  },
  {
    name: "Holiday Market",
    season: "winter",
    description: "Local artisans, farm-made gifts, handcrafted wreaths, and warm cider. The perfect way to start the holiday season.",
    image: "images/events/event-holiday-market.png",
    dates: "First three weekends of December"
  },
  {
    name: "Christmas Trees",
    season: "winter",
    description: "Choose-and-cut your own tree or pick from our pre-cut selection. Fresh-cut Fraser firs, Douglas firs, and more.",
    image: "images/events/event-christmas-trees.png",
    dates: "December"
  }
];


// ------------------------------------------------------------
//  RENDER — Build and inject event cards into the grid
// ------------------------------------------------------------
function renderCards(filter) {
  const grid = document.getElementById("events-grid");
  const emptyMsg = document.getElementById("events-empty");

  // Filter the array — "all" shows everything
  const filtered = filter === "all"
    ? farmEvents
    : farmEvents.filter(event => event.season === filter);

  // Show empty state if nothing matches
  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyMsg.classList.remove("d-none");
    return;
  }

  emptyMsg.classList.add("d-none");

  // Build cards using forEach
  let html = "";
  filtered.forEach(event => {
    html += `
      <div class="col-sm-6 col-lg-4">
        <article class="event-card season-border-${event.season}">
          <div class="event-card-img-wrap">
            <img
              src="${event.image}"
              alt="${event.name} at Hollow Creek Farm"
              class="event-card-img"
              onerror="this.src='images/events/placeholder.png'"
            />
            <!-- Image credit: Provided Hollow Creek Farm asset folder. Licensed for class use. -->
          </div>
          <div class="event-card-body">
            <span class="event-tag tag-${event.season}">${capitalize(event.season)}</span>
            <h3 class="event-card-title">${event.name}</h3>
            <p class="event-card-dates">${event.dates}</p>
            <p class="event-card-desc">${event.description}</p>
          </div>
        </article>
      </div>
    `;
  });

  grid.innerHTML = html;
}


// ------------------------------------------------------------
//  FILTER — Attach click listeners to filter buttons
// ------------------------------------------------------------
function initFilter() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove("active"));

      // Set active on clicked button
      btn.classList.add("active");

      // Re-render cards with selected filter
      renderCards(btn.dataset.filter);
    });
  });
}


//  UTILITY
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCards("all");
  initFilter();
});