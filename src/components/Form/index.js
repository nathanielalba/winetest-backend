import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <div className='form-group'>
          <label for='question'>Question:</label>
          <input type='text' className='form-control' id='question' />
        </div>
        <div className='form-group'>
          <label for='correctAnswer'>Correct Answer:</label>
          <input type='text' className='form-control' id='realQuestion' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer1'>Wrong Answer 1:</label>
          <input type='text' className='form-control' id='wrongQuestion1' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer2'>Wrong Answer 2:</label>
          <input type='text' className='form-control' id='wrongQuestion2' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer3'>Wrong Answer 3:</label>
          <input type='text' className='form-control' id='wrongQuestion3' />
        </div>
      </form>
    )
  }
}

export default Form
