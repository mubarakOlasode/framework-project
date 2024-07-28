const h3 = document.querySelectorAll(".name");
const p1 = document.querySelectorAll(".course");
const p2 = document.querySelectorAll(".semester");

const getInfo = async () => {
  const response = await fetch("http://localhost:3000/data");
  const data = await response.json();
  const datalog = [
    data.Student1,
    data.Student2,
    data.Student3,
    data.Student4,
    data.Student5,
    data.Student6,
  ];

  for (let i = 0; i < datalog.length; i++) {
    for (let j = 0; j < h3.length; j++) {
      h3[0].textContent = datalog[0].name;
      h3[1].textContent = datalog[1].name;
      h3[2].textContent = datalog[2].name;
      h3[3].textContent = datalog[3].name;
      h3[4].textContent = datalog[4].name;
      h3[5].textContent = datalog[5].name;
      p1[0].textContent = "Course:" + " " + datalog[0].course;
      p1[1].textContent = "Course:" + " " + datalog[1].course;
      p1[2].textContent = "Course:" + " " + datalog[2].course;
      p1[3].textContent = "Course:" + " " + datalog[3].course;
      p1[4].textContent = "Course:" + " " + datalog[4].course;
      p1[5].textContent = "Course:" + " " + datalog[5].course;
      p2[0].textContent = "Semester:" + " " + datalog[0].semester;
      p2[1].textContent = "Semester:" + " " + datalog[1].semester;
      p2[2].textContent = "Semester:" + " " + datalog[2].semester;
      p2[3].textContent = "Semester:" + " " + datalog[3].semester;
      p2[4].textContent = "Semester:" + " " + datalog[4].semester;
      p2[5].textContent = "Semester:" + " " + datalog[5].semester;
    }
  }
};
