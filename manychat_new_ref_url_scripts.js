/*
 * Script necessari per passare la mail catturata dell'utente da una optin page a Manychat
 * Spero vi sia utile ;)
 * @simoneleopizzi
 */

/*
 * Si occupa di includere la libreria jQuery
 * DA INCOLLARE NELL'HEADER DEL VOSTRO FUNNEL
 * (IN TUTTE LE PAGINE!)
 * SU CLICKFUNNELS IN SETTINGS > HEAD TRACKING CODE
 */

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


/*
 * Si occupa di salvare nei cookies tutti i valori dei campi una volta effettuato il submit di un qualsiasi form
 * DA INCOLLARE NELL'BODY DEL VOSTRO FUNNEL
 * (Se volete in tutte le pagine ma basterebbe anche nel FOOTER dell'optin page)
 * SU CLICKFUNNELS IN SETTINGS > BODY TRACKING CODE
 */

<script type="text/javascript">

    if (typeof Cookies == "undefined") {
        !function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
    }

    jQuery(document).ready(function($){
        $(".innerContent input").each(function(){
            var ele = $(this);
            var name = ele.attr("name");

            if (typeof name === "string") {
                var merge_field = "merge_" + name
                var existing_val = Cookies.get(merge_field);

                ele.bind("input", function(){
                    Cookies.set(merge_field, ele.val());
                });

                if (typeof existing_val !== "undefined")
                    ele.val(existing_val);
            }
        });
    });
</script>


/*
 * Si occupa di recuperare il campo email dai cookie
 * e di aggiornare l'URL del bottone concatendano la mail all'URL di Manichat
 * DA INCOLLARE NELLA PAGINA DOVE INSERIRETE IL LINK (BOTTONE) DI MANYCHAT
 * (THANK YOU PAGE PER ESEMPIO)
 * SU CLICKFUNNELS IN SETTINGS > TRACKING CODE > HEADER CODE
 */

<script type="text/javascript">
     window.getCookie = function(name) {
   		var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
   		if (match) return match[2];
 	}

     jQuery(document).ready(function($){
       var userEmail = getCookie("merge_email");
       $("#tmp_button-30838 a").attr("href", "https://m.me/simoneleopizzipage?ref=sm-optin-gruppo--" + userEmail);
     });
 </script>
