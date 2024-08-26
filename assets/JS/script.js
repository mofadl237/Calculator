/**Declaration All Variable Get In File */
let input = document.querySelector("input");
let AllBtnVal =document.querySelectorAll(".parent.Btn button");
let BtnOperation =document.querySelectorAll(".parent.Btn-Operator button");
/**
 * Check Your Code;
 *
console.log(input.value);
console.log(AllBtnVal);
console.log(BtnOperation[5].innerHTML);
 */
//Declar Variable Contain Value From Event Click
let Num =0, operation = 1 , Result =0;
AllBtnVal.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        Num += (e.target.value);
        Num=parseFloat(Num);
        input.value=parseFloat(Num);
    })
})
/**
 * Add Function To Operation
 */
BtnOperation.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(!(btn.value > 5)){
            input.value=btn.innerHTML;
            operation = parseInt(e.target.value);
            if(Num != 0){
                Result = parseFloat(Num);
            }
            Num=0;
            /**
             * //Error When User Event Two Click Button Operation
            console.log("operation  ",operation);
            console.log("Result  ",Result);
            console.log("Num  ",Num);
             */

        }else if(btn.value=="6"){
           switch(operation){
            case 1:{
                Result+=Num;
                Num=Result;
                input.value=Result;
                break;
            }
            case 2:{
                Result-=Num;
                Num=Result;
                input.value=Result;
                break;
            }
            case 3:{
                Result*=Num;
                Num=Result;
                input.value=Result;
                 
                break;
            }
            case 4:{
                if(Num == 0){
                    Num=1;
                }
                Result/=Num;
                input.value=Result;
                Num=Result;
                break;
            }
            case 5:{
                Result%=Num;
                input.value=Result;
                Num=Result;
                break;
            }
            default:{
                input.value="Error";
            }
           }
        }else{
            Num=0;
            Result=0;
            input.value=Num;
        }
    })
})