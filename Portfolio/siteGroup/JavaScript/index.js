const counter = { countClick: 0 };
function firstClick() {
  counter.countClick++;
  document.getElementById("CountClick").textContent = `クリック数カウンター: ${counter.countClick}`;
  console.log(counter.countClick); 
}