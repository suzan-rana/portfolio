
import React from "react";
import fs from "fs"
import path from "path"
import { serialize } from "next-mdx-remote"
import matter from "gray-matter"


const BlogItem = ({
  frontMatter,
  MdxDataSource,
  slug
}) => {

  return (
    <>
      <div>Hello, world. {data}</div>
      <button type="button" onClick={() => router.push("/")}>
        Click me
      </button>
    </>
  );
};

const getStaticPaths = async () => {
  const allFiles = fs.readDirSync(path.join('posts'), "utf-8")
  const paths = allFiles.map( fileName => {
    return {
      params: {
        slug: fileName.replace(".mdx", "")
      }
    }
  })
  return {
    paths,
    
  }

}

const getStaticProps = async ({ params: {slug}}) => {
  const file = fs.readFileSync(path.join('posts', slug, ".mdx"),  "utf-8" )
  const source = matter(file)
  const { data: frontMatter, content } = source;
  const MdxDataSource = serialize(content)

  return {
    props: {
      frontMatter,
      MdxDataSource,
      slug
    }
  }

}
