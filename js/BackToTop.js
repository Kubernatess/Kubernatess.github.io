// JavaScript Document
window.onload=function ()
{
	var Up_Btn=document.getElementById('Up');
	var bSys=true;
	var timer=null;
	window.onscroll=function(){
		if(!bSys){
			clearInterval(timer);	
		}
		bSys=false;
	};
	Up_Btn.onclick=function ()
	{
		timer=setInterval(function (){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var iSpeed=Math.floor(-scrollTop/8);
			if(scrollTop==0){
				clearInterval(timer);
			}
			bSys=true;
			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+iSpeed;
		}, 30);
	};
	
	var color=document.getElementById("favcolor");
	color.onchange=function(){
		document.body.style.backgroundColor=color.value; 
	};
};