const { getRandomJoke, getJokeByCategory } = require('./index.js');

async function runTests() {
  console.log('🧪 Running tests...\n');

  try {
    // Test 1: Random joke
    console.log('Test 1: Getting a random joke');
    const randomJoke = await getRandomJoke();
    console.log('✅ Random joke retrieved');
    console.log(`   ${randomJoke.substring(0, 50)}...\n`);

    // Test 2: Programming joke
    console.log('Test 2: Getting a programming joke');
    const progJoke = await getJokeByCategory('programming');
    console.log('✅ Programming joke retrieved');
    console.log(`   ${progJoke.substring(0, 50)}...\n`);

    // Test 3: Knock-knock joke
    console.log('Test 3: Getting a knock-knock joke');
    const knockJoke = await getJokeByCategory('knock-knock');
    console.log('✅ Knock-knock joke retrieved');
    console.log(`   ${knockJoke.substring(0, 50)}...\n`);

    console.log('🎉 All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

runTests();
