import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered Here</h2>
      <p>
        Choose your favorite meal from broad selection of available meals and
        enjoy lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with the high-quality ingredients, just-in-time
        and ofcourse by experienced chefs!
      </p>
    </section>
  );
};
export default MealSummary;
