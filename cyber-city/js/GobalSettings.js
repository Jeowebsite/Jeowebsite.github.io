    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    }


     
    
    //alert('hi')
    let Setting14b = getCookie("PagePrevent");

    function checkPageClose(event) {
      
        
            event.returnValue = "Prevent Page Close Is Active, You Can Click Off Of This";
      
       
     
    }
    function checkPageClose2() {
        if(Setting14b==="true") {
        
            window.onbeforeunload = function(event) {
                // return a string to prevent the page from closing
                event.preventDefault();
                return "Prevent Page Close Is Active, You Can Click Off Of This";
            };
            window.addEventListener("beforeunload", checkPageClose);

        } 
        if(Setting14b==="false") {
        
        }
    }
    console.log('CookiePAGE Value: ' + Setting14b + "SzGames-Scripts Loaded")
    checkPageClose2()


    //CLOAK

    let tabData = {};
const tab = localStorage.getItem("tab");

if (tab) {
  try {
    tabData = JSON.parse(tab);
  } catch (e) {
    console.log("Error parsing tab data from localStorage", e);
  }
} else {

}

const settingsDefaultTab = {
  title: "Settings - Sz Games",
  icon: "https://github.com/sz-games/home/blob/main/G.png?raw=true",
};

const setTitle = (title = "") => {
  document.title = title || settingsDefaultTab.title;
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem("tab", JSON.stringify(tabData));
};

const setFavicon = (url) => {
  const faviconLink = document.querySelector("link[rel='icon']");
  
  // Try to load the URL as an image
  const img = new Image();
  img.src = url;
  img.onload = () => {
    faviconLink.href = url;
    if (url) {
      tabData.icon = url;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };

  img.onerror = () => {
    // If the URL is not an image, use Google's Favicon API
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    faviconLink.href = faviconUrl || settingsDefaultTab.icon;
    if (url) {
      tabData.icon = faviconUrl;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem("tab", JSON.stringify(tabData));
  };
};


const resetTab = () => {
  setTitle();
  setFavicon();

  localStorage.setItem("tab", JSON.stringify({}));
};


if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
}

//PANIC
let PANIC = localStorage.getItem('panic')

if(PANIC) {
    document.addEventListener('keydown', function(event) {
        if (event.key === '\\') {
            // Backslash key was pressed
            console.log("PANIC");
            window.location = PANIC;
        }
    });
    
} else {
    console.log('clear')
}

function panicURL() {
    let URL3 = document.getElementById('url-target2').value

    if(URL3.includes("https://")) {
    

        localStorage.setItem('panic', URL3)

        PANIC = localStorage.getItem('panic')
    } else {
        

        localStorage.setItem('panic', 'https://' + URL3)

        PANIC = localStorage.getItem('panic')
    }
}

function clearPANIC() {

    localStorage.clear('panic')

    console.log('clear')
    PANIC = localStorage.getItem('panic')

}