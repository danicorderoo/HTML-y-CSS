function checkCashRegister(price, cash, cid) {
  
    let disponible = cid.slice()
    let cambio = cash*100-price*100;
    let change = [];
    let total = 0
    let parcial = 0;
    let dineroCaja = 0;
    let valores = [1,5,10,25,100,500,1000,2000,10000];
    
    for (let i=0; i<disponible.length;i++){
      dineroCaja += (disponible[i][1]*100);
    }
    
    if(cambio>dineroCaja){
      return {status:"INSUFFICIENT_FUNDS", change: []}
    }
    
    for(let i=valores.length-1;i>=0; i--){
      if(cambio>=valores[i]){
        while(cambio>=total+valores[i]&&disponible[i][1]*100>0){
          parcial = parcial + valores [i];
          total = total + valores[i];
          disponible[i][1] = (disponible[i][1] - (valores[i]/100));
          dineroCaja = dineroCaja - valores[i]
        }
        if(parcial>0){
            change.push([disponible[i][0],parcial/100]);
            parcial = 0;
        }
      }
    }
    
    
    if(total===cambio){
      if(dineroCaja>0)
        console.log({status:"OPEN", change: change});
      else if(dineroCaja===0)
        if(change.length<9){
            for(let i=1;i<9;i++){
                change.push([disponible[i][0],0]);
            }
            
            console.log({status: "CLOSED", change: change});
        }
        
    }
      else
        console.log({status:"INSUFFICIENT_FUNDS", change: []});
     
    }
    
    
    
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])