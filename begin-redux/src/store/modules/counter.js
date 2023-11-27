import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의해줍니다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export default handleActions({
    [INCREMENT]: (state, action) => {
      return { number: state.number + 1 };
    },
    // action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
    // state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
  }, initialState);

// 리듀서를 만들어서 내보내줍니다.
// export default function reducer(state = initialState, action) {
//     // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
//     // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
//     switch(action.type) {
//       case INCREMENT:
//         return { number: state.number + 1 };
//       case DECREMENT:
//         return { number: state.number - 1 };
//       default:
//         return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
//     }
// }