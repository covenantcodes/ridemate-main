import React, {useState, useRef, useEffect} from "react";
import {View, Dimensions, FlatList, Animated} from "react-native";
import LottieView from "lottie-react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import Button from "components/shared/button/Button";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {useAppNavigation} from "hooks/useAppNavigation";
import {LOGIN, REGISTER} from "navigation/navigation.constants";
import {storageUtils} from "utils/storageUtils";

interface SlideItem {
  id: string;
  title: string;
  description: string;
  animation: any;
}

const {width, height} = Dimensions.get("window");

const slides: SlideItem[] = [
  {
    id: "1",
    title: "Bye-Bye Long Cab Lines 🙌",
    description:
      "Why wait forever for a cab? We know you're late for that test, and yes… we'll get you there faster. 😎",
    animation: require("../../../assets/images/queue.json"),
  },
  {
    id: "2",
    title: "Share the Ride, Share the Vibes ✨",
    description:
      "Hop in with friends or meet new ones! Split the cost, save the planet, and cruise across campus like a legend.",

    animation: require("../../../assets/images/shared.json"),
  },
  {
    id: "3",
    title: "Campus Cruising Made Easy 🚲🛵",
    description:
      "Need to get to class, the library, or the canteen? RideMate gets you around campus fast, fun, and totally stress-free!",
    animation: require("../../../assets/images/order.json"),
  },
];

const Onboarding = () => {
  const {authNavigation} = useAppNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const lottieRefs = useRef<{[key: number]: LottieView | null}>({});

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (lottieRefs.current[currentSlideIndex]) {
      lottieRefs.current[currentSlideIndex]?.play();
    }
  }, [currentSlideIndex]);

  const renderSlide = ({item, index}: {item: SlideItem; index: number}) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const imageOpacity = slideAnim.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    const translateY = slideAnim.interpolate({
      inputRange,
      outputRange: [100, 0, 100],
    });

    const scaleImage = slideAnim.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    const titleOpacity = slideAnim.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    const titleTranslateY = slideAnim.interpolate({
      inputRange,
      outputRange: [50, 0, -50],
    });

    const descriptionOpacity = slideAnim.interpolate({
      inputRange: [
        (index - 1) * width,
        index * width - width * 0.3,
        index * width,
        (index + 1) * width,
      ],
      outputRange: [0, 0, 1, 0],
    });

    const descriptionTranslateY = slideAnim.interpolate({
      inputRange: [
        (index - 1) * width,
        index * width - width * 0.3,
        index * width,
        (index + 1) * width,
      ],
      outputRange: [50, 50, 0, -50],
    });

    return (
      <Layout
        bgColor="white"
        style={[
          globalStyles.alignItemsCenter,
          {
            width,
            height: height * 0.75,
            paddingHorizontal: getSize(20),
          },
        ]}>
        <Animated.View
          style={{
            width: width * 0.8,
            height: height * 0.4,
            marginTop: height * 0.1,
            opacity: imageOpacity,
            transform: [{translateY}, {scale: scaleImage}],
          }}>
          <LottieView
            ref={ref => {
              lottieRefs.current[index] = ref;
            }}
            source={item.animation}
            autoPlay={index === currentSlideIndex}
            loop
            speed={0.5}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Animated.View>
        <View
          style={[
            globalStyles.flex,
            globalStyles.alignItemsCenter,
            globalStyles.w10,
            ,
          ]}>
          <Animated.View
            style={{
              opacity: titleOpacity,
              transform: [{translateY: titleTranslateY}],
            }}>
            <Text
              font={FONT_WEIGHTS.bold}
              size={FONTS_SIZES.XXL}
              color="text"
              style={[globalStyles.textCenter, globalStyles.mb2]}>
              {item.title}
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: descriptionOpacity,
              transform: [{translateY: descriptionTranslateY}],
            }}>
            <Text
              font={FONT_WEIGHTS.regular}
              size={FONTS_SIZES.S}
              color="gray600"
              lineHeight={24}
              style={[globalStyles.textCenter]}>
              {item.description}
            </Text>
          </Animated.View>
        </View>
      </Layout>
    );
  };

  const renderDots = () => {
    return slides.map((_, index) => {
      const dotWidth = slideAnim.interpolate({
        inputRange: [(index - 1) * width, index * width, (index + 1) * width],
        outputRange: [8, 20, 8],
        extrapolate: "clamp",
      });

      const opacity = slideAnim.interpolate({
        inputRange: [(index - 1) * width, index * width, (index + 1) * width],
        outputRange: [0.5, 1, 0.5],
        extrapolate: "clamp",
      });

      return (
        <Animated.View
          key={index}
          style={{
            height: 8,
            borderRadius: getSize(4),
            marginHorizontal: getSize(4),
            backgroundColor: colors.primary,
            width: dotWidth,
            opacity,
            transform: [
              {
                scale: slideAnim.interpolate({
                  inputRange: [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                  ],
                  outputRange: [0.8, 1, 0.8],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
      );
    });
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentSlideIndex + 1,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    storageUtils.setHasLaunched();
    authNavigation.navigate(REGISTER);
  };

  const handleGetStarted = () => {
    storageUtils.setHasLaunched();
    authNavigation.navigate(LOGIN);
  };
  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View
      style={[
        globalStyles.flex,
        {backgroundColor: colors.background, opacity: fadeAnim},
      ]}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffset / width);
          setCurrentSlideIndex(index);
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: slideAnim}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        onLayout={() => fadeIn()}
        keyExtractor={item => item.id}
      />

      <View
        style={{
          backgroundColor: colors.white,

          height: height * 0.25,
          justifyContent: "space-between",
          paddingVertical: 30,
        }}>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifyCenter,
            globalStyles.mb2,
          ]}>
          {renderDots()}
        </View>

        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifyCenter,
            globalStyles.px2,
            {gap: getSize(12)},
          ]}>
          {currentSlideIndex < slides.length - 1 ? (
            <>
              <Button
                onPress={handleSkip}
                variant="outline"
                style={{width: width * 0.4, marginBottom: 0}}>
                Skip
              </Button>
              <Button
                onPress={handleNext}
                style={{width: width * 0.4, marginBottom: 0}}>
                Next
              </Button>
            </>
          ) : (
            <Button
              onPress={handleGetStarted}
              style={{width: width * 0.85, marginBottom: 0}}>
              Get Started
            </Button>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default Onboarding;
