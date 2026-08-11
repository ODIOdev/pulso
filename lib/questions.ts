import { createAdminClient } from "@/lib/supabase/admin";
import type { PulseQuestion } from "@/lib/types";

export async function getQuestionBySlug(slug: string): Promise<PulseQuestion | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return null;
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("pulse_questions")
      .select("id,slug,question,status,category,options,published_at")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) throw error;
    return data as PulseQuestion | null;
  } catch {
    return null;
  }
}

export async function getPublishedQuestion(): Promise<PulseQuestion | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return null;
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("pulse_questions")
      .select("id,slug,question,status,category,options,published_at")
      .eq("status", "published")
      .neq("category", "Elecciones")
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    return data as PulseQuestion | null;
  } catch {
    return null;
  }
}

export async function getPublishedQuestions(): Promise<PulseQuestion[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return [];
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("pulse_questions")
      .select("id,slug,question,status,category,options,published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) throw error;
    return (data ?? []) as PulseQuestion[];
  } catch {
    return [];
  }
}
