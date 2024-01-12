const loadFood = mealFood =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealFood}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = foods=>{
    const foodContainer = document.getElementById('food-container')
    foodContainer.innerHTML = ''
    foods.map(food=>{
        console.log(food)    
        const foodDiv = document.createElement('div');
        // console.log(foodDiv);
        foodDiv.classList.add('col');
        foodDiv.classList.add('px-4')
        foodDiv.innerHTML= `
        <div class="row align-items-center border rounded-2 shadow-sm">
            <img src="${food.strMealThumb}" class="img-fluid rounded-start col-md-4 ps-0" alt="...">
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="text-capitalize fw-bold mb-3">${food.strMeal}</h5>
                    <p class="card-text mb-4">There are many variations of passages of available, but the majority have suffered</p>
                    <button onclick="loadFoodDetails(${food.idMeal})" type="button" class="btn btn-link text-warning fw-bold text-capitalize ps-0 pt-0" data-bs-toggle="modal" data-bs-target="#foodModalDetail">
                    view details
                    </button>                    
                </div>
            </div>
        </div>
        `
        foodContainer.appendChild(foodDiv)
    })
}
const searchText = () =>{
    const searchMeal = document.getElementById('searchMeal')
    const search = searchMeal.value
    search.value = ''
    loadFood(search)
}

const loadFoodDetails= detailFood=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodModal(data.meals))
}
const displayFoodModal = (details)=>{
    const foodBody = document.getElementById('food-modal-body');
    details.map(detail=>{
        console.log(detail)
        document.getElementById('foodModal').innerText= detail.strMeal
        foodBody.innerHTML= `
        <img class = 'img-fluid' src="${detail.strMealThumb}">
        <h5>Area: ${detail.strArea}</h5>
        <p>Category: ${detail.strCategory}<p/>
        <p>Youtube: ${detail.strYoutube}</p>
        `
    })
    
}
loadFoodDetails()