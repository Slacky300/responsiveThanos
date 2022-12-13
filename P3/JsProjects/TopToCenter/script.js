let openBtn = document.getElementById('openBtn');
let modelContainer = document.getElementById('modelContainer');
let closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click',function(){

	modelContainer.style.display = 'block';
})

closeBtn.addEventListener('click',function(){
	modelContainer.style.display = 'none';
})