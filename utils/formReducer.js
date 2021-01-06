const formReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, [action.name]: action.value }
        case 'SET_FORM_STATE':
            return { ...state, formState: action.formState }
        default:
            return state
    }
}

export const initialState = (region) => {
    return {
        name: null,
        stateId: region === undefined ? null : region.id,
        link: null,
        image: null,
    }
}

export default formReducer
