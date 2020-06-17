//  if user addes notes add it to the localstorage

console.log("this is Make note app")
showNotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});


//  function to show elements from localstroage 
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }



    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
               <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                     </div>
                   </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! use a Add a Note `
    }

}
//  function to delete note
function deleteNote(index) {
    console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



// this is for search 
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputval = search.value;

    let nodecards = document.getElementsByClassName("noteCard");
    Array.from(nodecards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";


        }
    })
})


























//     let html = "";
//     notesObj.forEach(function(element,index) {
//         html += `
//           <div class="notecard my-2 mx-2 card" style="width: 18rem;">

//               <div class="card-body"></div>
//                 <h5 class="card-title">Note ${index + 1}</h5>
//                 <p class="card-text">${element}</p>
//                 <button class="btn btn-primary" id="addBtn">Delete Node</button>
//              </div>

//          </div>`

//     });


//     let notesElm = document.getElementById("notes")
//     if(notes.length == 0){
//         notesElm.innerHTML = html;
//     }
// }

// console.log("Welcome to notes app. This is app.js");


// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
// //   console.log(notesObj);

// });

// // Function to show elements from localStorage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
// //             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
// //                     <div class="card-body">
// //                         <h5 class="card-title">Note ${index + 1}</h5>
// //                         <p class="card-text"> ${element}</p>
// //                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
// //                     </div>
// //                 </div>`;
// //   });
//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//   }
// // }

// // // Function to delete a note
// // function deleteNote(index) {
// // //   console.log("I am deleting", index);

// //   let notes = localStorage.getItem("notes");
// //   if (notes == null) {
// //     notesObj = [];
// //   } else {
//     notesObj = JSON.parse(notes);
//   }

//   notesObj.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }


// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/