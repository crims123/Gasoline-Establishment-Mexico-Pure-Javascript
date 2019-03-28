class UI {
    constructor() {
         this.api = new Api();
         this.mapa = this.initializeMap();
    }

    initializeMap() {
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const linkMap = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + linkMap + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;
    }

    showeStablishment() {
        const dataStablishment = this.api.getDataInformation();
        dataStablishment.then( (response) => {
            console.log(response)
        })
    }
}