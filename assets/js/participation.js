AOS.init();

//  My Participations cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Group Elocution- English",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Poem Reciting in group",
    time: "(Class 5th - 8th)",
    desp: "<li>FROM CLASS 5TH TO 8TH I PARTICIPATED IN GROUP ELOCUTION</li> ",
  },
  {
    title: "TAKEN PART IN INDIVIDUAL HINDI POEM ELOCUTION",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "IN SCHOOL",
    time: "(SEP, 2018 AND SEP 2019   )",
    desp: "<li>I HAD TAKEN PART IN HINDI POEM ELOCUTION IN CLASS 7TH THE POEM WAS WRITTEN BY ATAL BIHARI BAJPAYEE JI  </li><li>ALSO TAKEN PART IN CLASS 8TH THE POEM WAS WRITTEN BY AMITABH BACHHAN</li>",
  },
  {
    title: "REPUBLIC DAY",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IN SCHOOL",
    time: "(26 JANUARY 2021)",
    desp:"<li>RECITED A HINDI POEM IN REPUBLIC DAY CELEBRATION IN CLASS 9TH</li><li> THE CELEBRATION WAS STREAMED LIVE ON YOUTUBE  </li>",
  },
  {
    title: "HINDI KAVYA SAMMELAN",
    cardImage: "https://scontent.fdel24-1.fna.fbcdn.net/v/t1.6435-9/244202656_1297289824049977_1073081908882215669_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=f22B9JLJ2VMAX8EfuJq&_nc_ht=scontent.fdel24-1.fna&oh=3f482a7319fb0b36c1b57f290ebf40e7&oe=6187EEEE",
    place: "IN SCHOOL",
    time: "(14 SEPTEMBER 2021)",
    desp:"<li>I WAS DRESSED LIKE PANDIT GOPAL PRASAD VYAS(VEER RAS KAVI)</li><li>I RECITED A POEM- KHOONI HASTAKSHAR</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "PICTURE WITH WHOLE GROUP",
    cardImage: "https://raw.githubusercontent.com/ayushsarojportfolio/ayushsarojportfolio.github.io/main/assets/images/experience-page/WhatsApp%20Image%202021-01-26%20at%203.46.55%20PM.jpg",
    description:
      "WHOLE GROUP WORK HARD FOR REPUBLIC DAY CELEBRATION",
  },
  {
    title: "SIR GIVING SPEECH",
    cardImage: "assets/images/experience-page/WhatsApp Image 2021-01-26 at 3.46.58 PM.JPEG",
    description:
      "OUR DIRECTOR SIR HAD GIVEN AWESOME SPEECH",
  },
  {
    title: "MAM GIVING SPEECH",
    cardImage: "assets/images/experience-page/WhatsApp Image 2021-01-26 at 3.46.57 PM.JPEG",
    description:
      "Principle mam had given speech",
  },
  {
    title: "HAVING FUN AFTER CELEBRATION",
    cardImage: "https://github.com/ayushsarojportfolio/ayushsarojportfolio.github.io/blob/main/assets/images/experience-page/WhatsApp%20Image%202021-01-26%20at%201.18.08%20PM.jpeg",
    description:
      "",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "FIRST CERTIFICATE",
    subtitle: "CLASS 5TH",
    image: "assets/images/experience-page/WhatsApp Image 2021-08-20 at 1.53.49 PM (1).JPEG",
    desp: "GOT A CERTIFICATE FROM SCHOOL FOR ENGLISHH GROUP ELOCUTION",
  },
  {
    title: "IN CLASS 6TH",
    subtitle: "FOR ENGLISH GROUP ELOCUTION",
    image: "assets/images/experience-page/WhatsApp Image 2021-08-20 at 1.53.49 PM.JPEG",
    desp: "OUR CLASS RECITED AN ENGLISH POEM AND WE CAME FIRST",
  },
  {
    title: "MY BEST PERFORMANCE EVER",
    subtitle: "IN CLASS 8TH",
    image: "assets/images/experience-page/WhatsApp Image 2021-08-20 at 1.53.50 PM.JPEG",
    desp: "I GOT FIRST PLACE IN CLASS 8TH HINDI ELOCUTION THE COMPETITION WAS VERY TOUGH BUT I WON BY 0.5 POINTS",
  },
  {
    title: "KHOONI HASTAKSHAR",
    subtitle: "IN CLASS 10TH",
    image: "https://scontent.fdel24-1.fna.fbcdn.net/v/t1.6435-9/p843x403/244192149_1297293644049595_1376918424660812619_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SvmdDz11B7gAX9poBxE&_nc_ht=scontent.fdel24-1.fna&oh=fe20d4a87e6ec8e8a6656ea89ad73608&oe=618863CB",
    desp: "I GOT A CERTIFICATE FOR EXCELLENCE",
  }, 
  

];
document.addEventListener('contextmenu', event => event.preventDefault());

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
