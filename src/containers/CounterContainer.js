import Counter from '../components/Counter';
import * as actions from '../actions';
/*
    react-redux의 connect() 함수를 사용해 CounterContainer component를 store에 연결해줌.
    connect()함수의 파라메터값으로 component에 연결시킬 상태와 액션함수들을 전달해주면,
    component를 Redux Store에 연결시키는 또 다른 함수를 반환함.
    이 과정에서 리턴된 함수 안에 presentational component를 파라메터로 전달해주면 redux store에 연결된 component가 새로 만들어짐.
 */
import { connect } from 'react-redux';


// state와 action을 정의할 때는 함수를 각각 만들어 주어야 한다.


// 1. 상태를 연결시키는 함수는 mapStateToProps로,
/*
   상태(data)를 연결시킬때는 state를 파라메터로 전달해줌 ==> 객체를 반환해 props로 사용가능

   store안의 state값을 props로 연결해줌
*/
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});


// 2. 액션함수를 연결시키는 함수는 mapDispatchToProps로 만들어
/*
    action을 연결시킬때는 dispatch를 파라메터로 전달해줌 ==> 객체를 반환해 props로 사용가능

    Action 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해줌
 */
const mapDispatchToProps = (dispatch) => ({
    onIncrement : () => dispatch(actions.increment()),
    onDecrement : () => dispatch(actions.decrement()),
    onSetColor :  () => {
        const color = 'black;'  //임시
        dispatch(actions.setColor(color));
    }
});

// Counter component의 Container Conponent
// Counter component를 어플리케이션의 데이터 레이어와 묶는 역할을 함.

// 3. 이를 connect에게 전달해주고
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps

    // 4. 그렇게 전달받은 함수에 Counter component를 전달해 내보냄.
    //이 과정에서 리턴된 함수 안에 presentational component를 파라메터로 전달해주면 redux store에 연결된 component가 새로 만들어짐.
)(Counter);

export default CounterContainer;
