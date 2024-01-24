const manifestUri = "https://linearjitp02-playback.astro.com.my/dash-wv/linear/2504/default.mpd";

function addClearKey(keyId, keyValue) {
    window.player.configure({
        drm: {
            "clearKeys": {
                 03c2e0af2f8159f9f0ce9b5dbc865f10: cd84ed136b0cc71f8ab8cd4d4f6a2e4c
            }
        }
    });
}

async function init() {
    const video = document.getElementById('video');
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);

    try {
        await player.load(manifestUri);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function onPlayerError(error) {
    console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function initFailed(errorEvent) {
    console.error('Unable to load the UI library!');
}

document.addEventListener('shaka-ui-loaded', init);
document.addEventListener('shaka-ui-load-failed', initFailed);
