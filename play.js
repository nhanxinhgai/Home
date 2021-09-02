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

//     //đn 1 thuộc tính
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

//         // Xử lí khi click play
//         playBtn.onclick = function (e) {
//             e.preventDefault();
//             if(_this.isPlaying){
//                 audio.pause(
//                 )
//             }
//             else{
//                 audio.play()
//             }
//             //khi song được play 
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
//         //khi tiến độ bài hát thay đổi
//         audio.ontimeupdate = function () {
//             console.log(audio.currentTime)
//         }
        
//     },
//     loadCurrentSong: function() {
       
//         headingTitle.textContent = this.currentSong.name
//         audio.src = this.currentSong.path
        
//     },
//     start : function (){
//         //định nghĩa các thuộc tính cho object
//         this.defineProperties();

//         //hàm sử li các sự kiện
        
//         //tải thông tin bài hát đầu tiên khi chạy ứng dụng
//         this.loadCurrentSong();

//         this.handelEvents();
//         //render danh sách bài hát
//         this.render();
//     }


// }
// app.start();