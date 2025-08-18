const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];

// Loop through each student in the students array one by one
for (const student of students) {
    // console.log(student);

    // Store each student's name in a separate variable
    const studentName = student.name;
    // console.log(studentName);

    // Store each student's marks in a separate variable
    const studentMarks = student.marks;
    // console.log(studentMarks);

    console.log('Name:', studentName, 'Scored:', studentMarks);
}