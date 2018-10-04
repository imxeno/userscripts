// ==UserScript==
// @name         GitHub - show 'Raw' button on commit page
// @namespace    https://github.com/imxeno/userscripts/
// @version      0.2
// @description  Show 'Raw' button on commit page that allows you to jump directly to raw view of the commit.
// @author       imxeno
// @include      /^http(|s):\/\/github.com\/(.+)\/(.+)\/commit\/(\w+)$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const getRawUrl = () => {
        return window.location + ".patch";
    }

    const getRawButton = () => {
        const a = document.createElement("a");
        a.href = getRawUrl();
        a.classList = "btn btn-outline float-right ml-2";
        a.title = "Show raw commit";
        a.rel = "nofollow";
        a.innerHTML = "Raw";
        return a;
    }

    document.querySelector(".commit").prepend(getRawButton());
})();
