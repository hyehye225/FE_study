const redux = require("redux");

// 최초로 실행될 때, default value가 존재해야 한다.
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({
  type: "increment",
}); // dispatch는 액션을 발송하는 메소드
