let score=JSON.parse(localStorage.getItem('score')) ||{win:0,losses:0,tie:0};

    document.querySelector(".js-score")
      .innerHTML=`wins:${score.win}, losses:${score.losses}, tie:${score.tie}`;

    let result='';
    let comp='';
    function compMove(){
      const randm=Math.random();
      if(randm>=0 && randm<1/3){
        comp='rock';
      }
      else if(randm>=1/3 && randm<2/3){
        comp='paper';
      }
      else{
        comp='scissors';
      }
      return comp;
    }

    let isAutoPlaying=false;
    let intervalid;

    function autoPlay(){
    
      if(!isAutoPlaying) {
       intervalid=setInterval(function(){
          comp=compMove();
          play(comp);
        },1000);
        isAutoPlaying=true;
      }else{
        clearInterval(intervalid);
        isAutoPlaying=false; 
      }

      
    }


    function play(playerMove){
      const comp = compMove();
      if(playerMove=='scissors'){
        if(comp=='rock'){
          result='lose';
        }
        else if(comp=='scissors'){
          result='tie';
        }
        else{
           result='win';
        }
      }

      else if(playerMove=='paper'){
      if(comp=='rock'){
          result='win';
        }
        else if(comp=='scissors'){
          result='lose';
        }
        else{
           result='tie';
        }
      }
      else{
        if(comp=='rock'){
      result='tie';
    }
    else if(comp=='scissors'){
      result='win';
    }
    else{
      result='lose';
    }
      }

      if(result==='win'){
        score.win+=1;
      }
      else if(result==='lose'){
        score.losses+=1;
      }
      else{
        score.tie+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));

      document.querySelector(".js-result")
        .innerHTML=`you ${result}`;

      document.querySelector(".js-moves")
        .innerHTML=`you <img class="move-icon" src="images/${playerMove}-emoji.png">comp 
  <img class="move-icon" src="images/${comp}-emoji.png">`;
      
      document.querySelector(".js-score")
        .innerHTML=`wins:${score.win}, losses:${score.losses}, tie:${score.tie}`;
      /*alert(`you picked ${playerMove} and comp picked ${comp} : you ${result}
      wins:${score.win}, losses:${score.losses}, tie:${score.tie}`);*/
     }