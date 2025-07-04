const k= document.querySelector(".imgr");
const l= document.querySelector(".imgp");
const m= document.querySelector(".imgs");
const p=document.querySelector(".play");
const q=document.querySelector(".yo");
const r=document.querySelector(".com");
console.log(q);
 let count=0;
 let comscore=0;
    k.onclick=()=>{
        let z = Math.floor(Math.random() * 3) + 1;
    var a=1;
    console.log(a);
    if(z==1){
        console.log("draw");
        p.innerHTML="GAME IS DRAW! play again";
        p.style.backgroundColor='orange';
     }
     else if(z==2){
        p.innerHTML="YOU LOST";
        p.style.backgroundColor='red';
        comscore++;
        r.innerHTML=comscore;

    }
    else if(z==3){
     p.innerHTML="YOU WON!";
     p.style.backgroundColor='green';   
     count++;
     q.innerHTML=count;
        
    }

}
l.onclick=()=>{
    let z = Math.floor(Math.random() * 3) + 1;
    var b=2;
    console.log(b);
     if(z==2){
        console.log("draw");
        p.innerHTML="GAME IS DRAW! play again";
        p.style.backgroundColor = 'orange';
    }
    else if(z==1){
        p.innerHTML="YOU WON!";
        p.style.backgroundColor='green';
        count++;
        q.innerHTML=count;

    }
   else if(z==3){
     p.innerHTML="YOU LOST!";
        p.style.backgroundColor='red';
        comscore++;  
         r.innerHTML=comscore; 
        
    }
   
   
}
m.onclick=()=>{
    let z = Math.floor(Math.random() * 3) + 1;
    var c=3;
    console.log(c);
     if(z==3){
        console.log("draw");
        p.innerHTML="GAME IS DRAW! play again";
        p.style.backgroundColor = 'red';
    }
   else if(z==1){
        p.innerHTML="YOU LOST!";
        p.style.backgroundColor='red';
        comscore++;
        r.innerHTML=comscore;

    }
   else if(z==2){
     p.innerHTML="YOU WON!";
        p.style.backgroundColor='green';   
        count++;
        q.innerHTML=count;
        
    }
   
   
}
