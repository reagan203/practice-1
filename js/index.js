
  document.addEventListener('DOMContentLoaded', () => {
    getHelicopters();
  });
  
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "TwBqMEpJ57NJsOil94499w==Natjj0ssjnbeQb5x");
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  
  function renderHelicopters(helicopters) {
    const bellListContainer = document.getElementById('bellList');
  
    if (helicopters && helicopters.length > 0) {
      // Create an unordered list to display helicopters
      const ul = document.createElement('ul');
  
      helicopters.forEach(helicopter => {
        const li = document.createElement('li');
        //Track votes
        let likeCount=0;
        let dislikeCount=0;
        li.innerHTML = `
          <div>
            <p>
            Manufacturer: ${helicopter.manufacturer}, Model: ${helicopter.model}</p>
            <button class="like-button">Like</button>
            <span class ="like-count">likes:${likeCount}</span>
            <button class="dislike-button">Dislike</button>
            <span class="dislike-count">Dislikes: ${dislikeCount}</span>
          </div>
        `;
  
        ul.appendChild(li);
      

      // Attach event listeners to like and dislike buttons
      const likeButton = li.querySelector('.like-button');
      const dislikeButton = li.querySelector('.dislike-button');
      const likeCountSpan = li.querySelector('.like-count');
      const dislikeCountSpan = li.querySelector('.dislike-count');

      likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.textContent = `Likes: ${likeCount}`;
      });

      dislikeButton.addEventListener('click', () => {
        dislikeCount++;
        dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
      });
    });
  
      // Clear any existing content in the container
      bellListContainer.innerHTML = '';
  
      // Append the list to the container
      bellListContainer.appendChild(ul);
    } else {
      bellListContainer.textContent = 'No helicopters found.';
    }
  }
  
  function getHelicopters() {
    fetch("https://api.api-ninjas.com/v1/helicopter?manufacturer=bell&limit=10", requestOptions)
      .then(response => response.json())
      .then(result => renderHelicopters(result)) // Call the render function with the data
      .catch(error => console.log('error', error));
  }

  // agusta list
 
  
  const requestAgusta = {
    method: 'GET',
    headers: myHeaders,
  };
  function renderAgusta(helicopters) {
    const agustaListContainer = document.getElementById('agustaList');
  
    if (helicopters && helicopters.length > 0) {
      // Create an unordered list to display helicopters
      const ul = document.createElement('ul');
  
      helicopters.forEach(helicopter => {
        const li = document.createElement('li');
         
        //Track votes
        let likeCount=0;
        let dislikeCount=0;
        li.innerHTML = `
          <div>
            <p>
            Manufacturer: ${helicopter.manufacturer}, Model: ${helicopter.model}</p>
            <button class="like-button">Like</button>
            <span class ="like-count">likes:${likeCount}</span>
            <button class="dislike-button">Dislike</button>
            <span class="dislike-count">Dislikes: ${dislikeCount}</span>
          </div>
        `;
  
        ul.appendChild(li);


        // Attach event listeners to like and dislike buttons
      const likeButton = li.querySelector('.like-button');
      const dislikeButton = li.querySelector('.dislike-button');
      const likeCountSpan = li.querySelector('.like-count');
      const dislikeCountSpan = li.querySelector('.dislike-count');

      likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.textContent = `Likes: ${likeCount}`;
      });

      dislikeButton.addEventListener('click', () => {
        dislikeCount++;
        dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
       });

      });
  
      // Clear any existing content in the container
      agustaListContainer.innerHTML = '';
  
      // Append the list to the container
      agustaListContainer.appendChild(ul);
    } else {
      agustaListContainer.textContent = 'No helicopters found.';
    }
  }
  
  fetch("https://api.api-ninjas.com/v1/helicopter?manufacturer=agusta&limit=10", requestAgusta)
    .then(response => response.json())
    .then(result => renderAgusta(result))
    .catch(error => console.log('error', error));

    // md list
     
    const requestMd = {
        method: 'GET',
        headers: myHeaders,
      };

      function renderMd(helicopters) {
        const mdListContainer = document.getElementById('mdList');
      
        if (helicopters && helicopters.length > 0) {
          // Create an unordered list to display helicopters
          const ul = document.createElement('ul');
      
          helicopters.forEach(helicopter => {
            const li = document.createElement('li');
            
             //Track votes
             let likeCount=0;
            let dislikeCount=0;
            li.innerHTML = `
              <div>
                <p>Manufacturer: ${helicopter.manufacturer},Model: ${helicopter.model} </p>
                <button class="like-button">Like</button>
                <span class ="like-count">likes:${likeCount}</span>
                <button class="dislike-button">Dislike</button>
                <span class="dislike-count">Dislikes: ${dislikeCount}</span>
              </div>
            `;
      
            ul.appendChild(li);

              // Attach event listeners to like and dislike buttons
             const likeButton = li.querySelector('.like-button');
             const dislikeButton = li.querySelector('.dislike-button');
             const likeCountSpan = li.querySelector('.like-count');
             const dislikeCountSpan = li.querySelector('.dislike-count');

             likeButton.addEventListener('click', () => {
             likeCount++;
             likeCountSpan.textContent = `Likes: ${likeCount}`;
      });

             dislikeButton.addEventListener('click', () => {
             dislikeCount++;
             dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
       });
   });
      
          // Clear any existing content in the container
          mdListContainer.innerHTML = '';
      
          // Append the list to the container
          mdListContainer.appendChild(ul);
        } else {
          mdListContainer.textContent = 'No helicopters found.';
        }
      }
      
      fetch("https://api.api-ninjas.com/v1/helicopter?manufacturer=MD&limit=10", requestMd)
        .then(response => response.json())
        .then(result => renderMd(result))
        .catch(error => console.log('error', error));    
        

        //listsky
        const requestSky = {
            method: 'GET',
            headers: myHeaders,
          };

          function renderSky(helicopters) {
            const skyListContainer = document.getElementById('skyList');
          
            if (helicopters && helicopters.length > 0) {
              // Create an unordered list to display helicopters
              const ul = document.createElement('ul');
          
              helicopters.forEach(helicopter => {
                const li = document.createElement('li');
                //Track votes
                let likeCount=0;
                let dislikeCount=0;
                li.innerHTML = `
                  <div>
                    <p> Manufacturer: ${helicopter.manufacturer},  Model: ${helicopter.model} </p>
                    <button class="like-button">Like</button>
                    <span class ="like-count">likes:${likeCount}</span>
                    <button class="dislike-button">Dislike</button>
                    <span class="dislike-count">Dislikes: ${dislikeCount}</span>
                  </div>
                `;
          
                ul.appendChild(li);

                  // Attach event listeners to like and dislike buttons
                 const likeButton = li.querySelector('.like-button');
                 const dislikeButton = li.querySelector('.dislike-button');
                 const likeCountSpan = li.querySelector('.like-count');
                 const dislikeCountSpan = li.querySelector('.dislike-count');

                 likeButton.addEventListener('click', () => {
                 likeCount++;
                 likeCountSpan.textContent = `Likes: ${likeCount}`;
      });

                 dislikeButton.addEventListener('click', () => {
                 dislikeCount++;
                 dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
       });
              });
          
              // Clear any existing content in the container
              skyListContainer.innerHTML = '';
          
              // Append the list to the container
              skyListContainer.appendChild(ul);
            } else {
              skyListContainer.textContent = 'No helicopters found.';
            }
          }
          fetch("https://api.api-ninjas.com/v1/helicopter?manufacturer=Sikorsky&limit=10", requestSky)
            .then(response => response.json())
            .then(result => renderSky(result))
            .catch(error => console.log('error', error));

            // robinson

            const requestRobinson = {
                method: 'GET',
                headers: myHeaders,
              };

              function renderRobinson(helicopters) {
                const robinsonListContainer = document.getElementById('robinsonList');
              
                if (helicopters && helicopters.length > 0) {
                  // Create an unordered list to display helicopters
                  const ul = document.createElement('ul');
              
                  helicopters.forEach(helicopter => {
                    const li = document.createElement('li');
                    
                    //Track votes
                    let likeCount=0;
                    let dislikeCount=0;
                    li.innerHTML = `
                      <div>
                        <p>Manufacturer: ${helicopter.manufacturer}, Model: ${helicopter.model}</p>
                        <button class="like-button">Like</button>
                        <span class ="like-count">likes:${likeCount}</span>
                        <button class="dislike-button">Dislike</button>
                        <span class="dislike-count">Dislikes: ${dislikeCount}</span>
                      </div>
                    `;
              
                    ul.appendChild(li);

                     // Attach event listeners to like and dislike buttons
                       const likeButton = li.querySelector('.like-button');
                       const dislikeButton = li.querySelector('.dislike-button');
                       const likeCountSpan = li.querySelector('.like-count');
                       const dislikeCountSpan = li.querySelector('.dislike-count');

                       likeButton.addEventListener('click', () => {
                       likeCount++;
                       likeCountSpan.textContent = `Likes: ${likeCount}`;
                   });

                      dislikeButton.addEventListener('click', () => {
                      dislikeCount++;
                      dislikeCountSpan.textContent = `Dislikes: ${dislikeCount}`;
                      });
                  });
              
                  // Clear any existing content in the container
                  robinsonListContainer.innerHTML = '';
              
                  // Append the list to the container
                  robinsonListContainer.appendChild(ul);
                } else {
                  robinsonListContainer.textContent = 'No helicopters found.';
                }
            }
              
              fetch("https://api.api-ninjas.com/v1/helicopter?manufacturer=Robinson&limit=10", requestOptions)
                .then(response => response.json())
                .then(result => renderRobinson(result))
                .catch(error => console.log('error', error));