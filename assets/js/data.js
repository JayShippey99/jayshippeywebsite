let modalWrapperPortfolio = document.querySelector(".modal-Portfolio");
let modalWrapperBlog = document.querySelector(".modal-Blog");
let openModalPortfolio = document.querySelectorAll(".open-modal-portfolio");
let openModalBlog = document.querySelectorAll(".open-modal-shaders");

/*  ================
    AJAX
================= */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    let dataPortfolio = data["portfolio-data"]; // this pulls the portfolio section and all the details from the data.json into the dataPortfolio variable 
    let dataBlog = data["blog-data"];
    
    // SO THE REASON WHY THE BUTTON WASN'T WORKING IS BECAUSE ITS NOT IN THE .open-model- whatever thing so the code setting it up doesn't run. There's some class or wrapper that's not what we need it to be

    // Portfolio data
  
    dataPortfolio.forEach((data, index) => {
        
      openModalPortfolio[index].addEventListener("click", () => {
        modalWrapperPortfolio.innerHTML = `
            <h1 class="text-xl font-medium text-heading">${data.title}</h1>
            <p class="text-sm text-paragraph font-normal mb-3" style="margin-top: 5px">${data.category}</p>
            <a href="${data.link}" target="_blank" class="flex items-center text-sm text-primary hover:underline w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Check it out on Steam!</span>
            </a>

            <!-- this being here just means its always here for every details that works. I need a way to turn these into interchangable videos. Is the only way to get a video here to link it? I can't just play an mp4?-->
           
            <!-- I need a way to ask if there's a video or not-->
            <!--
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="assets/images/portfolio-details/${data.video}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jay Shippey - Game Programmer Demo Reel"></iframe></div>
            -->

            <div class="vimeo-player" style="padding:56.25% 0 0 0;position:relative; margin-top: 20px"><iframe src="${data.video}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="${data.title}"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            <!--<img src="assets/images/portfolio-details/${data.image}" class="w-full h-64 object-cover rounded-md my-7" alt="" />-->

            <!--<h2 class="text-lg text-heading font-medium mt-7">Background</h2>-->
            <!--<p class="text-sm text-paragraph font-normal text-justify">${data.introduction}</p> -->
            <h2 class="text-lg text-heading font-medium mt-7 mb-2">Responsible For:</h2>
            <!-- this code currently puts a bullet point where a thing would be, we don't want that. maybe we just don't do bullet points at all!? 
            what I would like to do is have the bullet point be a thing and then be able to explain it more 
            setting the h2 vs p didn't seem to change things. but getting rid of the text in the comment below made it not be so small fosifeijfiefjei-->

            <!--
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <li class="text-sm text-paragraph font-normal">${data.goals_list[1]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[2]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[3]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[4]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[5]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[6]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[7]}</li>
              <li class="text-sm text-paragraph font-normal">${data.goals_list[8]}</li>
            </ul>
            -->
            
            
            <!--
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[1]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[2]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[3]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[4]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[5]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[6]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[7]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[8]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[9]}</p>
            <p class="text-sm text-paragraph font-normal text-justify">${data.goals_list[10]}</p>
            -->

            <!-- USE THIS WHEN YOU HAVE MORE INFO FOR ALL THE GAMES -->

            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[1]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[1]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[2]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[2]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[3]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[3]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[4]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[4]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[5]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[5]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[6]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[6]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[7]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[7]}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>${data.goals_list[8]}</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goals_details[8]}</p>
            
            <!--
            <ul class="list-blank text-sm ml-8 text-paragraph my-4">
              <li><h2 class="text-base text-heading font-medium mt-7">${data.goals_list[1]}</h2></li>
              <li><p>${data.goals_list[1]}</p></li>
              <li>${data.goals_list[2]}</li>
              <li>${data.goals_list[3]}</li>
              <li>${data.goals_list[4]}</li>
              <li>${data.goals_list[5]}</li>
              <li>${data.goals_list[6]}</li>
              <li>${data.goals_list[7]}</li>
              <li>${data.goals_list[8]}</li>
              <li>${data.goals_list[9]}</li>
              <li>${data.goals_list[10]}</li>
            </ul>
            -->
            
            `;
      });
    });
    

    // Blog data
    
    // maybe for this area I can just have the picture be an in progres version of it?
    dataBlog.forEach((data, index) => {
      openModalBlog[index].addEventListener("click", () => {
        modalWrapperBlog.innerHTML = `
            <h1 class="text-xl font-medium text-heading">${data.title}</h1>
            <!-- maybe it'd be cool to have a check it out on linkedin thing. I'd get more traffic there-->
            <a href="${data.link}" target="_blank" class="flex items-center text-sm text-primary hover:underline w-fit"  style="margin-top: 10px">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Check out the LinkedIn post!</span>
            </a>



            <div class="vimeo-player" style="padding:56.25% 0 0 0;position:relative; margin-top: 20px"><iframe src="${data.video}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="${data.title}"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px"><u>Goal:</u></p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.goal}</p>
            <p class="text-sm text-paragraph font-normal text-justify" style="margin-top: 20px">${data.info}</p>
            `;
      });
    });
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();