import mainReducer from './mainReducer';
import initialState from '../store/initialState';


describe('main Reducer', () => {


    it('topLeft becomes false', () => {
        let firstState = initialState();
        firstState.board[0][0] = true;
        firstState = mainReducer(firstState, { type: "ADVANCE" });
        let expected = initialState().board;

        expect(firstState.board).toEqual(expected);
    });

    it('Pattern x to pattern +', () => {
        let firstState = initialState();
        firstState.board[0][0] = true;
        firstState.board[0][2] = true;
        firstState.board[1][1] = true;
        firstState.board[2][0] = true;
        firstState.board[2][2] = true;
        firstState = mainReducer(firstState, { type: "ADVANCE"});

        const expected = [
            [false, true, false],
            [true, false, true],
            [false, true, false],
        ];

        expect(firstState.board).toEqual(expected);
    });
});