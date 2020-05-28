/*!
 * PSPDFKit for Web 2020.2.4 (https://pspdfkit.com/web)
 * 
 * Copyright (c) 2016-2019 PSPDFKit GmbH. All rights reserved.
 * 
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 * 
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[63],{716:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(717);void 0===Intl.PluralRules&&Object.defineProperty(Intl,"PluralRules",{value:a.PluralRules,writable:!0,enumerable:!1,configurable:!0})},717:function(e,n,t){"use strict";var a=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var a=Array(e),r=0;for(n=0;n<t;n++)for(var i=arguments[n],o=0,l=i.length;o<l;o++,r++)a[r]=i[o];return a};Object.defineProperty(n,"__esModule",{value:!0});var r=t(718);function i(e,n){if(!(e instanceof s))throw new TypeError("Method Intl.PluralRules.prototype."+n+" called on incompatible receiver "+String(e))}function o(e,n,t,a){if(void 0!==e){if(e=Number(e),isNaN(e)||e<n||e>t)throw new RangeError(e+" is outside of range ["+n+", "+t+"]");return Math.floor(e)}return a}function l(e,n,t,a,i){var l,s,u,c=(l=1,s=21,u=1,o(t["minimumIntegerDigits"],l,s,u)),g=t.minimumFractionDigits,m=t.maximumFractionDigits,h=t.minimumSignificantDigits,f=t.maximumSignificantDigits;if(r.setInternalSlot(e,n,"minimumIntegerDigits",c),r.setInternalSlot(e,n,"minimumFractionDigits",g),r.setInternalSlot(e,n,"maximumFractionDigits",m),void 0!==h||void 0!==f)r.setInternalSlot(e,n,"roundingType","significantDigits"),h=o(h,1,21,1),f=o(f,h,21,21),r.setInternalSlot(e,n,"minimumSignificantDigits",h),r.setInternalSlot(e,n,"maximumSignificantDigits",f);else if(void 0!==g||void 0!==m){r.setInternalSlot(e,n,"roundingType","fractionDigits"),g=o(g,0,20,a),m=o(m,g,20,Math.max(g,i)),r.setInternalSlot(e,n,"minimumFractionDigits",g),r.setInternalSlot(e,n,"maximumFractionDigits",m)}else"compact"===r.getInternalSlot(e,n,"notation")?r.setInternalSlot(e,n,"roundingType","compactRounding"):(r.setInternalSlot(e,n,"roundingType","fractionDigits"),r.setInternalSlot(e,n,"minimumFractionDigits",a),r.setInternalSlot(e,n,"maximumFractionDigits",i))}var s=function(){function e(n,t){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.PluralRules must be called with 'new'");var a=r.getCanonicalLocales(n),i=Object.create(null),o=void 0===t?Object.create(null):r.toObject(t);r.setInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"initializedPluralRules",!0);var s=r.getOption(o,"localeMatcher","string",["best fit","lookup"],"best fit");i.localeMatcher=s,r.setInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"type",r.getOption(o,"type","string",["cardinal","ordinal"],"cardinal")),l(e.__INTERNAL_SLOT_MAP__,this,o,0,3);var u=r.createResolveLocale(e.getDefaultLocale)(e.availableLocales,a,i,e.relevantExtensionKeys,e.localeData);r.setInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"locale",u.locale)}return e.prototype.resolvedOptions=function(){var n=this;i(this,"resolvedOptions");var t=Object.create(Object.prototype);return t.locale=r.getInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"locale"),t.type=r.getInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"type"),["minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"].forEach(function(a){var i=r.getInternalSlot(e.__INTERNAL_SLOT_MAP__,n,a);void 0!==i&&(t[a]=i)}),t.pluralCategories=a(e.localeData[t.locale].categories[t.type]),t},e.prototype.select=function(n){i(this,"select");var t,a,o,l,s,u=r.getInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"locale"),c=r.getInternalSlot(e.__INTERNAL_SLOT_MAP__,this,"type");return e.localeData[u].fn((t=e.__INTERNAL_SLOT_MAP__,a=this,o=Math.abs(Number(n)),l=r.getInternalSlot(t,a,"minimumSignificantDigits"),s=r.getInternalSlot(t,a,"maximumSignificantDigits"),void 0!==l&&void 0!==s?function(e,n,t){var a=e.toPrecision(t);if(~a.indexOf(".")&&t>n){for(var r=t-n;r>0&&"0"===a[a.length-1];)a=a.slice(0,a.length-1),r--;if("."===a[a.length-1])return a.slice(0,a.length-1)}return a}(o,l,s):function(e,n,t,a){for(var r=a-t,i=e.toFixed(a);r>0&&"0"===i[i.length-1];)i=i.slice(0,i.length-1),r--;"."===i[i.length-1]&&(i=i.slice(0,i.length-1));var o=i.split(".")[0].length;if(o<n){for(var l="";l.length<n-o;l+="0");i=l+i}return i}(o,r.getInternalSlot(t,a,"minimumIntegerDigits"),r.getInternalSlot(t,a,"minimumFractionDigits"),r.getInternalSlot(t,a,"maximumFractionDigits"))),"ordinal"==c)},e.prototype.toString=function(){return"[object Intl.PluralRules]"},e.supportedLocalesOf=function(n,t){return r.supportedLocales(e.availableLocales,r.getCanonicalLocales(n),t)},e.__addLocaleData=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];for(var i=function(n){Object.keys(a(n.availableLocales,Object.keys(n.aliases),Object.keys(n.parentLocales)).reduce(function(e,n){return e[n]=!0,e},{})).forEach(function(t){try{e.localeData[t]=r.unpackData(t,n)}catch(e){if(r.isMissingLocaleDataError(e))return;throw e}})},o=0,l=n;o<l.length;o++){i(l[o])}e.availableLocales=Object.keys(e.localeData),e.__defaultLocale||(e.__defaultLocale=e.availableLocales[0])},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=[],e.__defaultLocale="en",e.relevantExtensionKeys=[],e.polyfilled=!0,e.__INTERNAL_SLOT_MAP__=new WeakMap,e}();n.PluralRules=s;try{Object.defineProperty(s,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(s.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(e){}},718:function(e,n,t){"use strict";t.r(n);var a=function(){return(a=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},r=1e3,i=60,o=60*i,l=24*o,s=7*l;function u(e,n,t){void 0===n&&(n=Date.now()),void 0===t&&(t={});var u=a(a({},c),t||{}),g=(+e-+n)/r;if(Math.abs(g)<u.second)return{value:Math.round(g),unit:"second"};var m=g/i;if(Math.abs(m)<u.minute)return{value:Math.round(m),unit:"minute"};var h=g/o;if(Math.abs(h)<u.hour)return{value:Math.round(h),unit:"hour"};var f=g/l;if(Math.abs(f)<u.day)return{value:Math.round(f),unit:"day"};var d=new Date(e),p=new Date(n),v=d.getFullYear()-p.getFullYear();if(Math.round(Math.abs(v))>0)return{value:Math.round(v),unit:"year"};var b=12*v+d.getMonth()-p.getMonth();return Math.round(Math.abs(b))>0?{value:Math.round(b),unit:"month"}:{value:Math.round(g/s),unit:"week"}}var c={second:45,minute:45,hour:22,day:5},g={"aa-SAAHO":"ssy",aam:"aas",aar:"aa",abk:"ab",adp:"dz",afr:"af",aju:"jrb",aka:"ak",alb:"sq",als:"sq",amh:"am",ara:"ar",arb:"ar",arg:"an",arm:"hy","art-lojban":"jbo",asm:"as",aue:"ktz",ava:"av",ave:"ae",aym:"ay",ayr:"ay",ayx:"nun","az-AZ":"az-Latn-AZ",aze:"az",azj:"az",bak:"ba",bam:"bm",baq:"eu",bcc:"bal",bcl:"bik",bel:"be",ben:"bn",bgm:"bcg",bh:"bho",bih:"bho",bis:"bi",bjd:"drl",bod:"bo",bos:"bs",bre:"br","bs-BA":"bs-Latn-BA",bul:"bg",bur:"my",bxk:"luy",bxr:"bua",cat:"ca",ccq:"rki","cel-gaulish":"xtg-x-cel-gaulish",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cjr:"mom",cka:"cmr",cld:"syr",cmk:"xch",cmn:"zh",cnr:"sr-ME",cor:"kw",cos:"co",coy:"pij",cqu:"quh",cre:"cr",cwd:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",dgo:"doi",dhd:"mwr",dik:"din",diq:"zza",div:"dv",drh:"mn",drw:"fa-af",dut:"nl",dzo:"dz",ekk:"et",ell:"el",emk:"man",eng:"en",epo:"eo",esk:"ik",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fat:"ak",fij:"fj",fin:"fi",fra:"fr",fre:"fr",fry:"fy",fuc:"ff",ful:"ff",gav:"dev",gaz:"om",gbo:"grb",geo:"ka",ger:"de",gfx:"vaj",ggn:"gvr",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gno:"gon",gre:"el",grn:"gn",gti:"nyc",gug:"gn",guj:"gu",guv:"duz",gya:"gba","ha-Latn-GH":"ha-GH","ha-Latn-NE":"ha-NE","ha-Latn-NG":"ha-NG",hat:"ht",hau:"ha",hbs:"sr-Latn",hdn:"hai",hea:"hmn",heb:"he",her:"hz",him:"srx",hin:"hi",hmo:"ho",hrr:"jal",hrv:"hr",hun:"hu",hye:"hy","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","i-default":"en-x-i-default","i-enochian":"und-x-i-enochian","i-mingo":"see-x-i-mingo",ibi:"opa",ibo:"ig",ice:"is",ido:"io",iii:"ii",ike:"iu",iku:"iu",ile:"ie",ilw:"gal",in:"id",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",iw:"he",jav:"jv",jeg:"oyb",ji:"yi",jpn:"ja",jw:"jv",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",kgc:"tdf",kgh:"kml",khk:"mn",khm:"km",kik:"ki",kin:"rw",kir:"ky","kk-Cyrl-KZ":"kk-KZ",kmr:"ku",knc:"kr",kng:"kg",knn:"kok",koj:"kwv",kom:"kv",kon:"kg",kor:"ko",kpv:"kv",krm:"bmf","ks-Arab-IN":"ks-IN",ktr:"dtp",kua:"kj",kur:"ku",kvs:"gdj",kwq:"yam",kxe:"tvd","ky-Cyrl-KG":"ky-KG",kzj:"dtp",kzt:"dtp",lao:"lo",lat:"la",lav:"lv",lbk:"bnc",lii:"raq",lim:"li",lin:"ln",lit:"lt",lmm:"rmx",ltz:"lb",lub:"lu",lug:"lg",lvs:"lv",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",meg:"cir",mhr:"chm",mkd:"mk",mlg:"mg",mlt:"mt","mn-Cyrl-MN":"mn-MN",mnk:"man",mo:"ro",mol:"ro",mon:"mn",mri:"mi","ms-Latn-BN":"ms-BN","ms-Latn-MY":"ms-MY","ms-Latn-SG":"ms-SG",msa:"ms",mst:"mry",mup:"raj",mwj:"vaj",mya:"my",myt:"mry",nad:"xny",nau:"na",nav:"nv",nbl:"nr",ncp:"kdz",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nnx:"ngv",no:"nb","no-bok":"nb","no-BOKMAL":"nb","no-nyn":"nn","no-NYNORSK":"nn",nob:"nb",nor:"nb",npi:"ne",nts:"pij",nya:"ny",oci:"oc",ojg:"oj",oji:"oj",ori:"or",orm:"om",ory:"or",oss:"os",oun:"vaj","pa-IN":"pa-Guru-IN","pa-PK":"pa-Arab-PK",pan:"pa",pbu:"ps",pcr:"adx",per:"fa",pes:"fa",pli:"pi",plt:"mg",pmc:"huw",pmu:"phr",pnb:"lah",pol:"pl",por:"pt",ppa:"bfy",ppr:"lcq",prs:"fa-AF",pry:"prt",pus:"ps",puz:"pub",que:"qu",quz:"qu",rmy:"rom",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sca:"hle",scc:"sr",scr:"hr","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg",sh:"sr-Latn","shi-MA":"shi-Tfng-MA",sin:"si",skk:"oyb",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",spy:"kln",sqi:"sq","sr-BA":"sr-Cyrl-BA","sr-ME":"sr-Latn-ME","sr-RS":"sr-Cyrl-RS","sr-XK":"sr-Cyrl-XK",src:"sc",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swc:"sw-CD",swe:"sv",swh:"sw",tah:"ty",tam:"ta",tat:"tt",tdu:"dtp",tel:"te",tgk:"tg",tgl:"fil",tha:"th",thc:"tpo",thx:"oyb",tib:"bo",tie:"ras",tir:"ti",tkk:"twm",tl:"fil",tlw:"weo",tmp:"tyj",tne:"kak",tnf:"fa-af",ton:"to",tsf:"taj",tsn:"tn",tso:"ts",ttq:"tmh",tuk:"tk",tur:"tr",tw:"ak",twi:"ak","tzm-Latn-MA":"tzm-MA","ug-Arab-CN":"ug-CN",uig:"ug",ukr:"uk",umu:"del",uok:"ema",urd:"ur","uz-AF":"uz-Arab-AF","uz-UZ":"uz-Latn-UZ",uzb:"uz",uzn:"uz","vai-LR":"vai-Vaii-LR",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xba:"cax",xho:"xh",xia:"acn",xkh:"waw",xpe:"kpe",xsj:"suj",xsl:"den",ybd:"rki",ydd:"yi",yid:"yi",yma:"lrr",ymt:"mtm",yor:"yo",yos:"zom","yue-CN":"yue-Hans-CN","yue-HK":"yue-Hant-HK",yuu:"yug",zai:"zap","zh-CN":"zh-Hans-CN","zh-guoyu":"zh","zh-hakka":"hak","zh-HK":"zh-Hant-HK","zh-min-nan":"nan","zh-MO":"zh-Hant-MO","zh-SG":"zh-Hans-SG","zh-TW":"zh-Hant-TW","zh-xiang":"hsn","zh-min":"nan-x-zh-min",zha:"za",zho:"zh",zsm:"ms",zul:"zu",zyb:"za"},m={"en-150":"en-001","en-AG":"en-001","en-AI":"en-001","en-AU":"en-001","en-BB":"en-001","en-BM":"en-001","en-BS":"en-001","en-BW":"en-001","en-BZ":"en-001","en-CA":"en-001","en-CC":"en-001","en-CK":"en-001","en-CM":"en-001","en-CX":"en-001","en-CY":"en-001","en-DG":"en-001","en-DM":"en-001","en-ER":"en-001","en-FJ":"en-001","en-FK":"en-001","en-FM":"en-001","en-GB":"en-001","en-GD":"en-001","en-GG":"en-001","en-GH":"en-001","en-GI":"en-001","en-GM":"en-001","en-GY":"en-001","en-HK":"en-001","en-IE":"en-001","en-IL":"en-001","en-IM":"en-001","en-IN":"en-001","en-IO":"en-001","en-JE":"en-001","en-JM":"en-001","en-KE":"en-001","en-KI":"en-001","en-KN":"en-001","en-KY":"en-001","en-LC":"en-001","en-LR":"en-001","en-LS":"en-001","en-MG":"en-001","en-MO":"en-001","en-MS":"en-001","en-MT":"en-001","en-MU":"en-001","en-MW":"en-001","en-MY":"en-001","en-NA":"en-001","en-NF":"en-001","en-NG":"en-001","en-NR":"en-001","en-NU":"en-001","en-NZ":"en-001","en-PG":"en-001","en-PH":"en-001","en-PK":"en-001","en-PN":"en-001","en-PW":"en-001","en-RW":"en-001","en-SB":"en-001","en-SC":"en-001","en-SD":"en-001","en-SG":"en-001","en-SH":"en-001","en-SL":"en-001","en-SS":"en-001","en-SX":"en-001","en-SZ":"en-001","en-TC":"en-001","en-TK":"en-001","en-TO":"en-001","en-TT":"en-001","en-TV":"en-001","en-TZ":"en-001","en-UG":"en-001","en-VC":"en-001","en-VG":"en-001","en-VU":"en-001","en-WS":"en-001","en-ZA":"en-001","en-ZM":"en-001","en-ZW":"en-001","en-AT":"en-150","en-BE":"en-150","en-CH":"en-150","en-DE":"en-150","en-DK":"en-150","en-FI":"en-150","en-NL":"en-150","en-SE":"en-150","en-SI":"en-150","es-AR":"es-419","es-BO":"es-419","es-BR":"es-419","es-BZ":"es-419","es-CL":"es-419","es-CO":"es-419","es-CR":"es-419","es-CU":"es-419","es-DO":"es-419","es-EC":"es-419","es-GT":"es-419","es-HN":"es-419","es-MX":"es-419","es-NI":"es-419","es-PA":"es-419","es-PE":"es-419","es-PR":"es-419","es-PY":"es-419","es-SV":"es-419","es-US":"es-419","es-UY":"es-419","es-VE":"es-419","pt-AO":"pt-PT","pt-CH":"pt-PT","pt-CV":"pt-PT","pt-FR":"pt-PT","pt-GQ":"pt-PT","pt-GW":"pt-PT","pt-LU":"pt-PT","pt-MO":"pt-PT","pt-MZ":"pt-PT","pt-ST":"pt-PT","pt-TL":"pt-PT","zh-Hant-MO":"zh-Hant-HK"},h=t(33),f=t.n(h);function d(e){var n=Intl.getCanonicalLocales;return"function"==typeof n?n(e):Intl.NumberFormat.supportedLocalesOf(e||"")}function p(e,n,t){if(void 0===t&&(t=Error),!e)throw new t(n)}function v(e){var n=function(e){return function(n,t){for(var a={locale:""},r=0,i=t;r<i.length;r++){var o=i[r],l=o.replace(y,""),s=k(n,l);if(s)return a.locale=s,o!==l&&(a.extension=o.slice(l.length+1,o.length)),a}return a.locale=e(),a}}(e),t=function(e){return function(n,t){for(var a={locale:""},r=0,i=t;r<i.length;r++){var o=i[r],l=o.replace(y,""),s=k(n,l);if(s)return a.locale=s,o!==l&&(a.extension=o.slice(l.length+1,o.length)),a}return a.locale=e(),a}}(e);return function(e,a,r,i,o){for(var l,s=(l="lookup"===r.localeMatcher?n(e,a):t(e,a)).locale,u={locale:"",dataLocale:s},c="-u",g=0,m=i;g<m.length;g++){var h=m[g],v=o[s];p("object"===f()(v)&&null!==v,"locale data "+h+" must be an object");var y=v[h];p(Array.isArray(y),"keyLocaleData must be an array");var k=y[0];p("string"==typeof k||null===k,"value must be string or null");var _="";if(l.extension){var S=b(l.extension,h);void 0!==S&&(""!==S?~y.indexOf(S)&&(_="-"+h+"-"+(k=S)):~S.indexOf("true")&&(k="true",_="-"+h))}if(h in r){var L=r[h];p("string"==typeof L||null==L,"optionsValue must be String, Undefined or Null"),~y.indexOf(L)&&L!==k&&(k=L,_="")}u[h]=k,c+=_}if(c.length>2){var M=s.indexOf("-x-");if(-1===M)s+=c;else{var O=s.slice(0,M),w=s.slice(M,s.length);s=O+c+w}s=d(s)[0]}return u.locale=s,u}}function b(e,n){p(2===n.length,"key must have 2 elements");var t=e.length,a="-"+n+"-",r=e.indexOf(a);if(-1!==r){for(var i=r+4,o=i,l=i,s=!1;!s;){var u=e.indexOf("-",l);2===(-1===u?t-l:u-l)?s=!0:-1===u?(o=t,s=!0):(o=u,l=u+1)}return e.slice(i,o)}if(a="-"+n,-1!==(r=e.indexOf(a))&&r+3===t)return""}var y=/-u(?:-[0-9a-z]{2,8})+/gi;function k(e,n){for(var t=n;;){if(~e.indexOf(t))return t;var a=t.lastIndexOf("-");if(!~a)return;a>=2&&"-"===t[a-2]&&(a-=2),t=t.slice(0,a)}}function _(e,n,t){var a=[e];n[e]&&(e=n[e],a.push(e));var r=t[e];r&&a.push(r);for(var i=e.split("-"),o=i.length;o>1;o--)a.push(i.slice(0,o-1).join("-"));return a}function S(e,n){for(var t=[],a=0,r=n;a<r.length;a++){var i=k(e,r[a].replace(y,""));i&&t.push(i)}return t}function L(e,n,t){return void 0!==t&&j(t=I(t),"localeMatcher","string",["lookup","best fit"],"best fit"),S(e,n)}var M,O=(M=function(e,n){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}M(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),w=function(){return(w=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function I(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function j(e,n,t,a,r){var i=e[n];if(void 0!==i){if("boolean"!==t&&"string"!==t)throw new TypeError("invalid type");if("boolean"===t&&(i=Boolean(i)),"string"===t&&(i=String(i)),void 0!==a&&!a.filter(function(e){return e==i}).length)throw new RangeError(i+" in not within "+a);return i}return r}function z(e){return Object.keys(g).reduce(function(n,t){return t.split("-")[0]===e&&(n[t]=g[t]),n},{})}function N(e){return Object.keys(m).reduce(function(n,t){return t.split("-")[0]===e&&(n[t]=m[t]),n},{})}var A=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.type="MISSING_LOCALE_DATA",n}return O(n,e),n}(Error);function T(e){return"MISSING_LOCALE_DATA"===e.type}function x(e,n){var t=_(e,n.aliases,n.parentLocales),a=t.map(function(e){return n.data[e]}).filter(Boolean);if(!a.length)throw new A('Missing locale data for "'+e+'", lookup hierarchy: '+t.join(", "));return a.reverse(),a.reduce(function(e,n){return w(w({},e),n)},{})}function D(e,n,t,a){e.get(n)||e.set(n,Object.create(null)),e.get(n)[t]=a}function P(e,n,t){var a=e.get(n);if(!a)throw new TypeError("PluralRules has not been initialized");return a[t]}var E=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"];t.d(n,"selectUnit",function(){return u}),t.d(n,"toObject",function(){return I}),t.d(n,"getOption",function(){return j}),t.d(n,"getAliasesByLang",function(){return z}),t.d(n,"getParentLocalesByLang",function(){return N}),t.d(n,"unpackData",function(){return x}),t.d(n,"isMissingLocaleDataError",function(){return T}),t.d(n,"setInternalSlot",function(){return D}),t.d(n,"getInternalSlot",function(){return P}),t.d(n,"createResolveLocale",function(){return v}),t.d(n,"getLocaleHierarchy",function(){return _}),t.d(n,"supportedLocales",function(){return L}),t.d(n,"SANCTIONED_UNITS",function(){return E}),t.d(n,"getCanonicalLocales",function(){return d}),t.d(n,"invariant",function(){return p})},720:function(e,n,t){t(716)}}]);