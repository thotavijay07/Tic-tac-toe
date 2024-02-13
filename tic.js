let boxes=document.querySelectorAll(".box");
let win=document.querySelector("#winner");
let msg=document.querySelector(".msg");
let btn=document.querySelector("#reset-btn");
let freshGame=document.querySelector("#reStart");

const ans=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnO='true';
let count=0;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
    if(turnO)
    {
        box.innerText='O';
        turnO=false;
        count+=1;
    }
    else{
        box.innerText='X';
        turnO=true;
        count+=1;
    }
    box.disabled=true;
    console.log(count);
    checkWinner(count);

 });
});
const gameDisable=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const gameEnable=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        count=0;
    }
};

const winner=(result)=>{
    win.innerText='Congratulations ,The winner is '+result;
    msg.classList.remove("hide");
    gameDisable();
};
const restart=()=>{
    win.innerText='Game Over, Match tied Play Again';
    msg.classList.remove("hide");
    gameDisable();
}
const checkWinner=(count)=>{
    for(let match of ans)
    {
       let pos1=boxes[match[0]].innerText;
       let pos2=boxes[match[1]].innerText;
       let pos3=boxes[match[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!="")
       {
         if(pos1===pos2 && pos2===pos3)
        {
            winner(pos1);
         }
         if(count===9)
           restart();
       }
       
    }
};
const newGame=()=>
{
    gameEnable();
    msg.classList.add("hide");
};
btn.addEventListener('click',newGame);
freshGame.addEventListener('click',newGame);