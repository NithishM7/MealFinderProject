const toggleMenu = document.getElementById("toggleMenu");
const categoryMenu = document.getElementById("categoryMenu");
const closeMenu = document.getElementById("closeMenu");

toggleMenu.addEventListener("click", () => {
    categoryMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    categoryMenu.classList.add("hidden");
});



// Load categories
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => {
        data.categories.forEach(category => {

            // sidebar elements
            const li = document.createElement("li");
            li.textContent = category.strCategory;
            li.addEventListener("click", () => showCategoryDetails(category));
            categoryList.appendChild(li);

            // Create card in main 
            const card = document.createElement("div");
            card.classList.add("category-card");
            card.innerHTML = `
          <img src="${category.strCategoryThumb}" />
          <p>${category.strCategory}</p>`;
            card.addEventListener("click", () => showCategoryDetails(category));
            categoriesContainer.appendChild(card);
        });
    });

