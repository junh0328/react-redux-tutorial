/*
Ducks 패턴은 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식입니다. 
*/
import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 값
const initialState = {
  number: 0,
};

// 리듀서 함수에서 redux-actions 모듈을 이용한 handleActions 처리, 리듀서와 같다.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// 리듀서를 사용하여 해당 counter.js를 연결하기 위해서는 connect 작업이 필요하지만, redux-actions를 사용하여 handleActions로 나타냈기 때문에 그럴 필요가 없다.

export default counter;
