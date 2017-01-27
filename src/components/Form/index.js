import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';

export class Form extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearNotifications = this.clearNotifications.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleError = this.handleError.bind(this)
    this.clearRefs = this.clearRefs.bind(this)
    this.notificationSystem;
  }

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/api/question', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.refs.question.value || '',
        answer: this.refs.answer.value || '',
        wrongAnswers: {
          '1': this.refs.wrong1.value || '',
          '2': this.refs.wrong2.value || '',
          '3': this.refs.wrong3.value || '',
        }
      })
    })
    .then((res) => { return res.json() })
    .then((res) => {
      this.handleSuccess();
      this.clearRefs();
    })
    .catch((err) => { this.handleError() })
  }

  clearRefs() {
    const refs = ['question', 'answer', 'wrong1', 'wrong2', 'wrong3']

    refs.forEach((ref) => {
      this.refs[ref].value = ''
    })
  }

  clearNotifications() {
    this.notificationSystem.clearNotifications();
  }

  handleSuccess() {
    this.clearNotifications();
    this.notificationSystem.addNotification({
      message: 'Your question was submitted successfully',
      level: 'success'
    })
  }

  handleError() {
    this.clearNotifications();
    this.notificationSystem.addNotification({
      message: 'There was an problem with your request. Please try again later.',
      level: ''
    })
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <form>
          <div className='form-group'>
            <label for='question' className='form-label'>Question:</label>
            <input
              ref='question'
              type='text'
              className='form-control form-input'
              id='question' />
          </div>
          <div className='form-group'>
            <label for='correctAnswer' className='form-label'>Correct Answer:</label>
            <input
              ref='answer'
              type='text'
              className='form-control form-input'
              id='realQuestion' />
          </div>
          <div className='form-group'>
            <label for='wrongAnswer1' className='form-label'>Wrong Answer 1:</label>
            <input
              ref='wrong1'
              type='text'
              className='form-control form-input'
              id='wrongQuestion1' />
          </div>
          <div className='form-group'>
            <label for='wrongAnswer2' className='form-label'>Wrong Answer 2:</label>
            <input
              ref='wrong2'
              type='text'
              className='form-control form-input'
              id='wrongQuestion2' />
          </div>
          <div className='form-group'>
            <label for='wrongAnswer3' className='form-label'>Wrong Answer 3:</label>
            <input
              ref='wrong3'
              type='text'
              className='form-control form-input'
              id='wrongQuestion3' />
          </div>
          <div className='center'>
            <button
              type='submit'
              onClick={this.handleSubmit}
              className='ghost-button'>SUBMIT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
