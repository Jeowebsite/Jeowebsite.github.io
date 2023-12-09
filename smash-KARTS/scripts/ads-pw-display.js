'use strict';

function hideAllAdUnits()
{
    if(!rampInitialised())
        return;

    if(typeof ramp.destroyUnits === "function" && rampCurrAdUnitId != null)
    {
        //patch fix: pass in currently used ad unit types instead of "all" as "all" was previously causing an issue relating to trying to also destroy the video player unit
        ramp.destroyUnits(adUnitTypes);
        //ramp.destroyUnits("all");

        //set path to gamepage as no ad units are enabled for gamepage
        ramp.setPath("gamepage");

        rampCurrAdUnitId = null;
        rampCurrAdUnitType = null;
    }
}

function rampDisplayAdUnit(path, adUnitId, adUnitType)
{
    if(!rampInitialised())
        return;

    if (!isVideoAdPlaying && rampCurrAdUnitId != adUnitId && typeof ramp.setPath === "function" && typeof ramp.addUnits === "function")
    {
        hideAllAdUnits();
        
        rampCurrPath = path;

        ramp.setPath(path).then(() =>
        {
            var pwUnits = [
                {
                    selectorId: adUnitId,
                    type: adUnitType
                }
            ];

            rampCurrAdUnitId = adUnitId;
            rampCurrAdUnitType = adUnitType;

            ramp.addUnits(pwUnits).then(() =>
            {
                ramp.displayUnits();
            }).catch((e) =>
            {
                ramp.displayUnits();
            });

        }).catch((e) =>
        {
            console.log(`playwire setPath ${path} error: ${e}`);
        });

    }
}

function requestDummyMainMenuAd()
{
    rampDisplayAdUnit("premium-main", "pw_mainmenu_dummy", "med_rect_atf");
}

function requestMainMenuAd()
{
    rampDisplayAdUnit("mainmenu", "pw_mainmenu", "med_rect_atf");
}

function hideMainMenuAd()
{
    hideAllAdUnits();
}

function requestWinCeremonyAd()
{
    rampDisplayAdUnit("roundend", "pw_roundend", "med_rect_btf");
}

function hideWinCeremonyAd()
{
    hideAllAdUnits();
}

//stubs
function requestLoadingAd() {}
function hideLoadingAd() {}
function requestSpectateAd() {}
function hideSpectateAd() {}

function requestDeathAd()
{
    rampDisplayAdUnit("ondeath", "pw_ondeath", "leaderboard_atf");
}

function hideDeathAd()
{
    hideAllAdUnits();
}
