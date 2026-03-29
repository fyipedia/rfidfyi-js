# rfidfyi

[![npm version](https://agentgif.com/badge/npm/rfidfyi/version.svg)](https://www.npmjs.com/package/rfidfyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/rfidfyi)

TypeScript API client for [RFIDFYI](https://rfidfyi.com) -- the comprehensive RFID reference covering tags (passive, active, semi-passive), readers, frequency bands (LF 125 kHz, HF 13.56 MHz, UHF 860-960 MHz), EPC Gen2 encoding schemes, ISO 18000 series, antenna types, and industry use cases. 318 records total. Zero dependencies, uses native `fetch`.

Extracted from [rfidfyi.com](https://rfidfyi.com), used by developers and engineers worldwide.

> **Explore at [rfidfyi.com](https://rfidfyi.com)** -- [Tag Explorer](https://rfidfyi.com/tag/) | [Frequency Bands](https://rfidfyi.com/frequency/) | [EPC Schemes](https://rfidfyi.com/epc/) | [Glossary](https://rfidfyi.com/glossary/)

<p align="center">
  <img src="https://raw.githubusercontent.com/fyipedia/rfidfyi-js/main/demo.gif" alt="rfidfyi demo -- RFID tags, frequency bands, EPC schemes lookup and comparison in TypeScript" width="800">
</p>

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
- [API Reference](#api-reference)
- [TypeScript Types](#typescript-types)
- [Features](#features)
- [Learn More](#learn-more)
- [Also Available for Python](#also-available-for-python)
- [Tag FYI Family](#tag-fyi-family)
- [FYIPedia Developer Tools](#fyipedia-developer-tools)
- [License](#license)

## Install

```bash
npm install rfidfyi
```

Works in Node.js 18+, Deno, Bun, and browsers (ESM). Zero dependencies -- uses native `fetch`.

## Quick Start

```typescript
import { RFIDFYI } from "rfidfyi";

const api = new RFIDFYI();

// Search RFID tags, readers, standards
const results = await api.search("uhf passive");
console.log(results);

// Get RFID tag detail
const monza = await api.getTag("impinj-monza-r6");
console.log(monza.frequency);    // "UHF 860-960 MHz"
console.log(monza.sensitivity);  // "-22.1 dBm"

// Get frequency band detail
const uhf = await api.getFrequencyBand("uhf");
console.log(uhf.range); // "1-12 meters"

// Browse EPC encoding schemes
const epc = await api.listEpcSchemes();
```

## What You Can Do

### Look Up RFID Tags and Readers

RFIDFYI covers tags from Impinj, NXP, Alien Technology, and ON Semiconductor. Each record includes frequency band, sensitivity, memory, and read range specifications.

| Type | Power Source | Read Range | Cost |
|------|-------------|------------|------|
| Passive | RF field harvested | LF: <10cm, HF: <1m, UHF: 1-12m | $0.03-0.15 |
| Semi-Passive | Battery-assisted | 15-30m | $2-10 |
| Active | Internal battery | 30-100+m | $10-50+ |

```typescript
// Get tag IC detail
const ucode = await api.getTag("nxp-ucode-8");
console.log(ucode.die_size); // "0.33 mm2"

// Get reader hardware detail
const reader = await api.getReader("impinj-speedway-r420");

// Browse antenna types
const antennas = await api.listAntennaTypes();
```

Learn more: [Tag Explorer](https://rfidfyi.com/tag/) · [Frequency Bands](https://rfidfyi.com/frequency/)

### Browse Standards and EPC Schemes

```typescript
// List RFID standards
const standards = await api.listStandards();

// Get EPC scheme encoding detail
const sgtin = await api.getEpcScheme("sgtin-96");
console.log(sgtin.bits); // 96

// Browse industry use cases
const retail = await api.getUseCase("retail-inventory");
```

Learn more: [Standards Reference](https://rfidfyi.com/standard/) · [EPC Schemes](https://rfidfyi.com/epc/)

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Full-text search across all content |
| `listTags()` | List all RFID tags |
| `getTag(slug)` | Get tag detail with specs |
| `listReaders()` | List RFID readers |
| `getReader(slug)` | Get reader detail |
| `listTagFamilies()` | List tag families |
| `getTagFamily(slug)` | Get tag family detail |
| `listFrequencyBands()` | List frequency bands |
| `getFrequencyBand(slug)` | Get frequency band detail |
| `listEpcSchemes()` | List EPC encoding schemes |
| `getEpcScheme(slug)` | Get EPC scheme detail |
| `listStandards()` | List standards |
| `getStandard(slug)` | Get standard detail |
| `listAntennaTypes()` | List antenna types |
| `listIndustries()` | List industry applications |
| `listManufacturers()` | List manufacturers |
| `listUseCases()` | List use cases |
| `listGlossary()` | List glossary terms |
| `getTerm(slug)` | Get glossary term |

## TypeScript Types

All response types are fully typed:

```typescript
import type { ApiResponse } from "rfidfyi";
```

## Features

- **Zero dependencies** -- uses native `fetch`, no axios/node-fetch required
- **TypeScript-first** -- full type definitions, strict mode compatible
- **Universal** -- works in Node.js 18+, Deno, Bun, and browsers
- **ESM** -- native ES modules with tree-shaking support
- **Lightweight** -- < 5 KB minified, no runtime overhead

## Learn More

- **Browse**: [rfidfyi.com](https://rfidfyi.com) -- 318 records of RFID tags, frequency bands, EPC schemes
- **Reference**: [Glossary](https://rfidfyi.com/glossary/) · [Guides](https://rfidfyi.com/guide/)
- **API**: [REST API Docs](https://rfidfyi.com/api/) · [OpenAPI Spec](https://rfidfyi.com/api/openapi.json)
- **Python**: [rfidfyi on PyPI](https://pypi.org/project/rfidfyi/) -- includes CLI, MCP server, and REST API client

## Also Available for Python

```bash
pip install rfidfyi[all]
```

The Python package includes CLI (`rfidfyi search "query"`), MCP server for Claude/Cursor, and full REST API client. See [rfidfyi on PyPI](https://pypi.org/project/rfidfyi/).

## Tag FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- automatic identification and data capture technologies.

| Package | npm | PyPI | Description |
|---------|-----|------|-------------|
| barcodefyi | [npm](https://www.npmjs.com/package/barcodefyi) | [PyPI](https://pypi.org/project/barcodefyi/) | 518 records -- barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com) |
| qrcodefyi | [npm](https://www.npmjs.com/package/qrcodefyi) | [PyPI](https://pypi.org/project/qrcodefyi/) | 425 records -- QR code types, versions -- [qrcodefyi.com](https://qrcodefyi.com) |
| nfcfyi | [npm](https://www.npmjs.com/package/nfcfyi) | [PyPI](https://pypi.org/project/nfcfyi/) | 288 records -- NFC chips, NDEF -- [nfcfyi.com](https://nfcfyi.com) |
| blefyi | [npm](https://www.npmjs.com/package/blefyi) | [PyPI](https://pypi.org/project/blefyi/) | 261 records -- BLE chips, GATT, beacons -- [blefyi.com](https://blefyi.com) |
| **rfidfyi | [npm](https://www.npmjs.com/package/rfidfyi) | [PyPI](https://pypi.org/project/rfidfyi/) | 318 records -- RFID tags, frequencies -- [rfidfyi.com](https://rfidfyi.com)** |
| smartcardfyi | [npm](https://www.npmjs.com/package/smartcardfyi) | [PyPI](https://pypi.org/project/smartcardfyi/) | 280 records -- smart cards, EMV -- [smartcardfyi.com](https://smartcardfyi.com) |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| barcodefyi | [PyPI](https://pypi.org/project/barcodefyi/) | [npm](https://www.npmjs.com/package/barcodefyi) | Barcode symbologies, standards -- [barcodefyi.com](https://barcodefyi.com) |
| qrcodefyi | [PyPI](https://pypi.org/project/qrcodefyi/) | [npm](https://www.npmjs.com/package/qrcodefyi) | QR code types, versions, encoding -- [qrcodefyi.com](https://qrcodefyi.com) |
| nfcfyi | [PyPI](https://pypi.org/project/nfcfyi/) | [npm](https://www.npmjs.com/package/nfcfyi) | NFC chips, NDEF, standards -- [nfcfyi.com](https://nfcfyi.com) |
| blefyi | [PyPI](https://pypi.org/project/blefyi/) | [npm](https://www.npmjs.com/package/blefyi) | BLE profiles, beacons, chips -- [blefyi.com](https://blefyi.com) |
| rfidfyi | [PyPI](https://pypi.org/project/rfidfyi/) | [npm](https://www.npmjs.com/package/rfidfyi) | RFID tags, readers, frequencies -- [rfidfyi.com](https://rfidfyi.com) |
| smartcardfyi | [PyPI](https://pypi.org/project/smartcardfyi/) | [npm](https://www.npmjs.com/package/smartcardfyi) | Smart cards, EMV, platforms -- [smartcardfyi.com](https://smartcardfyi.com) |

## Embed Widget

Embed [RFIDFYI](https://rfidfyi.com) widgets on any website with [rfidfyi-embed](https://widget.rfidfyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/rfidfyi-embed@1/dist/embed.min.js"></script>
<div data-rfidfyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.rfidfyi.com)

## License

MIT
