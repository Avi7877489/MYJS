let bank ={
    account: 2000,
    otp: 2564,
    
    deposit : function(money,otp){
        if(otp === this.otp){
             this.account += money
        return this.account
        }else{
            return "wrong Pin"
        }
       
    },
    
    withdrall : function(money,otp){
        if(otp === this.otp){
            if(money > this.account){
            return "Insufficient Balance"
        }
        this.account -= money
        return this.account
        }else{
          return   'Wrong pin'
        }
        
    },
    
    balance: function(){
        return this.account
    }
}

console.log(bank.deposit(500,25624))
console.log(bank.withdrall(40,2564))
console.log(bank.balance())
// console.log(bank['account'])