// // -----------------------------------------------------------轮播图-------------------------------------------------------------------
// // 获取元素
// var oDiv = document.getElementById("banner");
// var img = document.getElementsByClassName('img')[0].getElementsByTagName('li');
// // console.log(img);
// var circle = document.getElementsByClassName('circle')[0].getElementsByTagName('li');
// var aLeft = document.getElementById('left');
// var aRight = document.getElementById('right');
// // 定义图片的下标
// var index = 0;
// // run让图片和小圆点动起来
// function run(){
// 	// 将所有的li的class移除
// 	for(var i=0;i<img.length;i++){
// 		img[i].removeAttribute('class');
// 		circle[i].removeAttribute('class');
// 	}
// 	// 判断index是否超过取值范围
// 	if(index<img.length-1){
// 		index++;
// 	}else{
// 		index = 0;
// 	}
// 	// console.log(index)
// 	img[index].setAttribute('class','active');
// 	circle[index].setAttribute('class','active');
// }
// var timer = setInterval(run,3000);
// oDiv.onmouseover = function(){
// 	clearInterval(timer);
// }
// oDiv.onmouseout = function(){
// 	timer = setInterval(run,3000);
// }
// // 给所有的小圆点绑定点击事件
// for(var i=0;i<circle.length;i++){
// 	circle[i].onclick = function(){
// 		// 清除定时器,防止定时器叠加
// 		clearInterval(timer);
// 		// console.log(this.value);
// 		index = this.value-1;
// 		run();
// 		// 让定时器动起来
// 		timer = setInterval(run,3000);
// 	}
// }
// // 上一张图片
// aLeft.onclick = function(){
// 	// 清除定时器,防止定时器叠加
// 	clearInterval(timer);
// 	console.log(index);// 0  1  2  3 
// 	// 判断是否已经到达第一张
// 	if(index == 0){
// 		index = img.length-2;
// 	}else{
// 		index -= 2;// index = index - 2;
// 	}				
// 	run();
// 	timer = setInterval(run,3000);
// }
// // 下一张图片
// aRight.onclick = function(){
// 	// 清除定时器,防止定时器叠加
// 	clearInterval(timer);
// 	// console.log(index)
// 	run();
// 	// 重新添加定时器,让其动起来
// 	timer = setInterval(run,3000);
// }
//置顶按钮
var sidebar = document.getElementById('right-sidebar');
var sidebarTop = sidebar.offsetTop;//按钮原始位置顶部距离
var timer = null;
var isTop = true;
var toTop = document.getElementById("toTop");
document.onscroll = function(){
	var scrollPosition = document.documentElement.scrollTop||document.body.scrollTop;//按钮实际位置顶部距离
	if(scrollPosition > sidebarTop){
		sidebar.style.display = "block";
		sidebar.style.top = "sidebarTop"//固定在可视区上原始位置顶部距离
	}else{
		sidebar.style.display = "none";
	}
	if(!isTop){
		clearInterval(timer);
	}
	isTop = false;
};
toTop.onclick = function(){    
	//设置定时器
	timer = setInterval(function(){
	  //获取滚动条距离顶部的高度
	  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	  var ispeed = Math.floor(-scrollPosition / 6);
	  document.documentElement.scrollTop = document.body.scrollTop = scrollPosition +ispeed;
	  scrollPosition = true;
	  if (scrollPosition === 0){
		clearInterval(timer);
	  }
	},30);
};