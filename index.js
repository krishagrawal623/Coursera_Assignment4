(function(global) {
  var dc = {};

  var categories = ["L", "D", "S", "SP", "A"]; // Example category short names: Lunch, Dinner, Sushi, Specials, Appetizers

  function getRandomCategory() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    var specialsTile = document.querySelector("a[href='#'][onclick*='$dc.loadMenuItems']");
    if (specialsTile) {
      var randomCategoryShortName = getRandomCategory();
      specialsTile.setAttribute("onclick", `$dc.loadMenuItems('${randomCategoryShortName}');`);
    }
  });

  global.$dc = dc;
})(window);
