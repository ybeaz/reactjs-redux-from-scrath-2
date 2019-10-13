import React from 'react';
import { Container } from './Container'
import { Hello } from './Hello'
import { actions } from './store'
import './App.css';

function App(props) {

  // console.info('App [C]', { val: props.reduxState.val })

  const handleActions = val => {
    // console.info('App [E]', { val })
    actions.CHANGE_VAL(val)
  }


  const helloProps = {
    handleActions,
    addition: 'You may type.',
    addition2: 'If it the same OR you have typed less than 5 characters, I do not rerender.',
    addition3: 'Else you will see your input above',
    reduxStateVal: props.reduxState.val
  }
  return (
    <div className="App">
      <header className="App-header">
        <Hello {...helloProps}>Hi Roman</Hello>
      </header>
    </div>
  );
}

export default Container(App);
