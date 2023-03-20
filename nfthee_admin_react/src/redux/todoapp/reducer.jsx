import {
    GET_LIST,
    GET_LIST_SUCCESS,
    FILTER_WITH_CATEGORY,
    FILTER_WITH_LABEL,
    FILTER_WITH_STATUS,
    ADD_NEW_ITEM,
    MARK_ALL_ITEMS,
    REMOVE_ITEM,
    SELECTED_ITEM,
} from '../../redux/actionTypes';

const INIT_STATE = {
    allTodoItems: null,
    todoItems: null,
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_LIST:
            return {...state, loading: false};

        case GET_LIST_SUCCESS:
            const liveItems = action.payload.filter((item) => item.status !== "deleted");
            return {...state, loading: true, allTodoItems: liveItems, todoItems: action.payload};

        case FILTER_WITH_CATEGORY:
            const filteredItems = state.allTodoItems.filter((item) =>
            item.category === action.payload);
            return {...state, loading: true, todoItems: filteredItems};

        case FILTER_WITH_LABEL:
            const labelfilterItems = state.allTodoItems.filter((item) =>
            item.label === action.payload);
            return {...state, loading: true, todoItems: labelfilterItems};

        case FILTER_WITH_STATUS:
            const statusfilterItems = state.allTodoItems.filter((item) =>
                item.status === action.payload);
            return {...state, loading: true, todoItems: action.payload ==='' ?  state.allTodoItems : statusfilterItems};

        case ADD_NEW_ITEM:
            state.allTodoItems.push({
                id: state.allTodoItems.length + 1,
                title: action.payload.task,
                category: action.payload.category,
                status: "pending",
                label: action.payload.label,
                labelColor: action.payload.color
            })
            return {...state, loading: true, todoItems: state.allTodoItems, allTodoItems: state.allTodoItems};

        case SELECTED_ITEM:
            const updatedStatus = state.allTodoItems.reduce((cartAcc, item) => {
                if (item.id === action.payload.itemId) {
                    cartAcc.push({...item, status: action.payload.status})
                }else{
                    cartAcc.push(item)
                }
                return cartAcc;
            }, [])
            return {...state, loading: true, todoItems: updatedStatus, allTodoItems: updatedStatus};

        case MARK_ALL_ITEMS:
            const updateStatus = state.allTodoItems.reduce((cartAcc, item) => {
                if (action.payload === false) {
                    cartAcc.push({...item, status: 'completed'})
                }else{
                    cartAcc.push({...item, status: 'pending'})
                }
                return cartAcc;
            }, [])
            return {...state, loading: true, todoItems: updateStatus, allTodoItems: updateStatus};

        case REMOVE_ITEM:
            const updatedItems = state.allTodoItems.reduce((cartAcc, item) => {
                if (item.id === action.payload) {
                    cartAcc.push({...item, status: 'deleted'})
                }else{
                    cartAcc.push(item)
                }
                return cartAcc;
            }, [])
            return {...state, loading: true, allTodoItems:updatedItems, todoItems: updatedItems};

        default: return { ...state };
    }
}
