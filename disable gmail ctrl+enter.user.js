// ==UserScript==
// @name         disable gmail ctrl+enter
// @namespace    alex@guta.com
// @version      0.1
// @description  disable gmail ctrl+enter for windows
// @author       alex
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        document.addEventListener('keydown',function(e){
            if(!e.ctrlKey)
                return;
            if(e.keyCode==13)
            {
                e.stopImmediatePropagation();
                return;
            }
        },true);
})();