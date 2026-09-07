#!/usr/bin/env node

const { getRandomJoke, getJokeByCategory } = require('./index.js');

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const category = args[1] || 'Any';

  try {
    if (command === '--category' || command === '-c') {
      console.log(`\n📚 Getting a ${category} joke...\n`);
      const joke = await getJokeByCategory(category);
      console.log(joke);
    } else if (command === '--help' || command === '-h') {
      displayHelp();
    } else {
      console.log('\n😂 Here\'s a random joke for you:\n');
      const joke = await getRandomJoke();
      console.log(joke);
    }
    console.log('\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

function displayHelp() {
  console.log(`
Joke Generator CLI

Usage:
  node cli.js                          Get a random joke
  node cli.js --category <category>    Get a joke from a specific category
  node cli.js --help                   Show this help message

Categories:
  Any                 Random from any category (default)
  general             General jokes
  programming         Programming jokes
  knock-knock         Knock-knock jokes
  custom              Custom jokes

Examples:
  node cli.js
  node cli.js --category programming
  node cli.js -c knock-knock
  `);
}

main();
