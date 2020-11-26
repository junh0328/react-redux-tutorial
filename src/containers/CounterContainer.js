/*  
컨테이너 폴더 안에 들어있는 파일들은 컨테이너 컴포넌트입니다.
컨테이너 컴포넌트는 리덕스 스토어에 접근하여 원하는 상태를 받아 오고, 또 액션도 디스패치해 줄 수 있습니다.
리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부릅니다. 
*/
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
