import { createReducer, createAction, ActionType } from "typesafe-actions";
// 액션 타입 선언
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

// 액션생성함수 선언
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

const actions = { increase, decrease, increaseBy };
// 액션객체 타입 선언
type CounterAction = ActionType<typeof actions>;

// 상태 타입
type CounterState = { count: number };

// 상태 초기값
const initialState: CounterState = { count: 0 };

// 리듀서 작성
// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
});
// const counter = createReducer<CounterState, CounterAction>(initialState)
//   .handleAction(INCREASE, state => ({ count: state.count + 1 }))
//   .handleAction(DECREASE, state => ({ count: state.count - 1 }))
//   .handleAction(INCREASE_BY, (state, action) => ({
//     count: state.count + action.payload
//   }));
export default counter;
