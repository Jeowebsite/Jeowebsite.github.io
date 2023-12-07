'use strict';

///////////////////////////
//ad tags
const adTagMainMenuBanner = "smashkarts-io_300x250b";
const adTagWinCeremonyBanner = "smashkarts-io_300x250_2b";
const adTagLongBanner = "smashkarts-io_728x90b";

function hideAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if (ad != null) 
    {
        ad.style.display = "none";
        ad.innerHTML = "";
    }
}

function showAd(adElementId)
{
    return;
    
    const ad = document.getElementById(adElementId);

    if (ad != null) 
    {
        ad.style.display = "flex";
    }
}

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
    hideOffCanvasAds(adResArrayToHide);

    if (!window.adblockDetected)
    {
        crazysdk.requestResponsiveBanner([adTagIdToShow]);
        showAd(adTagIdToShow);
    }
}

function hideOffCanvasAds(adResArray)
{
    adResArray.forEach(adRes =>
    {
        crazysdk.clearBanner(adRes.adId);
        //hideAd(adRes.adId);
    });
}

function destroyMainMenuAd()
{
    crazysdk.clearBanner(adTagMainMenuBanner);
    //hideAd(adTagMainMenuBanner);
}

function requestMainMenuAd()
{
    // if (!isMobile())
    // {
    //     crazysdk.requestBanner([
    //         {
    //             containerId: adTagMainMenuBanner,
    //             size: '300x250',
    //         }
    //     ]);
    //
    //     showAd(adTagMainMenuBanner);
    // }
    
    if (!isMobile())
    {
        crazysdk.requestResponsiveBanner([adTagMainMenuBanner]);
        showAd(adTagMainMenuBanner);
    }
}

function destroyWinCeremonyAd()
{
    crazysdk.clearBanner(adTagWinCeremonyBanner);
    //hideAd(adTagWinCeremonyBanner);
}

function requestWinCeremonyAd(interstialRequested)
{
    // if (!isMobile())
    // {
    //     if (!interstialRequested)
    //     {
    //         crazysdk.requestBanner([
    //             {
    //                 containerId: adTagWinCeremonyBanner,
    //                 size: '300x250',
    //             }
    //         ]);
    //
    //         showAd(adTagWinCeremonyBanner);
    //     }
    // }

    if (!isMobile() && !interstialRequested)
    {
        crazysdk.requestResponsiveBanner([adTagWinCeremonyBanner]);
        showAd(adTagWinCeremonyBanner);
    }
}

//stubs
function destroySpectateAd() {} 
function requestSpectateAd() {}

function destroyDeathAd()
{
    crazysdk.clearBanner(adTagLongBanner);
    //hideAd(adTagLongBanner);
}

function requestDeathAd()
{
//     crazysdk.requestBanner([
//         {
//             containerId: adTagLongBanner,
//             size: '728x90',
//         }
//     ]);
//
//     showAd(adTagLongBanner);

    crazysdk.requestResponsiveBanner([adTagLongBanner]);
    showAd(adTagLongBanner);
}

function showInterstitial(audioOn, interstitialType, interstitialName)
{
    if (!isMobile())
    {
        crazysdk.requestAd('midgame');
    }
}

function tryInitRewardedInterstitial(audioOn)
{
    if (!window.adblockDetected)
    {
        window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
    }
}

function tryShowRewardedInterstitial(unusedParam)
{
    if (!isMobile())
    {
        if(!window.adblockDetected)
        {
            crazysdk.requestAd('rewarded');
        }
        else
        {
            interstitialNoFill();
        }
    }
}

function initAds()
{
    crazysdk.addEventListener('adStarted', interstitialStart);
    crazysdk.addEventListener('adError', interstitialError);
    crazysdk.addEventListener('adFinished', interstitialComplete);
}

function getCrazyGamesShareLinkJS(roomName, gameMode, levelName)
{
    return crazysdk.inviteLink({ room: roomName, mode: gameMode, arena: levelName });
}

function recordGameplayStart()
{
    crazysdk.gameplayStart()
}

function recordGameplayStop()
{
    crazysdk.gameplayStop();
}

function recordHappyTime()
{
    crazysdk.happytime();
}

initAds();
