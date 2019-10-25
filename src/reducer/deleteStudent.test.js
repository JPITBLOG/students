import deleteStudent, {
    STUDENT_DELETE_SUCCESSFULLY,ERROR_WHILE_DELETE_STUDENT
} from './deleteStudent';

describe('Student delete reducer', () => {

    it('student delete with id', () => {
        expect(
            deleteStudent({}, {
                type: STUDENT_DELETE_SUCCESSFULLY,
                data: {message:"Student delete successfully"}
            })
        ).toEqual({deletemessage:{message:"Student delete successfully"}})
    })
    it('there is an error while delete student',() => {
        expect(
            deleteStudent({}, {
                type: ERROR_WHILE_DELETE_STUDENT,
                data: {error_msg:"There is an error while delete Student"}
            })
        ).toEqual({error_message:"There is an error while delete Student"})
    })
})