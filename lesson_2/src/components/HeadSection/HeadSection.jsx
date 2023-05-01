import PropTypes from "prop-types";
import { PageTitle } from "../PageTitle";
import "./HeadSection.css";

export const HeadSection = ({ imgUrl, title, description }) => {
  // const { imgUrl, title, description } = props
  return (
    <div className="head" style={{ position: "relative", minHeight: "300px" }}>
      <img
        style={{
          maxWidth: "100%",
          zIndex: -1,
          maxHeight: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
        src={imgUrl}
        alt={title}
      />
      <PageTitle mode="white">asdasdas</PageTitle>
      <p className="head__description">{description}</p>
    </div>
  );
};

HeadSection.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
