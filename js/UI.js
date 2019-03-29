class UI {
    constructor() {
        this.api = new Api();
        this.mapa = this.initializeMap();
        this.markers = new L.LayerGroup();
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

    showEstablishment() {
        const dataStablishment = this.api.getDataInformation();
        dataStablishment.then(data => {
            this.showMarkers(data);
        })
    }

    showMarkers(data) {
        this.markers.clearLayers();
        data.forEach(item => {
            const { latitude, longitude, calle, regular, premium } = item;
            const popup = L.popup().setContent(`
                <p><b>Direción:</b> ${calle}</p>
                <p><b>Regular:</b> ${regular}</p>
                <p><b>Premium:</b>${premium}</p>
            `)
            // we create a new marker
            const marker = new L.marker([ parseFloat(latitude), parseFloat(longitude)]).bindPopup(popup)
            // we add the new market to a group of markers
            this.markers.addLayer(marker);
        })
        this.markers.addTo(this.mapa)
    }

    showSearchMarkers(keyword) {
        const dataStablishment = this.api.getDataInformation();
        dataStablishment.then(data => {
            this.filterMarkers(keyword, data);
        })
    }

    filterMarkers(keyword, data) {
        const filterEstablishment = data.filter(item => item.calle.indexOf(keyword) !== -1);
        this.showMarkers(filterEstablishment);
    }
}