var wms_layers = [];

var lyr_BaseMapFotoUdara_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Base Map Foto Udara",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BaseMapFotoUdara_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12294755.948746, -859876.103687, 12296071.599352, -858163.371172]
                            })
                        });
var format_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1 = new ol.format.GeoJSON();
var features_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1 = format_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.readFeatures(json_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.addFeatures(features_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1);
var lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1, 
                style: style_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1,
                interactive: true,
                title: '<img src="styles/legend/RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.png" /> Rute Masjid Ki Ageng Wonolelo dan Rumah Tiban (Roda 4)'
            });
var format_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2 = new ol.format.GeoJSON();
var features_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2 = format_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.readFeatures(json_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.addFeatures(features_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2);
var lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2, 
                style: style_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2,
                interactive: true,
                title: '<img src="styles/legend/RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.png" /> Rute Masjid Ki Ageng Wonolelo dan Rumah Tiban (Roda 2)'
            });
var format_RuteMakamKiAgengWonolelo_3 = new ol.format.GeoJSON();
var features_RuteMakamKiAgengWonolelo_3 = format_RuteMakamKiAgengWonolelo_3.readFeatures(json_RuteMakamKiAgengWonolelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMakamKiAgengWonolelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMakamKiAgengWonolelo_3.addFeatures(features_RuteMakamKiAgengWonolelo_3);
var lyr_RuteMakamKiAgengWonolelo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteMakamKiAgengWonolelo_3, 
                style: style_RuteMakamKiAgengWonolelo_3,
                interactive: true,
                title: '<img src="styles/legend/RuteMakamKiAgengWonolelo_3.png" /> Rute Makam Ki Ageng Wonolelo'
            });
var format_RutePasarSaparan_4 = new ol.format.GeoJSON();
var features_RutePasarSaparan_4 = format_RutePasarSaparan_4.readFeatures(json_RutePasarSaparan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutePasarSaparan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutePasarSaparan_4.addFeatures(features_RutePasarSaparan_4);
var lyr_RutePasarSaparan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RutePasarSaparan_4, 
                style: style_RutePasarSaparan_4,
                interactive: true,
                title: '<img src="styles/legend/RutePasarSaparan_4.png" /> Rute Pasar Saparan'
            });
var format_PasarAdatSaparan_5 = new ol.format.GeoJSON();
var features_PasarAdatSaparan_5 = format_PasarAdatSaparan_5.readFeatures(json_PasarAdatSaparan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasarAdatSaparan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasarAdatSaparan_5.addFeatures(features_PasarAdatSaparan_5);
var lyr_PasarAdatSaparan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PasarAdatSaparan_5, 
                style: style_PasarAdatSaparan_5,
                interactive: true,
                title: '<img src="styles/legend/PasarAdatSaparan_5.png" /> Pasar Adat Saparan'
            });
var format_RumahTiban_6 = new ol.format.GeoJSON();
var features_RumahTiban_6 = format_RumahTiban_6.readFeatures(json_RumahTiban_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahTiban_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahTiban_6.addFeatures(features_RumahTiban_6);
var lyr_RumahTiban_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahTiban_6, 
                style: style_RumahTiban_6,
                interactive: true,
                title: '<img src="styles/legend/RumahTiban_6.png" /> Rumah Tiban'
            });
var format_MasjidKiAgengWonolelo_7 = new ol.format.GeoJSON();
var features_MasjidKiAgengWonolelo_7 = format_MasjidKiAgengWonolelo_7.readFeatures(json_MasjidKiAgengWonolelo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidKiAgengWonolelo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidKiAgengWonolelo_7.addFeatures(features_MasjidKiAgengWonolelo_7);
var lyr_MasjidKiAgengWonolelo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MasjidKiAgengWonolelo_7, 
                style: style_MasjidKiAgengWonolelo_7,
                interactive: true,
                title: '<img src="styles/legend/MasjidKiAgengWonolelo_7.png" /> Masjid Ki Ageng Wonolelo'
            });
var format_MakamKiAgengWonolelo_8 = new ol.format.GeoJSON();
var features_MakamKiAgengWonolelo_8 = format_MakamKiAgengWonolelo_8.readFeatures(json_MakamKiAgengWonolelo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MakamKiAgengWonolelo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MakamKiAgengWonolelo_8.addFeatures(features_MakamKiAgengWonolelo_8);
var lyr_MakamKiAgengWonolelo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MakamKiAgengWonolelo_8, 
                style: style_MakamKiAgengWonolelo_8,
                interactive: true,
                title: '<img src="styles/legend/MakamKiAgengWonolelo_8.png" /> Makam Ki Ageng Wonolelo'
            });

lyr_BaseMapFotoUdara_0.setVisible(true);lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.setVisible(true);lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.setVisible(true);lyr_RuteMakamKiAgengWonolelo_3.setVisible(true);lyr_RutePasarSaparan_4.setVisible(true);lyr_PasarAdatSaparan_5.setVisible(true);lyr_RumahTiban_6.setVisible(true);lyr_MasjidKiAgengWonolelo_7.setVisible(true);lyr_MakamKiAgengWonolelo_8.setVisible(true);
var layersList = [lyr_BaseMapFotoUdara_0,lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1,lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2,lyr_RuteMakamKiAgengWonolelo_3,lyr_RutePasarSaparan_4,lyr_PasarAdatSaparan_5,lyr_RumahTiban_6,lyr_MasjidKiAgengWonolelo_7,lyr_MakamKiAgengWonolelo_8];
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RuteMakamKiAgengWonolelo_3.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RutePasarSaparan_4.set('fieldAliases', {'fid': 'fid', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PasarAdatSaparan_5.set('fieldAliases', {'no': 'no', 'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_RumahTiban_6.set('fieldAliases', {'no': 'no', 'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_MasjidKiAgengWonolelo_7.set('fieldAliases', {'no': 'no', 'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_MakamKiAgengWonolelo_8.set('fieldAliases', {'no': 'no', 'Icon': 'Icon', 'X': 'X', 'Y': 'Y', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RuteMakamKiAgengWonolelo_3.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RutePasarSaparan_4.set('fieldImages', {'fid': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PasarAdatSaparan_5.set('fieldImages', {'no': 'Range', 'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RumahTiban_6.set('fieldImages', {'no': 'Range', 'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_MasjidKiAgengWonolelo_7.set('fieldImages', {'no': 'Range', 'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_MakamKiAgengWonolelo_8.set('fieldImages', {'no': 'Range', 'Icon': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda4_1.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RuteMasjidKiAgengWonolelodanRumahTibanRoda2_2.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RuteMakamKiAgengWonolelo_3.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RutePasarSaparan_4.set('fieldLabels', {'fid': 'no label', 'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PasarAdatSaparan_5.set('fieldLabels', {'no': 'no label', 'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RumahTiban_6.set('fieldLabels', {'no': 'no label', 'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MasjidKiAgengWonolelo_7.set('fieldLabels', {'no': 'no label', 'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MakamKiAgengWonolelo_8.set('fieldLabels', {'no': 'no label', 'Icon': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MakamKiAgengWonolelo_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});