
 let getStudentTopNotes1 = [
    {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
    },
    {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
    },
    {
    id: 3,
    name: "Zygmunt",
          notes: [2, 2, 4, 4, 3, 3]
    }
    ] 

function getStudentTopNotes(array){
    let arr = array.map(function(item){
        // if (item.notes.length == 0){
        //     return 0;
        // }
      return Math.max(...item.notes);
    })
    return arr;
}
console.log(getStudentTopNotes(getStudentTopNotes1)); 
