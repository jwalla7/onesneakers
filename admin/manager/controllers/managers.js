
console.log('hello there buddy how are you doing?');


const readPuma = async () => {
    const response = await fetch('https://live.staticflickr.com/65535/51818471952_cfea999f5b_o.jpg');
    const blob = await response.blob();
    document.getElementById('puma').src = URL.createObjectURL(blob);
}
readPuma().catch(error => {
    console.log("error!");
    console.error(error);
})


// fetch('https://live.staticflickr.com/65535/51819770124_8a21c45c4e_o.jpg')
// .then(response => {
//     console.log(response)
//     return response.blob();
// })
// .then(blob => {
//     return console.log(blob);
// })
// .catch(error => {
//     console.log("error!");
//     console.error(error);

// })

// const LoadAllSneakers = async () => {

//     const jsonArr = [];
//     const brandNameArr = [];
//     const sneakerNameArr = [];
//     const imageArr = [];
//     const price = [];

//     for (let i = 0; i < JSON.length; i++) {
//         jsonArr.push(JSON(i));
//     }
//     for (let j = 0; i < jsonArr.length; i++) {
//         if (jsonArr(i) === 'brandName9') {
//             brandNameArr.push(jsonArr(i))
//         } else {
//             return false;
//         }
//     }

//     const start = console.log('start now');
//     /* takes array of numbers and matches them to array of promises, 
//     & creates a new array of each iteration
//     arr.map executes each separate promise */
//     const promises = arr.map((i) => fetch(`https://api-url-here/${i}`));
// }

// Example

// const arr = [];
// // Loops through first 100 objects and pushes to arr
// for (let i = 0; i < 100; i++) {
//     arr.push(i);
// }

// const LoadData  = async () => {
//     const arr = [];
//     const start = console.log('start scanning...');
//     for (let i = 0; i < 100; i++) {
//         arr.push(i);
//     }
//     // Doesn't require await because it send out all promises simutaneously with map function
//     const promises = arr.map((i) => fetch(`https://api-url-here/${i}`));
//     const results = await console.log(promises(i));

//     // const promises = arr.map((i) => fetch(`https://jsonplaceholder.typicode.com/todos/${i}`));
//     // for (let i = 0; i < arr.length; i++) {
//     //     await promises[i];
//     // }

// }

// BASIC ASYNC AWAIT SNEAKER        

const loadSneaker = async () => {
    const apiURL = `http://localhost:8080/sneakers/100`;
    console.log("start fetching...");
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    // const toString = await JSON.stringify(data);
    // console.log(toString);
//     const brandName = (key, value) => {
//       for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === key) {
//           if (prop in contacts[i]) {
//             return contacts[i][prop];
//           } else {
//         }
//             return "No such property";
//         }
//         }
//     }
//   return "No such contact";


}
loadSneaker().catch(error => {
    console.log("error!")
    console.error(error);
});
