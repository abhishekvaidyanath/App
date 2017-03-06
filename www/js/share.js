function fbShare(){
	window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
	window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
	 window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
	 window.plugins.socialsharing.share('General share Message', null, null, null);
  };

function onDeviceReady() {
 
}


function domLoaded(){
  document.addEventListener("deviceready", onDeviceReady, false);

}
