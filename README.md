# rfidfyi

[![npm version](https://agentgif.com/badge/npm/rfidfyi/version.svg)](https://www.npmjs.com/package/rfidfyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/rfidfyi)

TypeScript API client for [RFIDFYI](https://rfidfyi.com) -- the comprehensive RFID reference covering tags (passive, active, semi-passive), readers, frequency bands (LF 125 kHz, HF 13.56 MHz, UHF 860-960 MHz), EPC/GS1 standards, ISO 18000 series, and industry use cases from supply chain to access control. Zero dependencies, uses native `fetch`.

> **Explore RFID at [rfidfyi.com](https://rfidfyi.com)** -- | | [Glossary](https://rfidfyi.com/glossary/) | ## Install

```bash
npm install rfidfyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { RFIDFYI } from "rfidfyi";

const api = new RFIDFYI();

// Search RFID tags, readers, standards
const results = await api.search("uhf passive");

// Get RFID tag detail
const tag = await api.tag("impinj-monza-r6");
console.log(tag.frequency);    // "UHF 860-960 MHz"
console.log(tag.memory_size);  // "96-bit EPC"

// Get frequency band detail
const uhf = await api.frequency("uhf");
console.log(uhf.read_distance); // "Up to 12 meters"

// Compare two RFID tags
const comparison = await api.compare("impinj-monza-r6", "nxp-ucode-8");
```

## API Methods

| Method | Description |
|--------|-------------|
| `search(query)` | Search tags, readers, standards, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `tag(slug)` | RFID tag detail |
| `reader(slug)` | RFID reader detail |
| `family(slug)` | Tag family detail |
| `frequency(slug)` | Frequency band detail |
| `standard(slug)` | RFID standard detail |
| `epc(slug)` | EPC standard detail |
| `useCase(slug)` | Use case detail |
| `compare(slugA, slugB)` | Compare two RFID tags |
| `random()` | Random RFID tag |
| `openapi()` | OpenAPI 3.1.0 specification |

## TypeScript Types

```typescript
import type {
  SearchResult, TagDetail, ReaderDetail, FamilyDetail, FrequencyDetail,
  StandardDetail, EpcDetail, UseCaseDetail, GlossaryTerm, CompareResult,
} from "rfidfyi";
```

## Also Available

| Language | Package |
|----------|---------|
| Python | [rfidfyi on PyPI](https://pypi.org/project/rfidfyi/) |
| TypeScript | **This package** |

## Code FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- automatic identification and data capture technologies.

| Package | npm | Description |
|---------|-----|-------------|
| barcodefyi | [npm](https://www.npmjs.com/package/barcodefyi) | Barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com/) |
| qrcodefyi | [npm](https://www.npmjs.com/package/qrcodefyi) | QR code types, versions, encoding -- [qrcodefyi.com](https://qrcodefyi.com/) |
| nfcfyi | [npm](https://www.npmjs.com/package/nfcfyi) | NFC chips, NDEF, standards -- [nfcfyi.com](https://nfcfyi.com/) |
| blefyi | [npm](https://www.npmjs.com/package/blefyi) | BLE profiles, beacons, chips -- [blefyi.com](https://blefyi.com/) |
| **rfidfyi** | [npm](https://www.npmjs.com/package/rfidfyi) | **RFID tags, readers, frequencies -- [rfidfyi.com](https://rfidfyi.com/)** |
| smartcardfyi | [npm](https://www.npmjs.com/package/smartcardfyi) | Smart cards, EMV, platforms -- [smartcardfyi.com](https://smartcardfyi.com/) |

## License

MIT
