const axios = require('axios');

async function getJoke() {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    console.log(response.data.setup);
    console.log(response.data.punchline);
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

getJoke();

