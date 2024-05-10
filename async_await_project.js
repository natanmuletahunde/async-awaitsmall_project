let stocks ={
  Topping:['chocolet','sprinkles'],
  holder:['cone','cup','stick'],
  fruits:['strawberry','grapes','banana','apple'],
  liquid:['water','ice']
} 
let is_shop_open=true
function time(ms){
  return new Promise((reslove,reject)=>{
     if(is_shop_open){
      setTimeout(reslove,ms) // used to relate the work and time by iterting over it
     }
     else{
      reject(console.log('shop is closed'))
     }
  })
}
async function kitchen(){
   try{
   console.log('production is started')
   await time(2000)
   console.log('place order')
   await time(2000)
   console.log('chopping is started')
   await time(1000)
   console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
   await time(1000)
   console.log(`${stocks.holder[0]} is select as container`)
   await time(3000)
   console.log(`${stocks.Topping[0]} is selected`)
   await time(2000)
   console.log("serve Ice cream")
   }
   catch(error){
   console.log('customer left ')
   }
   finally{
    console.log("day ended and shop is closed")
   }

}
kitchen()
