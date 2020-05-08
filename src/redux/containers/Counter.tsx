import { connect } from "react-redux";
import { Dispatch } from "redux";

import { add, decrement, increment } from "../actions/counter";
import Counter from "../components/Counter";
import { CounterState } from "../reducer";

// Prop for Store state.
interface StateProps {
  count: number;
}

// Prop for Dispatcher which includes Action.
interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

// Mapping State to prop.
// Argument is new State from reducer's return value.
const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

// Mapping Action object to reducer's argument.
// View exec dispatching to reducer by access DispatchProps property.
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment())
});

// Marge and put both of State and Action as component's prop by 'connect'.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
