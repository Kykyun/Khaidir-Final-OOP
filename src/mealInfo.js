const getMeal = async (mealName) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  const data = await response.json();
  const meal = data.meals[0];

  const mealNameElement = document.querySelector("#meal-name");
  const mealImageElement = document.querySelector("#meal-image");
  const mealCategoryElement = document.querySelector("#meal-category");
  const mealAreaElement = document.querySelector("#meal-area");
  const ingredientsTableBody = document.querySelector("#ingredients-body");
  const mealInstructionsElement = document.querySelector("#meal-instructions");
  const mealVideoElement = document.querySelector("#meal-video");

  if (meal) {
    mealNameElement.textContent = meal.strMeal;

    const image = document.createElement("img");
    image.src = meal.strMealThumb;
    image.alt = meal.strMeal;
    image.style.display = "block";
    image.style.margin = "auto";
    mealImageElement.appendChild(image);

    mealCategoryElement.textContent = `Category: ${meal.strCategory}`;
    mealAreaElement.textContent = `Area: ${meal.strArea}`;

    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        ingredients.push(meal["strIngredient" + i]);
        measures.push(meal["strMeasure" + i]);
      } else {
        break;
      }
    }

    for (let i = 0; i < ingredients.length; i++) {
      const row = document.createElement("tr");
      const ingredientCell = document.createElement("td");
      ingredientCell.textContent = ingredients[i];
      const measureCell = document.createElement("td");
      measureCell.textContent = measures[i];
      row.appendChild(ingredientCell);
      row.appendChild(measureCell);
      ingredientsTableBody.appendChild(row);
    }

    mealInstructionsElement.textContent = meal.strInstructions;

    const video = document.createElement("iframe");
    video.src = `https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`;
    video.width = "560";
    video.height = "315";
    video.allowFullscreen = true;
    mealVideoElement.appendChild(video);
  } else {
    mealNameElement.textContent = "Meal not found";
  }
};

getMeal("Moroccan Carrot Soup");
