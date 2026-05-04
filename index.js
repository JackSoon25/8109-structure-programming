//1. define the state and create some mock data
let tasks = [
    {
        "id": 1,
        "name": "Wash the car",
        "dateDue":"2026-05-05",
        "urgency": 3.
    },
    {
        "id":2,
        "name": "Clern the room",
        "dateDue":"2026-05-11",
        "urgency": 1,
    },
    {
        "id": 3,
        "name": "Buy cat food",
        "dateDue":"2026-05-25",
        "urgency": 5.
    }
]

// tasks will be an array of objects
// and each ogject must have the following roperties: id, name, dataDue and urgency
function displayTasks(tasks){
    let i=0;
    while (i<tasks.length) {
        let currentTask = tasks[i];
        console.log(`${currentTask.id}. ${currentTask.name} is due on ${currentTask.dataDue}) with urgency ${currentTask.urgency}`);
        // expected output
        // "1. wash the Car (Date due: 2026-05-05, Urgency: 3"
        i++;
    }
}

displayTasks(tasks);