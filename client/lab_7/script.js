sync function dataHandler(array) {
    console.table(arrayFromJson.data); // this is called "dot notation"
  }
  async function mainEvent() { // the async keyword means we can make API requests
    const form = document.querySelector('.main_form');
    const form = document.querySelector('restaurant-name');
    const form = document.querySelector('food-pref')
    form.addEventListener('submit', async (submitEvent).style.display = "none" => { // async has to be declared all the way to get an await
      const results = await fetch('/api/foodServicesPG'); // This accesses some data from our API
      const arrayFromJson = await results.json(); // This changes it into data we can use - an object
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a "breakpoint"
      // arrayFromJson.data - we're accessing a key called 'data' on the returned object
      // it contains all 1,000 records we need
      if (len(arrayFromJson) > 0){
        submitEvent.style.display = "block"
      };
    });
  }
  document.addEventListener('DOMContentLoaded', sync () => dataHandler());
  
  
  // this actually runs first! It's calling the function above
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests