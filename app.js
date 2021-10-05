 $(document).ready(function(){

   //var btn = $("#myBtn");
   var video = $(".actual").get(0);

   $('#myBtn').click(function() {

     if ($('.actual').paused) {
        video.play();

     }else {
       video.pause();

     };

   });



    var swiper = new Swiper(".mySwiper", {
         slidesPerView: 3,
         spaceBetween: 20,
         slidesPerGroup: 3,
         loop: true,
         loopFillGroupWithBlank: true,
         pagination: {
           el: ".swiper-pagination",
           clickable: true,
         },
         navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
       });






       var swiper1 = new Swiper(".mySwiper1", {
            slidesPerView: 3,
            spaceBetween: 2,
            slidesPerGroup: 3,

            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });



          var swiper = new Swiper(".mySwiper2", {
               slidesPerView: 3,
               spaceBetween: 50,
               slidesPerGroup: 3,
               loop: true,
               loopFillGroupWithBlank: true,
               pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
               },
               navigation: {
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
               },
             });

              var photo = $(".swiper-slide > img").get();
              var elmt = $(".swiper-slide");
            $(photo).mouseenter(function() {

              $(this).animate({"width": "380px",
              "height": "350px"});

            });

            $(photo).mouseleave(function() {
              $(this).animate({"width": "270px",
              "height": "240px"});
            });


 });
