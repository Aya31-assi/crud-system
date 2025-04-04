//localStorage.setItem("name","aya");
//const userName= localStorage.getItem("name");
//document.querySelector("h2").innerHTML=userName;
//localStorage.removeItem("name");



const courseName= document.querySelector("#courseName");
const category= document.querySelector("#courseCategory");
const price= document.querySelector("#coursePrice");
const description= document.querySelector("#courseDescription");
const capacity= document.querySelector("#courseCapacity");
const addBtn= document.querySelector("#click");

let courses=[];


// get courses from localStorage
if(localStorage.getItem("courses")!=null){
    courses= JSON.parse(localStorage.getItem("courses"));
    displayCourses();
}

// add courses to localStorage
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
const course={
    name: courseName.value,
    category: category.value,
    price: price.value,
    description: description.value,
    capacity: capacity.value
};
courses.push(course);
localStorage.setItem("courses",JSON.stringify(courses));
Swal.fire({
    title: "course added!",
    text: "You add the course successfuly!",
    icon: "success"
  });
displayCourses();
});


// Display Courses
function displayCourses (){

    const result =courses.map((course,index)=>{
        return `
        <tr>
            <td>${index}</td>
            <td>${course.name}</td>
            <td>${course.category}</td>
            <td>${course.price}</td>
            <td>${course.description}</td>
            <td>${course.capacity}</td>
            <td><button onclick="deleteCourse(${index})">Delete</button></td>
            <td><button onclick="editCourse(${index})">Edit</button></td>
        </tr>
        `;
      
    }).join(' ');
    document.querySelector("#data").innerHTML=result;
}
