import dataLength, {
    DATA_LENGTH_FETCHED_SUCCESSFULLY,ERROR_IN_FETCH_DATA_LENGTH
} from './dataLength';

describe('data length get successfully', () => {

    it('student data length', () => {
        expect(
            dataLength({}, {
                type: DATA_LENGTH_FETCHED_SUCCESSFULLY,
                data: {"dataLength": 2}
            })
        ).toEqual({data_length:{"dataLength": 2}})
    })
    it('there is an error while fetching student length',() => {
        expect(
            dataLength({}, {
                type: ERROR_IN_FETCH_DATA_LENGTH,
                data: {error_msg:"There is an error while fetching student length"}
            })
        ).toEqual({error_msg:"There is an error while fetching student length"})
    })
})