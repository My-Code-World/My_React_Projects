import React, { useState , useEffect} from "react";
import "./slotmachine.css"

function SlotMachinee(){
    // const array=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const array=['!','@','#','$','%','^','&','*','/','-']
    const [number1,newNumber1]=useState('0')
    const [number2,newNumber2]=useState('0')
    const [number3,newNumber3]=useState('0')
    const [number4,newNumber4]=useState('0')
    const [number5,newNumber5]=useState('0')
    const [number6,newNumber6]=useState('0')
    const [number7,newNumber7]=useState('0')
    const [number8,newNumber8]=useState('0')
    const [number9,newNumber9]=useState('0')
    const [Result,newResult]=useState(true)
    const [deposit,newDeposit]=useState(0)
    const [depositvalue,newDepositvalue]=useState('')


    const [betAmount,newbetAmount] = useState()
    const [betValue,newBetValue] = useState("")

     const [lines,newLines] = useState(0)
     const [ WinningAmount, newWinningAmount] = useState(0)


     const betFunction =(e)=>
     {
         newbetAmount(e.target.value);
         
     }

     const betButtonHandler = ()=>
     {
        newBetValue(betAmount);
     }

     useEffect(() => {
         newbetAmount(0)
     },[!Result])
     
     
     const depositFunction = (e)=>{
        newDeposit(e.target.value)
    }

    const depositButtonHandler = ()=>
    {
        newDepositvalue(deposit)

    }
     
     useEffect(() => {
            findAmount();
        }, [number1, number2, number3, number4, number5, number6, number7, number8, number9]);


       


    const findNumbers=()=>{
        let randomNumber1 = Math.floor(Math.random()*array.length)
        let randomNmber2 = Math.floor(Math.random()*array.length)
        let randomNmber3 = Math.floor(Math.random()*array.length)
        let randomNumber4 = Math.floor(Math.random()*array.length)
        let randomNumber5 = Math.floor(Math.random()*array.length)
        let randomNmber6 = Math.floor(Math.random()*array.length)
        let randomNmber7 = Math.floor(Math.random()*array.length)
        let randomNumber8 = Math.floor(Math.random()*array.length)
        let randomNumber9 = Math.floor(Math.random()*array.length)
        
        newNumber1(array[randomNumber1])
        newNumber2(array[randomNmber2])
        newNumber3(array[randomNmber3])
        newNumber4(array[randomNumber4])
        newNumber5(array[randomNumber5])
        newNumber6(array[randomNmber6])
        newNumber7(array[randomNmber7])
        newNumber8(array[randomNumber8])
        newNumber9(array[randomNumber9])
    

        console.log("numbers in find numbers"+number1,number2,number3,number4,number5,number6,number7,number8,number9)
    }



    const findAmount = () => {
        console.log("numbers in find amotnt"+number1,number2,number3,number4,number5,number6,number7,number8,number9)

        switch (parseInt(lines)) {
            case 1:
                if ((number1 === number2 && number2 === number3 && number3 === number1) ||
                    (number4 === number5 && number5 === number6 && number6 === number4) ||
                    (number7 === number8 && number8 === number9 && number7 === number9)) {
                    console.log("one line match");
                    newWinningAmount(parseInt(betValue) + (parseInt(betValue) / 2));
                } else {
                    newWinningAmount(0);
                    newBetValue(0);
                    newLines(0);
                    newResult(false);
                    console.log("no match");
                }
                break;
            case 2:
                if (
                    ((number1 === number2 && number2 === number3 && number3 === number1) &&
                    ((number4 === number5 && number5 === number6 && number6 === number4) ||
                    (number7 === number8 && number8 === number9 && number7 === number9))) ||
                    (((number1 === number2 && number2 === number3 && number3 === number1) ||
                    (number4 === number5 && number5 === number6 && number6 === number4)) &&
                    (number1 === number2 && number2 === number3 && number3 === number1)) ||
                    ((number4 === number5 && number5 === number6 && number6 === number4) &&
                    ((number1 === number2 && number2 === number3 && number3 === number1) ||
                    (number7 === number8 && number8 === number9 && number7 === number9)))
                ) {
                    console.log("two lines match");
                    newWinningAmount(parseInt(betValue) + (parseInt(betValue) / 2));
                } else {
                    newWinningAmount(0);
                    console.log("no match");
                }
                break;
            case 3:
                if (
                    (number1 === number2 && number2 === number3 && number3 === number1) &&
                    (number4 === number5 && number5 === number6 && number6 === number4) &&
                    (number7 === number8 && number8 === number9 && number7 === number9)
                ) {
                    console.log("all three lines match");
                    newWinningAmount(parseInt(betValue) + (parseInt(betValue) / 2));
                } else {
                    newWinningAmount(0);
                    console.log("no match");
                }
                break;
            default:
                console.log("switch is not running properly");
                break;
        }
    };
    



    const startScrolling = ()=>{
        if(parseInt(betValue) > parseInt(depositvalue))
        {
            alert("INSUFFICIENT BALANCE")
        }
        else
        {
        findNumbers();
        }}




return(
    <div>
        <h1>Slot Machine</h1>
        <div>
            <p><b>HOW MUCH TO DEPOSIT</b> <input value={deposit} onChange={depositFunction}></input><button onClick={depositButtonHandler}>Deposit</button></p>
            
            <h3>Deposited amount:{depositvalue}</h3>
        </div><br></br>
        <div>
            <h3>ON HOW MANY LINES YOU WOULD LIKE TO BET ??</h3>
            <input value={lines} onChange={(e)=>{newLines(e.target.value)}}></input>
            <h3>Lines:{lines}</h3>
        </div>
        <br></br>
        <div>
        <h2>BET AMOUNT : <input value={betAmount} onChange={betFunction}></input><button onClick={betButtonHandler}>BET</button></h2>
        {parseInt(betValue) > parseInt(depositvalue) ? (
                <p>INSUFFICIENT BALANCE</p>
            ) : (
                <h3>Bet Amount : {betValue}</h3>
            )}
        </div>
   
        <div>
        <table id="slots">
            <tbody>
            <tr id="rows">
                <th>{number1}</th>
                <th>{number2}</th>
                <th>{number3}</th>
            </tr>
            <tr id="rows">
                <th>{number4}</th>
                <th>{number5}</th>
                <th>{number6}</th>
            </tr>
            <tr id="rows">
                <th>{number7}</th>
                <th>{number8}</th>
                <th>{number9}</th>
            </tr>
            </tbody>
           
        </table>
        </div>
      
       <button onClick={startScrolling}>start</button>

       <div>
        <h1>YOU WON {WinningAmount}</h1>
        <h1>CURRENT BALANCE : {parseInt(depositvalue) + parseInt(WinningAmount)-parseInt(betValue)}</h1>
       </div>
    </div>
)
}



export default SlotMachinee