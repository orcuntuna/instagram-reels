import {StyleSheet} from "react-native";
import Animated from "react-native-reanimated";
import Post from "./Post";

const posts = [
  {id: "bir"},
  {id: "iki"},
  {id: "uc"},
  {id: "dort"},
]

const Posts = () => {
  return (
    <Animated.ScrollView style={styles.container} pagingEnabled={true}>
      {posts.map((post, postIndex) => (
        <Post key={post.id} id={post.id} index={postIndex} />
      ))}
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Posts
