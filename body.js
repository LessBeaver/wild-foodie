$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

document.getElementById('change-theme').addEventListener('click', function () { 
  document.body.classList.toggle('dark-theme');
}); 