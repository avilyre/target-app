import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 324,
    paddingHorizontal: 24,
    paddingBottom: 18,
    gap: 24,
    justifyContent: 'flex-end'
  },
  summaryContainer: {
    gap: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.white
  },
  total: {
    fontSize: 32,
    fontFamily: fontFamily.medium,
    color: colors.white,
  }
});