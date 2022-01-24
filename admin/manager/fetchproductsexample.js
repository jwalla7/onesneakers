const loadSneakerById = async () => {
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
loadSneakerById().catch(error => {
    console.log("error!")
    console.error(error);
});