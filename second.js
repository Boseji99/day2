function delay(ms)
{
   return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
   });
}

function main() { 
    console.log("yaha se zindagi shuru hui hai");
    delay(5000)
     .then(() => {
        console.log("Ha mai khush hoon"); 
        return delay(3000);
     })
     .then(() => {
        console.log("C programming start hua hai"); 
        return delay(2000);
     })
     .then(() => {
        console.log("ho gai khtam zindigi ise mai hi"); 
     })
     .catch((e) => {
        console.log("Kuch galt hua hai", e);
     })
     .finally(() => {
        console.log("Kuch bhi ho I'will run");
     })

}
  main(); 

