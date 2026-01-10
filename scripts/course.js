const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]




// code
const course_list = document.getElementById("courses");
course_list.innerHTML = "";

const filter_all = document.getElementById("filter-all");
const filter_cse = document.getElementById("filter-cse");
const filter_wdd = document.getElementById("filter-wdd");

const span_credit = document.getElementById("credits");

filter_all.addEventListener("click", () => {
    updateCourses("ALL");
    updateCredits("ALL");
});
filter_cse.addEventListener("click", () => {
    updateCourses("CSE");
    updateCredits("CSE");
});
filter_wdd.addEventListener("click", () => {
    updateCourses("WDD");
    updateCredits("WDD");
});




function updateCourses(filter) {
    console.log(filter);
    let course_elements = "";
    if (filter != "ALL") {
        for (const element of courses) {
            let completion_status = "";
            console.log(element.subject);
            if (element.subject == filter) {
                if (element.completed == true) {
                    completion_status = "completed"
                }
                course_elements += `<div class = "course ${completion_status}">${element.subject} ${element.number}</div>`;
            }
        }
    }
    else {
        for (const element of courses) {
            let completion_status = "";
            console.log(element.subject);
            if (element.completed == true) {
                completion_status = "completed"
            }
            course_elements += `<div class = "course ${completion_status}">${element.subject} ${element.number}</div>`;
        }

    }
    console.log(course_elements);
    course_list.innerHTML = course_elements;
}
function updateCredits(filter) {
    let filtered_courses = []; 
    for(const element of courses){
        if(filter == "ALL" || element.subject == filter){
            filtered_courses.push(element);
        }
    }
    let credits = filtered_courses.reduce((total, element) => {
        return total = total + Number(element.credits);
    },0);
    span_credit.innerHTML = `The total credits for course listed above is ${credits}`;

}
updateCourses("ALL");
updateCredits("ALL");

