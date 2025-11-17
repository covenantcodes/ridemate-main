import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import Layout from "components/shared/view/Layout";

const Home = () => {
  return (
    <Layout>
      <Text font={FONT_WEIGHTS.medium} size={FONTS_SIZES.S}>
        Home
      </Text>
    </Layout>
  );
};

export default Home;
