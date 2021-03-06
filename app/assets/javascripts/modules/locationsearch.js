$(document).ready(function() {
  $('[data-map="home"]').each(function(i, element) {
    // map search off by default
    var searchState = false;

    function updateBboxField() {
      var bounds = L.boundsToBbox(GeoBlacklight.Home.map.getBounds());
      $("input[name='bbox']").val(bounds.join(' '));
    }

    function addBboxField() {
      var searchForm = $('.home-search');
      var bboxInput = '<input name="bbox" type="hidden" value="">';
      $(bboxInput).appendTo(searchForm);
      updateBboxField();
    }

    function removeBboxField() {
      $("input[name='bbox']").remove();
    }

    function resetPlaceInput() {
      $("input[type='place']").val('');
    }

    function toggleMapSearch() {
      searchState = !searchState;
      if (searchState) {
        addBboxField();
      } else {
        removeBboxField();
      }
    }

    $('.btn-toggle').click(function() {
      toggleMapSearch();
      $(this).find('.btn').toggleClass('active');
      $(this).find('.btn').toggleClass('btn-primary');
      $(this).find('.btn').toggleClass('btn-default');
      $('.leaflet-container').toggleClass('active');
    });

    // update bbox field on map move
    GeoBlacklight.Home.map.on('moveend', function(e) {
      if (searchState) {
        updateBboxField();
        resetPlaceInput();
      }
    });

    $('#place').geocomplete({ types: ['(regions)']})
      .bind('geocode:result', function(event, result) {
        var viewport = result.geometry.viewport;
        var SW = viewport.getSouthWest();
        var NE = viewport.getNorthEast();

        GeoBlacklight.Home.map.fitBounds([
          [SW.lat(), SW.lng()],
          [NE.lat(), NE.lng()]
        ]);
      });
  });
});
