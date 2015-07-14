/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var eventName = "Sandy";
var mapServicesRoot = "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN";
var stnDomain = "stn.wim.usgs.gov";

require([
    "esri/geometry/Extent",
    "esri/layers/WMSLayerInfo",
    "esri/layers/FeatureLayer",
    'dojo/domReady!'
], function(
    Extent,
    WMSLayerInfo,
    FeatureLayer
) {

    allLayers = [
        {
            "groupHeading": "Sensor Data",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "Barometric": {
                    "url" : mapServicesRoot + "/Barometric/MapServer/0",
                    "options": {
                        "id": "baro",
                        "opacity": 0.85,
                        "visible": true,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Meteorological": {
                    "url" : mapServicesRoot + "/Meteorological/MapServer/0",
                    "options": {
                        "id": "met",
                        "opacity": 0.85,
                        "visible": true,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Rapid Deploy Gage": {
                    "url" : mapServicesRoot + "/RapidDeployGage/MapServer/0",
                    "options": {
                        "id": "rdg",
                        "opacity": 0.85,
                        "visible": true,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Storm Tide": {
                    "url" : mapServicesRoot + "/StormTide/MapServer/0",
                    "options": {
                        "id": "stormTide",
                        "opacity": 0.85,
                        "visible": true,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Wave Height": {
                    "url" : mapServicesRoot + "/WaveHeight/MapServer/0",
                    "options": {
                        "id": "waveHeight",
                        "opacity": 0.85,
                        "visible": true,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                }
            }
        },
        {
            "groupHeading": "Observed Data",
            "showGroupHeading": true,
            "includeInLayerList": true,
            "layers": {
                "High-water Marks" : {
                    "url": mapServicesRoot + "/HWMs/MapServer/0",
                    "options": {
                        "id": "hwms",
                        "opacity": 0.85,
                        "visible": false,
                        "mode": FeatureLayer.MODE_SNAPSHOT,
                        "outFields": ["*"],
                        "definitionExpression": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisFeature",
                        "includeInLayerList": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "USGS NWIS Gages" : {
                    "url": mapServicesRoot + "/STN_nwis_rt/MapServer",
                    "options": {
                        "id": "nwis",
                        "opacity": 0.90,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "includeLegend": true,
                        "identifiable" :true
                    }
                },
                "NWS Doppler Radar" : {
                    "url": "http://gis.srh.noaa.gov/arcgis/rest/services/RIDGERadar/MapServer",
                    "options": {
                        "id": "radar",
                        "opacity":0.99,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "includeLegend": false,
                        "hasOpacitySlider": true,
                        "identifiable" :false
                    }
                }
            }
        }
    ]

});





