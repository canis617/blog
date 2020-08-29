// custom typefaces
require('typeface-noto-sans-kr');
require('typeface-catamaran');

// polyfill
require('intersection-observer');

// gatsby-browser.js and gatsby-ssr.js
require('firebase/app');
require('firebase/database');
require('firebase/auth');
require('firebase/firestore');
require('firebase/functions');

const metaConfig = require('./gatsby-meta-config');

exports.onInitialClientRender = () => {
	if (metaConfig.share.facebookAppId) {
		window.fbAsyncInit = function() {
			FB.init({
				appId: metaConfig.share.facebookAppId,
				xfbml: true,
				version: 'v3.2',
			});
			FB.AppEvents.logPageView();
		};
		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	}
};
