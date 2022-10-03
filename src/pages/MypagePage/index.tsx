import React from "react";
import { useSelector } from "react-redux";
import UserPhoto from "../../components/UserPhoto";
import { selectDescription, selectName } from "../../redux/profile/selectors";
import Btn from "../../UI/Btn";
import classes from "./MypagePage.module.scss";

const MypagePage = () => {
  const name = useSelector(selectName);
  const description = useSelector(selectDescription);

  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <div className={classes.profile__content}>
          <UserPhoto size={200} />
          <span className={classes.content_span}>{name}</span>
          <p className={classes.content_p}>{description}</p>
        </div>
      </div>
      <div className={classes.editInfo}>
        <p className={classes.editInfo__p}>
          This parameters were created to dfaf sdfaffdfs sdafdsf fdfgdgg
          dfgdfgffd dfgdgdfg dfgdfgdgdgddg dfgdfgdfg dfgd fdgfdgd gdfgdfgdgd
          gdgdgdgdgfd dgdf dfgdf gdfgdf fd f gdfgdfgdfgdf df g fdg fd dfg dfgfd
          gdf df gdf gdfdfggdfgdf gdf df dfgdfgfg gdddfdsfsd sdfdf sdfs fdsfdfss
          dfsfsfdff dfsf sd sd dsfsd sdffsd fsdfsfs.
        </p>
        <Btn onClick={() => {}} styles={classes.editInfo__btn}>
          Edit
        </Btn>
      </div>
    </div>
  );
};

export default MypagePage;
