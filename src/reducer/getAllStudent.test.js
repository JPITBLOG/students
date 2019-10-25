import getAllStudent, {
    STUDENT_FETCHED_SUCCESSFUL
} from './getAllStudent';
import {editValue} from '../TestCaseValue/reducerTestCaseValue';

describe('getAllStudent reducer', () => {
    it('should return the initial state', () => {
        expect(getAllStudent(undefined, {})).toEqual(
            {
                Allstudent: [],
                editFlag:0,
                error_msg: ""
            }
        )
    })
    it('should handle with pass data', () => {
        expect(
            getAllStudent({}, {
                type: STUDENT_FETCHED_SUCCESSFUL,
                data: editValue()
            })
        ).toEqual({
            Allstudent: editValue()
        })
    })
})