function myAddEventListener() {
    var label = document.getElementById("forMyAudioControls");
    label.addEventListener("click",onLabelClickOrTouchstart,false);
    label.addEventListener("touchstart",onLabelClickOrTouchstart,false);

    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

    document.addEventListener( 'touchstart', onDocumentTouchStart, false );

    window.addEventListener( 'resize', onWindowResize, false );

    var classmates = document.getElementById("classmates");
    classmates.addEventListener("click", onClassmatesClickOrTouchstart, false);
    classmates.addEventListener("touchstart", onClassmatesClickOrTouchstart, false);

    var closer = document.getElementById("closer");
    closer.addEventListener("click", onCloser, false);
    closer.addEventListener("touchstart", onCloser, false); 
}
function onLabelClickOrTouchstart() {
    var audio = document.getElementById("myAudioControls");
    var img = document.getElementById("forMyAudioControls");
    if(audio.paused) {
        audio.play();
        img.src="picture/on.png";
        img.className="imgAnimation";
    }
    else {
        audio.pause();
        img.src="picture/off.png"
        img.className=" ";
    }
}
function onDocumentMouseDown( event ) {

    event.preventDefault();

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
}
function onDocumentMouseMove( event ) {

    var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

    lon -= movementX * 0.1;
    lat += movementY * 0.1;
}
function onDocumentMouseUp( event ) {

    document.removeEventListener( 'mousemove', onDocumentMouseMove );
    document.removeEventListener( 'mouseup', onDocumentMouseUp );
}
/**
* 鼠标滚轮改变相机焦距
*/
function onDocumentMouseWheel(event) {
    fov = event.wheelDeltaY * 0.05;
    if (camera.fov-fov>1 && camera.fov-fov<100 ){
        camera.fov -= fov;
        camera.updateProjectionMatrix();
    }
}
function onDocumentTouchStart( event ) {

    event.preventDefault();

    var touch = event.touches[ 0 ];

    touchX = touch.screenX;
    touchY = touch.screenY;

    document.addEventListener("touchmove",onDocumentTouchMove,false);
    document.addEventListener("touchend",onDocumentTouchEnd,false);
}
function onDocumentTouchEnd( event ) {

    event.preventDefault();

    document.removeEventListener("touchmove",onDocumentTouchMove);
    document.removeEventListener("touchend",onDocumentTouchStart);
}
function onDocumentTouchMove( event ) {

    event.preventDefault();

    var touch = event.touches[ 0 ];

    lon -= ( touch.screenX - touchX ) * 0.1;
    lat += ( touch.screenY - touchY ) * 0.1;
    touchX = touch.screenX;
    touchY = touch.screenY;
}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}
function onClassmatesClickOrTouchstart() {
    initPersonalCard();
        
    var classmates = document.getElementById("classmates");
    classmates.removeEventListener("click",onClassmatesClickOrTouchstart, false);
    classmates.removeEventListener("touchstart",onClassmatesClickOrTouchstart, false);

    var label = document.getElementById("forMyAudioControls");
    label.removeEventListener("click",onLabelClickOrTouchstart,false);
    label.removeEventListener("touchstart",onLabelClickOrTouchstart,false);
}
function onCloser() {
    var card = document.getElementById("personalCard");
    card.style.display="none";

    var classmates = document.getElementById("classmates");
    classmates.addEventListener("click", onClassmatesClickOrTouchstart, false);
    classmates.addEventListener("touchstart", onClassmatesClickOrTouchstart, false);

    window.addEventListener("shake",shakeEventDidOccur,false);

    var label = document.getElementById("forMyAudioControls");
    label.addEventListener("click",onLabelClickOrTouchstart,false);
    label.addEventListener("touchstart",onLabelClickOrTouchstart,false);
}
