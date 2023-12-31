# 1. Project features:  
- Users can choose any courses, with a maximum total credit limit of 20.  
- Users have visibility of the total credits of the selected courses.  
- Users can simultaneously continue multiple courses at a time.   
  
# 2. Discuss how you managed the state in your assignment project.  
## Course Enrollment React.js Project  
### State Management  
- In this project, I effectively managed the application's state using React's built-in state management capabilities. Specifically.  
  
- Course Selection State: I maintained a state variable to keep track of the courses selected by the user for enrollment. Each course object in the state contains information such as its id, title, credit,price and an image.  
  
- Total Credit Calculation: To ensure that the total credits of selected courses do not exceed 20, I dynamically calculated the total credits by iterating through the selected courses array whenever a course was added or removed. This allowed me to keep the user informed about their current credit count.  
  
- Preventing Duplicate Enrollment: To prevent a user from purchasing the same course twice, I maintained a list of enrolled course IDs in the state. When a user attempts to enroll in a course, I check whether the course is already in their list of enrolled courses. If it is, I provide feedback and prevent the duplicate enrollment.  
  
By effectively managing the state in these ways, we ensured that the course enrollment process was user-friendly, intuitive, and in compliance with the project's requirements. This allowed users to seamlessly select and enroll in courses while staying within the specified credit limits.
 
