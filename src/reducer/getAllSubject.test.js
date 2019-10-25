import getAllSubject,{SUBJECT_FETCHED_SUCCESSFUL,ERROR_IN_FETCHED_SUBJECT} from './getAllSubject';


describe('getAllSubject reducer', () => {
    it('should return the initial state', () => {
        expect(getAllSubject(undefined, {})).toEqual(
            {
                Allsubject: [],
                error_msg: ""
            }
        )
    })
    it('should handle with pass data', () => {
        expect(
            getAllSubject({}, {
                type: SUBJECT_FETCHED_SUCCESSFUL,
                data: ["maths", "gujarati", "hindi"]
            })
        ).toEqual({
                Allsubject: ["maths","gujarati","hindi"],
                error_msg: ""
        })
    })
    it('should handle with error message', () => {
        expect(
            getAllSubject({}, {
                type: ERROR_IN_FETCHED_SUBJECT,
                data: {error_msg:"there is an error while calling API"}
            })
        ).toEqual({
            error_msg: "there is an error while calling API"
        })
    })
})