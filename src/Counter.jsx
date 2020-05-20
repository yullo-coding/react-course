import React, {useState} from 'react';

const Counter = ({}) => {
    
    let [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            {count}
            
            <br/>
            
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    );
}
export default Counter;