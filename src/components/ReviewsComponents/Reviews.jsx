import React, { Component } from "react";
import ReviewList from "./ReviewList.jsx";
import AddReview from "../../containers/RatingsReviewsContainers/ReviewsButtonsContainer.js";
import Grid from "@material-ui/core/Grid";
import Ratings from "../../containers/RatingsReviewsContainers/StarsContainer.js";

export default class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.props.listOfReviews([1, "REVIEWS"]);
  }

  render() {
    return (
      <div className="Ratings-Reviews">
        <h5>{"RATINGS & REVIEWS"}</h5>
        <Grid container spacing={6} className="hello testing">
          <Grid item>
            <Ratings />
          </Grid>
          <Grid item className="Reviews">
            <ReviewList props={this.props.reviews.results} />
            <AddReview />
          </Grid>
        </Grid>
      </div>
    );
  }
}
