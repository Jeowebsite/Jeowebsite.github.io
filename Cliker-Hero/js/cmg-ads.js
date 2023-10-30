var version="1.4-clss-4715"
//CLSS-4906 updated subscriber cookie
jQuery.fn.once = function(processed_class)
{
  if (typeof processed_class == 'undefined')
  {
    processed_class = 'processed';
  }
  return this.not('.' + processed_class).addClass(processed_class);
};

var adBreakInterval = 180000;
var gameInterstitialAdTimerDone = false;
gameInterstitialAdTimer = setTimeout(function () {
  currentTime = new Date();
  gameInterstitialAdTimerAction()
}, adBreakInterval);

function getCookie(key) {
	var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
	return keyValue ? keyValue[2] : null;
}

function adBreakRequestInit() {  //request ads immediately - internal function
	adBreakInterval = 1000; //1sec
	gameInterstitialAdTimerDone = true;
}

function adBreakRequest() {  //request ads immediately - internal function
	adBreakRequestInit();
	cmgAdBreak(); //start the ad call
}
/*
  * Interstitial ad timer functions
  */
  function gameInterstitialAdTimerAction() {
    gameInterstitialAdTimerDone = true;
    clearGameInterstitialAdTimer();
  }
  function clearGameInterstitialAdTimer() {
    console.log("cmgAdBreak: timer completed, ready to display the ad next time");
    clearTimeout(gameInterstitialAdTimer);
    gameInterstitialAdTimer = null;
  }

function init() {

  var script = document.createElement("script");
  script.src = "https://cdn.intergi.com/prebid/cmg-prebid.js";
  script.async = false;
  document.head.appendChild(script);
  var script2 = document.createElement("script");
  script2.src = "https://cdn.intergi.com/cmg/cmg-headerbidding.js";
  script2.async = false;
  document.head.appendChild(script2);
  console.log("added cmg-headerbidding");
  var script3 = document.createElement("script");
  script3.src = "https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js";
  script3.async = false;
  document.head.appendChild(script3);
  console.log("cmgAdBreak initialized");
  window.top.postMessage('midroll initialized', '*') //for game qa page

  $(document).ready(function () {

    var html = '<style>#adcontainer >div {width:100% !important;height:100%;position:absolute;}</style>' +
    	'<div class="ads-popup" style="display:none"><div id="afg_container"><div class="load-wrap"><script type="text/javascript">' +
          'jQuery(\'<h3 class="loadingText">Just a moment while your game loads</h3><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div>\').prependTo(\'.load-wrap\');' +
      '</script></div></div>' +
	  '<!--Start of Preloader call -->' +
	  '<div id="afg_preloader" >' +
	    '<div id="container123" style="left: 50%;top: 50%;width: 640px;transform: translate(-50%,-50%);position: absolute">' +
	      '<div id="videoplayer"></div>' +
	      '<div id="adcontainer" style="height: 1px; width: 640px;"></div>' +
	    '</div>' +
	  '</div>' +
	  '<!-- Continue to Game container with timer -->' +
	  '<div id="continue-container" style="display:none">' +
	    '<div id="img-button-container">' +
	      '<div id="img-button-self" class="img-button">' +
	      '</div>' +
	      '<div class="continue-lnk-container-rsection">' +
	        '<span id="continue-link">Continue in </span>' +
	        '<span id="timer_div" style="margin-left:5px;">8</span>' +
	      '</div>' +
	    '</div>' +
	  '</div>' +
    '</div>' +
	  '</div>';

    $("body").prepend(html);

  });


}

//reInit() function is called for to ads-popup div when calling midroll ads 2nd,3rd time... onwards
function reInit() {

    var html = '<div class="ads-popup" style="display:none"><div id="afg_container"><div class="load-wrap"><script type="text/javascript">' +
          'jQuery(\'<h3 class="loadingText">Just a moment while your game loads</h3><div class="circle"></div><div class="circle"></div><div class="circle"></div><div class="circle"></div>\').prependTo(\'.load-wrap\');' +
      '</script></div></div>' +
	  '<!--Start of Preloader call -->' +
	  '<div id="afg_preloader" >' +
	    '<div id="container123" style="left: 50%;top: 50%;width: 640px;transform: translate(-50%,-50%);position: absolute">' +
	      '<div id="videoplayer"></div>' +
	      '<div id="adcontainer" style="height: 1px; width: 640px;"></div>' +
	    '</div>' +
	  '</div>' +
	  '<!-- Continue to Game container with timer -->' +
	  '<div id="continue-container" style="display:none">' +
	    '<div id="img-button-container">' +
	      '<div id="img-button-self" class="img-button">' +
	      '</div>' +
	      '<div class="continue-lnk-container-rsection">' +
	        '<span id="continue-link">Continue in </span>' +
	        '<span id="timer_div" style="margin-left:5px;">8</span>' +
	      '</div>' +
	    '</div>' +
	  '</div>' +
    '</div>' +
	  '</div>';

    $("body").prepend(html);

}


init();

//custom Events
const adBreakComplete = new CustomEvent("adBreakComplete");
const adBreakStart = new CustomEvent("adBreakStart");

//reInitCounter counter is used to call midroll ads multiple times
var reInitCounter = 0;

function cmg_remove_madg() {
    jQuery(".ads-popup").remove();
    reInitCounter++;
    // jQuery("#afg_container").hide();
    // jQuery("#afg_preloader").hide();
    // jQuery("#continue-container").hide();
    //jQuery(".falseBtn").remove();
    document.dispatchEvent(adBreakComplete);
    gameInterstitialAdTimerDone = false;
	gameInterstitialAdTimer = setTimeout(function () {
		currentTime = new Date();
		console.log("cmgAdBreak starting the timer at: "+ currentTime);
		gameInterstitialAdTimerAction()
	}, adBreakInterval);
	gameInterstitialAdTimerDone = false;
	if(typeof adsManager != "undefined" && adsManager) {
      adsManager.destroy();
    }
    //add focus back to game if the game is implemented with canvas
    if(document.getElementById("canvas")!= null) {
	  document.getElementById("canvas").focus();
    }
    window.top.postMessage('midroll completed', '*') //for game qa page
}


function cmgRewardAds() {
	gameInterstitialAdTimerAction();
	cmgAdBreak();
}

cmgAInvD = false;

//New desktop midroll Ad
    function cmgAdBreak() {
	  var cmatgame_subscriber = getCookie('cmg_premium_play');
	  if(cmatgame_subscriber !== null) {
		  document.dispatchEvent(adBreakComplete);
		  console.log("Premium subscriber");
		  return;
	  }
	  console.log("cmgAdBreak called");
    window.top.postMessage('midroll called', '*') //for game qa page
	  if(typeof gameInterstitialAdTimerDone != "undefined" && gameInterstitialAdTimerDone) {
		document.dispatchEvent(adBreakStart);
	  } else {
		document.dispatchEvent(adBreakComplete);
		console.log("cmgAdBreak:Too early to invoke midroll ads, wait for " + adBreakInterval + " milliseconds");
		return;
	  }
	  if(reInitCounter>0) {
		reInit();
	  }
	  midRollAdStarted = true;
      midroll_ads_timer = 8; //8 seconds timers.
      cmgAInvD = false;
      jQuery(".ads-popup").show();
      jQuery(".ads-popup").css({'position':'absolute','left':'0','top':'0','z-index':'99999','background':'#000','width':'100%','height':'100%'})
      jQuery("#adcontainer").css({'padding-bottom':'56%','width':'100%','position':'relative'});
      jQuery("#adcontainer >div").css({'width':'100%','height':'100%','position':'absolute'})
      jQuery("#timer_div a").css({'color':'#f1db00'})
      jQuery(".continue-lnk-container-rsection").css({'font-size':'23px','color':'#f1db00'})
      jQuery("#continue-container").css({'position':'absolute','right':'10px','bottom':'10px'})
      // jQuery("#afg_container").show();
      //jQuery(".field-game").hide();
      var x = jQuery(document).scrollLeft();
      var y = jQuery(document).scrollTop();
      /*
	  if(!jQuery(".falseBtn").length){
        jQuery("<div class='falseBtn' tabindex='0'></div>").insertBefore(jQuery(".field-game")); //to mute: create a false element
      }
      jQuery(".falseBtn").focus(); //to mute: just focus out from game
      window.scrollTo(x, y); //to prevent scroll on focus
      */
      //jQuery('.game-progress-status').hide();
      jQuery('#img-button-self').html('&nbsp;');
      jQuery("#timer_div").addClass('continue-button-link');
      // jQuery("#afg_container").css({"z-index":2});
	  jQuery("#adcontainer").css({height:"100%", "z-index":10});
      jQuery('#afg_container .load-wrap').html('');
      jQuery('#afg_container').addClass('top-continue-btn');
      jQuery('.continue-lnk-container-rsection').css({'text-align':'right'})
      // if(jQuery('.continue-lnk-container-rsection').length==1){
      //   jQuery('.continue-lnk-container-rsection').once().clone().appendTo($('#afg_container'))
      // }
       var adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/137548614/1023174/71134/1023174-71134-video&description_url=https%3A%2F%2Fwww.coolmathgames.com%2F&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=640x480&unviewed_position_start=1';
       jQuery("#afg_preloader").show();
       jQuery("#continue-container").show();
       jQuery("#continue-link").text("Skip Ad in");
       jQuery(".continue-button-link").text(midroll_ads_timer); //8 seconds timer
       var swf_game_url = jQuery("#swfgame").attr("src");
       /*
       //Note: Use below test adTagUrl only in non prod
       adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
       'sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&' +
       'impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&' +
       'cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=';
       application = new Application(true, adTagUrl);
       */
       var auctionCallback = function (displayAds, videoUrl) {
         application = new Application(displayAds, videoUrl);
       };
       if(!cmgAInvD) {
         cmgAInvD = true;
         var parentURL = (window.location != window.parent.location) ? document.referrer : document.location.href;
         var gameURL = parentURL.split('/')[3];
         console.log(new Date()+ " CMGAds Midroll inside game: window.PW_CMG.startAuction...." + gameURL);
         if(typeof window.PW_CMG != "undefined") {
           window.PW_CMG.startAuction(auctionCallback, undefined, gameURL);
         }
       }

       /*if (document.documentElement.clientWidth >= 960 - ( window.innerWidth-jQuery(document).width() ) ) {
         prerollAdStart = "dtp";
       }
       */
       var seconds_left = midroll_ads_timer;
       var midrollIntervalId = setInterval(function () {
         seconds_left--;
         jQuery(".continue-button-link").html(seconds_left);
         if (seconds_left <= 0) {
           if (jQuery(".continue-button-link") != null) {
             jQuery("#continue-link").each(function(e){
              jQuery(".continue-lnk-container-rsection #continue-link").text("");
              $(this).html('');
             })
             jQuery(".continue-button-link").html('<a href="javascript:cmg_remove_madg();" style="color:#f1db00;text-transform:uppercase"><span class="continue-link-yellow" style="font-family:Georgia, serif;">Return to Game <span style="font-family:Times New Roman;">&#x25BA;</span></div></a>');
           }
           clearInterval(midrollIntervalId);
         }
       }, 1000);

}
     /**
     * Handles user interaction and creates the player and ads controllers.
     */
    var adsManager;
    var pagepreRollType = '';
    var Application = function (displayAds, adTagUrl, preRollType) {
      if (typeof preRollType == "undefined") { //desktop
        preRollType = "";
      } else {
        pagepreRollType = preRollType;
      }
      this.playing_ = false;
      this.adsActive_ = false;
      this.adsDone_ = false;
      if (typeof displayAds === 'undefined' || displayAds === null) {
        this.displayAds = true;
      } else {
        this.displayAds = displayAds;
      }
      this.adTagUrl_ = adTagUrl;

      this.videoPlayer_ = new VideoPlayer(preRollType);
      //&& (typeof targeted_state === 'undefined' || watchAdtoUnlockGameIsClicked == "true")
      if (jQuery(window).width() >= 610 && jQuery(window).height() >= 610) {
        this.videoPlayer_.width = 640;
        //this.videoPlayer_.height = 480;
        this.videoPlayer_.height = "100%";
      } else {
        //this.videoPlayer_.width = 300;
        //this.videoPlayer_.height = 250;
      }
      if (this.displayAds) { // console.log("Preload ads for non subscription time games");
        this.ads_ = new Ads(this, this.videoPlayer_);
        // Adx Preroll Tag with fallback display Ad The user clicked/tapped - inform the ads controller that this code is being run in a user action thread.
        this.ads_.initialUserAction();
        // At the same time, initialize the content player as well. When content is loaded, we'll issue the ad request to prevent it from interfering with the initialization. See
        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/ads#iosvideo for more information.
        this.videoPlayer_.preloadContent(this.bind_(this, this.loadAds_));
        this.adsDone_ = true;
      } else {
        // console.log("Do not preload ads for Get Ad Free Games user");
        // removePrerollAndDisplayGame();
        jQuery(document).ready(function () {
          if (typeof display_game_progressbar === "function"){
            display_game_progressbar(gameId);
          }
        });
      }
    };

    Application.prototype.bind_ = function (thisObj, fn) {
      return function () {
        fn.apply(thisObj, arguments);
      };
    };

    Application.prototype.loadAds_ = function () {
      this.ads_.requestAds(this.adTagUrl_);
    };

    /**
           * Handles video player functionality.
           */
    var VideoPlayer = function (preRollType) {
      this.contentPlayer = document.getElementById(preRollType+'content123');
      this.adContainer = document.getElementById(preRollType+'adcontainer');
      this.videoPlayerContainer_ = document.getElementById(preRollType+'videoplayer');
      this.width = 640;
      this.height = "100%";
    };

    VideoPlayer.prototype.preloadContent = function (contentLoadedAction) {
      contentLoadedAction();
    };
    VideoPlayer.prototype.play = function () {
      this.contentPlayer.play();
    };

    VideoPlayer.prototype.pause = function () {
      this.contentPlayer.pause();
    };

    /**
     * Shows how to use the IMA SDK to request and display ads.
     */
    var Ads = function (application, videoPlayer) {
      this.application_ = application;
      this.videoPlayer_ = videoPlayer;
      this.customClickDiv_ = document.getElementById('customClick');
      this.contentCompleteCalled_ = false;
      google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
      // Call setLocale() to localize language text and downloaded swfs google.ima.settings.setLocale('fr');
      this.adDisplayContainer_ = new google.ima.AdDisplayContainer(this.videoPlayer_.adContainer, this.videoPlayer_.contentPlayer, this.customClickDiv_);
      this.adsLoader_ = new google.ima.AdsLoader(this.adDisplayContainer_);
      this.adsManager_ = null;

      this.adsLoader_.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded_, false, this);
      this.adsLoader_.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError_, false, this);
    };

    // On iOS and Android devices, video playback must begin in a user action. AdDisplayContainer provides a initialize() API to be called at appropriate time. This should be called when the user clicks or taps.
    Ads.prototype.initialUserAction = function () {
      this.adDisplayContainer_.initialize();
      if (typeof this.videoPlayer_ != "undefined" && typeof this.videoPlayer_.contentPlayer != "undefined" && this.videoPlayer_.contentPlayer != null) {
        this.videoPlayer_.contentPlayer.load();
      }
    };

    Ads.prototype.requestAds = function (adTagUrl) {
      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = adTagUrl;
      adsRequest.linearAdSlotWidth = this.videoPlayer_.width;
      adsRequest.linearAdSlotHeight = this.videoPlayer_.height;
      adsRequest.nonLinearAdSlotWidth = this.videoPlayer_.width;
      adsRequest.nonLinearAdSlotHeight = this.videoPlayer_.height;
      this.adsLoader_.requestAds(adsRequest);
    };

    Ads.prototype.onAdsManagerLoaded_ = function (adsManagerLoadedEvent) { // console.log('Ads loaded.');
      var adsRenderingSettings = new google.ima.AdsRenderingSettings();
      // adsRenderingSettings.loadVideoTimeout = 4000;
      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
      this.adsManager_ = adsManagerLoadedEvent.getAdsManager(this.videoPlayer_.contentPlayer, adsRenderingSettings);
      this.adsManager_.setVolume(0);
      this.processAdsManager_(this.adsManager_);
      adsManager = this.adsManager_;
    };

    Ads.prototype.processAdsManager_ = function (adsManager) {
      if (adsManager.isCustomClickTrackingUsed()) {
        this.customClickDiv_.style.display = 'table';
      }
      // Handle errors.
      adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError_, false, this);
      var events = [
        google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
        google.ima.AdEvent.Type.COMPLETE,
        google.ima.AdEvent.Type.FIRST_QUARTILE,
        google.ima.AdEvent.Type.LOADED,
        google.ima.AdEvent.Type.MIDPOINT,
        google.ima.AdEvent.Type.STARTED,
        google.ima.AdEvent.Type.THIRD_QUARTILE,
        google.ima.AdEvent.Type.USER_CLOSE,
        google.ima.AdEvent.Type.PAUSED
      ];
      for (var index in events) {
        adsManager.addEventListener(events[index], this.onAdEvent_, false, this);
      }

      var initWidth,
        initHeight;

      initWidth = this.videoPlayer_.width;
      initHeight = this.videoPlayer_.height;

      adsManager.init(initWidth, initHeight, google.ima.ViewMode.NORMAL);

      adsManager.start();
    };
    Ads.prototype.onAdEvent_ = function (adEvent) {
      console.log("Preroll adEvent type: "+adEvent.type +" --> "+new Date());
      if (adEvent.type == google.ima.AdEvent.Type.LOADED) {
        var ad = adEvent.getAd();
        //hide the dummy video
        if (jQuery("#content123").length && jQuery("#content123").is(":visible")) {
          jQuery("#content123").hide();
        } else if (jQuery("#m-content123").length && jQuery("#m-content123").is(":visible")) {
          jQuery("#m-content123").hide();
        } else if (jQuery("#r-content123").length && jQuery("#r-content123").is(":visible")) {
          jQuery("#r-content123").hide();
        }
      }
      if (adEvent.type == google.ima.AdEvent.Type.COMPLETE) {
        if(typeof midRollAdStarted != "undefined" && midRollAdStarted) {
          cmg_remove_madg();
        }
      }
      if (adEvent.type == google.ima.AdEvent.Type.ALL_ADS_COMPLETED) {
        if(typeof midRollAdStarted != "undefined" && midRollAdStarted) {
          cmg_remove_madg();
        }

      }
      if (adEvent.type == google.ima.AdEvent.Type.USER_CLOSE) {
        if(typeof midRollAdStarted != "undefined" && midRollAdStarted) {
            cmg_remove_madg();
        }
      }

    };
    Ads.prototype.onAdError_ = function (adErrorEvent) {
      if (this.adsManager_) {
        this.adsManager_.destroy();
      }
      if(typeof midRollAdStarted != "undefined" && midRollAdStarted) {
       cmg_remove_madg();
      }
      // TODO remove the ad slot and display the game this.application_.resumeAfterAd();
      // TODO UNCOMMENT BELOW removePrerollAndDisplayGame();
    };

//Local
function setCookie(key, value, exptime) {
    var d = new Date();
    d.setTime(d.getTime() + exptime);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = key + '=' + value + '; ' + expires + '; path=/; domain=.' + window.location.host;
}
//iframe based games
function isSubscriber (evt) {
	var message;
	if (/https:\/\/(d9-local-dev|dev|dev2|dev3|stage|stage-edit|stage2|stage2-edit|www|edit)\.coolmathgames\.com/.test(evt.origin) ) {
		if(evt.data == "valid-subscriber" && "function" == typeof setCookie) {
			setCookie("cmg_premium_play", "cmgpremium");
		} else if(evt.data == "not-subscriber" && "function" == typeof setCookie) {
			setCookie("cmg_premium_play", "cmgpremium", -10000);
		}
	}
}

if (window.addEventListener) {
	window.addEventListener("message", isSubscriber, false);
} else {
	window.attachEvent("onmessage", isSubscriber);
}
