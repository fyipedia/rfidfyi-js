/**
 * RFIDFYI API response types.
 */
interface SearchResult {
    results: Array<{
        name: string;
        slug: string;
        type: string;
        url: string;
    }>;
    query: string;
    total: number;
}
interface GlossaryTerm {
    name: string;
    slug: string;
    definition: string;
    related_terms?: string[];
}
interface TagDetail {
    slug: string;
    name: string;
    description: string;
    frequency?: string;
    memory_size?: string;
    read_range?: string;
    protocol?: string;
    url: string;
}
interface ReaderDetail {
    slug: string;
    name: string;
    description: string;
    manufacturer?: string;
    frequency?: string;
    interface_type?: string;
    url: string;
}
interface FamilyDetail {
    slug: string;
    name: string;
    description: string;
    tags?: string[];
    url: string;
}
interface FrequencyDetail {
    slug: string;
    name: string;
    description: string;
    range?: string;
    read_distance?: string;
    data_rate?: string;
    url: string;
}
interface StandardDetail {
    slug: string;
    name: string;
    description: string;
    organization?: string;
    year?: number;
    url: string;
}
interface EpcDetail {
    slug: string;
    name: string;
    description: string;
    url: string;
}
interface UseCaseDetail {
    slug: string;
    name: string;
    description: string;
    tags?: string[];
    url: string;
}
interface CompareResult {
    item_a: {
        name: string;
        slug: string;
    };
    item_b: {
        name: string;
        slug: string;
    };
    comparison: Record<string, unknown>;
}
interface RandomResult {
    slug: string;
    name: string;
    type: string;
    url: string;
}

/**
 * RFIDFYI API client -- TypeScript wrapper for rfidfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

declare class RFIDFYI {
    private baseUrl;
    constructor(baseUrl?: string);
    private get;
    /** Search RFID tags, readers, standards, and glossary terms. */
    search(query: string): Promise<SearchResult>;
    /** Get a glossary term by slug. */
    glossaryTerm(slug: string): Promise<GlossaryTerm>;
    /** Get RFID tag detail by slug. */
    tag(slug: string): Promise<TagDetail>;
    /** Get RFID reader detail by slug. */
    reader(slug: string): Promise<ReaderDetail>;
    /** Get RFID tag family detail by slug. */
    family(slug: string): Promise<FamilyDetail>;
    /** Get frequency band detail by slug. */
    frequency(slug: string): Promise<FrequencyDetail>;
    /** Get RFID standard detail by slug. */
    standard(slug: string): Promise<StandardDetail>;
    /** Get EPC standard detail by slug. */
    epc(slug: string): Promise<EpcDetail>;
    /** Get use case detail by slug. */
    useCase(slug: string): Promise<UseCaseDetail>;
    /** Compare two RFID tags. */
    compare(slugA: string, slugB: string): Promise<CompareResult>;
    /** Get a random RFID tag. */
    random(): Promise<RandomResult>;
    /** Get the OpenAPI 3.1.0 specification. */
    openapi(): Promise<Record<string, unknown>>;
}

export { type CompareResult, type EpcDetail, type FamilyDetail, type FrequencyDetail, type GlossaryTerm, RFIDFYI, type RandomResult, type ReaderDetail, type SearchResult, type StandardDetail, type TagDetail, type UseCaseDetail };
