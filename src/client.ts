/**
 * RFIDFYI API client — TypeScript wrapper for rfidfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { RFIDFYI } from "rfidfyi";
 * const api = new RFIDFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class RFIDFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://rfidfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all antenna types. */
  async listAntennaTypes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/antenna-types/", params);
  }

  /** Get antenna type by slug. */
  async getAntennaType(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/antenna-types/${slug}/`);
  }

  /** List all epc schemes. */
  async listEpcSchemes(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/epc-schemes/", params);
  }

  /** Get epc scheme by slug. */
  async getEpcScheme(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/epc-schemes/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all frequency bands. */
  async listFrequencyBands(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/frequency-bands/", params);
  }

  /** Get frequency band by slug. */
  async getFrequencyBand(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/frequency-bands/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all industries. */
  async listIndustries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/industries/", params);
  }

  /** Get industry by slug. */
  async getIndustry(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/industries/${slug}/`);
  }

  /** List all manufacturers. */
  async listManufacturers(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/manufacturers/", params);
  }

  /** Get manufacturer by slug. */
  async getManufacturer(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/manufacturers/${slug}/`);
  }

  /** List all readers. */
  async listReaders(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/readers/", params);
  }

  /** Get reader by slug. */
  async getReader(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/readers/${slug}/`);
  }

  /** List all standards. */
  async listStandards(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/standards/", params);
  }

  /** Get standard by slug. */
  async getStandard(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/standards/${slug}/`);
  }

  /** List all tag families. */
  async listTagFamilies(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tag-families/", params);
  }

  /** Get tag family by slug. */
  async getTagFamily(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tag-families/${slug}/`);
  }

  /** List all tags. */
  async listTags(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tags/", params);
  }

  /** Get tag by slug. */
  async getTag(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tags/${slug}/`);
  }

  /** List all use cases. */
  async listUseCases(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/use-cases/", params);
  }

  /** Get use case by slug. */
  async getUseCase(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/use-cases/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
