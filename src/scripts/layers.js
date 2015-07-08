/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var eventName = "Sandy";

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
                    "url" : "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/Barometric/MapServer",
                    "options": {
                        "id": "baro",
                        "opacity": 0.85,
                        "visible": true,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Meteorological": {
                    "url" : "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/Meteorological/MapServer",
                    "options": {
                        "id": "met",
                        "opacity": 0.85,
                        "visible": true,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Rapid Deploy Gage": {
                    "url" : "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/RapidDeployGage/MapServer",
                    "options": {
                        "id": "rdg",
                        "opacity": 0.85,
                        "visible": true,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Storm Tide": {
                    "url" : "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/StormTide/MapServer",
                    "options": {
                        "id": "stormTide",
                        "opacity": 0.85,
                        "visible": true,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "hasOpacitySlider": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "Wave Height": {
                    "url" : "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/WaveHeight/MapServer",
                    "options": {
                        "id": "waveHeight",
                        "opacity": 0.85,
                        "visible": true,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
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
                "Peaks" : {
                    "url": "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/Peaks/MapServer",
                    "options": {
                        "id": "peaks",
                        "opacity": 0.85,
                        "visible": false,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": false,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "High-water Marks" : {
                    "url": "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/HWMs/MapServer",
                    "options": {
                        "id": "hwms",
                        "opacity": 0.85,
                        "visible": false,
                        "layerDefinitions": "EVENT_NAME = '" + eventName + "'"
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "includeLegend" : true,
                        "identifiable" :true
                    }
                },
                "USGS NWIS Gages" : {
                    "url": "http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN/STN_nwis_rt/MapServer",
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





