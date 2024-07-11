// const students = [
//     { name: "Noman", scores: { math: 9, english: 80 } },
//     { name: "Alice", scores: { math: 75, english: 85 } },
//     { name: "Charlie", scores: { math: 8, english: 89 } },
//     { name: "David", scores: { math: 90, english: 81 } }
// ];


// console.log(students.filter((student) => {         

//     return student.scores.math > 9
// }))



//     students.filter((student) => student.scores.math > 85)







        // .map((student) => console.log(`Student name is ${student.name}`))







const users= [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 1 },
    { name: "Charlie", age: 1 },
    { name: "David", age: 20 }
];

const isAdult = users.some((user) => user.age > 18)
console.log(isAdult)

// const employees = [
//     { name: "Alice", salary: 95000 },
//     { name: "Bob", salary: 120000 },
//     { name: "Charlie", salary: 105000 },
//     { name: "David", salary: 99000 }
// ];

// const isGreaterThanOneLakh = employees.some((employee)=> employee.salary > 500000)

// const transactions= [
//     { id: 1, amount: 100, status: "successful" },
//     { id: 2, amount: 50, status: "failed" },
//     { id: 3, amount: 200, status: "successful" },
//     { id: 4, amount: 150, status: "successful" },
//     { id: 5, amount: 75, status: "failed" }
// ];
// function totalAmountOfSuccessfulTransaction (transactions) {
//     let totalAmmount = 0;
//     transactions.filter((transaction) => transaction.status === "successful")
//     .forEach((successfulTransaction) => {
//         totalAmmount = successfulTransaction.amount + totalAmmount
//     })

//     return totalAmmount
// }

// const studentScores= [
//     { name: "Alice", scores: { math: 90, english: 80, science: 85 } },
//     { name: "Bob", scores: { math: 70, english: 75, science: 80 } },
//     { name: "Charlie", scores: { math: 85, english: 90, science: 95 } }
// ];
// function studentsAverageScore(studentScores) {
//     const studentWithAverageScore = studentScores.map((studentScore) => {

//         let studentsAverageMark = (studentScore.scores.math + studentScore.scores.english + studentScore.scores.science) / 3
//         return {
//             studentName :studentScore.name, 
//             averageScore:studentsAverageMark
//         }
//     })
//     console.log(studentWithAverageScore)
// }


