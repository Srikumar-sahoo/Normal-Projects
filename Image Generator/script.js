const accessKey = "kWBXSu_aVuKZZ5ANsyBL-MCmeb8Wl7xBIIhpTQ6vc9U";
const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchbox.ariaValueMax;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    if (page === 1) {
      searchResult.innerHTML = "";
    }

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
