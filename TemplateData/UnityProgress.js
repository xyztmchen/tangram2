function UnityProgress (dom)
{
this.progress = 0.0;
this.message = "";
this.dom = dom;

var parent = dom.parentNode;

var loadingBox = document.getElementById("loadingBox");
var bgBar = document.getElementById("bgBar");
var pBarBackground = document.getElementById("progressBarBackground");
var pbar = document.getElementById("progressBar");
var loadingText = document.getElementById("loadingText");

var bgBarHeight;
var bgBarWitdh;
var pBarBackgroundHeight;
var pBarBackgroundWitdh;

this.SetProgress = function (progress)
{
if (this.progress < progress)
this.progress = progress;

if(progress < 0.5){
this.SetMessage("Preparing...");
}
else if(progress >= 0.5 && progress < 1){
this.SetMessage("Running...");
}
else if (progress >= 1) {
loadingBox.style.display = "none";
}

this.Update();
}

this.SetMessage = function (message)
{
this.message = message;

this.Update();
}

this.Clear = function()
{
loadingBox.style.display = "none";
}

this.Update = function()
{

if(bgBar.currentStyle)
{
/****************************************

IE Opera

****************************************/
bgBarWitdh = bgBar.currentStyle.width;
bgBarHeight = bgBar.currentStyle.height;

}
else
{
/****************************************

Firefox needs the full css code to work

****************************************/
bgBarWitdh = getComputedStyle(bgBar,'').getPropertyValue('width').replace('px','');
bgBarHeight = getComputedStyle(bgBar,'').getPropertyValue('height').replace('px','');
}

if(pBarBackground.currentStyle)
{
/****************************************

IE Opera

****************************************/
pBarBackgroundWitdh = pBarBackground.currentStyle.width;
pBarBackgroundHeight = pBarBackground.currentStyle.height;

}
else
{
/****************************************

Firefox needs the full css code to work

****************************************/
pBarBackgroundWitdh = getComputedStyle(pBarBackground,'').getPropertyValue('width').replace('px','');
pBarBackgroundHeight = getComputedStyle(pBarBackground,'').getPropertyValue('height').replace('px','');
}
var length = ((pBarBackgroundWitdh * Math.min(this.progress, 1)));
pbar.style.width = length + "px";
pbar.style.height = pBarBackgroundHeight + "px";
/*
loadingText.innerHTML = this.message;
*/
}

this.Update ();
}