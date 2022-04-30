$(window).on({
  mousemove: function (e) {
    /* 		console.log(
			`브라우저X좌표:${e.clientX}, 브라우저Y좌표:${e.clientY}\n 요소X좌표:${e.offsetX}, 요소Y좌표:${e.offsetY}\n 페이지X좌표 (페이지가 길어지면 브라우저와 차이발생) :${e.pageX}, 페이지Y좌표:${e.pageY}\n 디바이스 x 좌표:${e.screenX}, 디바이스 y 좌표:${e.screenY}\n`
		) */
    /* 		$(".cursor").css({ left: e.clientX - 25, top: e.clientY - 25 })
     */
		gsap.to(".cursor", {duration: .2, left: e.pageX -10, top: e.pageY -10})
  
		let pageX = e.pageX
		let pageY = e.pageY

		let standardX = $(window).width() / 2 - pageX
		let standardY = $(window).height() / 2 - pageY

		$(".sub_area .obj1").attr({ style: "transform : translate(" + standardX / 60 + "px," + standardY / 40 + "px)" })
		$(".sub_area .obj2").attr({ style: "transform : translate(" + standardX / 20 + "px," + standardY / 20 + "px)" })
	},
})
/* style:transform:translate(0px,0px) */