const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passing = grades.filter(passingGrade);

function passingGrade(grade) {
  return grade >= 70;
}
console.log("Passing grades:", passing);