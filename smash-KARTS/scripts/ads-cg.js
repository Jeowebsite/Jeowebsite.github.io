'use strict';

///////////////////////////
var cgEnvDisabled;
bannerMinRefreshDelayMillisecs = 1000 * 60; //increase time for cg to 1 min

//ad tags
const adTagMainMenuBanner = "smashkarts-io_300x250b";
const adTagWinCeremonyBanner = "smashkarts-io_300x250_2b";
const adTagDeathBanner = "smashkarts-io_728x90b";

var currShownAdElementIds = [];

function hasAdContent(adElementId)
{
    const ad = document.getElementById(adElementId);

    return (ad != null && ad.innerHTML);
}

function requestAd(adElementId, adShownTimestamp)
{
    if(cgEnvDisabled || currShownAdElementIds.includes(adElementId))
        return;
    
    if(Date.now() >= (adShownTimestamp.val + bannerMinRefreshDelayMillisecs) || !hasAdContent(adElementId))
    {
        adShownTimestamp.val = Date.now();

        destroyAd(adElementId);

        window.CrazyGames.SDK.banner.requestResponsiveBanner(adElementId, (error, result) =>
        {
            if (error)
            {
                console.log("Error on request responsive banner (callback)", error);
            }
            else
            {
                currShownAdElementIds.push(adElementId);
            }
        });
    }
}

function hideAd(adElementId)
{
    //hiding done on the parent container in ads-common-logic so we only need to reset currShownAdElementId
    
    const indexToRemove = currShownAdElementIds.indexOf(adElementId);
    
    if(indexToRemove >= 0)
    {
        currShownAdElementIds.splice(indexToRemove, 1);
    }
}

function destroyAd(adElementId)
{
    if(cgEnvDisabled)
        return;
    
    window.CrazyGames.SDK.banner.clearBanner(adElementId);

    const indexToRemove = currShownAdElementIds.indexOf(adElementId);

    if(indexToRemove >= 0)
    {
        currShownAdElementIds.splice(indexToRemove, 1);
    }
}

function requestMainMenuAd()
{
    requestAd(adTagMainMenuBanner, mainMenuBannerShownTimestamp)
}

function hideMainMenuAd()
{
    hideAd(adTagMainMenuBanner);
}

function requestWinCeremonyAd()
{
    requestAd(adTagWinCeremonyBanner, winCeremonyBannerShownTimestamp);
}

function hideWinCeremonyAd()
{
    hideAd(adTagWinCeremonyBanner);
}

//stubs
function requestLoadingAd() {}
function hideLoadingAd() {}
function requestSpectateAd() {}
function hideSpectateAd() {}

function requestDeathAd()
{
    requestAd(adTagDeathBanner, deathBannerShownTimestamp);
}

function hideDeathAd()
{
    hideAd(adTagDeathBanner);
}

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
    if(cgEnvDisabled)
        return;
    
    hideOffCanvasAds(adResArrayToHide);

    if (!window.adblockDetected)
    {
        window.CrazyGames.SDK.banner.requestResponsiveBanner(adTagIdToShow, (error, result) =>
        {
            if (error)
            {
                console.log("Error on request responsive banner (callback)", error);
            }
        });
    }
}

function hideOffCanvasAds(adResArray)
{
    adResArray.forEach(adRes =>
    {
        destroyAd(adRes.adId);
    });
}

function showInterstitial(audioOn, interstitialType, interstitialName)
{
    if(cgEnvDisabled)
    {
        interstitialError(false);
        return;
    }
        
    if (!isMobile())
    {
        const callbacks = 
        {
            adStarted: () =>
            {
                interstitialStart(false);
            },
            adError: (error) =>
            {
                console.log("Error midgame ad:", error);
                interstitialError(false);
            },
            adFinished: () =>
            {
                interstitialComplete(false);
            }
        };
        
        window.CrazyGames.SDK.ad.requestAd("midgame", callbacks);
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
    if(cgEnvDisabled)
    {
        interstitialError(true);
        return;
    }
    
    if (!isMobile())
    {
        if(!window.adblockDetected)
        {
            const callbacks =
            {
                adStarted: () =>
                {
                    interstitialStart(true);
                },
                adError: (error) =>
                {
                    console.log("Error rewarded ad:", error);
                    interstitialError(true);
                },
                adFinished: () =>
                {
                    interstitialComplete(true);
                }
            };

            window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
        }
        else
        {
            interstitialNoFill(true);
        }
    }
}

function getCrazyGamesShareLinkJS(roomName, gameMode, levelName)
{
    if(cgEnvDisabled)
        return;
    
    window.CrazyGames.SDK.game.inviteLink({ room: roomName, mode: gameMode, arena: levelName }, (error, link) => 
    {
        if (error) 
        {
            console.log("Invite link error (callback)", error);
        } else 
        {
            console.log("Invite link (callback)", link);
            window.unityGame.SendMessage(unityFirebaseGameOjbectName, "CrazyGamesShareLinkCreated", link);
        }
    });
}

function showCrazyGamesInviteButton(roomName, gameMode, levelName)
{
    window.CrazyGames.SDK.game.showInviteButton({ room: roomName, mode: gameMode, arena: levelName }, (error, link) => 
    {
        if (error) 
        {
            console.log("Invite link error (callback)", error);
        } else 
        {
            console.log("Invite link (callback)", link);
        }
    });
}

function hideCrazyGamesInviteButton()
{
    window.CrazyGames.SDK.game.hideInviteButton();
}


function recordGameplayStart()
{
    if(cgEnvDisabled)
        return;
    
    window.CrazyGames.SDK.game.gameplayStart()
}

function recordGameplayStop()
{
    if(cgEnvDisabled)
        return;
    
    window.CrazyGames.SDK.game.gameplayStop();
}

function recordHappyTime()
{
    if(cgEnvDisabled)
        return;
    
    window.CrazyGames.SDK.game.happytime();
}



window.CrazyGames.SDK.getEnvironment((_error, environment) =>
{
    console.log(environment); // 'local', 'crazygames' or 'disabled'
    cgEnvDisabled = (environment === "disabled");
});
