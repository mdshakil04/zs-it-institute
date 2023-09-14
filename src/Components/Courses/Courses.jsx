import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <div className="md:grid grid-cols-3 gap-4 mt-8">
                {
                    courses.map(course => <Course
                        key={course.id} 
                        course={course}
                        handleAddToCart={handleAddToCart}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;