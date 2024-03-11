const getDadJokeText = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            method:'get',
            headers: {
                'Accept' : 'application/json'
            }
        });

        if(response.ok){
            const jokeTextContainer = document.getElementById('jokeTextContainer');
            
            jokeTextContainer.innerHTML = '';

            const jokeData = await response.json();

            const jokeParagraph = document.createElement('p');
            jokeParagraph.textContent = jokeData.joke;

            jokeTextContainer.appendChild(jokeParagraph);
        } else {
            console.log('Error: Failed to fetch data joke ' + response.statusText);
        }
    } catch (e) {
        console.log('Error fetching dad joke: ', e);
    }
};

document.getElementById('getJokeBtn').addEventListener('click', getDadJokeText);