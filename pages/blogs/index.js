import React from "react";
import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Link from "next/link";

const Blogs = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <div key={post.frontMatter.title}>This is blog page. == {post.frontMatter.title} and the link is :
        <Link href={`/blogs/` + post.slug}>Go somewhere.</Link>
        </div>;
      })}
    </>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const allMdxFiles = fs.readdirSync(path.join("posts"));
  // console.log(allMdxFiles) ==> gets all files as ['functions-for', and so on.]
  const posts = allMdxFiles.map((fileName) => {
    const markDownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const source = matter(markDownWithMeta);
    const { data: frontMatter } = source;

    return {
      frontMatter,
      slug: fileName.split(".")[0],
    };
  });

  return {
    props: { posts },
  };
};
