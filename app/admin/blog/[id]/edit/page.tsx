import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import PostEditor from "../../PostEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();
  const post = await BlogPost.findById(id).lean();

  if (!post) notFound();

  return (
    <PostEditor
      initial={{
        _id: String(post._id),
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        featuredImage: post.featuredImage,
        category: post.category,
        tags: post.tags,
        status: post.status as "draft" | "published" | "scheduled",
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
      }}
    />
  );
}