document.querySelector('.header button').addEventListener('click',element=>{
	let menu=document.querySelector('.header ul')
	let btn=document.querySelector('.header button');

	if(btn.innerText==='MENU'){
		menu.style.display='block';
		btn.innerText='CLOSE';
	}else{
		menu.style.display='none';
		btn.innerText='MENU';
	}
})

//--------------------------------------------------------------------------------------------------

let rightBtn=document.querySelector('.slider-wrapper #right-btn'); 
let leftBtn=document.querySelector('.slider-wrapper #left-btn');
let pictures=document.querySelectorAll('.slider-wrapper .slider-images img')
let imgNum=0;

const moveRight =()=>{
	displayNone();
	imgNum++;
	if(imgNum===pictures.length){
		imgNum=0;
	}
	pictures[imgNum].style.display='block';	
};

const moveLeft=()=>{
	displayNone();
	imgNum--;
	if(imgNum===-1){
		imgNum=pictures.length-1;
	}
	pictures[imgNum].style.display='block';
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

const displayNone=()=>{
	pictures.forEach(img=>{
		img.style.display='none';
	})
};

//-------------------------------------------------------------------------------------------------------

let btns=document.querySelectorAll('.portfolio-wrapper .portfolio-categories button');

btns.forEach(element=>{
	element.addEventListener('click',()=>{
		let category=element.getAttribute('data-category');
		let portfolioItems=document.querySelectorAll('.portfolio-items .portfolio-single-item');

		portfolioItems.forEach(item=>{
			item.style.display='none';

			if(category==='sve'){
				item.style.display='block'
			};

			if(item.getAttribute('data-category').includes(category)){
				item.style.display='block';
			};
		});
	});
});

//-----------------------------------------------------------------------------------------------------

let opetBtn=document.querySelectorAll('.modal-section button');

opetBtn.forEach(btn=>{
	btn.addEventListener('click', ()=>{
		let modal=document.querySelector('.popup-modal');
		let overlay=document.querySelector('.overlay');

		modal.style.display='block';
		overlay.style.display='block';
	});
});

let closeBtn=document.querySelectorAll('.popup-modal button');

closeBtn.forEach(btn=>{
	btn.addEventListener('click', ()=>{
		let modal=document.querySelector('.popup-modal');
		let overlay=document.querySelector('.overlay');

		modal.style.display='none';
		overlay.style.display='none';
	})
});