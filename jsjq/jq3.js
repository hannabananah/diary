var pics=document.getElementsByClassName(`pic`);
var lightbox=document.getElementById(`lightbox`);
var lightboxImage=document.getElementById(`lightboxImage`);
// 하나의 이미지를(pics) 클릭하면 해당하는 인덱스의 이미지가 크게(lightboxImage) 뜨도록(lightbox) 한다.

for(i=0; i<pics.length; i++){
    // 각각의 pics를 클릭하면 해당하는 인덱스 번호를 알림창으로 띄워라.
    pics[i].addEventListener(`click`,showLightbox)
}
function showLightbox(){
    var bigLocation=this.getAttribute(`data-src`);
    lightboxImage.setAttribute(`src`,bigLocation);
    lightbox.style.display=`block`;
}

// lightbox를 클릭하면 커진 이미지 창이 안보이게 하기.
lightbox.onclick=function(){
    lightbox.style.display=`none`;
}