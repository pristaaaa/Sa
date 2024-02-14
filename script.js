const manifestUri = "https://linearjitp02-playback.astro.com.my/dash-wv/linear/2504/default.mpd";
        async function init() {
            const video = document.getElementById('video');
            const ui = video['ui'];
            const controls = ui.getControls();
            const player = controls.getPlayer();
            window.player = player;
            window.ui = ui;
            const config = {
                 enableKeyboardPlaybackControls: true,
                'seekBarColors': {
                 base: 'rgba(255,255,255,.2)',
                 buffered: 'rgba(255,255,255,.4)',
                 played: 'rgb(255,0,0)',
              },
            };
            ui.configure(config);
            player.configure({
                drm: {
                    "clearKeys": {
                        '03c2e0af2f8159f9f0ce9b5dbc865f10': 'cd84ed136b0cc71f8ab8cd4d4f6a2e4c'
                    }
                }
            });
            document.addEventListener('keydown', (e) => {
            const videoContainer = document.querySelector('video');
            let is_fullscreen = () => !!document.fullscreenElement
            let audio_vol = video.volume;
            if (e.key == 'f') {
                if (is_fullscreen()) {
                    document.exitFullscreen();
                } else {
                    videoContainer.requestFullscreen();
                }
                e.preventDefault();
                }
                else if (e.key == ' ') {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                    e.preventDefault();
                }
                else if (e.key == "ArrowUp") {
                    e.preventDefault();
                    if (audio_vol != 1) {
                        try {
                            video.volume = audio_vol + 0.05;
                        }
                        catch (err) {
                            video.volume = 1;
                        }
                    }
                }
                else if (e.key == "ArrowDown") {
                    e.preventDefault();
                    if (audio_vol != 0) {
                        try {
                            video.volume = audio_vol - 0.05;
                        }
                        catch (err) {
                            video.volume = 0;
                        }
                    }
                }

               else if (e.key == 'm') {
                    e.preventDefault();
                    video.muted = !video.muted;
                }
                    
            });

            player.addEventListener('error', onPlayerErrorEvent);
            controls.addEventListener('error', onUIErrorEvent);
            try {
                await player.load(manifestUri);
                console.log('The video has now been loaded!');
            } catch (error) {
                onPlayerError(error);
        }}

        function onPlayerErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }
        document.addEventListener('shaka-ui-loaded', init);
        document.addEventListener('shaka-ui-load-failed', initFailed); 


if(confirm(" Join Our Telegram Channel Click Ok Otherwise Click Cancel ")) { window.location.href = "https://t.me/+vi_UBdhOsN5jYzY1" }
