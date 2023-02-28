import axios from "axios";

export default function Post() {
  return (
    <div>
      Posts
    </div>
  )
}

export async function getStaticPaths() {
  const { NEXT_PUBLIC_API_URL } = process.env;

  const res = await axios.get(`${NEXT_PUBLIC_API_URL}/api/posts`)
  const data = await res.data.data

  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))

  return { 
    paths,
    fallback: false
   }
}

export async function getStaticProps({ params }) {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const { slug } = params

  const res = await axios.get(`${NEXT_PUBLIC_API_URL}/api/posts?slug=${slug}`)
  const data = await res.data.data
  const post = data[0]

  return { 
    props: { post }
   }
}