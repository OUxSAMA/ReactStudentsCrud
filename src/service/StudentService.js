import axios from 'axios'


// const INSTRUCTOR = 'in28minutes'
// const LOCALHOST = 'http://localhost:8090'
// const INSTRUCTOR_API_URL = `${LOCALHOST}}`


class CourseDataService {
    getAllStudents() {
        // return axios.get(`${LOCALHOST}/students`);

        return axios.get('http://localhost:8090/students');
    }


    
deleteStudent(id) {
    
    return axios.delete(`http://localhost:8090/students/${id}`);
}


getStudent(id) {
    return axios.get(`http://localhost:8090/students/${id}`);
}

updateStudent(id, student) {
    
    return axios.put(`http://localhost:8090/students/${id}`, student);
}
createStudent(student) {
    
    return axios.post(`http://localhost:8090/students/`, student);
}









}
export default new CourseDataService()