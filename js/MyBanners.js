// ---------------------------------------------------------------------------------------------------------
// Banner Variables
// ---------------------------------------------------------------------------------------------------------

var snowBrosBanner = document.querySelector('.banner');
var snowBrosBannerSelected = "bannerSelected";
var snowBrosMusic = document.querySelector('.bannerMusic');

var banner = document.getElementById("animatedBanner");
var lightning = document.createElement("img")
var storm = document.getElementById("storm");
var pauseButton = document.getElementById("pause")

var peachBanner = document.querySelector(".peachBanner");
var peachBannerSelected = "peachBannerSelected"
var peachMusic = document.querySelector('.peachBannerMusic');

var marioBanner = document.querySelector(".marioBanner");
var marioBannerSelected = "marioBannerSelected"
var marioMusic = document.querySelector('.marioBannerMusic');

var musicBannerArray = 
				[	
					{music: snowBrosMusic, banner: snowBrosBanner, bannerSelected: snowBrosBannerSelected }, 
					{music: storm, banner: banner, bannerSelected: lightning},
					{music: peachMusic, banner: peachBanner, bannerSelected: peachBannerSelected},
					{music: marioMusic, banner: marioBanner, bannerSelected: marioBannerSelected}
				]

// ---------------------------------------------------------------------------------------------------------
// Banner onClickListeners
// ---------------------------------------------------------------------------------------------------------

snowBrosBanner.addEventListener("click", function() {
	var snowBrosMusicBanner = musicBannerArray[0]; 
	musicSetter(snowBrosMusicBanner);
})

banner.addEventListener("click", function() {
	resetAllMusic();
	resetAllBanners();
	banner.appendChild(lightning);
	lightning.setAttribute("src", "assets/img/l.png");
	lightning.classList.add("lightning");
	storm.currentTime = 0;
	storm.play()

});

pause.addEventListener("click", function () {
	resetAllMusic();
})

peachBanner.addEventListener("click", function() {
	var peachMusicBanner = musicBannerArray[2]; 
	musicSetter(peachMusicBanner);
})
marioBanner.addEventListener("click", function() {
	var marioMusicBanner = musicBannerArray[3]; 
	musicSetter(marioMusicBanner);
})

// ---------------------------------------------------------------------------------------------------------
// Banner Functions
// ---------------------------------------------------------------------------------------------------------

function musicSwitch(music, banner, bannerString) {
	resetAllBanners()
	resetAllMusic(bannerString);
	banner.classList.toggle(bannerString)
}

function musicSetter(musicBanner) {
	musicSwitch(musicBanner.music, musicBanner.banner, musicBanner.bannerSelected);
}

function resetAllMusic (bannerSelected) {

	musicBannerArray.forEach(object => {
		if (bannerSelected !== object.bannerSelected) {
			object.music.pause();
			object.music.currentTime = 0;
		} else {
			if (object.music.paused){
				object.music.play();
			} else {
				object.music.pause();
			}
		}
	})

	if (lightning.parentNode !== null){
		lightning.parentNode.removeChild(lightning);
	}
}

function resetAllBanners () {
	musicBannerArray.forEach(object => {
		var banner = object.banner;
		var bannerSelected = object.bannerSelected

		if (bannerSelected.tagName !== 'IMG') {
			banner.classList.remove(object.bannerSelected);
		}
		else {
			if (bannerSelected.parentNode !== null){
				bannerSelected.parentNode.removeChild(bannerSelected);
			}
		}
	})
}