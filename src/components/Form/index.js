import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <div className='form-group'>
          <label for='question' className='form-label'>Question:</label>
          <input type='text' className='form-control form-input' id='question' />
        </div>
        <div className='form-group'>
          <label for='correctAnswer' className='form-label'>Correct Answer:</label>
          <input type='text' className='form-control form-input' id='realQuestion' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer1' className='form-label'>Wrong Answer 1:</label>
          <input type='text' className='form-control form-input' id='wrongQuestion1' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer2' className='form-label'>Wrong Answer 2:</label>
          <input type='text' className='form-control form-input' id='wrongQuestion2' />
        </div>
        <div className='form-group'>
          <label for='wrongAnswer3' className='form-label'>Wrong Answer 3:</label>
          <input type='text' className='form-control form-input' id='wrongQuestion3' />
        </div>
        <div className='center'>
          <button
            type='submit'
            onClick={this.handleSubmit}
            className='ghost-button'>SUBMIT</button>
        </div>
      </form>
    )
  }
}

export default Form
