import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";

const URL = "https://testcase.myideasoft.com/";

export function Home() {
  const { top } = useSafeAreaInsets();
  return (
    <WebView
      pullToRefreshEnabled
      source={{ uri: URL }}
      style={{ marginTop: top }}
    />
  );
}
