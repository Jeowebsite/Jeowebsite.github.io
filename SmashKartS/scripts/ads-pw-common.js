'use strict';

var rampCurrPath;
var rampCurrAdUnitId;
var rampCurrAdUnitType;
const adUnitTypes = ["med_rect_atf", "med_rect_btf", "leaderboard_atf"];

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
}

function hideOffCanvasAds(adResArray)
{
}

function rampInitialised()
{
    return playwireRampInitialised;
}

function rampVideoPlayerInitialised()
{
    return rampInitialised() && ramp.settings.slots.rewarded_video !== undefined;
}
