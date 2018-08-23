let tab = document.querySelector('.tab'),
tabs = document.querySelectorAll('.tabs-content'),
container = document.querySelector('.container'),
		height = 0,
		id = 0,
        // новая уставка положения монитора
		heightNew = 0;
		



container.addEventListener('click', function(e) {
	
	
			if(id < e.target.id) {
				for(let i = 0;i < e.target.id; i++) {
					heightNew = heightNew + tabs[i].scrollHeight;
				}
                console.log(heightNew);
			} else {
				for(let i = id;i > e.target.id ; i--) {
					heightNew = heightNew - tabs[i].scrollHeight;
				}
				console.log(heightNew);
			}
			
		        let heigth_timer_id = setInterval(function() {

            if (height < heightNew) {
                height ++;
                scrollTo(0,height);
                console.log(heightNew);
               } 
             if(height > heightNew) {
               		console.log(heightNew);
                	height--;
					scrollTo(0, height);
					}
                
              if(height == heightNew){
                clearInterval(heigth_timer_id);    
                id = e.target.id;
                height = heightNew;
                
            }
        }, 2);

	
});

