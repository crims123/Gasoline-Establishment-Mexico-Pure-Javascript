class UI {
    constructor() {

         // Iniciar el mapa
         this.mapa = this.initializeMap();

    }

    initializeMap() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const linkMap = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + linkMap + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
}