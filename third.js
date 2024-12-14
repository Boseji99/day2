function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function main() {

  console.log("yaha se zindagi shuru hui hai");

  try {
    
    await delay(5000);
    console.log("Ha mai khush hoon");

    await delay(3000);
    console.log("C programming start hua hai");

    await delay(2000);
    console.log("ho gai khtam zindigi ise mai hi");

  } catch (error) {
    console.log(error);
  }
}
main();
