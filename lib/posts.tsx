import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
const postDir = path.join(process.cwd(), "blogposts")
export default function getSortedPostData() {
  const fileNames = fs.readdirSync(postDir)

  const data = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    const filePath = path.join(postDir, fileName)
    const content = fs.readFileSync(filePath, "utf-8")
    const matterResult = matter(content)
    const blogInfo = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }
    return blogInfo
  })
  return data.sort((a, b) => (a.date - b.date > 0 ? -1 : 1))
}

export async function getPostData(postId: string) {
  const filePath = path.join(postDir, postId + ".md")
  const content = fs.readFileSync(filePath, "utf-8")
  const matterResult = matter(content)
  const markDownContent = matterResult.content
  const processedContent = await remark().use(html).process(markDownContent)
  const contentHtml = processedContent.toString()
  const blog = {
    id: postId,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: contentHtml,
  }
  return blog
}
