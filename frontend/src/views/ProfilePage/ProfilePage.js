import React, { useContext, useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Datetime from "react-datetime";

import axios from "axios";

// 사용자의 프로필 사진이 없을 때 대신 사진
import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import UserContext from "../../contexts/UserContext";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const { userName } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "김싸피",
    email: "abc@ssafy.com",
    position: "all",
    age: 1900,
    weight: 100,
    height: 200,
    profileURL: "",
  });

  useEffect(() => {
    // axios({
    //   method: "get",
    //   url: "https://locallhost:9999/api/user" + loginUser.name,
    // })
    //   .then(() => {
    //     console.log(user);
    //     console.log("success");
    //   })
    //   .catch(() => {
    //     console.log("fail");
    //   });
  }, []);

  const [pos, setPos] = useState(0);

  const setPosition = (pos) => {
    setPos(pos);
  };

  console.log(user);
  return (
    <div>
      <Header
        brand="FutSalah"
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg1.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    {user.profileURL === "" ? (
                      <img src={profile} alt="..." className={imageClasses} />
                    ) : (
                      <img
                        src={user.profileURL}
                        alt="..."
                        className={imageClasses}
                      />
                    )}
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{user.name}</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <CustomInput
                  id="email"
                  labelText="이메일"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: user.email,
                    onChange: (event) =>
                      setUser((preState) => {
                        console.log(event.target.value);
                        return {
                          ...preState,
                          email: event.target.value,
                        };
                      }),
                  }}
                />

                <GridContainer>
                  <GridItem>
                    <h3 className={classes.buttonTitle}>출생연도</h3>
                  </GridItem>

                  <GridItem>
                    <Datetime
                      dateFormat="YYYY"
                      timeFormat={false}
                      defaultValue={user.age + ""}
                      // onChange={(event) => {
                      //   // updateAge(event._d.getYear() + 1900);
                      // }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem>
                    <h3 className={classes.buttonTitle}>포지션</h3>
                  </GridItem>
                  <GridItem>
                    <Button
                      className={
                        pos === "all"
                          ? classes.selectButton
                          : classes.buttonList
                      }
                      color="danger"
                      onClick={() => setPos("all")}
                    >
                      ALL
                    </Button>
                    <Tooltip
                      id="tooltip-PIVO"
                      title="풋살 포지션에서 가장 전방에 서는 선수로 공격적인 역할을 한다. 플레이 성향에 따라 ‘클래식 피보’와 ‘가짜 피보’로 나누어진다. 클래식 피보는 피지컬이 좋고 공을 잘 소유하는 선수로 아라(ALA)와의 연계를 잘 한다. ‘가짜 피보’는 축구에서 펄스 나인(False 9)과 유사하다. 피보 포지션이지만 그 자리에 국한되지 않은 플레이를 한다."
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        className={
                          pos === "pivo"
                            ? classes.selectButton
                            : classes.buttonList
                        }
                        color="rose"
                        onClick={() => setPos("pivo")}
                      >
                        PIVO
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-ALA"
                      title="쉽게 말하면 축구의 윙어 역할이다. 양 사이드에 위치하며 상대 수비를 흔드는 역할, 공격과 수비를 연결하는 역할을 한다. 하지만 풋살에서는 수비 가담도 많이 해야 하기 때문에 활동량 많은 선수들에게 적합하다."
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        className={
                          pos === "ala"
                            ? classes.selectButton
                            : classes.buttonList
                        }
                        color="warning"
                        onClick={() => setPos("ala")}
                      >
                        ALA
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-FIXO"
                      title="필드 플레이어 중 가장 아래에 서는 선수를 픽소라고 한다. 픽소는 경기를 넓게 볼 줄 알아야 하고 볼 운반/배급을 잘해야 한다. 골대 앞에 위치하기 때문에 당연히 수비력이 좋아야 한다."
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        className={
                          pos === "fixo"
                            ? classes.selectButton
                            : classes.buttonList
                        }
                        color="success"
                        onClick={() => setPos("fixo")}
                      >
                        FIXO
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-GOLEIRO"
                      title="풋살에서 골대를 지키는 역할을 한다. 축구에서는 골키퍼라고 하지만 풋살에서는 골레이로라고 한다."
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        className={
                          pos === "goleiro"
                            ? classes.selectButton
                            : classes.buttonList
                        }
                        color="info"
                        onClick={() => setPos("goleiro")}
                      >
                        GOLEIRO
                      </Button>
                    </Tooltip>
                  </GridItem>
                </GridContainer>
                <CustomInput
                  id="height"
                  labelText="키"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: user.height,
                    // onChange: (event) =>
                    // updateHeight(parseInt(event.target.value, 10)),
                  }}
                />
                <CustomInput
                  id="weight"
                  labelText="몸무게"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: user.weight,
                    // onChange: (event) =>
                    // updateWeight(parseInt(event.target.value, 10)),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <Button>정보 변경</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} className={classes.withdrawal}>
                <Link>탈퇴하기</Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
