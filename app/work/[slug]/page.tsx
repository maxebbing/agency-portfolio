import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import CaseHero from "@/components/work/CaseHero";
import CaseSection from "@/components/work/CaseSection";
import CaseSpread from "@/components/work/CaseSpread";
import CaseNav from "@/components/work/CaseNav";
import { projects } from "@/lib/projects";

interface WorkCaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.client} — Concept project — Max Ebbing`,
    description: `${project.tagline} ${project.summary}`,
  };
}

export default async function WorkCaseStudyPage({
  params,
}: WorkCaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <CaseHero project={project} />

        <CaseSection
          number="01"
          label="The brief"
          title="An imagined client with a real problem."
          paragraphs={caseStudy.brief}
        />

        <CaseSection
          number="02"
          label="The approach"
          title="Decisions, in the order they were made."
          paragraphs={caseStudy.approach}
        />

        <CaseSpread project={project} />

        <CaseSection
          number="04"
          label="What it demonstrates"
          title="Honest accounting, concept edition."
          paragraphs={caseStudy.outcome}
        />

        <CaseNav current={project} />
      </main>
      <Footer />
    </>
  );
}
