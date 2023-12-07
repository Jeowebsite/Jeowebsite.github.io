'use strict';

function showInterstitial(unusedParam, interstitialType, interstitialName)
{
    // var audioOnStr = audioOn ? 'on' : 'off';
    // adConfig({
    //   sound: audioOnStr,
    // });

    if(typeof adBreak === "function")
    {
        adBreak({

            type: interstitialType,  // ad shows at start of next level
            name: interstitialName,
            beforeAd: interstitialStart,
            afterAd: interstitialComplete,
            adBreakDone: () => {isVideoAdPlaying = false;}
        });
    }
}


var onShowRewardedVideoClicked = null;

function tryInitRewardedInterstitial(unusedParam)
{
    if(typeof adBreak === "function")
    {
        adBreak({
            type: 'reward', // The type of this placement
            name: 'rewardedxpboost', // A descriptive name for this placement
            beforeAd: () => {interstitialStart();}, // Prepare for the ad. Mute and pause the game flow
            afterAd: () => {console.log("tryInitRewardedInterstitials afterAd");}, // Resume the game and re-enable sound
            beforeReward: (showAdFn) => { rewardedInterstitialAvailable(showAdFn) }, // Show reward prompt (call showAdFn() if clicked)
            adDismissed: () => {interstitialSkipped();}, // Player dismissed the ad before it finished.
            adViewed: () => {interstitialComplete();}, // Player watched the ad–give them the reward.
            adBreakDone: (placementInfo) => { onGoogleRewardedVideoAdBreakDone(placementInfo); }, // Always called (if provided) even if an ad didn’t show
        });
    }
}

function tryShowRewardedInterstitial(unusedParam)
{
    if(onShowRewardedVideoClicked != null)
    {
        onShowRewardedVideoClicked();
        onShowRewardedVideoClicked = null;
    }
    else
    {
        console.log("tryShowRewardedInterstitial onShowRewardedVideoClicked == null");
        interstitialNoFill();
    }
}

function rewardedInterstitialAvailable(showAdFn)
{
    console.log("set onShowRewardedVideoClicked");
    onShowRewardedVideoClicked = showAdFn;
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "RewardedInterstitialAvailable");
}

function onGoogleRewardedVideoAdBreakDone(placementInfo)
{
    isVideoAdPlaying = false;
    console.log(`tryInitRewardedInterstitials adBreakDone with status ${placementInfo.breakStatus}`);
    window.unityGame.SendMessage(unityFirebaseGameOjbectName, "GoogleRewardedVideoAdBreakDone");
}
