// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { setPosts } from "state";
// import { setPosts } from "../../state";
// import PostWidget from "./PostWidget";
// import axios from "axios";
// const PostsWidget = ({ userId, isProfile = false }) => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);
//   const token = useSelector((state) => state.token);

//   const getPosts = async () => {
//     try {
//       const response = await axios.get("/posts", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = response.data;
//       dispatch(setPosts({ posts: data }));
//     } catch (error) {
//       // Handle error here
//       console.error("Error getting posts:", error);
//     }
//   };

//   const getUserPosts = async () => {
//     try {
//       const response = await axios.get(`/posts/${userId}/posts`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = response.data;
//       dispatch(setPosts({ posts: data }));
//     } catch (error) {
//       // Handle error here
//       console.error("Error getting user posts:", error);
//     }
//   };

//   useEffect(() => {
//     if (isProfile) {
//       getUserPosts();
//     } else {
//       getPosts();
//     }
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <>
//       {posts.map(
//         ({
//           _id,
//           userId,
//           firstName,
//           lastName,
//           description,
//           location,
//           picturePath,
//           userPicturePath,
//           likes,
//           comments,
//         }) => (
//           <PostWidget
//             key={_id}
//             postId={_id}
//             postUserId={userId}
//             name={`${firstName} ${lastName}`}
//             description={description}
//             location={location}
//             picturePath={picturePath}
//             userPicturePath={userPicturePath}
//             likes={likes}
//             comments={comments}
//           />
//         )
//       )}
//     </>
//   );
// };

// export default PostsWidget;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import PostWidget from "./PostWidget";
import axios from "axios";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    try {
      const response = await axios.get("/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = response.data;
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      // Handle error here
      console.error("Error getting posts:", error);
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await axios.get(`/posts/${userId}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = response.data;
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      // Handle error here
      console.error("Error getting user posts:", error);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, [isProfile, getPosts, getUserPosts]); // Added dependencies for useEffect

  // Reverse the posts array for rendering
  const reversedPosts = [...posts].reverse();

  return (
    <>
      {reversedPosts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
