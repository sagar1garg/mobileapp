define(["idcta/config","idcta/translations","idcta/apiUtils"],function(d,b,f){var e=window.location.host.split(".");var c;var g=window.location.protocol;if(e[e.length-2]==="co"&&e[e.length-1]==="uk"){c=e[e.length-3]+".co.uk"}else{c=e[e.length-2]+"."+e[e.length-1]}if(d["bbcid-v5"]=="RED"){d.signout_url=f.alignTldWithHostname(d.signout_url);d.status_url=f.alignTldWithHostname(d.status_url);d.settings_url=f.alignTldWithHostname(d.settings_url)}var a={register_url:f.alignTldWithHostname(d.register_url),signin_url:f.alignTldWithHostname(d.signin_url),signout_url:d.signout_url,status_url:d.status_url,settings_url:d.settings_url,tokenRefresh_url:f.alignTldWithHostname(d.tokenRefresh_url),"bbcid-v5":d["bbcid-v5"],idapp:{version:d.idapp.version,hostname:f.verifyEndpointUrl(window.location.host,false),insecurehostname:f.verifyEndpointUrl(window.location.host,false),tld:c},tokenRefresh:d.tokenRefresh||false,idtranslations:{version:d.idtranslations.version},identity:{baseUrl:d.identity.baseUrl,cookieAgeDays:d.identity.cookieAgeDays,accessTokenCookieName:d.identity.accessTokenCookieName,identityTokenCookieName:d.identity.identityTokenCookieName},idpurl:d.idpurl,translation_signedout:b.translation_signedout,translation_signedin:b.translation_signedin,useOverlay:false,ptrt:window.location.href,fallback:{config:d.fallback||false,translations:b.fallback||false}};a.getConfigAsync=function(){try{return{then:function(i){return i(a)}}}catch(h){f.logCaughtError(h)}};a.getConfig=function(){return a};a.buildIdappResourceUrl=function(i,h){try{return f.buildIdappResourceUrl(i,h)}catch(j){f.logCaughtError(j)}};return a});