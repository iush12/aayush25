   // Add your JavaScript code here
   const coverImages = document.querySelectorAll('.cover-image');

   function slideCoverImages() {
     coverImages.forEach(image => {
       if (image.classList.contains('left')) {
         image.classList.remove('left');
         image.classList.add('center');
       } else if (image.classList.contains('center')) {
         image.classList.remove('center');
         image.classList.add('right');
       } else {
         image.classList.remove('right');
         image.classList.add('left');
       }
     });
   }


   setInterval(slideCoverImages, 2000); // slide cover images every 2 seconds