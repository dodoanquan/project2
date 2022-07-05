const btnMore = document.getElementsByClassName('more')[0]
btnMore.addEventListener('click',function(){
	document.getElementsByClassName('none')[0].style.display = 'flex'
	btnMore.style.display = 'none';
})