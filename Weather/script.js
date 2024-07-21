const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIkey = '439d4b804bc8187953eb36d2a8c26a02';
    const city = document.querySelector('.search-box input').value;

    if (city === '') {
       return;
    }

    weatherBox.classList.remove('fadeIn');
    weatherDetails.classList.remove('fadeIn');
    error404.classList.remove('fadeIn');

    fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
    .then(response => response.json())
    .then(json => {

        if (json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block'
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;


            case 'Snow':
                image.src = 'images/snow.png';
                break;


            case 'CLoud':
                image.src = 'images/cloud.png';
                break;


            case 'Mist':
                image.src = 'images/mist.png';
                break;

                default:
                    image.src = '';


        }

        temperature.innerHTML = `${parseInt(json.main.temp) * 9 / 5 + 32}<span>°F</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        setTimeout(() => {
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        }, 100);
    });

});
