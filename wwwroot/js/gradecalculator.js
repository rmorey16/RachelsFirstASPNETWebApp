var gradeSubmit = document.getElementById("gradeSubmit");
var gradeNum = document.getElementById('gradeNum').value;
var gradeLetter;

if (gradeNum >= 94) {
    gradeLetter = "A";
} else if (gradeNum >= 90) {
    gradeLetter = "A-";
} else if (gradeNum >= 87) {
    gradeLetter = "B+";
} else if (gradeNum >= 84) {
    gradeLetter = "B";
} else if (gradeNum >= 80) {
    gradeLetter = "B-";
} else if (gradeNum >= 77) {
    gradeLetter = "C+";
} else if (gradeNum >= 74) {
    gradeLetter = "C";
} else if (gradeNum >= 70) {
    gradeLetter = "C-";
} else if (gradeNum >= 67) {
    gradeLetter = "D+";
} else if (gradeNum >= 64) {
    gradeLetter = "D";
} else if (gradeNum >= 60) {
    gradeLetter = "D-";
} else {
    gradeLetter = "E";
}
gradeSubmit.addEventListener("click", function () {
    alert("The alphabetical grade is: " + gradeLetter)
});


