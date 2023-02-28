import axios from "axios";

export default function Home({ posts }) {
  return (
    <div>
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
      Hi everybody!
    </div>
  )
}

export async function getStaticProps() {
// get posts from our api
const res = await axios.get('http://localhost:1337/api/posts')
const posts = res.data.data


  return {
    props: { posts }
  }
}
