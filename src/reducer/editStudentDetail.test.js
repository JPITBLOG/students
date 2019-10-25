import getAllStudent, {
    STUDENT_SUCCESSFUL_EDIT
} from './getAllStudent';
import {stateValue,editValue} from '../TestCaseValue/reducerTestCaseValue';

describe('Student fetch reducer', () => {

    it('should handle with pass data', () => {
        expect(
            getAllStudent(stateValue(), {
                type: STUDENT_SUCCESSFUL_EDIT,
                data: editValue()
            })
        ).toEqual({Allstudent: editValue(),
            editFlag:1})
    })
})