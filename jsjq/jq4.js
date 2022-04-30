
// // 탭버튼 a태그의 href 속성을 취득하여 패널의 아이디로 넣기
// // html에서 얻어야 할 값들
// // a태그의 href 속성, 패널들
// const tabContent = document.querySelectorAll(`#tab-content>div`);
// console.log(tabContent);
// const targetLink = document.querySelectorAll(`.tab-menu a`);

// for (let i = 0; i < targetLink.length; i++) {
//    targetLink[i].addEventListener(`click`, (e) => {
//       // a태그가 가지고 있는 기본 이벤트 속성 막음
//       e.preventDefault();

//       for (let j = 0; j < targetLink.length; j++) {
//          // 선택된 하나에만 무언가를 적용할 때
//          // 1. 모두 지움
//          // 2. 한개만 적용
//          document.querySelector()
//          targetLink[j].classList.remove(`active`);
//          e.target.classList.add(`add`);
//       }

//       let orgTarget = e.target.getAttribute(`href`);
//       console.log(orgTarget);
//       for (let x = 0; x < tabContent.length; x++) {
//          tabContent[x].style.display = `none`;
//       }
//       document.querySelector(orgTarget).style.display = `block`;
//       // document.getElementById(orgTarget).style.display=`block`;
//    })
//    document.querySelector(`#tabs-1`).style.display = `block`;
// }

//JQ
let tabWrapper=$(`.tab-wrapper`);
let targetLink=tabWrapper.find(`.tab-menu a`);
let tabContent=tabWrapper.find(`#tab-content>div`);

targetLink.each(function(i,e){
   console.log(i,e);
   let tg=$(this);
   let tgAnc=tg.attr(`href`);
   let tgt=tgAnc.substr(1);
   tg.click(function(e){
      e.preventDefault();
      targetLink.removeClass(`active`);
      tg.addClass(`active`);
      tabContent.hide();
      $("#"+tgt).show();
      // $("#"+tgt).show() 는
      //$(`#tab-1`).show()
      //$(`#tab-2`).show()
      //$(`#tab-3`).show()  과 동일한 값
   })
})
tabContent.eq(0).show();