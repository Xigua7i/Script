// ==UserScript==
// @name         私人用通用脚本。
// @namespace    all-round
// @version      1.1.0
// @description  私人用的脚本，各种各样的功能。
// @author       You
// @match        https://www.google.com/*
// @match        https://www.mapgenie.io/*
// @match        https://www.bing.com/*    // 注意这里要有www.
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

function deleteBingAds() {
    if (window.location.hostname.includes('bing.com')) {
        console.log('deleteBingAds');
        // 查找Bing页面中的广告元素
        const adsElements = document.querySelectorAll('.b_ad, .b_adLastChild'); // 使用class选择器
        adsElements.forEach(ad => {
            if (ad) {
                ad.remove();
            }
        });

        // 获取所有 elementtiming="frp.AdsTop" 的 div 元素
        const adsTopElements = document.querySelectorAll('div[elementtiming="frp.AdsTop"]');

        adsTopElements.forEach(adsTopElement => {
            // 获取该 div 元素的上一个兄弟元素
            let prevSibling = adsTopElement.previousElementSibling;

            // 如果上一个兄弟元素存在，并且它是 b_algo 类的元素
            if (prevSibling && prevSibling.classList.contains('b_algo')) {
                prevSibling.remove(); // 删除上一个 b_algo 元素
            }

            adsTopElement.remove(); // 删除 elementtiming="frp.AdsTop" 的 div 元素
        });
    }
}



    function mainFun() {
        // 删除谷歌广告
        deleteGoogleAds();
        // 删除MapGenie广告
        deleteMapGenieAdsFloating();
        // 删除bing广告
        deleteBingAds();
    }

    mainFun();
})();