/*
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Jonas'
                };
                console.log(recipe2);
            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}
getRecipe();
*/

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    });
};

// getIDs.then(IDs => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     })
//     .then(recipe => {
//         console.log(recipe);
//         return getRelated('Jonas')
//     })
//     .then(recipe => {
//         console.log(recipe);
//     })
//     .catch(error => {
//         console.log('Error!')
//     })

//////////////////////////////////////////////////////////
// Lecture: Async functions


// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Jonas Schmedtmann');
//     console.log(related);

//     return recipe;
// }
// getRecipesAW().then(result => console.log(`${result} is the best ever!`));

// fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
// .then(result => {
//     console.log(result);
//     return result.json();
// })
// .then(data => {
//     // console.log(data);
//     const today = data.consolidated_weater[0];
//     console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
// })
// .catch(error => console.log(error));

function getWeather(zipcode) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&APPID=a3ec83f71849d6785bc9c5874d19e4e1`)
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(data => {
        // console.log(data);
        const today = data.list[0];
        const minTemp = Math.floor(1.8 * (today.main.temp_min - 273) + 32);
        const maxTemp = Math.floor(1.8 * (today.main.temp_max - 273) + 32);
        console.log(`Temperatures in ${data.city.name} stay between ${minTemp} and ${maxTemp}`);
    })
    .catch(error => console.log('Cannot find zip code!'));
}
getWeather(90210);


async function getWeatherAW(zipcode) {
    try {
        const result = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&APPID=a3ec83f71849d6785bc9c5874d19e4e1`);
        const data = await result.json();
        const tomorrow = data.list[1];
        const minTemp = Math.floor(1.8 * (tomorrow.main.temp_min - 273) + 32);
        const maxTemp = Math.floor(1.8 * (tomorrow.main.temp_max - 273) + 32);
        console.log(`Temperatures tomorrow in ${data.city.name} stay between ${minTemp} and ${maxTemp}`);
        return data;
    } catch(error) {
        console.log(error);
    } 
}
getWeatherAW(91792);
let dataBeverlyHill;
getWeatherAW(90210).then(data => {
    dataBeverlyHill = data;
    console.log(dataBeverlyHill);
});




