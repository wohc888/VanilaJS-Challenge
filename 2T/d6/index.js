// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY = "country";
const jsSelect = document.querySelector("select");

function loadLocal(name) {
  const local = localStorage.getItem(name);
  if (local) {
    console.dir(jsSelect);
    jsSelect.value = local;
  }
}

function handleChange(event) {
  event.preventDefault();
  const selectedCountry = jsSelect.options[jsSelect.selectedIndex].value;
  localStorage.setItem(COUNTRY, selectedCountry);
  console.log(localStorage.getItem(COUNTRY));
}

loadLocal(COUNTRY);

jsSelect.addEventListener("change", handleChange);
