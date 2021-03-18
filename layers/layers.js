ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-180.000000, -59.471938, 180.000000, 83.601752]);
var wms_layers = [];

var format_Fishexportrichness_0 = new ol.format.GeoJSON();
var features_Fishexportrichness_0 = format_Fishexportrichness_0.readFeatures(json_Fishexportrichness_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fishexportrichness_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishexportrichness_0.addFeatures(features_Fishexportrichness_0);
var lyr_Fishexportrichness_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fishexportrichness_0, 
                style: style_Fishexportrichness_0,
                interactive: true,
    title: 'Fish export richness<br />\
    <img src="styles/legend/Fishexportrichness_0_0.png" /> 0 - 0.56<br />\
    <img src="styles/legend/Fishexportrichness_0_1.png" /> 0.56 - 1.11<br />\
    <img src="styles/legend/Fishexportrichness_0_2.png" /> 1.11 - 1.67<br />\
    <img src="styles/legend/Fishexportrichness_0_3.png" /> 1.67 - 2.23<br />\
    <img src="styles/legend/Fishexportrichness_0_4.png" /> 2.23 - 2.78<br />\
    <img src="styles/legend/Fishexportrichness_0_5.png" /> 2.78 - 3.34<br />\
    <img src="styles/legend/Fishexportrichness_0_6.png" /> 3.34 - 3.9<br />\
    <img src="styles/legend/Fishexportrichness_0_7.png" /> 3.9 - 4.45<br />\
    <img src="styles/legend/Fishexportrichness_0_8.png" /> 4.45 - 5.01<br />\
    <img src="styles/legend/Fishexportrichness_0_9.png" /> 5.01 - 5.56<br />\
    <img src="styles/legend/Fishexportrichness_0_10.png" /> 5.56 - 6.12<br />\
    <img src="styles/legend/Fishexportrichness_0_11.png" /> 6.12 - 6.68<br />\
    <img src="styles/legend/Fishexportrichness_0_12.png" /> 6.68 - 7.23<br />\
    <img src="styles/legend/Fishexportrichness_0_13.png" /> 7.23 - 7.79<br />\
    <img src="styles/legend/Fishexportrichness_0_14.png" /> 7.79 - 8.35<br />\
    <img src="styles/legend/Fishexportrichness_0_15.png" /> 8.35 - 8.9<br />\
    <img src="styles/legend/Fishexportrichness_0_16.png" /> 8.9 - 9.46<br />\
    <img src="styles/legend/Fishexportrichness_0_17.png" /> 9.46 - 10.02<br />\
    <img src="styles/legend/Fishexportrichness_0_18.png" /> 10.02 - 10.57<br />\
    <img src="styles/legend/Fishexportrichness_0_19.png" /> 10.57 - 11.13<br />'
        });
var format_Fishbasinrichness_1 = new ol.format.GeoJSON();
var features_Fishbasinrichness_1 = format_Fishbasinrichness_1.readFeatures(json_Fishbasinrichness_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fishbasinrichness_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishbasinrichness_1.addFeatures(features_Fishbasinrichness_1);
var lyr_Fishbasinrichness_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fishbasinrichness_1, 
                style: style_Fishbasinrichness_1,
                interactive: true,
    title: 'Fish basin richness<br />\
    <img src="styles/legend/Fishbasinrichness_1_0.png" /> 0 - 3.2<br />\
    <img src="styles/legend/Fishbasinrichness_1_1.png" /> 3.2 - 6.4<br />\
    <img src="styles/legend/Fishbasinrichness_1_2.png" /> 6.4 - 9.6<br />\
    <img src="styles/legend/Fishbasinrichness_1_3.png" /> 9.6 - 12.8<br />\
    <img src="styles/legend/Fishbasinrichness_1_4.png" /> 12.8 - 16<br />\
    <img src="styles/legend/Fishbasinrichness_1_5.png" /> 16 - 19.2<br />\
    <img src="styles/legend/Fishbasinrichness_1_6.png" /> 19.2 - 22.4<br />\
    <img src="styles/legend/Fishbasinrichness_1_7.png" /> 22.4 - 25.6<br />\
    <img src="styles/legend/Fishbasinrichness_1_8.png" /> 25.6 - 28.8<br />\
    <img src="styles/legend/Fishbasinrichness_1_9.png" /> 28.8 - 32<br />\
    <img src="styles/legend/Fishbasinrichness_1_10.png" /> 32 - 35.2<br />\
    <img src="styles/legend/Fishbasinrichness_1_11.png" /> 35.2 - 38.4<br />\
    <img src="styles/legend/Fishbasinrichness_1_12.png" /> 38.4 - 41.6<br />\
    <img src="styles/legend/Fishbasinrichness_1_13.png" /> 41.6 - 44.8<br />\
    <img src="styles/legend/Fishbasinrichness_1_14.png" /> 44.8 - 48<br />\
    <img src="styles/legend/Fishbasinrichness_1_15.png" /> 48 - 51.2<br />\
    <img src="styles/legend/Fishbasinrichness_1_16.png" /> 51.2 - 54.4<br />\
    <img src="styles/legend/Fishbasinrichness_1_17.png" /> 54.4 - 57.6<br />\
    <img src="styles/legend/Fishbasinrichness_1_18.png" /> 57.6 - 60.8<br />\
    <img src="styles/legend/Fishbasinrichness_1_19.png" /> 60.8 - 64<br />'
        });
var format_Fishexportvolumeattributes_2 = new ol.format.GeoJSON();
var features_Fishexportvolumeattributes_2 = format_Fishexportvolumeattributes_2.readFeatures(json_Fishexportvolumeattributes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fishexportvolumeattributes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishexportvolumeattributes_2.addFeatures(features_Fishexportvolumeattributes_2);
var lyr_Fishexportvolumeattributes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fishexportvolumeattributes_2, 
                style: style_Fishexportvolumeattributes_2,
                interactive: true,
    title: 'Fish export volume - attributes<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_0.png" /> 0 - 159850<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_1.png" /> 159850 - 319699<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_2.png" /> 319699 - 479549<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_3.png" /> 479549 - 639398<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_4.png" /> 639398 - 799248<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_5.png" /> 799248 - 959097<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_6.png" /> 959097 - 1118947<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_7.png" /> 1118947 - 1278797<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_8.png" /> 1278797 - 1438646<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_9.png" /> 1438646 - 1598496<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_10.png" /> 1598496 - 1758345<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_11.png" /> 1758345 - 1918195<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_12.png" /> 1918195 - 2078044<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_13.png" /> 2078044 - 2237894<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_14.png" /> 2237894 - 2397743<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_15.png" /> 2397743 - 2557593<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_16.png" /> 2557593 - 2717442<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_17.png" /> 2717442 - 2877292<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_18.png" /> 2877292 - 3037142<br />\
    <img src="styles/legend/Fishexportvolumeattributes_2_19.png" /> 3037142 - 3196991<br />'
        });

lyr_Fishexportrichness_0.setVisible(true);lyr_Fishbasinrichness_1.setVisible(true);lyr_Fishexportvolumeattributes_2.setVisible(true);
var layersList = [lyr_Fishexportrichness_0,lyr_Fishbasinrichness_1,lyr_Fishexportvolumeattributes_2];
lyr_Fishexportrichness_0.set('fieldAliases', {'ISO': 'ISO', 'Exp. rich.': 'Exp. rich.', });
lyr_Fishbasinrichness_1.set('fieldAliases', {'Basin': 'Basin', 'Country': 'Country', 'Nat. rich.': 'Nat. rich.', });
lyr_Fishexportvolumeattributes_2.set('fieldAliases', {'ISO': 'ISO', 'Exp. vol.': 'Exp. vol.', });
lyr_Fishexportrichness_0.set('fieldImages', {'ISO': 'TextEdit', 'Exp. rich.': 'TextEdit', });
lyr_Fishbasinrichness_1.set('fieldImages', {'Basin': 'TextEdit', 'Country': 'TextEdit', 'Nat. rich.': 'TextEdit', });
lyr_Fishexportvolumeattributes_2.set('fieldImages', {'ISO': 'TextEdit', 'Exp. vol.': 'TextEdit', });
lyr_Fishexportrichness_0.set('fieldLabels', {'ISO': 'inline label', 'Exp. rich.': 'inline label', });
lyr_Fishbasinrichness_1.set('fieldLabels', {'Basin': 'inline label', 'Country': 'inline label', 'Nat. rich.': 'inline label', });
lyr_Fishexportvolumeattributes_2.set('fieldLabels', {'ISO': 'inline label', 'Exp. vol.': 'inline label', });
lyr_Fishexportvolumeattributes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});