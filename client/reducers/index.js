
const initalState = {};

export default (state = initalState, action) => {
    let newState = { ...state };
    switch(action.type) {
        default:
            return newState;
    };
};