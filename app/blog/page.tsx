import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const revalidate = 60;

export default async function BlogListPage() {
  await connectDB();
  const posts = await BlogPost.find({ status: "published" })
    .select("title slug excerpt featuredImage category publishedAt")
    .sort({ publishedAt: -1 })
    .lean();

  if (posts.length === 0) {
    return (
      <>
        <Navbar />
        <div style={styles.page}>
          <div style={styles.container}>
            <h1 style={styles.pageTitle}>Insights &amp; Guides</h1>
            <p style={{ color: "#bbb" }}>No posts published yet.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const [latest, ...rest] = posts;

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Insights &amp; Guides</h1>
          <div style={styles.accentLine} />

          {/* Featured / newest post */}
          <Link href={`/blog/${latest.slug}`} style={styles.heroLink}>
            <div style={styles.heroCard}>
              {latest.featuredImage ? (
                <img src={latest.featuredImage} alt={latest.title} style={styles.heroImage} />
              ) : (
                <div style={{ ...styles.heroImage, background: "#1a1a1a" }} />
              )}
              <div style={styles.heroOverlay} />
              <div style={styles.heroContent}>
                <span style={styles.badge}>Latest</span>
                <span style={styles.category}>{latest.category}</span>
                <h2 style={styles.heroTitle}>{latest.title}</h2>
                {latest.excerpt && <p style={styles.heroExcerpt}>{latest.excerpt}</p>}
              </div>
            </div>
          </Link>

          {/* All other posts */}
          {rest.length > 0 && (
            <>
              <h3 style={styles.sectionTitle}>More Insights</h3>
              <div style={styles.grid}>
                {rest.map((post) => (
                  <Link key={String(post._id)} href={`/blog/${post.slug}`} style={styles.cardLink}>
                    <div style={styles.card}>
                      {post.featuredImage ? (
                        <img src={post.featuredImage} alt={post.title} style={styles.cardImage} />
                      ) : (
                        <div style={{ ...styles.cardImage, background: "#1a1a1a" }} />
                      )}
                      <div style={styles.cardOverlay} />
                      <div style={styles.cardContent}>
                        <span style={styles.category}>{post.category}</span>
                        <h4 style={styles.cardTitle}>{post.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    background:
      "radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(215,23,42,0.18) 0%, rgba(215,23,42,0) 55%), radial-gradient(ellipse 900px 700px at 90% 100%, rgba(215,23,42,0.08) 0%, rgba(215,23,42,0) 60%), repeating-linear-gradient(135deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px), linear-gradient(180deg, #050505 0%, #0c0c0c 100%)",
    backgroundColor: "#050505",
    minHeight: "100vh",
    padding: "220px 0 64px",
  },
  container: { maxWidth: 1080, margin: "0 auto", padding: "0 24px" },
  pageTitle: {
    fontFamily: "Georgia, serif",
    fontSize: 40,
    color: "#f5f0e8",
    marginBottom: 12,
    textAlign: "center",
  },
  accentLine: {
    width: 80,
    height: 3,
    background: "linear-gradient(90deg, #7a0e0e, #c9302c)",
    margin: "0 auto 48px",
    borderRadius: 2,
  },
  heroLink: { textDecoration: "none", color: "inherit", display: "block", marginBottom: 56 },
  heroCard: {
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
    height: 420,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  },
  heroImage: { width: "100%", height: "100%", objectFit: "cover" },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(20,4,4,0.95) 5%, rgba(20,4,4,0.4) 55%, rgba(20,4,4,0.1) 100%)",
  },
  heroContent: { position: "absolute", left: 0, bottom: 0, padding: "32px 40px", maxWidth: 640 },
  badge: {
    display: "inline-block",
    background: "linear-gradient(90deg, #7a0e0e, #c9302c)",
    color: "#f5f0e8",
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 20,
    marginBottom: 12,
  },
  category: {
    display: "block",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#d99a9a",
    marginBottom: 8,
  },
  heroTitle: { fontFamily: "Georgia, serif", fontSize: 32, color: "#f5f0e8", margin: "0 0 12px" },
  heroExcerpt: { color: "#d8cfc7", fontSize: 15, lineHeight: 1.6, margin: 0 },
  sectionTitle: {
    fontFamily: "Georgia, serif",
    fontSize: 24,
    color: "#f5f0e8",
    marginBottom: 24,
    borderLeft: "4px solid #c9302c",
    paddingLeft: 14,   
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 28,
  },
  cardLink: { textDecoration: "none", color: "inherit" },
  card: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    height: 280,
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    transition: "transform 0.25s ease",
  },
  cardImage: { width: "100%", height: "100%", objectFit: "cover" },
  cardOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(20,4,4,0.95) 15%, rgba(20,4,4,0.2) 70%)",
  },
  cardContent: { position: "absolute", left: 0, bottom: 0, padding: "18px 20px" },
  cardTitle: { fontFamily: "Georgia, serif", fontSize: 19, color: "#f5f0e8", margin: 0, lineHeight: 1.3 },
};