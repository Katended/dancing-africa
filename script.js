const navlistmobile = document.querySelector('.nav-list-mobile');
const wrap = document.querySelector('#wrap');
const menubarfluid = document.querySelector('.menu-bar-fluid');
const featuresection = document.querySelector('#feature-section');

wrap.addEventListener('click', () => {
  navlistmobile.classList.toggle('nav-list-mobile-change');
  menubarfluid.classList.toggle('menu-bar-fluid-background-change');
  wrap.classList.toggle('change-wrap');
});

const coursesiconmobile1 = document.querySelector('#coursesiconmobile');
const joiniconmobile1 = document.querySelector('#joiniconmobile');
const sponsericonmobile1 = document.querySelector('#sponsericonmobile');
const latesticonmobile1 = document.querySelector('#latesticonmobile');

const menuArray = [coursesiconmobile1, joiniconmobile1, sponsericonmobile1, latesticonmobile1];
for (let i = 0; i < menuArray.length; i++) {
  menuArray[i].addEventListener('click', () => {
    menubarfluid.classList.remove('menu-bar-fluid-background-change');
    navlistmobile.classList.remove('nav-list-mobile-change');
    wrap.classList.remove('change-wrap');
  });
}

const lecturesData = [
  {
    lecturerName: 'Xtre',
    lecturerCertification: 'Nigeria',
    lecturerInfo: 'Benkler has Contributed in Many Open-Source Softwares and is a well known Europe Professor',
    lecturerImage: './images/team1.svg',
  },
  {
    lecturerName: 'Moma',
    lecturerCertification: 'Zambia',
    lecturerInfo: 'Kilnam has Contributed in Many Open-Source Softwares and is a well known Harverd Professor',
    lecturerImage: './images/team2.svg',
  },
  {
    lecturerName: 'Noh',
    lecturerCertification: 'Moroco',
    lecturerInfo: 'SoYeong has Contributed in Many Open-Source Softwares and is a well known Harverd Professor',
    lecturerImage: './images/team2.svg',
  },
  {
    lecturerName: 'Leda',
    lecturerCertification: 'Uganda',
    lecturerInfo: 'Julia has Contributed in Many Open-Source Softwares and is a well known Harverd Professor',
    lecturerImage: './images/team4.svg',
  },
  {
    lecturerName: 'Ndege',
    lecturerCertification: 'South Africa',
    lecturerInfo: 'Lila has Contributed in Many Open-Source Softwares and is a well known Harverd Professor',
    lecturerImage: './images/team5.svg',
  },
  {
    lecturerName: 'Pop3',
    lecturerCertification: 'Kenya',
    lecturerInfo: 'Ryan has Contributed in Many Open-Source Softwares and is a well known Harverd Professor',
    lecturerImage: './images/team6.svg',
  },
];

lecturesData.forEach(() => {
  featuresection.innerHTML = `
    <div class="container feature-program-container ">
    <div class="row">
        <div class="col-12 d-flex justify-content-center feature-main-text">Featured Speakers</div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-1 feature-main-text-line">line</div>
    </div>
    </div>

<div class="container feature-boxes">

              <!-- Box-1 -->
        <div class="container fluid row boxes-group">       
            <div class="row feature-box">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[0].lecturerImage}" alt="lecturer1">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[0].lecturerName}</h1>
                    <h2>${lecturesData[0].lecturerCertification}</h2>
                    <p>${lecturesData[0].lecturerInfo}</p>
                </div>
            </div>
                  <!-- Box-2 -->
            <div class="minimize1 row feature-box ">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[1].lecturerImage}" alt="lecturer2">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[1].lecturerName}</h1>
                    <h2>${lecturesData[1].lecturerCertification}</h2>
                    <p>${lecturesData[1].lecturerInfo}</p>
                </div>
            </div>

        </div>
            <!-- Box-3 to box-6 -->

             

        <div class="container fluid row boxes-group"> 
                  <!-- Box-3 -->
            <div class="row feature-box">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[2].lecturerImage}" alt="lecturer3">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[2].lecturerName}</h1>
                    <h2>${lecturesData[2].lecturerCertification}</h2>
                    <p>${lecturesData[2].lecturerInfo}</p>
                </div>
            </div>
                 <!-- Box-4 -->
            <div class="minimize2 row feature-box">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[3].lecturerImage}" alt="lecturer4">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[3].lecturerName}</h1>
                    <h2>${lecturesData[3].lecturerCertification}</h2>
                    <p>${lecturesData[3].lecturerInfo}</p>
                </div>
            </div>
        </div>

             <!-- Box-5 -->

        <div class="minimize3 container fluid row boxes-group"> 

            <div  class="row feature-box">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[4].lecturerImage}" alt="lecturer5">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[4].lecturerName}</h1>
                    <h2>${lecturesData[4].lecturerCertification}</h2>
                    <p>${lecturesData[4].lecturerInfo}</p>
                </div>
            </div>
                 <!-- Box-6 -->
            <div class="row feature-box">
                <div class="col-4 feature-img-box">
                    <img src="${lecturesData[5].lecturerImage}" alt="lecturer6">
                </div>
                <div class="col-8 info-box">
                    <h1>${lecturesData[5].lecturerName}</h1>
                    <h2>${lecturesData[5].lecturerCertification}</h2>
                    <p>${lecturesData[5].lecturerInfo}</p>
                </div>
            </div>
        </div>
        <div id="featurebtn" class="row feature-btn-container">
            <button class="feature-btn">More <i class="fa fa-angle-down"></i></button>
        </div>
        <div class="featurebtn1 row feature-btn-container">
            <button class="feature-btn">Less <i class="fa fa-angle-up"></i></button>
        </div>
</div>`;
});

const featurebtn = document.querySelector('#featurebtn');
const featurebtn1 = document.querySelector('.featurebtn1');
const minimize1 = document.querySelector('.minimize1');
const minimize2 = document.querySelector('.minimize2');
const minimize3 = document.querySelector('.minimize3');
featurebtn.addEventListener('click', () => {
  minimize1.classList.toggle('minimize-box');
  minimize2.classList.toggle('minimize-box');
  minimize3.classList.toggle('minimize-box');
  featurebtn.classList.toggle('changefeaturebtn');
  featurebtn1.classList.toggle('changefeaturebtn1');
});

featurebtn1.addEventListener('click', () => {
  featurebtn1.classList.remove('changefeaturebtn1');
  featurebtn.classList.remove('changefeaturebtn');
  minimize1.classList.remove('minimize-box');
  minimize2.classList.remove('minimize-box');
  minimize3.classList.remove('minimize-box');
});
