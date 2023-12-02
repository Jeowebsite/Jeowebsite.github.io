'use strict';

//AB TEST
var pendingGoogleOptimiseABTestLoadDetails = null;

//ADS
const AdProviderPlaywire = "Playwire";
const AdProviderGoogleH5Games = "GoogleH5Games";
const AdProviderAdinplay = "AdinPlay";
var displayAdProvider = AdProviderAdinplay;
var videoAdProvider = AdProviderAdinplay;

var playwireRampInitialised = false;

function isPlaywireEnabled()
{
  return displayAdProvider === AdProviderPlaywire || videoAdProvider === AdProviderPlaywire;
}

function isAdinPlayEnabled()
{
  return displayAdProvider === AdProviderAdinplay || videoAdProvider === AdProviderAdinplay;
}

function isGoogleH5GamesEnabled()
{
  return videoAdProvider === AdProviderGoogleH5Games;
}

//OFF CANVAS ADS
var debugAdContainers = false;
var offCanvasAdsEnabled = false;
var showBtmAd = false;
var showRightAd = true;
var setOffCanvasAdDivDimensions = false; //false by default, true for crazygames
var onlyShowOffCanvasAdsOnDeath = false;

var maxAdWidthPercentage = 0.25;
var maxAdHeightPercentage = 0.25;
var offCanvasBorderSize = "5";
var offCanvasBorderStyle = `#99c7fc ${offCanvasBorderSize}px solid`;
var offCanvasBorderBtmRightCornerRadiusStyle = "8px";

var btmAdResolutions = [
  { w: 970, h: 250, adId: "smashkarts-io_970x250_2" },
  { w: 970, h: 90, adId: "smashkarts-io_970x90" },
  { w: 728, h: 90, adId: "smashkarts-io_728x90_2" },
];

var rightAdResolutions = [
  { w: 336, h: 1050, adId: "smashkarts-io_336x1050" },
  { w: 300, h: 600, adId: "smashkarts-io_300x600" },
  { w: 160, h: 600, adId: "smashkarts-io_160x600" },
];

var btmAdResolutionsMobile = [
  { w: 320, h: 50, adId: "smashkarts-io_320x50" },
];

var rightAdResolutionsMobile = [
];

var currBtmAdIndex = -1;
var currRightAdIndex = -1;
