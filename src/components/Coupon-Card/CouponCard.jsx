import React from "react";
import Coffee from "../../assets/Leonardo_Phoenix_A_dimly_lit_moody_scene_featuring_a_steaming_2.jpg";
import Tea from "../../assets/Leonardo_Phoenix_A_serene_elegant_scene_showcasing_a_steaming_0.jpg";
import "./couponCard.css";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/AddItem/add-item-action";
const CouponCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setOpen(props.title));
  };
  return (
    <div className="coupon">
      <div className="coupon-card">
        {props.title === "tea" ? (
          <img className="card-image" src={Tea} />
        ) : (
          <img className="card-image" src={Coffee} />
        )}
        <div className="coupon-detail">
          <div className="border"></div>
          <h3 className="coupon-title">{props.title}</h3>
          <span className="coupon-text">{props.detail}</span>
          <span className="coupon-price">{props.price}</span>
        </div>
      </div>
      <div className="add-btn" onClick={handleClick}>
        Add
      </div>
    </div>
  );
};

export default CouponCard;
