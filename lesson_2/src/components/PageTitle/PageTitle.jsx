import css from "./PageTitle.module.css";
import PropTypes from "prop-types";
import clsx from "clsx";

export const PageTitle = ({ children, mode }) => {
  return (
    <h2
      className={clsx(
        css.title,
        mode === "dark" ? css["title--dark"] : css["title--white"]
      )}
    >
      {children}
    </h2>
  );
};

PageTitle.propTypes = {
  mode: PropTypes.oneOf(["dark", "white"]),
};
