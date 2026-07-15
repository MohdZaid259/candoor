import { getProjectBySlug, getRelatedProjects, projects } from "@/lib/projects";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProjectDetailHero from "@/components/portfolio/project-detail-hero";
import ProjectOverview from "@/components/portfolio/project-overview";
import GalleryMasonry from "@/components/portfolio/gallery-masonry";
import RelatedProjects from "@/components/portfolio/related-projects";
import ProjectDetailCTA from "@/components/portfolio/project-detail-cta";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Cottage Interior Decor & Building Maintenance`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.relatedProjects);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <GalleryMasonry images={project.images} />
      <RelatedProjects projects={related} />
      <ProjectDetailCTA />
      <Footer />
    </main>
  );
}
