document.addEventListener('DOMContentLoaded', function() {
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
      var header = item.querySelector('.accordion-header');
      var content = item.querySelector('.accordion-content');

      header.addEventListener('click', function() {
          accordionItems.forEach(function(otherItem) {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.display = 'none';
              }
          });
          
          item.classList.toggle('active');
          if (item.classList.contains('active')) {
              content.style.display = 'block';
          } else {
              content.style.display = 'none';
          }
      });
  });
});
