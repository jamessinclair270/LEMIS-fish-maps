var size = 0;
var placement = 'point';

var style_Fishexportvolumeattributes_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Exp. vol.");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.100000 && value <= 159849.650000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 159849.650000 && value <= 319699.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 1.0526315789473684 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 319699.200000 && value <= 479548.750000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.1052631578947367 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 479548.750000 && value <= 639398.300000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.1578947368421053 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 639398.300000 && value <= 799247.850000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.2105263157894735 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 799247.850000 && value <= 959097.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.2631578947368425 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 959097.400000 && value <= 1118946.950000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.315789473684211 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1118946.950000 && value <= 1278796.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.368421052631579 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1278796.500000 && value <= 1438646.050000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.421052631578947 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1438646.050000 && value <= 1598495.600000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.473684210526315 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1598495.600000 && value <= 1758345.150000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.526315789473685 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1758345.150000 && value <= 1918194.700000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.578947368421053 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1918194.700000 && value <= 2078044.250000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.631578947368421 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2078044.250000 && value <= 2237893.800000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.68421052631579 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2237893.800000 && value <= 2397743.350000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.736842105263158 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2397743.350000 && value <= 2557592.900000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15.789473684210526 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2557592.900000 && value <= 2717442.450000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.842105263157894 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2717442.450000 && value <= 2877292.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 17.894736842105264 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2877292.000000 && value <= 3037141.550000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.94736842105263 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3037141.550000 && value <= 3196991.100000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 20.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(196,60,57,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
