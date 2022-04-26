import React, { FC } from "react";
import StarIcon from "./StarIcon";
import styled from "styled-components";

interface Stars {
  WrapperDiv?: any;
  BackStarsDiv?: any;
  FrontDiv?: any;
}

const Star: Stars = {
  WrapperDiv: styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
  `,

  BackStarsDiv: styled.div`
    display: flex;
    position: relative;
    color: #d3d3d3;
  `,

  FrontDiv: styled.div`
    display: flex;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: ${(props: any) => props.rating};
    color: #177ddc;
  `,
};

interface StarsFC {
  rating: number;
}

const Stars: FC<StarsFC> = ({ rating }) => {
  let stars = "";
  if (rating) {
    stars = (((Math.round((rating * 10) / 5) * 5) / 10) * 20).toString() + "%";
  }
  return (
    <React.Fragment>
      <Star.WrapperDiv>
        <Star.BackStarsDiv>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <Star.FrontDiv rating={stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Star.FrontDiv>
        </Star.BackStarsDiv>
      </Star.WrapperDiv>
    </React.Fragment>
  );
};

export default Stars;
