var wms_layers = [];

var lyr_OpenStreetMapWMS_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm/service?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap WMS',
                            popuplayertitle: 'OpenStreetMap WMS',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMS_0, 0]);
var format_siatka_analiza_15m_1 = new ol.format.GeoJSON();
var features_siatka_analiza_15m_1 = format_siatka_analiza_15m_1.readFeatures(json_siatka_analiza_15m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_analiza_15m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_analiza_15m_1.addFeatures(features_siatka_analiza_15m_1);
var lyr_siatka_analiza_15m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_analiza_15m_1, 
                style: style_siatka_analiza_15m_1,
                popuplayertitle: 'siatka_analiza_15m',
                interactive: true,
    title: 'siatka_analiza_15m<br />\
    <img src="styles/legend/siatka_analiza_15m_1_0.png" /> Krytycznie niska dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_1_1.png" /> Niska dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_1_2.png" /> Średnia dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_1_3.png" /> Dobra dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_1_4.png" /> Wzorcowe miasto 15-minutowe<br />' });
var format_siatka_analiza_15m_post_inwestycja_2 = new ol.format.GeoJSON();
var features_siatka_analiza_15m_post_inwestycja_2 = format_siatka_analiza_15m_post_inwestycja_2.readFeatures(json_siatka_analiza_15m_post_inwestycja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_analiza_15m_post_inwestycja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_analiza_15m_post_inwestycja_2.addFeatures(features_siatka_analiza_15m_post_inwestycja_2);
var lyr_siatka_analiza_15m_post_inwestycja_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_analiza_15m_post_inwestycja_2, 
                style: style_siatka_analiza_15m_post_inwestycja_2,
                popuplayertitle: 'siatka_analiza_15m_post_inwestycja',
                interactive: true,
    title: 'siatka_analiza_15m_post_inwestycja<br />\
    <img src="styles/legend/siatka_analiza_15m_post_inwestycja_2_0.png" /> Krytycznie niska dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_post_inwestycja_2_1.png" /> Niska dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_post_inwestycja_2_2.png" /> Średnia dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_post_inwestycja_2_3.png" /> Dobra dostępność<br />\
    <img src="styles/legend/siatka_analiza_15m_post_inwestycja_2_4.png" /> Wzorcowe miasto 15-minutowe<br />' });
var format_izochrona_edukacja_3 = new ol.format.GeoJSON();
var features_izochrona_edukacja_3 = format_izochrona_edukacja_3.readFeatures(json_izochrona_edukacja_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_izochrona_edukacja_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_izochrona_edukacja_3.addFeatures(features_izochrona_edukacja_3);
var lyr_izochrona_edukacja_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_izochrona_edukacja_3, 
                style: style_izochrona_edukacja_3,
                popuplayertitle: 'izochrona_edukacja',
                interactive: true,
                title: '<img src="styles/legend/izochrona_edukacja_3.png" /> izochrona_edukacja'
            });
var format_poi_skonsolidowane_4 = new ol.format.GeoJSON();
var features_poi_skonsolidowane_4 = format_poi_skonsolidowane_4.readFeatures(json_poi_skonsolidowane_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_skonsolidowane_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_skonsolidowane_4.addFeatures(features_poi_skonsolidowane_4);
var lyr_poi_skonsolidowane_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_skonsolidowane_4, 
                style: style_poi_skonsolidowane_4,
                popuplayertitle: 'poi_skonsolidowane',
                interactive: true,
    title: 'poi_skonsolidowane<br />\
    <img src="styles/legend/poi_skonsolidowane_4_0.png" /> edukacja<br />\
    <img src="styles/legend/poi_skonsolidowane_4_1.png" /> handel<br />\
    <img src="styles/legend/poi_skonsolidowane_4_2.png" /> transport<br />\
    <img src="styles/legend/poi_skonsolidowane_4_3.png" /> zdrowie<br />\
    <img src="styles/legend/poi_skonsolidowane_4_4.png" /> zielen<br />\
    <img src="styles/legend/poi_skonsolidowane_4_5.png" /> <br />' });
var format_pustynie_uslugowe_kde_5 = new ol.format.GeoJSON();
var features_pustynie_uslugowe_kde_5 = format_pustynie_uslugowe_kde_5.readFeatures(json_pustynie_uslugowe_kde_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pustynie_uslugowe_kde_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pustynie_uslugowe_kde_5.addFeatures(features_pustynie_uslugowe_kde_5);
var lyr_pustynie_uslugowe_kde_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pustynie_uslugowe_kde_5, 
                style: style_pustynie_uslugowe_kde_5,
                popuplayertitle: 'pustynie_uslugowe_kde',
                interactive: true,
                title: '<img src="styles/legend/pustynie_uslugowe_kde_5.png" /> pustynie_uslugowe_kde'
            });
var format_proponowane_nowe_poi_6 = new ol.format.GeoJSON();
var features_proponowane_nowe_poi_6 = format_proponowane_nowe_poi_6.readFeatures(json_proponowane_nowe_poi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowane_nowe_poi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowane_nowe_poi_6.addFeatures(features_proponowane_nowe_poi_6);
var lyr_proponowane_nowe_poi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowane_nowe_poi_6, 
                style: style_proponowane_nowe_poi_6,
                popuplayertitle: 'proponowane_nowe_poi',
                interactive: true,
                title: '<img src="styles/legend/proponowane_nowe_poi_6.png" /> proponowane_nowe_poi'
            });
var format_granice_miasta_7 = new ol.format.GeoJSON();
var features_granice_miasta_7 = format_granice_miasta_7.readFeatures(json_granice_miasta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granice_miasta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granice_miasta_7.addFeatures(features_granice_miasta_7);
var lyr_granice_miasta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granice_miasta_7, 
                style: style_granice_miasta_7,
                popuplayertitle: 'granice_miasta',
                interactive: true,
                title: '<img src="styles/legend/granice_miasta_7.png" /> granice_miasta'
            });

lyr_OpenStreetMapWMS_0.setVisible(true);lyr_siatka_analiza_15m_1.setVisible(true);lyr_siatka_analiza_15m_post_inwestycja_2.setVisible(true);lyr_izochrona_edukacja_3.setVisible(true);lyr_poi_skonsolidowane_4.setVisible(true);lyr_pustynie_uslugowe_kde_5.setVisible(true);lyr_proponowane_nowe_poi_6.setVisible(true);lyr_granice_miasta_7.setVisible(true);
var layersList = [lyr_OpenStreetMapWMS_0,lyr_siatka_analiza_15m_1,lyr_siatka_analiza_15m_post_inwestycja_2,lyr_izochrona_edukacja_3,lyr_poi_skonsolidowane_4,lyr_pustynie_uslugowe_kde_5,lyr_proponowane_nowe_poi_6,lyr_granice_miasta_7];
lyr_siatka_analiza_15m_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'index_15m': 'index_15m', 'name': 'name', 'nazwa': 'nazwa', 'siatka_analiza_15m_post_inwestycja_index_15m': 'siatka_analiza_15m_post_inwestycja_index_15m', });
lyr_siatka_analiza_15m_post_inwestycja_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'index_15m': 'index_15m', 'name': 'name', 'nazwa': 'nazwa', 'siatka_ana': 'siatka_ana', 'index_15m_': 'index_15m_', 'd_index15m': 'd_index15m', });
lyr_izochrona_edukacja_3.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', 'area': 'area', });
lyr_poi_skonsolidowane_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'kategoria': 'kategoria', 'ida': 'ida', 'layer': 'layer', 'path': 'path', });
lyr_pustynie_uslugowe_kde_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_proponowane_nowe_poi_6.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'CLUSTER_ID': 'CLUSTER_ID', });
lyr_granice_miasta_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', });
lyr_siatka_analiza_15m_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'index_15m': 'TextEdit', 'name': 'TextEdit', 'nazwa': 'TextEdit', 'siatka_analiza_15m_post_inwestycja_index_15m': 'TextEdit', });
lyr_siatka_analiza_15m_post_inwestycja_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'index_15m': 'TextEdit', 'name': 'TextEdit', 'nazwa': 'TextEdit', 'siatka_ana': 'TextEdit', 'index_15m_': 'TextEdit', 'd_index15m': 'TextEdit', });
lyr_izochrona_edukacja_3.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', 'area': 'TextEdit', });
lyr_poi_skonsolidowane_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'kategoria': 'TextEdit', 'ida': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_pustynie_uslugowe_kde_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_proponowane_nowe_poi_6.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'CLUSTER_ID': 'TextEdit', });
lyr_granice_miasta_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', });
lyr_siatka_analiza_15m_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'index_15m': 'inline label - always visible', 'name': 'no label', 'nazwa': 'no label', 'siatka_analiza_15m_post_inwestycja_index_15m': 'no label', });
lyr_siatka_analiza_15m_post_inwestycja_2.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'index_15m': 'inline label - always visible', 'name': 'no label', 'nazwa': 'no label', 'siatka_ana': 'no label', 'index_15m_': 'no label', 'd_index15m': 'no label', });
lyr_izochrona_edukacja_3.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', 'area': 'no label', });
lyr_poi_skonsolidowane_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'kategoria': 'no label', 'ida': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_pustynie_uslugowe_kde_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_proponowane_nowe_poi_6.set('fieldLabels', {'MEAN_X': 'no label', 'MEAN_Y': 'no label', 'CLUSTER_ID': 'no label', });
lyr_granice_miasta_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', });
lyr_granice_miasta_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});