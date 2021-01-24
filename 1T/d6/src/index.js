// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selector = document.querySelector("select"),
  option = selector.querySelectorAll("option"),
  COUNTRY_LS = "country";

function handleChange(event) {
  event.preventDefault();
  storeInLocal();
}

function storeInLocal() {
  option.forEach((element) => {
    if (element.selected === true) {
      localStorage.setItem(COUNTRY_LS, element.value);
    }
  });
}

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry !== null) {
    selector.value = currentCountry;
  }
}

function init() {
  console.dir(selector);

  loadCountry();
  selector.addEventListener("change", handleChange);
}

init();

// ------------- 선택된 옵션값 출력
// option.forEach((element) => {
//   if (element.selected === true) {
//     console.log(element.value);
//   }
// });