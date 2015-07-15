function addCommas(e){e+="";for(var t=e.split("."),i=t[0],a=t.length>1?"."+t[1]:"",s=/(\d+)(\d{3})/;s.test(i);)i=i.replace(s,"$1,$2");return i+a}function camelize(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0==t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}var allLayers,eventName="Sandy",eventType="Hurricane",mapServicesRoot="http://stnmapservices.wimcloud.usgs.gov:6080/arcgis/rest/services/STN",stnDomain="stn.wim.usgs.gov";require(["esri/geometry/Extent","esri/layers/WMSLayerInfo","esri/layers/FeatureLayer","dojo/domReady!"],function(e,t,i){allLayers=[{groupHeading:"Sensor Data",showGroupHeading:!0,includeInLayerList:!0,layers:{Barometric:{url:mapServicesRoot+"/Barometric/MapServer/0",options:{id:"baro",opacity:.85,visible:!0,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,includeLegend:!0,identifiable:!0}},Meteorological:{url:mapServicesRoot+"/Meteorological/MapServer/0",options:{id:"met",opacity:.85,visible:!0,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0,identifiable:!0}},"Rapid Deploy Gage":{url:mapServicesRoot+"/RapidDeployGage/MapServer/0",options:{id:"rdg",opacity:.85,visible:!0,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0,identifiable:!0}},"Storm Tide":{url:mapServicesRoot+"/StormTide/MapServer/0",options:{id:"stormTide",opacity:.85,visible:!0,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0,identifiable:!0}},"Wave Height":{url:mapServicesRoot+"/WaveHeight/MapServer/0",options:{id:"waveHeight",opacity:.85,visible:!0,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0,identifiable:!0}}}},{groupHeading:"Observed Data",showGroupHeading:!0,includeInLayerList:!0,layers:{"High-water Marks":{url:mapServicesRoot+"/HWMs/MapServer/0",options:{id:"hwms",opacity:.85,visible:!1,mode:i.MODE_SNAPSHOT,outFields:["*"],definitionExpression:"EVENT_NAME = '"+eventName+"'"},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,includeLegend:!0,identifiable:!0}},"USGS NWIS Gages":{url:mapServicesRoot+"/STN_nwis_rt/MapServer/0",options:{id:"nwis",opacity:1,visible:!1,mode:i.MODE_SNAPSHOT,outFields:["*"]},wimOptions:{type:"layer",layerType:"agisFeature",includeInLayerList:!0,includeLegend:!0,identifiable:!0}},"NWS Doppler Radar":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/RIDGERadar/MapServer",options:{id:"radar",opacity:.99,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,includeLegend:!1,hasOpacitySlider:!0,identifiable:!1}}}}]});var map,allLayers,maxLegendHeight,maxLegendDivHeight,identifyLayers=[];require(["esri/map","esri/dijit/HomeButton","esri/layers/ArcGISTiledMapServiceLayer","esri/dijit/Geocoder","esri/dijit/PopupTemplate","esri/graphic","esri/geometry/Multipoint","esri/symbols/PictureMarkerSymbol","esri/geometry/webMercatorUtils","dojo/dom","dojo/on","dojo/domReady!"],function(e,t,i,a,s,n,o,r,l,p,c){function d(){1===p.byId("chkExtent").checked?L.activeGeocoder.searchExtent=map.extent:L.activeGeocoder.searchExtent=null}function g(){d();var e=L.find();e.then(function(e){m(e)}),$("#geosearchModal").modal("hide")}function u(e){f();var t=e.graphic?e.graphic:e.result.feature;t.setSymbol(w),h(e.result,t.symbol)}function m(e){if(e=e.results,e.length>0){f();for(var t=w,i=0;i<e.length;i++)h(e[i],t);b(e)}}function y(e){var t=e.indexOf(",");return t>0&&(e=e.substring(0,t)),e}function h(e,t){var i,a,o,r,l={};o=e.feature.geometry,l.address=e.name,l.score=e.feature.attributes.Score,i={address:y(l.address),score:l.score,lat:o.getLatitude().toFixed(2),lon:o.getLongitude().toFixed(2)},a=new s({title:"{address}",description:"Latitude: {lat}<br/>Longitude: {lon}"}),r=new n(o,t,i,a),map.graphics.add(r)}function b(e){for(var t=new o(map.spatialReference),i=0;i<e.length;i++)t.addPoint(e[i].feature.geometry);map.setExtent(t.getExtent().expand(2))}function f(){map.infoWindow.hide(),map.graphics.clear()}function v(e,t,i,a,s){return new r({angle:0,xoffset:t,yoffset:i,type:"esriPMS",url:e,contentType:"image/png",width:a,height:s})}map=e("mapDiv",{basemap:"gray",center:[-95.6,38.6],zoom:5});var S=new t({map:map},"homeButton");S.startup(),$(window).resize(function(){$("#legendCollapse").hasClass("in")?(maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("height",maxLegendHeight),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)):$("#legendElement").css("height","initial")}),c(map,"load",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e);var t=l.webMercatorToGeographic(map.extent.getCenter());$("#latitude").html(t.y.toFixed(3)),$("#longitude").html(t.x.toFixed(3))}),c(map,"zoom-end",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e)}),c(map,"mouse-move",function(e){if($("#mapCenterLabel").css("display","none"),null!=e.mapPoint){var t=l.webMercatorToGeographic(e.mapPoint);$("#latitude").html(t.y.toFixed(3)),$("#longitude").html(t.x.toFixed(3))}}),c(map,"pan-end",function(){$("#mapCenterLabel").css("display","inline");var e=l.webMercatorToGeographic(map.extent.getCenter());$("#latitude").html(e.y.toFixed(3)),$("#longitude").html(e.x.toFixed(3))});var T=new i("http://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer",{visible:!1});map.addLayer(T),c(p.byId("btnStreets"),"click",function(){map.setBasemap("streets"),T.setVisibility(!1)}),c(p.byId("btnSatellite"),"click",function(){map.setBasemap("satellite"),T.setVisibility(!1)}),c(p.byId("btnHybrid"),"click",function(){map.setBasemap("hybrid"),T.setVisibility(!1)}),c(p.byId("btnTerrain"),"click",function(){map.setBasemap("terrain"),T.setVisibility(!1)}),c(p.byId("btnGray"),"click",function(){map.setBasemap("gray"),T.setVisibility(!1)}),c(p.byId("btnNatGeo"),"click",function(){map.setBasemap("national-geographic"),T.setVisibility(!1)}),c(p.byId("btnOSM"),"click",function(){map.setBasemap("osm"),T.setVisibility(!1)}),c(p.byId("btnTopo"),"click",function(){map.setBasemap("topo"),T.setVisibility(!1)}),c(p.byId("btnNatlMap"),"click",function(){T.setVisibility(!0)});var L=new a({value:"",maxLocations:25,autoComplete:!0,arcgisGeocoder:!0,autoNavigate:!1,map:map},"geosearch");L.startup(),L.on("select",u),L.on("findResults",m),L.on("clear",f),c(L.inputNode,"keydown",function(e){13==e.keyCode&&d()});var w=v("../images/purple-pin.png",0,12,13,24);map.on("load",function(){map.infoWindow.set("highlight",!1),map.infoWindow.set("titleInBody",!1)}),c(p.byId("btnGeosearch"),"click",g),$(document).ready(function(){function e(){$("#geosearchModal").modal("show")}$(".eventType").html(eventType+"&nbsp;"),$(".eventName").html(eventName),$("#disclaimerModal").modal({backdrop:"static"}),$("#disclaimerModal").modal("show"),$("#geosearchNav").click(function(){e()}),$("#html").niceScroll(),$("#sidebar").niceScroll(),$("#sidebar").scroll(function(){$("#sidebar").getNiceScroll().resize()}),$("#legendDiv").niceScroll(),maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("max-height",maxLegendHeight),$("#legendCollapse").on("shown.bs.collapse",function(){maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)}),$("#legendCollapse").on("hide.bs.collapse",function(){$("#legendElement").css("height","initial")})}),require(["esri/dijit/Legend","esri/tasks/locator","esri/tasks/query","esri/tasks/QueryTask","esri/graphicsUtils","esri/geometry/Point","esri/geometry/Extent","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/FeatureLayer","esri/layers/WMSLayer","esri/layers/WMSLayerInfo","dijit/form/CheckBox","dijit/form/RadioButton","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on"],function(e,t,i,a,s,n,o,r,l,p,c,d,g,u,m,y,h,b,f){function v(e,t,i,a,s,n,o){if(map.addLayer(i),T.push([s,camelize(a),i]),s){if(!$("#"+camelize(s)).length){var r=$('<div id="'+camelize(s+" Root")+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+s+"</button> </div>");r.click(function(e){r.find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$.each(T,function(e,t){var i=map.getLayer(t[2].id);if(t[0]==s)if($("#"+t[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&r.find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",t[1]),map.addLayer(t[2]);var i=map.getLayer(t[2].id);i.setVisibility(!0)}else r.find("i.glyphspan").hasClass("fa-square-o")&&(console.log("removing layer: ",t[1]),map.removeLayer(t[2]))})});var l=$('<div id="'+camelize(s)+'" class="btn-group-vertical" data-toggle="buttons"></div');$("#toggle").append(l)}if(i.visible)var p=$('<div id="'+camelize(a)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(s)+'" autocomplete="off"><i class="glyphspan fa fa-dot-circle-o '+camelize(s)+'"></i>&nbsp;&nbsp;'+a+"</label> </div>");else var p=$('<div id="'+camelize(a)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(s)+'" autocomplete="off"><i class="glyphspan fa fa-circle-o '+camelize(s)+'"></i>&nbsp;&nbsp;'+a+"</label> </div>");$("#"+camelize(s)).append(p),p.click(function(e){if($(this).find("i.glyphspan").hasClass("fa-circle-o")){$(this).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o");var t=$(this)[0].id;$.each(T,function(e,i){if(i[0]==s)if(i[1]==t&&$("#"+camelize(s+" Root")).find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",i[1]),map.addLayer(i[2]);var a=map.getLayer(i[2].id);a.setVisibility(!0)}else i[1]==t&&$("#"+camelize(s+" Root")).find("i.glyphspan").hasClass("fa-square-o")?console.log("groud heading not checked"):(console.log("removing layer: ",i[1]),map.removeLayer(i[2]),$("#"+i[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&$("#"+i[1]).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o"))})}})}else{if(i.visible&&void 0!==o.hasOpacitySlider&&1==o.hasOpacitySlider)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+a+'<span id="opacity'+camelize(a)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(i.visible||void 0===o.hasOpacitySlider||1!=o.hasOpacitySlider)if(i.visible)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+a+"</button></span></div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+a+"</button> </div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+a+'<span id="opacity'+camelize(a)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');p.click(function(e){$(this).find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$(this).find("button").button("toggle"),e.preventDefault(),e.stopPropagation(),$("#"+camelize(a)).toggle(),i.visible?i.setVisibility(!1):i.setVisibility(!0)})}if(t){var c=camelize(e);if(!$("#"+c).length){var d=$('<div id="'+c+'"><div class="alert alert-info" role="alert"><strong>'+e+"</strong></div></div>");$("#toggle").append(d)}s?($("#"+c).append(r),$("#"+c).append(l)):($("#"+c).append(p),$("#opacity"+camelize(a)).length>0&&$("#opacity"+camelize(a)).hover(function(){$(".opacitySlider").remove();var e=map.getLayer(n.id).opacity,t=$('<div class="opacitySlider"><label id="opacityValue">Opacity: '+e+'</label><label class="opacityClose pull-right">X</label><input id="slider" type="range"></div>');$("body").append(t),$("#slider")[0].value=100*e,$(".opacitySlider").css("left",event.clientX-180),$(".opacitySlider").css("top",event.clientY-50),$(".opacitySlider").mouseleave(function(){$(".opacitySlider").remove()}),$(".opacityClose").click(function(){$(".opacitySlider").remove()}),$("#slider").change(function(e){var t=$("#slider")[0].value/100;console.log("o: "+t),$("#opacityValue").html("Opacity: "+t),map.getLayer(n.id).setOpacity(t)})}))}else $("#toggle").append(p)}var S=[],T=[];$.each(allLayers,function(e,t){console.log("processing: ",t.groupHeading),$.each(t.layers,function(e,i){var a="";if(i.wimOptions.exclusiveGroupName&&(a=i.wimOptions.exclusiveGroupName),"agisFeature"===i.wimOptions.layerType){var s=new l(i.url,i.options);i.wimOptions&&1==i.wimOptions.includeLegend&&S.push({layer:s,title:e}),v(t.groupHeading,t.showGroupHeading,s,e,a,i.options,i.wimOptions),f(s,"click",function(e){if(void 0!=e.graphic.attributes.INSTRUMENT_ID){$("#sensorEvent").html(e.graphic.attributes.EVENT_NAME),$("#city").html(e.graphic.attributes.CITY),$("#county").html(e.graphic.attributes.COUNTY),$("#state").html(e.graphic.attributes.STATE),$("#siteName").html(e.graphic.attributes.SITE_NAME),$("#status").html(e.graphic.attributes.STATUS),$("#sensorDataLink").html('<a target="_blank" href="http://'+stnDomain+"/STNWeb/Public/SensorInfoPage?siteId="+e.graphic.attributes.SITE_ID+"&sensorId="+e.graphic.attributes.INSTRUMENT_ID+'">Sensor&nbsp;'+e.graphic.attributes.INSTRUMENT_ID+"</a>");var t=e.currentTarget.id.replace("_layer",""),i=map.getLayer(t).name;$(".sensorTypeTitle").html(i+"&nbsp"+e.graphic.attributes.INSTRUMENT_ID),$("#peaksTable").html("<tr><th>Peak Stage (ft)</th><th>Peak Date & Time</th><th>Datum</th></tr>");var a=e.mapPoint.x+","+e.mapPoint.y,s=map.extent.xmin+","+map.extent.ymin+","+map.extent.xmax+","+map.extent.ymax,n=map.height+","+map.width+",96",o=mapServicesRoot+"/Peaks/MapServer";$.ajax({dataType:"json",type:"GET",url:o+"/identify?f=json&geometry="+a+"&tolerance=3&mapExtent="+s+"&layerDefs=0%3AEVENT_NAME%3D%27"+eventName+"%27&imageDisplay="+n,headers:{Accept:"*/*"},success:function(e){if(e.results.length>0)for(var t=0;t<e.results.length;t++){var i=e.results[t].attributes;$("#peaksTable").append("<tr><td>"+i.PEAK_STAGE+"</td><td>"+i.PEAK_DATE+"</td><td>"+i.DATUM_NAME+"</td></tr>")}else $("#peaksTable").html("No peaks associated with this location")},error:function(e){console.log("Error processing the peaks JSON response. The error is:"+e),$("#peaksTable").html("An error occurred retrieving peaks data. Please try again. ")}}),$("#sensorModal").modal("show"),$("#sensorTab").tab("show")}void 0!=e.graphic.attributes.HWM_ID&&($("#hwmEvent").html(e.graphic.attributes.EVENT_NAME),$("#hwmElev").html(e.graphic.attributes.ELEV_FT),$("#hwmWaterbody").html(e.graphic.attributes.WATERBODY),$("#hwmCounty").html(e.graphic.attributes.COUNTY),$("#hwmState").html(e.graphic.attributes.STATE),$("#hwmID").html(e.graphic.attributes.HWM_ID),$("#hwmSiteName").html(e.graphic.attributes.SITE_NAME),$("#hwmDescription").html(e.graphic.attributes.HWM_LOCATIONDESCRIPTION),$("#hwmType").html(e.graphic.attributes.HWM_TYPE),$("#hwmDataLink").html('<a target="_blank" href="http://'+stnDomain+"/STNWeb/Public/HWMInfoPage?siteId="+e.graphic.attributes.SITE_ID+"&hwmId="+e.graphic.attributes.HWM_ID+'">HWM&nbsp;'+e.graphic.attributes.HWM_ID+"</a>"),$("#hwmModal").modal("show"))})}else if("agisWMS"===i.wimOptions.layerType){var s=new p(i.url,{resourceInfo:i.options.resourceInfo,visibleLayers:i.options.visibleLayers},i.options);i.wimOptions&&1==i.wimOptions.includeLegend&&S.push({layer:s,title:e}),v(t.groupHeading,t.showGroupHeading,s,e,a,i.options,i.wimOptions)}else if("agisDynamic"===i.wimOptions.layerType){var s=new r(i.url,i.options);if(1==i.wimOptions.identifiable&&identifyLayers.push({id:i.options.id,url:i.url}),null!=i.options.layerDefinitions){var n=[];n.push(i.options.layerDefinitions),s.setLayerDefinitions(n)}i.wimOptions&&1==i.wimOptions.includeLegend&&S.push({layer:s,title:e}),i.visibleLayers&&s.setVisibleLayers(i.visibleLayers),v(t.groupHeading,t.showGroupHeading,s,e,a,i.options,i.wimOptions)}})});var L=new e({map:map,layerInfos:S},"legendDiv");L.startup()})});