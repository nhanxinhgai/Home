// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const headingTitle = $('.codeless-player-content-title')
// const audio = $('#audio')

// const playBtn = $('.music-toggle-play')
// console.log(playBtn)

// const app ={
//     currentIndex : 0,
//     isPlaying : false,
//     songs : [
//         {
//             name : 'When Chocolate was Medicine: Colmenero, Wadsworth, and Dufour',
//             path :'./assest/music/Havana.mp3',
//             date :' March 19, 2021  Episode 10',
//             image :'./assest/image/singer1.jpg'
//         },
//         {
//             name : 'Finding Moments Of Joy In A Challenging Year',
//             path :'./assest/music/Monster.mp3',
//             date :'March 19, 2021  Episode 10',
//             image :'./assest/image/singer5.jpg'
//         },
//         {
//             name : 'Greenland Unicorns and the Magical Alicorn',
//             path :'./assest/music/Reality.mp3',
//             date :'March 19, 2021  Episode 8',
//             image :'./assest/image/singer1.jpg'
//         },
//         {
//             name : 'Easy Strategies to Help You Succeed in',
//             path :'./assest/music/SendIt.mp3',
//             date :'March 19, 2021  Episode 10',
//             image :'./assest/image/singer3.jpg'
//         }   
//     ],
//     render : function () {
//         const htmls = this.songs.map((song) => {
//             return `
//                 <li class="carousel-item-active"  data-aos-once="true"  data-aos="fade-up"  data-aos-delay="50" data-aos-offset="200">
//                     <a href="">
//                         <img class="d-block " src="${song.image}" alt="First slide" >
//                         <div class="entry-meta-date">
//                             <span class="
//                             ">${song.date}</span>
//                         </div>
//                         <div class="entry-play">
//                             <a href="" class="entry-play-headphones">
//                                 <i class="fas fa-headphones-alt"></i>
//                                 Fashion
//                             </a>
//                             <div class="entry-play-togger">
//                                 <a href="" class="music-toggle-play_active">
//                                     <span>
//                                         <i class="fas fa-play icon-pause"></i>
//                                     </span>
                                    
//                                 </a>
//                                 <h3 class="entry-title">${song.name}</h3>
//                             </div>
//                         </div>
//                     </a>
//                 </li>
//             `
//         })
//         $('.carousel-inner-active').innerHTML = htmls.join('')
//     },

//     //??n 1 thu???c t??nh
//     defineProperties: function(){
//         Object.defineProperty(this,'currentSong',{
//             get:function(){
//                 return this.songs[this.currentIndex]
//             }
//         })
//     },

//     handelEvents :function (){
//         //play, pause cho video
//         const _this = this

//         // X??? l?? khi click play
//         playBtn.onclick = function (e) {
//             e.preventDefault();
//             if(_this.isPlaying){
//                 audio.pause(
//                 )
//             }
//             else{
//                 audio.play()
//             }
//             //khi song ???????c play 
//         }
//         //khi song play
//         audio.onplay = function (){
//             _this.isPlaying = true
//             playBtn.classList.add('playing')
//         }
//         //khi song pause 
//         audio.onpause = function (){
//             _this.isPlaying = false
//             playBtn.classList.remove('playing')
//         }
//         //khi ti???n ????? b??i h??t thay ?????i
//         audio.ontimeupdate = function () {
//             console.log(audio.currentTime)
//         }
        
//     },
//     loadCurrentSong: function() {
       
//         headingTitle.textContent = this.currentSong.name
//         audio.src = this.currentSong.path
        
//     },
//     start : function (){
//         //?????nh ngh??a c??c thu???c t??nh cho object
//         this.defineProperties();

//         //h??m s??? li c??c s??? ki???n
        
//         //t???i th??ng tin b??i h??t ?????u ti??n khi ch???y ???ng d???ng
//         this.loadCurrentSong();

//         this.handelEvents();
//         //render danh s??ch b??i h??t
//         this.render();
//     }


// }
// app.start();