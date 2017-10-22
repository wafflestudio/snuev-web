import React from 'react';
import LectureName from './LectureName';
import Rating from './Rating';
import SubRating from './SubRating';
import Review from './Review';


export default class Evalutation extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      lectureName : "",
      rating : 0,
      teachingSkill : 0,
      looseness : 0,
      gradeSatisfaction : 0,
      review : "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let obj = {}
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <div>
          <h1>강의 평가하기</h1>
        </div>
        <form>
          <LectureName
            lectureName = {this.state.lectureName}
            onChange = {this.handleChange}
          />
          <Rating
            rating = {this.state.rating}
            onChange = {this.handleChange}
          />
          <SubRating
            teachingSkill = {this.state.teachingSkill}
            looseness = {this.state.looseness}
            gradeSatisfaction = {this.state.gradeSatisfaction}
            onChange = {this.handleChange}
          />
          <Review
            review = {this.state.review}
            onChange = {this.handleChange}
          />
        </form>
      </div>
    );
  }
}
