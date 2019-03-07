import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import styles from "./styles";

const CallLogComponent = props => {
  if ((props.detail = true)) {
    return (
      <View>
        <Button title="Call Logs" type="clear" onPress={props.onPress} />
        <Text style={styles.container}>asdlfkjla;sdlfkajsd;fljk</Text>
      </View>
    );
  } else {
    return null;
  }
  //   return (
  //     <View>
  //       <Button title="Call Log" type="clear" onPress={props.onPress} />
  //       {!props.detail && (
  //         <Text style={styles.container}>a;dlskfja;lskdfj;alskdjf;alskdjf</Text>
  //       )}
  //     </View>
  //   );
  // };
};
export default CallLogComponent;
