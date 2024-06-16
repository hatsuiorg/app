import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaViewProps = React.PropsWithChildren<
  React.ComponentProps<typeof View>
>;

/**
 * A view that automatically adjusts its padding to account for the device's safe
 * area insets. This is useful for ensuring that content is not obscured by notches,
 * status bars, or navigation bars. Should be used in place of a regular `View` component.
 */
function SafeAreaView(props: SafeAreaViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      style={{
        ...(typeof props.style === "object" ? props.style : {}),
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
        paddingTop: insets.top,
      }}
    >
      {props.children}
    </View>
  );
}

export { SafeAreaView };
