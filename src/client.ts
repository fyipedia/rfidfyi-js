/**
 * RFIDFYI API client -- TypeScript wrapper for rfidfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
  CompareResult,
  EpcDetail,
  FamilyDetail,
  FrequencyDetail,
  GlossaryTerm,
  RandomResult,
  ReaderDetail,
  SearchResult,
  StandardDetail,
  TagDetail,
  UseCaseDetail,
} from "./types.js";

export class RFIDFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://rfidfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search RFID tags, readers, standards, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get RFID tag detail by slug. */
  async tag(slug: string): Promise<TagDetail> {
    return this.get<TagDetail>(`/api/tag/${slug}/`);
  }

  /** Get RFID reader detail by slug. */
  async reader(slug: string): Promise<ReaderDetail> {
    return this.get<ReaderDetail>(`/api/reader/${slug}/`);
  }

  /** Get RFID tag family detail by slug. */
  async family(slug: string): Promise<FamilyDetail> {
    return this.get<FamilyDetail>(`/api/family/${slug}/`);
  }

  /** Get frequency band detail by slug. */
  async frequency(slug: string): Promise<FrequencyDetail> {
    return this.get<FrequencyDetail>(`/api/frequency/${slug}/`);
  }

  /** Get RFID standard detail by slug. */
  async standard(slug: string): Promise<StandardDetail> {
    return this.get<StandardDetail>(`/api/standard/${slug}/`);
  }

  /** Get EPC standard detail by slug. */
  async epc(slug: string): Promise<EpcDetail> {
    return this.get<EpcDetail>(`/api/epc/${slug}/`);
  }

  /** Get use case detail by slug. */
  async useCase(slug: string): Promise<UseCaseDetail> {
    return this.get<UseCaseDetail>(`/api/use-case/${slug}/`);
  }

  /** Compare two RFID tags. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random RFID tag. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }

  /** Get the OpenAPI 3.1.0 specification. */
  async openapi(): Promise<Record<string, unknown>> {
    return this.get<Record<string, unknown>>("/api/openapi.json");
  }
}
