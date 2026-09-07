const fetch = require('node-fetch');

/**
 * Fetches a random joke from JokeAPI
 * @param {string} type - 'single' for one-liner or 'twopart' for setup/delivery
 * @returns {Promise<string>} - The formatted joke
 */
async function getRandomJoke(type = 'any') {
  try {
    const url = `https://v2.jokeapi.dev/joke/Any?type=${type}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error('Could not retrieve joke');
    }

    // Format the joke based on type
    if (data.type === 'single') {
      return data.joke;
    } else if (data.type === 'twopart') {
      return `${data.setup}\n\n${data.delivery}`;
    }

    return 'Joke retrieved but format unknown';
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    throw error;
  }
}

/**
 * Gets a joke from a specific category
 * @param {string} category - 'general', 'programming', 'knock-knock', etc.
 * @returns {Promise<string>} - The formatted joke
 */
async function getJokeByCategory(category = 'Any') {
  try {
    const url = `https://v2.jokeapi.dev/joke/${category}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Category "${category}" not found`);
    }

    if (data.type === 'single') {
      return data.joke;
    } else if (data.type === 'twopart') {
      return `${data.setup}\n\n${data.delivery}`;
    }

    return 'Joke retrieved but format unknown';
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    throw error;
  }
}

module.exports = {
  getRandomJoke,
  getJokeByCategory,
};
