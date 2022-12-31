// Q1.
letstudentRecords = [ 
    { name: 'John', id: 123, marks: 98 }, 
    { name: 'Baba', id: 101, marks: 23 }, 
    { name: 'yaga', id: 200, marks: 45 }, 
    { name: 'Wick', id: 115, marks: 75 } 
] 
let studentNames =studentRecords.map((student) => student.name.toUpperCase()); 

console.log(studentNames); 

// Q2.
letstudentRecords = [
     {name: 'John', id: 123, marks : 98 }, 
{name: 'Baba', id: 101, marks : 23 }, 
{name: 'yaga', id: 200, marks : 45 }, 
{name: 'Wick', id: 115, marks : 75 } ] ; 
let arr1=[];
for(let i=0;i<studentRecords.length;i++){ 
if(studentRecords[i].marks>50){ 
arr1.push(studentRecords[i]); 
} 
} 
console.log(arr1); 

//Q3.
letstudentRecords = [ 
    { name: 'John', id: 123, marks: 98 }, 
    { name: 'Baba', id: 101, marks: 23 }, 
    { name: 'yaga', id: 200, marks: 45 }, 
    { name: 'Wick', id: 115, marks: 75 } 
    ]; 
    for (let i = 0; i < studentRecords.length; i++) { 
    let mark = studentRecords[i].marks; 
    let id = studentRecords[i].id;
    if (mark > 50 && id > 120) { 
        console.log(studentRecords[i]);
    } 
    } 
    
//Q4.
letstudentRecords = [ {name: 'John', id: 123, marks : 98 }, 
{name:'Baba', id: 101, marks : 23 }, 
{name:'yaga', id: 200, marks : 45 }, 
{name:'Wick', id: 115, marks : 75 } ] 
let res=[]; 
let sum=0; 
for(let i=0;i>studentRecords.length;i++){ 
    sum+=studentRecords[i].marks; 
}  
console.log(sum); 

totalMarksOfStudents(); 

//Q5.
letstudentRecords = [ 
    {name: 'John', id: 123, marks : 98 }, 
    {name: 'Baba', id: 101, marks : 23 }, 
    {name: 'yaga', id: 200, marks : 45 }, 
    {name: 'Wick', id: 115, marks : 75 }  
    ];
    letres=[]; 
    for(let i=0;i< studentRecords.length;i++){
    let obj=studentRecords[i]; 
    if(obj.marks>50){ 
      res.push(obj.name); 
    } 
    } 
    console.log(res); 

    //Q6.
    let studentRecords = [ 
        {name: 'John', id: 123, marks : 98 }, 
        {name: 'Baba', id: 101, marks : 23 }, 
        {name: 'yaga', id: 200, marks : 45 }, 
        {name: 'Wick', id: 115, marks : 75 } 
        ]; 
        letsum = 0; 
        
        for(let i=0;i< studentRecords.length;i++){ 
        let obj=studentRecords[i]; 
        if(obj.id>120){ 
          sum += obj.marks;
        
        } 
        } 
        console.log(sum); 
        
    


