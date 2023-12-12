odoo.define('inveta_snippet.youtube_video_carousel', function (require) {
    "use strict";

    var Widget = require('web.Widget');

    var YouTubeVideoCarousel = Widget.extend({
        start: function () {
            var apiKey = 'AIzaSyA2_omB5BCx1ygWPwdC8DgxTlQxhSIVCBY';
            var videoIds = ['CzBRyhiiyUQ', 'VIDEO_ID_2', 'VIDEO_ID_3', 'VIDEO_ID_4'];

            var createVideoThumbnail = function (videoId) {
                var thumbnail = document.createElement('img');
                thumbnail.src = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';
                thumbnail.classList.add('videoThumbnail');
                thumbnail.addEventListener('click', function () {
                    playVideo(videoId);
                });
                return thumbnail;
            };

            var playVideo = function (videoId) {
                player.loadVideoById(videoId);
            };

            var onYouTubeIframeAPIReady = function () {
                player = new YT.Player('videoPlayer', {
                    height: '360',
                    width: '640',
                    playerVars: {
                        'autoplay': 0,
                        'controls': 1,
                        'showinfo': 0,
                        'rel': 0,
                        'modestbranding': 1
                    }
                });

                var videoCarousel = document.getElementById('videoCarousel');
                videoIds.forEach(function (videoId) {
                    var thumbnail = createVideoThumbnail(videoId);
                    videoCarousel.appendChild(thumbnail);
                });
            };

            // Load YouTube Iframe API script
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            return this._super();
        },
    });

    return YouTubeVideoCarousel;
});