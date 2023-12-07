'use strict';

///////////////////////////
//ad tags
const adTagMainMenuBanner = "smashkarts-io_300x250";
const adTagWinCeremonyBanner = "smashkarts-io_300x250_2";
const adTagSpectateBanner = "smashkarts-io_300x250_3";
const adTagLongBannerWeb = "smashkarts-io_728x90-new";
const adTagLongBannerMobile = "smashkarts-io_320x100";

function hideAd(adElementId)
{
    const ad = document.getElementById(adElementId);
    
    if(ad != null) 
    {
      ad.style.display = "none";
      ad.innerHTML = "";
    }
}

function showAd(adElementId)
{
    const ad = document.getElementById(adElementId);

    if(ad != null) 
    {
      ad.style.display = "block";
    }
}

function requestOffCanvasAd(adResArrayToHide, adTagIdToShow)
{
  hideOffCanvasAds(adResArrayToHide);

  aiptag.cmd.display.push(function() 
  { 
    aipDisplayTag.display(adTagIdToShow);
    showAd(adTagIdToShow);
  });  
}

function hideOffCanvasAds(adResArray)
{
  adResArray.forEach(adRes => {
    hideAd(adRes.adId);    
  });
}

function requestMainMenuAd()
{
  if(!isMobile())
  {
    aiptag.cmd.display.push(function() 
    { 
      aipDisplayTag.display(adTagMainMenuBanner);
      showAd(adTagMainMenuBanner);
    });
  }
}

function destroyMainMenuAd()
{
    hideAd(adTagMainMenuBanner);
}

function requestWinCeremonyAd(interstialRequested)
{
  if(!isMobile())
  {
    aiptag.cmd.display.push(function() 
    { 
      aipDisplayTag.display(adTagWinCeremonyBanner);
      showAd(adTagWinCeremonyBanner);
    });
  }
}

function destroyWinCeremonyAd()
{
    hideAd(adTagWinCeremonyBanner);
}

function requestSpectateAd()
{
    if(!isMobile())
    {
        aiptag.cmd.display.push(function()
        {
            aipDisplayTag.display(adTagSpectateBanner);
            showAd(adTagSpectateBanner);
        });
    }
}

function destroySpectateAd()
{
    hideAd(adTagSpectateBanner);
}

function requestDeathAd()
{
  if(!isMobile())
  {
      aiptag.cmd.display.push(function() 
      { 
        aipDisplayTag.display(adTagLongBannerWeb);
        showAd(adTagLongBannerWeb);
      });
  }
  else
  {
      aiptag.cmd.display.push(function() 
      { 
        aipDisplayTag.display(adTagLongBannerMobile);
        showAd(adTagLongBannerMobile);
      });
  }
}

function destroyDeathAd()
{
  hideAd(adTagLongBannerWeb);
  hideAd(adTagLongBannerMobile);  
}
