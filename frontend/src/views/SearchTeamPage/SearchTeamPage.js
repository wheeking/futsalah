import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Paginations from "components/Pagination/Pagination.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/views/SearchTeamPage.js";
import bgImage from "assets/img/searchTeam-bg.jpg";
// import teamImage from "assets/img/basicTeamImg.jpg";
import teamImage from "assets/img/basicTeamImg1.jpg";

import axios from "axios";

const useStyles = makeStyles(styles);

export default function SearchTeamPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // 테스트 데이터
  const team = [
    {
      id: 1,
      name: "asdagasrhshfaasfhgshdsfhshafshdfsasfassdfdsffdasfaf",
      img: "",
      win: 1,
      lose: 0,
      draw: 0,
    },
    {
      id: 2,
      name: "b",
      img: "",
      win: 0,
      lose: 1,
      draw: 0,
    },
    {
      id: 3,
      name: "c",
      img: "",
      win: 0,
      lose: 0,
      draw: 1,
    },
    {
      id: 4,
      name: "d",
      img: "",
      win: 2,
      lose: 0,
      draw: 1,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  const [pageNum, setPageNum] = useState(1);
  const [region, setRegion] = useState("전체");
  const [searchWord, setSearchWord] = useState("");
  const [teamList, setTeamList] = useState(team);

  useEffect(() => {
    // axios
    //   .get("https://localhost:9999/")
    //   .then((response) => {
    //     console.log(response);
    //     setTeamList(response);
    //   })
    //   .catch(() => {
    //     console.log("악 실패");
    //   });
  });

  const totalPage = 17;

  const makePagination = (pageRow) => {
    const page = [{ text: "PREV", onClick: prePage }];
    for (let i = 1; i < 11; i++) {
      if (pageRow * 10 + i <= totalPage) {
        page.push({
          text: pageRow * 10 + i,
          onClick: () => {
            setPageNum(pageRow * 10 + i);
          },
        });
      }
    }
    page.push({ text: "NEXT", onClick: nextPage });
    return page;
  };

  const prePage = () => {
    if (pageNum !== 1) setPageNum(pageNum - 1);
  };

  const nextPage = () => {
    if (pageNum !== totalPage) setPageNum(pageNum + 1);
  };

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

      <div
        className={classes.background}
        style={{
          backgroundImage: "url(" + bgImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className={classes.container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: "2",
            }}
          >
            <CustomDropdown
              buttonText={region}
              dropdownHeader="지역 목록"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={[
                "전체",
                "서울",
                "경기",
                "인천",
                "강원",
                "충청",
                "전라",
                "경상",
                "제주",
              ]}
              setValue={(value) => {
                setRegion(value);
              }}
            ></CustomDropdown>
            <input
              type="text"
              style={{ lineHeight: "30px" }}
              value={searchWord}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <Button
              color="info"
              size="sm"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                // 검색
                // axios 통신 (검색어와 지역명 보내기)
                console.log(
                  "region: " + region + "\nsearchWord: " + searchWord
                );
              }}
            >
              검색
            </Button>
          </div>
          <GridList spacing={15} cellHeight="auto" cols={3}>
            {teamList.map((t) =>
              t.name === undefined ? (
                <GridContainer
                  key={t.id}
                  justify="center"
                  style={{ margin: "0 auto" }}
                ></GridContainer>
              ) : (
                <GridContainer
                  key={t.id}
                  justify="center"
                  style={{ margin: "0 auto" }}
                >
                  <GridItem>
                    <Card>
                      <CardHeader className={classes.cardHeader}>
                        <GridItem
                          style={{
                            position: "relative",
                            paddingTop: "100%",
                            overflow: "hidden",
                            width: "100%",
                            height: "auto",
                          }}
                        >
                          <img
                            src={teamImage}
                            alt="..."
                            // className={
                            //   classes.imgRaised +
                            //   " " +
                            //   classes.img +
                            //   " " +
                            //   classes.imgRoundedCircle +
                            //   " " +
                            //   classes.imgFluid
                            // }
                            style={{
                              borderRadius: "70%",
                              position: "absolute",
                              top: "0",
                              left: "0",
                              right: "0",
                              bottom: "0",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </GridItem>
                      </CardHeader>
                      <CardBody className={classes.cardBody}>
                        <h3
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                          }}
                        >
                          <strong>{t.name}</strong>
                        </h3>
                        <h4>
                          {t.win}승 {t.lose}패 {t.draw}무
                        </h4>
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button color="success" size="lg">
                          팀 정보
                        </Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                </GridContainer>
              )
            )}
          </GridList>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "2",
            position: "relative",
            margin: "20vh auto",
          }}
        >
          <Paginations
            pages={makePagination(parseInt(pageNum / 11))}
            color="info"
            selected={pageNum}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
