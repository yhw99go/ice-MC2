!function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,r){(function(){var e=!1,i=function(e){return e instanceof i?e:this instanceof i?void(this.EXIFwrapped=e):new i(e)};void 0!==r?(void 0!==t&&t.exports&&(r=t.exports=i),r.EXIF=i):this.EXIF=i;var o=i.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},a=i.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},s=i.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},l=i.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},u=i.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function c(e){return!!e.exifdata}function d(t,n){function r(r){var o=f(r);t.exifdata=o||{};var a=function(t){var n=new DataView(t);e&&console.log("Got file of length "+t.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return e&&console.log("Not a valid JPEG"),!1;var r=2,i=t.byteLength;for(;r<i;){if(u=r,56===(l=n).getUint8(u)&&66===l.getUint8(u+1)&&73===l.getUint8(u+2)&&77===l.getUint8(u+3)&&4===l.getUint8(u+4)&&4===l.getUint8(u+5)){var o=n.getUint8(r+7);o%2!=0&&(o+=1),0===o&&(o=4);var a=r+8+o,s=n.getUint16(r+6+o);return h(t,a,s)}r++}var l,u}(r);if(t.iptcdata=a||{},i.isXmpEnabled){var s=function(t){if(!("DOMParser"in self))return;var n=new DataView(t);e&&console.log("Got file of length "+t.byteLength);if(255!=n.getUint8(0)||216!=n.getUint8(1))return e&&console.log("Not a valid JPEG"),!1;var r=2,i=t.byteLength,o=new DOMParser;for(;r<i-4;){if("http"==S(n,r,4)){var a=r-1,s=n.getUint16(r-2)-1,l=S(n,a,s),u=l.indexOf("xmpmeta>")+8,c=(l=l.substring(l.indexOf("<x:xmpmeta"),u)).indexOf("x:xmpmeta")+10;l=l.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+l.slice(c);var d=o.parseFromString(l,"text/xml");return v(d)}r++}}(r);t.xmpdata=s||{}}n&&n.call(t)}var o,a,s;if(t.src)if(/^data\:/i.test(t.src))r(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;a<r;a++)o[a]=n.charCodeAt(a);return i}(t.src));else if(/^blob\:/i.test(t.src)){(u=new FileReader).onload=function(e){r(e.target.result)},o=t.src,a=function(e){u.readAsArrayBuffer(e)},(s=new XMLHttpRequest).open("GET",o,!0),s.responseType="blob",s.onload=function(e){200!=this.status&&0!==this.status||a(this.response)},s.send()}else{var l=new XMLHttpRequest;l.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";r(l.response),l=null},l.open("GET",t.src,!0),l.responseType="arraybuffer",l.send(null)}else if(self.FileReader&&(t instanceof self.Blob||t instanceof self.File)){var u;(u=new FileReader).onload=function(t){e&&console.log("Got file of length "+t.target.result.byteLength),r(t.target.result)},u.readAsArrayBuffer(t)}}function f(t){var n=new DataView(t);if(e&&console.log("Got file of length "+t.byteLength),255!=n.getUint8(0)||216!=n.getUint8(1))return e&&console.log("Not a valid JPEG"),!1;for(var r,i=2,o=t.byteLength;i<o;){if(255!=n.getUint8(i))return e&&console.log("Not a valid marker at offset "+i+", found: "+n.getUint8(i)),!1;if(r=n.getUint8(i+1),e&&console.log(r),225==r)return e&&console.log("Found 0xFFE1 marker"),P(n,i+4,n.getUint16(i+2));i+=2+n.getUint16(i+2)}}var g={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function h(e,t,n){for(var r,i,o,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in g&&((o=s.getInt16(u+3))+5,i=g[a],r=S(s,u+5,o),l.hasOwnProperty(i)?l[i]instanceof Array?l[i].push(r):l[i]=[l[i],r]:l[i]=r),u++;return l}function m(t,n,r,i,o){var a,s,l,u=t.getUint16(r,!o),c={};for(l=0;l<u;l++)a=r+12*l+2,!(s=i[t.getUint16(a,!o)])&&e&&console.log("Unknown tag: "+t.getUint16(a,!o)),c[s]=p(t,a,n,r,o);return c}function p(e,t,n,r,i){var o,a,s,l,u,c,d=e.getUint16(t+2,!i),f=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!i);for(o=f>4?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(o+l);return a;case 2:return S(e,o=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!i);for(o=f>2?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(o+2*l,!i);return a;case 4:if(1==f)return e.getUint32(t+8,!i);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!i);return a;case 5:if(1==f)return u=e.getUint32(g,!i),c=e.getUint32(g+4,!i),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!i),c=e.getUint32(g+4+8*l,!i),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!i);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!i);return a;case 10:if(1==f)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!i)/e.getInt32(g+4+8*l,!i);return a}}function S(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function P(t,n){if("Exif"!=S(t,n,4))return e&&console.log("Not valid EXIF data! "+S(t,n,4)),!1;var r,i,c,d,f,g=n+6;if(18761==t.getUint16(g))r=!1;else{if(19789!=t.getUint16(g))return e&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;r=!0}if(42!=t.getUint16(g+2,!r))return e&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var h=t.getUint32(g+4,!r);if(h<8)return e&&console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(g+4,!r)),!1;if((i=m(t,g,g+h,a,r)).ExifIFDPointer){d=m(t,g,g+i.ExifIFDPointer,o,r);for(c in d){switch(c){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[c]=u[c][d[c]];break;case"ExifVersion":case"FlashpixVersion":d[c]=String.fromCharCode(d[c][0],d[c][1],d[c][2],d[c][3]);break;case"ComponentsConfiguration":d[c]=u.Components[d[c][0]]+u.Components[d[c][1]]+u.Components[d[c][2]]+u.Components[d[c][3]]}i[c]=d[c]}}if(i.GPSInfoIFDPointer){f=m(t,g,g+i.GPSInfoIFDPointer,s,r);for(c in f){switch(c){case"GPSVersionID":f[c]=f[c][0]+"."+f[c][1]+"."+f[c][2]+"."+f[c][3]}i[c]=f[c]}}return i.thumbnail=function(e,t,n,r){var i,o,a,s,u=(o=t+n,a=r,s=(i=e).getUint16(o,!a),i.getUint32(o+2+12*s,!a));if(!u)return{};if(u>e.byteLength)return{};var c=m(e,t,t+u,l,r);if(c.Compression)switch(c.Compression){case 6:if(c.JpegIFOffset&&c.JpegIFByteCount){var d=t+c.JpegIFOffset,f=c.JpegIFByteCount;c.blob=new Blob([new Uint8Array(e.buffer,d,f)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",c.Compression)}else 2==c.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return c}(t,g,h,r),i}function F(e){var t={};if(1==e.nodeType){if(e.attributes.length>0){t["@attributes"]={};for(var n=0;n<e.attributes.length;n++){var r=e.attributes.item(n);t["@attributes"][r.nodeName]=r.nodeValue}}}else if(3==e.nodeType)return e.nodeValue;if(e.hasChildNodes())for(var i=0;i<e.childNodes.length;i++){var o=e.childNodes.item(i),a=o.nodeName;if(null==t[a])t[a]=F(o);else{if(null==t[a].push){var s=t[a];t[a]=[],t[a].push(s)}t[a].push(F(o))}}return t}function v(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),i=r.attributes;for(var o in i){var a=i[o],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var u=r.nodeName;if(void 0===t[u])t[u]=F(r);else{if(void 0===t[u].push){var c=t[u];t[u]=[],t[u].push(c)}t[u].push(F(r))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}i.enableXmp=function(){i.isXmpEnabled=!0},i.disableXmp=function(){i.isXmpEnabled=!1},i.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(c(e)?t&&t.call(e):d(e,t),!0)},i.getTag=function(e,t){if(c(e))return e.exifdata[t]},i.getIptcTag=function(e,t){if(c(e))return e.iptcdata[t]},i.getAllTags=function(e){if(!c(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.getAllIptcTags=function(e){if(!c(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.pretty=function(e){if(!c(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},i.readFromBinaryFile=function(e){return f(e)},"function"==typeof define&&define.amd&&define("exif-js",[],function(){return i})}).call(this)},{}],2:[function(e,t,n){"use strict";var r=e("exif-js");function i(e,t,n){if(null!=e){var r=e.height,i=e.width,o=2;null==o&&(o=0),"right"==t?++o>3&&(o=0):--o<0&&(o=3);var a=90*o*Math.PI/180,s=n.getContext("2d");switch(o){case 0:n.width=i,n.height=r,s.drawImage(e,0,0);break;case 1:n.width=r,n.height=i,s.rotate(a),s.drawImage(e,0,-r);break;case 2:n.width=i,n.height=r,s.rotate(a),s.drawImage(e,-i,-r);break;case 3:n.width=r,n.height=i,s.rotate(a),s.drawImage(e,-i,0)}}}t.exports={iOSOrientationAutoFix:function(e,t){var n,o,a;n=e,o=function(n){var r=new FileReader;r.readAsDataURL(e),r.addEventListener("load",function(){var e=r.result,o=new Image;o.src=e,o.onload=function(){var r=document.createElement("canvas"),a=r.getContext("2d");if(r.width=o.width,r.height=o.height,a.drawImage(o,0,0,o.width,o.height),navigator.userAgent.match(/iphone/i)){if(""!=n&&1!=n)switch(n){case 6:i(o,"left",r);break;case 8:i(o,"right",r);break;case 3:i(o,"left",r),i(o,"left",r)}t(r.toDataURL())}else t(e)}})},a=null,r.getData(n,function(){r.getAllTags(this),a=r.getTag(this,"Orientation"),o(a)})}},window.ImageUtility=t.exports},{"exif-js":1}]},{},[2]);