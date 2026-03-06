/**
 * rfidfyi -- TypeScript API client for RFIDFYI.
 *
 * Search RFID tags, readers, frequency bands, and terminology
 * from rfidfyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { RFIDFYI } from "rfidfyi";
 *
 * const api = new RFIDFYI();
 * const results = await api.search("uhf passive");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { RFIDFYI } from "./client.js";

export type {
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
