import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const LoadingContainer = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "large",
  color: theme.COLORS.gray2
}))`
  flex: 1;
`