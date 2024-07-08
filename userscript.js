// ==UserScript==
// @name AdGuard Assistant 
// @name:ar AdGuardمساعد 
// @name:be Памочнік AdGuard 
// @name:cs AdGuard Asistent 
// @name:da AdGuard Assistent 
// @name:de AdGuard-Assistent 
// @name:el Βοηθός AdGuard 
// @name:es Asistente de Adguard 
// @name:fa دستیار AdGuard 
// @name:fi AdGuard Avustaja 
// @name:fr Assistant AdGuard  
// @name:he העוזר האישי של אדגארד 
// @name:hi AdGuard सहायक 
// @name:hr AdGuard Pomoćnik 
// @name:hu AdGuard Asszisztens 
// @name:id Asisten AdGuard 
// @name:it AdGuard Assistant 
// @name:ja AdGuardアシスタント 
// @name:ko AdGuard 어시스턴트 
// @name:lt AdGuard Asistentas 
// @name:nl AdGuard Assistent 
// @name:no AdGuard-assistent 
// @name:pl Asystent AdGuarda 
// @name:pt-PT Assistente do AdGuard 
// @name:pt Assistente do AdGuard 
// @name:ro Asistentul AdGuard 
// @name:ru Помощник AdGuard 
// @name:sk AdGuard Asistent 
// @name:sl AdGuard Pomočnik 
// @name:sr AdGuard pomoćnik 
// @name:sv AdGuard-assistent 
// @name:tr AdGuard Asistanı 
// @name:uk Помічник AdGuard 
// @name:vi Trợ Lý AdGuard 
// @name:zh-HK AdGuard 小助手 
// @name:zh-TW AdGuard 助理 
// @name:zh 使用 AdGuard 助手 
// @namespace adguard
// @description Provides easy and convenient way to manage filtering right from the browser 
// @description:ar يوفر طريقه سهله ومريحه لأداره التصفية الحقيقة من المتصفح 
// @description:be Дазваляе лёгка і хутка кіраваць фільтрацыяй непасрэдна з браўзара 
// @description:cs Poskytuje snadný a pohodlný způsob správy filtrování přímo z prohlížeče 
// @description:da Muliggør nem og bekvem filtreringshåndtering direkte fra browseren 
// @description:de Bietet eine einfache und bequeme Möglichkeit, das Filtern direkt im Browser zu verwalten 
// @description:el Παρέχει εύκολο και βολικό τρόπο διαχείρισης του φιλτραρίσματος απευθείας από το πρόγραμμα περιήγησης 
// @description:es Permite fácilmente administrar el filtrado directamente desde el navegador 
// @description:fa روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر. 
// @description:fi Voit muutta hiljattain käyttämiesi sovellusten ja verkkosivujen suodatusasetuksia kätevästi suoraan selaimesta. 
// @description:fr Fournit un moyen simple et pratique de gérer le filtrage directement depuis le navigateur 
// @description:he מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן 
// @description:hr Pruža jednostavan i praktičan način upravljanja filtriranjem izravno iz preglednika 
// @description:hu Könnyű és kényelmes módot kínál a szűrés kezelésére közvetlenül a böngészőből 
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban 
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser 
// @description:ja ブラウザから簡単にフィルタリングを管理する便利な機能を提供します。 
// @description:ko 브라우저에서 바로 필터링 관리를 쉽고 간편하게 할 수 있도록 도와줍니다. 
// @description:lt Suteikia lengvą ir patogų būdą valdyti filtravimą iš naršyklės 
// @description:nl Biedt een gemakkelijke en handige manier om filters rechtstreeks vanuit de browser te beheren 
// @description:no Tilbyr en enkel og praktisk måte å administrere filtrering rett fra nettleseren 
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki 
// @description:pt-PT Fornece uma forma fácil e conveniente de gerir a filtragem a partir do seu navegador 
// @description:pt Fornece uma maneira fácil e conveniente de gerenciar a filtragem diretamente do seu navegador 
// @description:ro Oferă o manieră ușoară și convenabilă de a gera filtrarea chiar din browser 
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера 
// @description:sk Poskytuje jednoduchý a pohodlný spôsob manažmentu filtrov priamo z prehliadača 
// @description:sl Omogoča preprost in priročen način za upravljanje filtriranja neposredno iz brskalnika 
// @description:sr Pruža jednostavan i zgodan način upravljanja filtriranjem direktno iz preglednika 
// @description:sv Erbjuder ett enkelt och bekvämt sätt att hantera filtrering direkt i webbläsaren 
// @description:tr Filtrelemeyi doğrudan tarayıcıdan yönetmenin kolay ve kullanışlı bir yolunu sağlar 
// @description:uk Забезпечує простий та зручний спосіб керування фільтруванням безпосередньо у браузері 
// @description:vi Cung cấp cách dễ dàng và thuận tiện để quản lý lọc ngay từ trình duyệt 
// @description:zh-HK 在瀏覽器中提供了簡易且直覺的管理過濾方式 
// @description:zh-TW 提供簡單的且方便的方法以直接地從該瀏覽器管理過濾 
// @description:zh 提供简单方便的方法来管理浏览器筛选 
// @version 4.3.70
// @downloadURL https://userscripts.adtidy.org/release/assistant/4.3/assistant.user.js
// @updateURL https://userscripts.adtidy.org/release/assistant/4.3/assistant.meta.js
// @homepageURL https://github.com/AdguardTeam/AdguardAssistant
// @include *
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/сomments*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @exclude *tutosdeath.blogspot.com*
// @exclude *notifications.google.com*
// @exclude *google.com/recaptcha/*
// @exclude *bizmania.ru/*
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant   property:settings
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    let knownRoots = new WeakSet();
    function wrapRegExp(root) {
        if (knownRoots.has(root))
            return;
        let _proto = void 0;
        try {
            _proto = root.RegExp.prototype;
        } catch(ignore) {
            return;
        }
        // Prevent RegExpt + toString trick (technically possible with any other object, but I encountered only this one
        let _RE_tS = Object.getOwnPropertyDescriptor(_proto, 'toString');
        let _RE_tSV = _RE_tS.value || _RE_tS.get();
        let fts = Function.prototype.toString;
        Object.defineProperty(_proto, 'toString', {
            enumerable: _RE_tS.enumerable,
            configurable: _RE_tS.configurable,
            get: () => _RE_tSV,
            set: function(val) {
                console.warn('Attempt to change toString for', this, 'with', fts.call(val));
                //throw 'stop it!';
                return true;
            }
        });
    }


    let _openWindow = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
    let _get_openWindow = _openWindow.get;
    _openWindow.get = function() {
        let _cw = _get_contentWindow.apply(this, arguments);
        if (_cw)
            wrapRegExp(_cw);
        return _cw;
    };
    Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', _openWindow);
})();
