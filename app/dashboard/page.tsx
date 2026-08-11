import { SiteShell } from "@/components/SiteShell";
import { Dashboard } from "@/components/Dashboard";
import { getPublishedQuestion, getQuestionBySlug } from "@/lib/questions";

export default async function DashboardPage() {
  const [question, electionQuestion] = await Promise.all([
    getPublishedQuestion(),
    getQuestionBySlug("presidencial-2028"),
  ]);

  return (
    <SiteShell>
      <Dashboard question={question} electionQuestion={electionQuestion} />
    </SiteShell>
  );
}
