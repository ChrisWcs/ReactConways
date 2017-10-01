import boardReducer from './boardReducer';
import initialState from '../utils/initialState';


describe('main Reducer', () => {


    it('topLeft becomes false', () => {
        let board = initialState().board;
        board[0][0] = true;
        board = boardReducer( board );
        let expected = initialState().board;

        expect(board).toEqual(expected);
    });

    it('Pattern x to pattern +', () => {
        let board = initialState().board;
        board[0][0] = true;
        board[0][2] = true;
        board[1][1] = true;
        board[2][0] = true;
        board[2][2] = true;
        board = boardReducer(board);

        const expected = [
            [false, true, false],
            [true, false, true],
            [false, true, false],
        ];

        expect(board).toEqual(expected);
    });
});