## LEVEL 1 — Exact Hashing 
(Foundational Practical Use)

At this level, hashing is used **purely as a unique, deterministic fingerprint of an input**.
No fancy structures, no indexing tricks — just compute a hash and store/compare it.

### Core Hash Functions You Should Know

### 1. xxHash64

* Extremely fast, streaming-friendly
* Non-cryptographic
* Designed for high-throughput systems, log processing, real-time pipelines
* Perfect when:

    * performance matters
    * collisions must be low-probability (but not cryptographically guaranteed)

### 2. MurmurHash3

* Also non-cryptographic
* Wide language support
* Good distribution properties
* Used heavily in:

    * Bloom filters
    * Hash tables
    * Databases
    * Distributed systems

### 3. SHA-256

* Slower but cryptographically secure
* Collision resistance is *designed*, not accidental
* Used for:

    * integrity verification
    * security-sensitive IDs
    * content-addressable storage (CAS)
    * blockchain systems

---

### Workflow:

1. **Take the input paragraph exactly as-is**

    * No trimming
    * No whitespace normalization
    * No lowercase/uppercase conversion
    * Byte-for-byte identity matters
      Because any change → a different hash.

2. **Compute the hash using one of the tools**
   Examples:

    * xxHash64(text)
    * murmur3_128(text)
    * sha256(text)

3. **Use the hash as a unique key**
   Typical examples:

    * Deduplicating text blobs
    * Detecting re-submissions of identical documents
    * Generating stable cache keys
    * Avoiding storing multiple copies of identical config or metadata
    * Identifying unchanged content in pipelines

This is the most common real-world hashing usage:
**“Does this exact string already exist?”**
Hash → Key → Lookup → Decide.

---
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.4. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
