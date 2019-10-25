import AddStudentDetail,{STUDENT_ADD_SUCCESSFUL,ERROR_IN_ADD_STUDENT} from './AddStudentDetail';

describe('Add student reducer', () => {

    it('student added successfully', () => {
        expect(
            AddStudentDetail({}, {
                type: STUDENT_ADD_SUCCESSFUL,
                data: {message:"student added successfully"}
            })
        ).toEqual({response_success_msg:{message:"student added successfully"}})
    })
    it('there is an error while add student',() => {
        expect(
            AddStudentDetail({}, {
                type: ERROR_IN_ADD_STUDENT,
                data: {error_msg:"there is an error while add student"}
            })
        ).toEqual({error_msg:"there is an error while add student"})
    })
})