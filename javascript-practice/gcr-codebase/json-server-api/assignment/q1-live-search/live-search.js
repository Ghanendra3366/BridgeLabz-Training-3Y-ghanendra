// Run: npx json-server db.json --port 3101
$(function () {
  const apiUrl = "http://localhost:3101/products";

  $("#searchInput").on("input", function () {
    const query = $(this).val().trim();
    $("#loading").prop("hidden", false);
    $("#searchResults").empty();

    $.get(apiUrl, { q: query })
      .done(function (products) {
        if (!products.length) {
          $("#searchResults").html('<p class="empty">No products found</p>');
          return;
        }
        $.each(products, function (_, product) {
          $("#searchResults").append(`<article class="product"><img src="${product.image}" alt="${product.name}"><h2>${product.name}</h2><p>Rs. ${product.price}</p></article>`);
        });
      })
      .fail(function () {
        $("#searchResults").html('<p class="empty">Could not load products.</p>');
      })
      .always(function () { $("#loading").prop("hidden", true); });
  });
});
