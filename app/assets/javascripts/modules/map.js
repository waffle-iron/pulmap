// modify map viewer behaviors

GeoBlacklight.Viewer.Map = GeoBlacklight.Viewer.Map.extend({

  // override initial bbox
  options: {
    bbox: [[-28, -177], [73, 175]]
  },

  // options for leaflet map
  mapOptions: {
    scrollWheelZoom: false,
  },

  // override load function to add map options
  load: function() {
    if (this.data.mapBbox) {
      this.options.bbox = L.bboxToBounds(this.data.mapBbox);
    }
    this.map = L.map(this.element, this.mapOptions ).fitBounds(this.options.bbox);
    this.map.addLayer(this.selectBasemap());
    this.map.addLayer(this.overlay);
    if (this.data.map !== 'index') {
      this.addBoundsOverlay(this.options.bbox);
    }
  },
});
