import React from "react";

import "./comments.scss";
import { commentsData } from "../../mock/commentsDatas";

import fullHeartIcon from "../../assets/icons/full-heart-icon.svg";
import noComment from "../../assets/images/no-comment.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";

function Comments() {
  return (
    <span className="comments-box">
      {commentsData.length > 0 ? (
        commentsData.map((comment) => (
          <span className="comment" key={comment.id}>
            <span className="top__comment flex">
              <img src={comment.profileImg} alt="comment profile img" />
              <span className="profile-info">
                <h6 className="font-style__1619">{comment.userName}</h6>
                <p className="flex font-style__1215">
                  <img src={watchIcon} alt="watch icon" />
                  {comment.commentDate}
                </p>
              </span>
            </span>
            <span className="middle__comment">
              <p className="font-style__1619">{comment.commentText}</p>
            </span>
            <span className="bottom__comment flex">
              <p className="font-style__1215">Javob qoldirish...</p>
              <p className="font-style__1215 flex">
                <img src={fullHeartIcon} alt="full heart icon" />
                {comment.numberOfLike} ta like
              </p>
            </span>
          </span>
        ))
      ) : (
        <span className="no-comment">
          <img src={noComment} alt="no comment img" />
          <h4 className="font-style__3239">Bu maqolada izohlar mavjud emas</h4>
        </span>
      )}
    </span>
  );
}

export default Comments;
