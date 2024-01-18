import { Typography, useTheme } from "@mui/material";
// import FlexBetween from "components/FlexBetween";
// import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://cdn.vox-cdn.com/thumbor/XFS0EXUlCT30JmldywvOTnzxsPE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16003217/D3KNa87XgAY4tkO.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Joker</Typography>
        <Typography color={medium}>wbstudios.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        When the chips are down, these civilized people, they'll eat each other.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
