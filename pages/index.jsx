import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { getPosts } from "../src/utils/posts";

export const getStaticProps = () => {
  const posts = getPosts(1); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>David Stevens - Blog</title>
        <meta
          name="description"
          content="A blog on technology, startups, and wellness"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        <div>
          <h1>Posts</h1>
          {posts.map((post) => (
            <p key={post.slug}>
              <a href={"posts/" + post.slug}>{post.data.title}</a>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

{
  /* <p key={post.slug}>{post.data.title}</p> */
}
