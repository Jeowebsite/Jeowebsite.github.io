'use strict';

function rampDisplayAdUnit(path, adUnitId, adUnitType)
{
    if(!rampInitialised())
        return;

    if (!isVideoAdPlaying && rampCurrAdUnitId != adUnitId && typeof ramp.setPath === "function" && typeof ramp.addUnits === "function")
    {
        rampCurrPath = path;

        console.log(`playwire setPath: ${path}`);
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
                console.log(`playwire addUnits: ${adUnitId} ${adUnitType}`);
                ramp.displayUnits();
            }).catch((e) =>
            {
                ramp.displayUnits();
                console.log(`playwire addUnits ${adUnitId} ${adUnitType} error: ${e}`);
            });

        }).catch((e) =>
        {
            console.log(`playwire setPath ${path} error: ${e}`);
        });

    }
}

function hideAllAdUnits()
{
    if(!rampInitialised())
        return;

    if(typeof ramp.destroyUnits === "function" && rampCurrAdUnitId != null)
    {
        console.log("playwire destroyAllUnits");

        //patch fix: pass in currently used ad unit types instead of "all" as "all" was previously causing an issue relating to trying to also destroy the video player unit
        ramp.destroyUnits(adUnitTypes);
        //ramp.destroyUnits("all");

        //set path to gamepage as no ad units are enabled for gamepage
        ramp.setPath("gamepage");

        rampCurrAdUnitId = null;
        rampCurrAdUnitType = null;
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

function destroyMainMenuAd()
{
    hideAllAdUnits();
}

function requestWinCeremonyAd(interstialRequested)
{
    rampDisplayAdUnit("roundend", "pw_roundend", "med_rect_btf");
}

function destroyWinCeremonyAd()
{
    hideAllAdUnits();
}

//stubs
function requestSpectateAd() {}
function destroySpectateAd() {}

function requestDeathAd()
{
    rampDisplayAdUnit("ondeath", "pw_ondeath", "leaderboard_atf");
}

function destroyDeathAd()
{
    hideAllAdUnits();
}
