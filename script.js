// Get the input fields and buttons
const numStudentsInput = document.getElementById('num-students');
const addStudentsButton = document.getElementById('add-students');
const studentMarksDiv = document.getElementById('student-marks');
const calculatePositionButton = document.getElementById('calculate-positions');
const resultDiv = document.getElementById('result');

// Add event listener to add the students button
addStudentsButton.addEventListener('click',()=>{
    const numStudents = parseInt(numStudentsInput.value);
    if(isNaN(numStudents) || numStudents <= 0 )
    {
        alert('Please enter a valid number of students!');
        return;
    }

    // Create input fields for each student`s marks
    studentMarksDiv.innerHTML = "";
    for (let i=0; i<numStudents; i++){
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.placeholder = `Student ${i+1} marks`;
        studentMarksDiv.appendChild(inputField);
        // inputField.style.width = '90%';

        studentMarksDiv.appendChild(document.createElement('br'));
    }
});

// Add event listener to calculate the positions button
calculatePositionButton.addEventListener('click',()=>{
    const studentMarks = [];
    const inputFields = studentMarksDiv.children;
    for (let i = 0; i < inputFields.length; i+=2) {
        const mark = parseInt(inputFields[i].value);
        if (isNaN(mark) || mark < 0) {
            alert('Please enter valid marks for all students!')
            return;
        }
        studentMarks.push(mark);
    }

    // Calulate the positions
    studentMarks.sort((a,b)=>b-a);
    const positions = [];
    for (let i = 0; i < studentMarks.length; i++) {
        positions.push(`Student ${i+1}: ${studentMarks[i]} Marks`);    
    }

    // Display the results
    resultDiv.innerText = positions.join('\n')
    // resultDiv.style.gap = '15px';
});