/**
 * RFIDFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface TagDetail {
  slug: string;
  name: string;
  description: string;
  frequency?: string;
  memory_size?: string;
  read_range?: string;
  protocol?: string;
  url: string;
}

export interface ReaderDetail {
  slug: string;
  name: string;
  description: string;
  manufacturer?: string;
  frequency?: string;
  interface_type?: string;
  url: string;
}

export interface FamilyDetail {
  slug: string;
  name: string;
  description: string;
  tags?: string[];
  url: string;
}

export interface FrequencyDetail {
  slug: string;
  name: string;
  description: string;
  range?: string;
  read_distance?: string;
  data_rate?: string;
  url: string;
}

export interface StandardDetail {
  slug: string;
  name: string;
  description: string;
  organization?: string;
  year?: number;
  url: string;
}

export interface EpcDetail {
  slug: string;
  name: string;
  description: string;
  url: string;
}

export interface UseCaseDetail {
  slug: string;
  name: string;
  description: string;
  tags?: string[];
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
