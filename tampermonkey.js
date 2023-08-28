// ==UserScript==
// @name         私人用通用脚本。
// @namespace    all-round
// @version      1.0.0 
// @description  私人用的脚本，各种各样的功能。
// @author       You
// @match        https://www.google.com/*
// @match        https://mapgenie.io/*
// @grant        none
// @author       Korey
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    // 删除谷歌广告
    function deleteGoogleAds() {
        if (window.location.hostname.includes('google.com')) {
            console.log('deleteGoogleAds');
            const adsElement = document.getElementById("tads");
            if (adsElement) {
                adsElement.remove();
            }
        }
    }

    function deleteMapGenieAdsFloating() {
        if (window.location.hostname.includes('mapgenie.io')) {
            // 移除左下脚广告
            const adsElement = document.getElementById("blobby-left");
            if (adsElement) {
                adsElement.remove();
            }
            // 移除视频动画广告
            const videoElement = document.getElementById("nitro-floating-wrapper");
            if (videoElement) {
                videoElement.remove();
            }
        }
    }

    function mainFun() {
        // 删除谷歌广告
        deleteGoogleAds();
        // 删除MapGenie广告
        deleteMapGenieAdsFloating();
    }

    mainFun();
})();