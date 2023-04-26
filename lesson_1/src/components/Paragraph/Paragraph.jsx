import PropTypes from "prop-types";

export const Paragraph = (props) => {
  return <p className={props.className}>{props.children}, I'm React</p>;
};

Paragraph.propTypes = {
  className: PropTypes.string,
  array: PropTypes.arrayOf(PropTypes.number),
};
