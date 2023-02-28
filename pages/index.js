import axios from "axios";

export default function Home({ posts }) {
  return (
    <div>
      {posts && posts.map((post) => (
        <>
          <div key={post.attributes.id}>
            <h2>{post.attributes.title}</h2>
          </div>
          <div>{post.attributes.user.data.attributes.username}</div>
        </>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { NEXT_PUBLIC_API_URL } = process.env;
  
  const res = await axios.get(`${NEXT_PUBLIC_API_URL}/api/posts?populate=*`)
  const data = res.data.data

  return {
    props: { 
      posts: data
     }
  }
}
