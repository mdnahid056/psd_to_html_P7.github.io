$(document).ready(function(){
    $(".navbar-toggler, .overlay").on("click", function(){
        $(".sideBar, .overlay").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("sideBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
} 


$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });


  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });