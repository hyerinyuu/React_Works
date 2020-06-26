/*
    action 객체를 만드는 액션 생성자들을 선언(action creators)

    [action]
    action은 하나의 객체임. 모든 action 객체는 type값을 지니고 있어야함
    이 type은 action의 이름과도 같은 존재임.
    나중에 reducer가 action을 전달받으면 이 값에 따라서 다른 작업을 하기도 함.

    이 값을 사용할때마다 그냥 문자열로 사용하면 관리하기 힘드니까 따로 파일을 만들어(ActionTypes.js)로 저장함
    액션을 만들때마다 객체를 그때그때 만들기는 힘드니까 액션 만드는 함수를 만들거임
    (액션 생성자)
*/
import * as types from './ActionTypes';


// increment와 decrement는 어차피 1씩 더하고 빼는거니까 따로 필요한 값이 없으므로 type만 지정해줌
export const increment = () => ({
    type : types.INCREMENT
});

export const decrement = () => ({
    type : types.DECREMENT
});


// setColor의 경우 색상을 지정해줘야하므로 파라메터값으로 color를 받아서 이 값을 객체안에 넣어줌
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});

// + 리걱스의 3가지 원칙중 변화는 언제나 순수함수로 이루어져야한다는 게 있는데
// 더블클릭으로 하면 색이 랜덤으로 변하게 만들어어야하지만 이때 action값으로 RANDOMIZE_COLOR 이런식으로 만들면 안됨
// 왜냐하면 랜덤함수는 실행될 때마다 다른 값을 반환하기 때문에 순수하지 않기 때문
