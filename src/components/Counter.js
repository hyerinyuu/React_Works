import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ( {number, color, onIncrement, onDecrement, onSetColor} ) => {
    return (
        <div
            className = "Counter"
            onClick = {onIncrement}
            /*
                onContextMenu : 우클릭을 하여 메뉴가 열리는 이벤트
                e.preventDefault()를 사용해 우클릭시 메뉴가 열리지 않도록 함.*/
            onContextMenu = {
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            onDoubleClick={onSetColor}
            style={{backgroundColor : color}}>
            {number}
        </div>
    );
};

Counter.propTypes = {
    number : PropTypes.number,
    color : PropTypes.string,
    onIncrement : PropTypes.func.toString(),
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
}

// default Value로 기본숫자는 0, 기본색상은 블랙으로 세팅
Counter.defaultProps = {
    number : 0,
    color : 'black',
    onIncrement : () => console.warn('onIncrement not defined'),
    onDecrement : () => console.warn('onDecrement not defined'),
    onSetColor : () => console.warn('onDecrement not defined')
}

export default Counter;

