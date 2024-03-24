import { Fragment } from "react";
import headerimage from "../../assest/headerimage.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>RectMeal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerimage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
