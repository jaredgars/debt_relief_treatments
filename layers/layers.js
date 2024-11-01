var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.508000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_boundaries_1 = new ol.format.GeoJSON();
var features_boundaries_1 = format_boundaries_1.readFeatures(json_boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundaries_1.addFeatures(features_boundaries_1);
var lyr_boundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundaries_1, 
                style: style_boundaries_1,
                popuplayertitle: "boundaries",
                interactive: true,
                title: '<img src="styles/legend/boundaries_1.png" /> boundaries'
            });
var format_services_2 = new ol.format.GeoJSON();
var features_services_2 = format_services_2.readFeatures(json_services_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_services_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_services_2.addFeatures(features_services_2);
var lyr_services_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_services_2, 
                style: style_services_2,
                popuplayertitle: "services",
                interactive: true,
    title: 'services<br />\
    <img src="styles/legend/services_2_0.png" /> 0<br />\
    <img src="styles/legend/services_2_1.png" /> 1<br />\
    <img src="styles/legend/services_2_2.png" /> 2<br />\
    <img src="styles/legend/services_2_3.png" /> 3<br />\
    <img src="styles/legend/services_2_4.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_boundaries_1.setVisible(true);lyr_services_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_boundaries_1,lyr_services_2];
lyr_boundaries_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'name_en': 'name_en', 'boundary': 'boundary', 'admin_level': 'admin_level', });
lyr_services_2.set('fieldAliases', {'servic': 'servic', 'latitud': 'latitud', 'longitud': 'longitud', 'treatment': 'treatment', });
lyr_boundaries_1.set('fieldImages', {'osm_id': 'Range', 'name': 'TextEdit', 'name_en': 'TextEdit', 'boundary': 'TextEdit', 'admin_level': 'Range', });
lyr_services_2.set('fieldImages', {'servic': 'Range', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'treatment': 'Range', });
lyr_boundaries_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'name_en': 'no label', 'boundary': 'no label', 'admin_level': 'no label', });
lyr_services_2.set('fieldLabels', {'servic': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'treatment': 'no label', });
lyr_services_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});