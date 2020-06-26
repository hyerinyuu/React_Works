import * as types from '../actions/ActionTypes';

// 초기상태 정의하기
const initState = {
    color: 'black',
    number: 0
};


// Reducer함수
// state와 action을 파라미터르 가지는 함수이며,
// 내부에서 switch문을 통해 action.type에 따라 상태에 다른 변화를 일으킬거임
// state를 직접 수정하면 절대 안되고 기존 state값에 덮어쓴 새 상태객체를 만드는 방식으로 해야함~! README.md 참고
function counter(state = initState, action){
    switch(action.type){
        case types.INCREMENT :
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT :
            return {
                ...state,
                number : state.number - 1
            };
        case types.SET_COLOR :
            return {
                ...state,
                number : action.color
            };
        default :
            return state;
    }

};

export default counter;

