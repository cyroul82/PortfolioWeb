$(document).ready(function() {
  var header = $('header');
  var range = 200;

  $(window).on('scroll', function () {

      var scrollTop = $(this).scrollTop();
      console.log("scroll : " + scrollTop);
      var offset = header.offset().top;
      console.log("offset : " + offset);
      var height = header.outerHeight();
      console.log("height : " + height);
      offset = offset + height / 2;
      var calc = 2.2 - (scrollTop - offset + range) / range;
      console.log("calc : " + calc);
      header.css({ 'opacity': calc });

      if ( calc > '1' ) {
        header.css({ 'opacity': 1 });
      } else if ( calc < '0' ) {
        header.css({ 'opacity': 0 });
      }

  });
});



// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var finalArr = [];
//   if(size > 0){
//     r = arr.slice(1,size);
//     r1 = arr
//     for(var i=0 ; i<arr.length ; i++){
//       var inArr = [];
//       while(size !=== 0){
//         size++;
//
//       }
//     }
//   }
//   return finalArr;
// }
//
// log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
