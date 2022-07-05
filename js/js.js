function imgSlider(anything){
	document.querySelector('.starburk').src = anything;
}
function changeColor(color){
	document.querySelector('.circle').style.background = color;
}


const btn = document.getElementsByClassName('toggle')[0]
const newList = document.getElementsByClassName('new')[0]
const fa = document.getElementsByClassName(' button')[0]
btn.addEventListener('click', function(){
	if(fa.classList.contains("fa-bars")){
		fa.classList.remove("fa-bars")
		fa.classList.add("fa-times")
		newList.style.display = 'flex'
	}else{
		fa.classList.add("fa-bars")
		fa.classList.remove("fa-times")
		newList.style.display = 'none'
	}
})
