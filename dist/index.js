// src/client.ts
var RFIDFYI = class {
  baseUrl;
  constructor(baseUrl = "https://rfidfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }
  async get(path, params) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  /** Search RFID tags, readers, standards, and glossary terms. */
  async search(query) {
    return this.get("/api/search/", { q: query });
  }
  /** Get a glossary term by slug. */
  async glossaryTerm(slug) {
    return this.get(`/api/term/${slug}/`);
  }
  /** Get RFID tag detail by slug. */
  async tag(slug) {
    return this.get(`/api/tag/${slug}/`);
  }
  /** Get RFID reader detail by slug. */
  async reader(slug) {
    return this.get(`/api/reader/${slug}/`);
  }
  /** Get RFID tag family detail by slug. */
  async family(slug) {
    return this.get(`/api/family/${slug}/`);
  }
  /** Get frequency band detail by slug. */
  async frequency(slug) {
    return this.get(`/api/frequency/${slug}/`);
  }
  /** Get RFID standard detail by slug. */
  async standard(slug) {
    return this.get(`/api/standard/${slug}/`);
  }
  /** Get EPC standard detail by slug. */
  async epc(slug) {
    return this.get(`/api/epc/${slug}/`);
  }
  /** Get use case detail by slug. */
  async useCase(slug) {
    return this.get(`/api/use-case/${slug}/`);
  }
  /** Compare two RFID tags. */
  async compare(slugA, slugB) {
    return this.get("/api/compare/", {
      a: slugA,
      b: slugB
    });
  }
  /** Get a random RFID tag. */
  async random() {
    return this.get("/api/random/");
  }
  /** Get the OpenAPI 3.1.0 specification. */
  async openapi() {
    return this.get("/api/openapi.json");
  }
};
export {
  RFIDFYI
};
