// get name

document.querySelector("#search-form").addEventListener("submit", e => {
  e.preventDefault();
  const getName = document.querySelector("#namn_src").value;
  const getNameDay = document.querySelector(".outPut");

  dayName(getName).then(data => {
    if (200 && data.results.length > 0) {
      const getName = document.querySelector("#namn_src").value;

      let render = "";
      data.results.forEach(data => {
        render = `<p>Du sökte på ${getName} </p>
        <h4 class="card-title">${data.name} har Namsdag</h4>
        <h6 class="card-title"> den ${data.day} / ${data.month} / ${year}</h6>
                
               `;
      });
      getNameDay.innerHTML = render;
    } else {
      errormsg(`Tyvärr så hittar vi ingen namsdag till ${getName} `);
    }
  });
});

const errormsg = error => {
  document.querySelector(".outPut").innerHTML = `<h6>${error}</h6>
    `;
};
// get name by date
document.querySelector("#search-date").addEventListener("submit", e => {
  e.preventDefault();

  const getNameMonth = document.querySelector("#month_src").value;
  const getNameDate = document.querySelector("#day_src").value;
  const writeOut = document.querySelector(".outPut");

  getDate(getNameMonth, getNameDate).then(data => {
    let renderDate = "";
    data.data.forEach(data => {
      renderDate = `<h4 class="card-title">${data.namedays.se} har Namsdag </h4> 
      <h6> den ${data.dates.day} / ${data.dates.month} / ${year}<h6>`;
    });
    writeOut.innerHTML = renderDate;
  });
});

// Year right now
let date = new Date();
let year = date.getFullYear();
