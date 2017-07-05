
window.onload=function(){


	//上标题
let i=document.getElementsByTagName('i');
    i[0].onmouseover = function(){
		 i[0].style['color']='#B91D21';
	}
	i[0].onmouseout = function(){
		  i[0].style['color']='#808080';
	}



let em=document.getElementsByTagName('em');
    em[0].onmouseover = function(){
		 em[0].style['color']='#B91D21';
	}
	em[0].onmouseout = function(){
		  em[0].style['color']='#808080';
	}
let fx=document. getElementsByClassName('fx');
let fx1=document. getElementsByClassName('fx1');
   fx1[0].onmouseover = function(){
		 fx[0].className='fx show';
	}
	fx[0].onmouseout = function(){
		 fx[0].className='fx hidden';
	}













	//下拉框
    let head3=document.querySelector('.head3')
    let z1=head3.querySelectorAll('.z1')
    let ull=head3.querySelectorAll('.ull')
    console.log(head3,z1,ull)
    let jh=[0,510,405,200,200,160,160,230,200,370]
    for(let i=0;i<ull.length;i++){

	    z1[i].onmouseover=function () {
	        if(i==0){}else{
	            animate(ull[i],{height:jh[i]},400)
                ull[i].style.border='1px solid #EFEFEF'
                ull[i].style['border-top']='5px solid #B81B22'
            }
        }

        z1[i].onmouseout=function () {
            if(i==0){}else{
                animate(ull[i],{height:0},function () {
                    ull[i].style.border='0px solid #EFEFEF'
                    ull[i].style['border-top']='0px solid #B81B22';
                })
            }
        }



    }











	//banner轮播
    let imgbox1=document.querySelector('.imgbox1')
    let imgbox1li=document.querySelectorAll('.imgbox1 >li')
    let imgbox2=document.querySelector('.imgbox2 ')
    let imgbox2li=document.querySelectorAll('.imgbox2 >li')
    let last1=document.querySelector('.last1')
    let next1=document.querySelector('.next1')
    // console.log(imgbox1,imgbox1li,imgbox2li,last1,next1)

    let index=0,flag=true;
    let t=setInterval(move,2000)

    //暂停
    imgbox1.onmouseover=function () {
        clearInterval(t)
    }
    imgbox1.onmouseout=function () {
        t=setInterval(move,2000)
    }
    imgbox2.onmouseover=function () {
        clearInterval(t)
    }
    imgbox2.onmouseout=function () {
        t=setInterval(move,2000)
    }
    last1.onmouseover=function () {
        clearInterval(t)
    }
    last1.onmouseout=function () {
        t=setInterval(move,2000)
    }
    next1.onmouseover=function () {
        clearInterval(t)
    }
    next1.onmouseout=function () {
        t=setInterval(move,2000)
    }

    //自动轮播
    function move(n='r'){
        if(flag){
            flag=false;
            if(n=='r'){
                index++;
                if(index>imgbox1li.length-1){
                    index=0;
                }
                imgbox1li.forEach(function(val,ind){
                    val.classList.remove('active');
                    imgbox2li[ind].classList.remove('active')
                })
                imgbox1li[index].classList.add('active')
                imgbox2li[index].classList.add('active')
                imgbox1li.forEach(function(value){
                    value.addEventListener('transitionend',function(){
                        flag=true;
                    },false)
                })
            }
            if(n=='l'){
                index--;
                if(index<0){
                    index=imgbox1li.length-1;
                }
                imgbox1li.forEach(function(val,ind){
                    val.classList.remove('active');
                    imgbox2li[ind].classList.remove('active')
                })
                imgbox1li[index].classList.add('active')
                imgbox2li[index].classList.add('active')
                imgbox1li.forEach(function(value){
                    value.addEventListener('transitionend',function(){
                        flag=true;
                    },false)
                })
            }
        }
    }


    //点击小圆
    imgbox2li.forEach(function(value,ind){
        value.onclick=function(){
            imgbox1li.forEach(function(val,ind){
                val.classList.remove('active');
                imgbox2li[ind].classList.remove('active')
            })
            index=ind;
            imgbox1li[index].classList.add('active')
            imgbox2li[index].classList.add('active')
        }
    })


    //上一个，下一个
    last1.onclick=function(){
        move('l')
    }
    next1.onclick=function(){
        move()
    }




















}