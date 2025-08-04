import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  label: {
    fontSize: 10,
    fontFamily: fontFamily.regular,
    color: colors.blue[300]
  },
  value: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
    color: colors.white
  },
});