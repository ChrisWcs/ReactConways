import createBlankBoard  from '../utils/createBlankBoard';

const initialState = () => ({
    board: createBlankBoard( 3, 3)
});

export default initialState;