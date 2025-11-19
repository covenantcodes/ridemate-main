import {Dimensions, StyleSheet} from "react-native";
export const {width, height} = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  flexStyle: {
    flexDirection: "row",
    alignItems: "center",
  },

  centerColumView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  width: {width},
  height: {height},
  flex: {flex: 1},
  flexZero: {flex: 0},
  flexCol: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  flexColumn: {
    flexDirection: "column",
  },

  flexCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexRow: {flexDirection: "row"},
  flexWrap: {flexWrap: "wrap"},
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end",
  },
  alignItemsFlexStart: {
    alignItems: "flex-start",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },

  fw1: {
    fontWeight: "400",
  },
  fw2: {
    fontWeight: "500",
  },
  fw3: {
    fontWeight: "600",
  },
  fw4: {
    fontWeight: "700",
  },
  fw5: {
    fontWeight: "800",
  },
  w1: {
    width: "10%",
  },
  w015: {
    width: "15%",
  },
  w2: {
    width: "20%",
  },
  w25: {
    width: "25%",
  },
  w28: {
    width: "28%",
  },
  w3: {
    width: "30%",
  },
  w35: {
    width: "35%",
  },
  w4: {
    width: "40%",
  },
  w45: {
    width: "45%",
  },
  w48: {
    width: "48%",
  },
  w5: {
    width: "50%",
  },
  w6: {
    width: "60%",
  },
  w7: {
    width: "70%",
  },
  w8: {
    width: "80%",
  },
  w85: {
    width: "85%",
  },
  w9: {
    width: "90%",
  },
  w95: {
    width: "95%",
  },
  w98: {
    width: "98%",
  },
  w10: {
    width: "100%",
  },
  h00: {height: "100%"},
  h1: {height: 10},
  h05: {height: 15},
  h2: {height: 20},
  h3: {height: 30},
  h4: {height: 40},
  h5: {height: 50},
  h6: {height: 60},
  h7: {height: 70},
  h8: {height: 80},
  h9: {height: 90},
  h10: {height: 100},
  h11: {height: 110},
  h12: {height: 120},
  h13: {height: 130},
  h14: {height: 140},
  h15: {height: 150},
  textCapitalize: {
    textTransform: "capitalize",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },

  // BOX SIZING
  pt0: {paddingTop: 0},
  pt05: {paddingTop: 5},
  pt1: {paddingTop: 10},
  pt15: {paddingTop: 15},
  pt2: {paddingTop: 20},
  pt25: {paddingTop: 25},
  pt3: {paddingTop: 30},
  pt4: {paddingTop: 40},
  pt5: {paddingTop: 50},
  pt6: {paddingTop: 60},
  pt7: {paddingTop: 70},
  pt8: {paddingTop: 80},
  pt9: {paddingTop: 90},
  pt: {paddingTop: 100},

  pb0: {paddingBottom: 0},
  pb05: {paddingBottom: 5},
  pb1: {paddingBottom: 10},
  pb2: {paddingBottom: 20},
  pb3: {paddingBottom: 30},
  pb4: {paddingBottom: 40},
  pb5: {paddingBottom: 50},
  pb6: {paddingBottom: 60},
  pb7: {paddingBottom: 70},
  pb8: {paddingBottom: 80},
  pb9: {paddingBottom: 90},
  pb10: {paddingBottom: 100},
  pb11: {paddingBottom: 110},
  pb12: {paddingBottom: 120},
  pb13: {paddingBottom: 130},
  pb14: {paddingBottom: 140},
  pb15: {paddingBottom: 150},
  pb16: {paddingBottom: 160},
  pb17: {paddingBottom: 170},

  pl0: {paddingLeft: 0},
  pl05: {paddingLeft: 5},
  pl1: {paddingLeft: 10},
  pl15: {paddingLeft: 15},
  pl2: {paddingLeft: 20},
  pl3: {paddingLeft: 30},
  pl4: {paddingLeft: 40},
  pl45: {paddingLeft: 45},
  pl5: {paddingLeft: 50},

  pr0: {paddingRight: 0},
  pr05: {paddingRight: 5},
  pr1: {paddingRight: 10},
  pr15: {paddingRight: 15},
  pr2: {paddingRight: 20},
  pr3: {paddingRight: 30},
  pr4: {paddingRight: 40},
  pr5: {paddingRight: 50},

  px0: {paddingHorizontal: 0},
  px05: {paddingHorizontal: 5},
  px08: {paddingHorizontal: 8},
  px1: {paddingHorizontal: 10},
  px15: {paddingHorizontal: 15},
  px18: {paddingHorizontal: 18},
  px16: {paddingHorizontal: 16},
  px2: {paddingHorizontal: 20},
  px25: {paddingHorizontal: 25},
  px3: {paddingHorizontal: 30},
  px4: {paddingHorizontal: 40},
  px5: {paddingHorizontal: 50},

  py0: {paddingVertical: 0},
  py05: {paddingVertical: 5},
  py08: {paddingVertical: 8},
  py1: {paddingVertical: 10},
  py12: {paddingVertical: 12},
  py15: {paddingVertical: 15},
  py16: {paddingVertical: 16},
  py2: {paddingVertical: 20},
  py25: {paddingVertical: 25},
  py3: {paddingVertical: 30},
  py4: {paddingVertical: 40},
  py5: {paddingVertical: 50},

  mt0: {marginTop: 0},
  mt03: {marginTop: 3},
  mt04: {marginTop: 4},
  mt05: {marginTop: 5},
  mt1: {marginTop: 10},
  mt15: {marginTop: 15},
  mt2: {marginTop: 20},
  mt25: {marginTop: 25},
  mt3: {marginTop: 30},
  mt4: {marginTop: 40},
  mt5: {marginTop: 50},
  mt6: {
    marginTop: 60,
  },
  mt7: {
    marginTop: 70,
  },

  mb0: {marginBottom: 0},
  mb05: {marginBottom: 5},
  mb08: {marginBottom: 8},
  mb1: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb2: {marginBottom: 20},
  mb3: {marginBottom: 30},
  mb4: {marginBottom: 40},
  mb5: {marginBottom: 50},

  ml0: {marginLeft: 0},
  ml05: {marginLeft: 5},
  ml1: {marginLeft: 10},
  ml15: {marginLeft: 15},
  ml2: {marginLeft: 20},
  ml3: {marginLeft: 30},
  ml4: {marginLeft: 40},
  ml45: {marginLeft: 45},
  ml5: {marginLeft: 50},

  mr0: {marginRight: 0},
  mr05: {marginRight: 5},
  mr1: {marginRight: 10},
  mr15: {marginRight: 15},
  mr2: {marginRight: 20},
  mr3: {marginRight: 30},
  mr4: {marginRight: 40},
  mr5: {marginRight: 50},

  mx0: {marginHorizontal: 0},
  mx05: {marginHorizontal: 5},
  mx1: {marginHorizontal: 10},
  mx2: {marginHorizontal: 20},
  mx3: {marginHorizontal: 30},
  mx4: {marginHorizontal: 40},
  mx5: {marginHorizontal: 50},

  my0: {marginVertical: 0},
  my05: {marginVertical: 5},
  my1: {marginVertical: 10},
  my15: {marginVertical: 15},
  my2: {marginVertical: 20},
  my3: {marginVertical: 30},
  my4: {marginVertical: 40},
  my5: {marginVertical: 50},
  bottom0: {
    bottom: 0,
  },
  bottom1: {
    bottom: 10,
  },
  bottom2: {
    bottom: 20,
  },
  bottom3: {
    bottom: 30,
  },
  bottom4: {
    bottom: 40,
  },
  bottom5: {
    bottom: 50,
  },
  bottom6: {
    bottom: 60,
  },
  bottom7: {
    bottom: 70,
  },
  bottom8: {
    bottom: 80,
  },
  bottom9: {
    bottom: 90,
  },
  bottom10: {
    bottom: 100,
  },
  bottom11: {
    bottom: 110,
  },
  top0: {
    top: 0,
  },
  top1: {
    top: 10,
  },
  top2: {
    top: 20,
  },
  top3: {
    top: 30,
  },
  top4: {
    top: 40,
  },
  top5: {
    top: 50,
  },
  right0: {
    right: 0,
  },
  right1: {
    right: 10,
  },
  right2: {
    right: 20,
  },
  right3: {
    right: 30,
  },
  right4: {
    right: 40,
  },
  right5: {
    right: 50,
  },
  left0: {
    left: 0,
  },
  left1: {
    left: 10,
  },
  left2: {
    left: 20,
  },
  left3: {
    left: 30,
  },
  left4: {
    left: 40,
  },
  left5: {
    left: 50,
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  br5: {
    borderRadius: 5,
  },
  br4: {
    borderRadius: 4,
  },
  br6: {
    borderRadius: 6,
  },
  br7: {
    borderRadius: 7,
  },
  br8: {
    borderRadius: 8,
  },
  br10: {
    borderRadius: 10,
  },
  br12: {
    borderRadius: 12,
  },
  br15: {
    borderRadius: 15,
  },
  br16: {
    borderRadius: 16,
  },
  br20: {
    borderRadius: 20,
  },
  br24: {
    borderRadius: 24,
  },
  br40: {
    borderRadius: 40,
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  z1: {
    zIndex: 100,
  },
  z2: {
    zIndex: 200,
  },
  z3: {
    zIndex: 300,
  },
  z4: {
    zIndex: 400,
  },
  z5: {
    zIndex: 500,
  },
  z6: {
    zIndex: 600,
  },
  z7: {
    zIndex: 700,
  },
  z8: {
    zIndex: 800,
  },
  z9: {
    zIndex: 900,
  },
  fontSize: {
    fontSize: 10,
  },
  fontSizeOne: {
    fontSize: 11,
  },
  fontSizeTwo: {
    fontSize: 12,
  },
  fontSizeThree: {
    fontSize: 13,
  },
  fontSizeFour: {
    fontSize: 14,
  },
  fontSizeFive: {
    fontSize: 15,
  },
  fontSizeSix: {
    fontSize: 16,
  },
  fontSizeSeven: {
    fontSize: 17,
  },
  fontSizeEight: {
    fontSize: 18,
  },
  fontSizeNine: {
    fontSize: 19,
  },
  fontSizeTen: {
    fontSize: 20,
  },
  inset: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
  },
  gap05: {
    gap: 5,
  },
  gap08: {
    gap: 8,
  },
  gap10: {
    gap: 10,
  },
  gap15: {
    gap: 15,
  },
  gap16: {
    gap: 16,
  },
  gap20: {
    gap: 20,
  },
  gap30: {
    gap: 30,
  },
  gap35: {
    gap: 35,
  },
  gap40: {
    gap: 40,
  },
  gap45: {
    gap: 45,
  },
  gap50: {
    gap: 50,
  },
  gap60: {
    gap: 60,
  },
  gapRow05: {
    rowGap: 5,
  },
  gapRow06: {
    rowGap: 6,
  },
  gapRow07: {
    rowGap: 7,
  },
  gapRow08: {
    rowGap: 8,
  },
  gapRow09: {
    rowGap: 9,
  },
  gapRow10: {
    rowGap: 10,
  },
  gapRow15: {
    rowGap: 15,
  },
  gapRow20: {
    rowGap: 20,
  },
  gapRow25: {
    rowGap: 25,
  },
  gapRow30: {
    rowGap: 30,
  },
  gapRow40: {
    rowGap: 40,
  },
  gapRow50: {
    rowGap: 50,
  },
  gapColumn05: {
    columnGap: 5,
  },
  gapColumn06: {
    columnGap: 6,
  },
  gapColumn07: {
    columnGap: 7,
  },
  gapColumn08: {
    columnGap: 8,
  },
  gapColumn09: {
    columnGap: 9,
  },
  gapColumn10: {
    columnGap: 10,
  },
  gapColumn15: {
    columnGap: 15,
  },
  gapColumn20: {
    columnGap: 20,
  },
  htmlPTag: {
    fontSize: 16,
    lineHeight: 26,
    color: "#2B313B",
    marginVertical: 10,
  },
  htmlDivTag: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  htmlStrongTag: {
    fontWeight: "bold",
  },
  htmlLiTag: {
    fontSize: 18,
    lineHeight: 30,
    color: "#2B313B",
  },
  htmlOlTag: {
    fontSize: 18,
    lineHeight: 30,
    color: "#2B313B",
  },
  lineHeight20: {
    lineHeight: 20,
  },
  lineHeight24: {
    lineHeight: 24,
  },
  letterSpacing03: {
    letterSpacing: -0.3,
  },
  letterSpacing05: {
    letterSpacing: -0.5,
  },
});
