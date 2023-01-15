import {View, Text, StyleSheet, Dimensions} from "react-native";

type PostProps = {
  id: string
  index: number
}

const Layout = Dimensions.get('window')

const Post = (props: PostProps) => {
  return (
    <View style={[styles.post, {backgroundColor: `rgba(0,0,255, ${0.3 + 0.2 * props.index})`}]}>
      <Text style={styles.demoText}>Page {props.index + 1}</Text>
      <Text style={styles.demoText2}>Page {props.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    height: Layout.height,
    alignItems: "center",
    justifyContent: "center",
  },
  demoText: {
    fontSize: 40,
    fontWeight: "bold"
  },
  demoText2: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold"
  }
})

export default Post
