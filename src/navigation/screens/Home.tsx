import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

const URL = "https://testcase.myideasoft.com/";

export function Home() {
  return <WebView pullToRefreshEnabled source={{ uri: URL }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
