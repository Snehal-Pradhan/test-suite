## LEVEL 0 — Deep Understanding of What a Hash Really Is ?

At its core, a **hash function** is a mapping:

```
input (any size)
    ↓
fixed-size output (hash)
```

### 1. Deterministic Transformation

If you give the hash function the same input 1000 times, you get the same output 1000 times.
This property makes hashes reliable for repeated lookups and comparisons.

### 2. Domain → Range Compression

Inputs are typically unbounded or arbitrarily long.
Outputs are always *bounded* (e.g., 32 bits, 64 bits, 256 bits).

This compression is what causes:

* **Collisions** (inevitable): two different inputs mapping to the same output.

### 3. Performance-Oriented

Hash functions are designed to be:

* **Fast** to compute.
* **Constant-time** (or close) relative to input length.
  This matters for high-performance data structures like hash tables and distributed systems.

### 4. Collision Characteristics

Different hash functions have different goals:

* General-purpose hashing: minimize collisions for performance (e.g., MurmurHash, FNV).
* Cryptographic hashing: make collisions *computationally infeasible* (e.g., SHA-256).

### 5. Why Hashes Are Ubiquitous

Hashes appear everywhere because fixed-size output + deterministic mapping solves many fundamental operational problems:

| Use Case                         | How Hash Helps                                |
| -------------------------------- | --------------------------------------------- |
| Deduplication                    | Compare hashes instead of whole files/strings |
| Fast lookups (e.g., hash tables) | Compute bucket index quickly                  |
| Caching                          | Key generation based on content               |
| Load balancing                   | Consistent hashing to select servers          |
| Partitioning data                | Even distribution across shards               |
| Routing                          | Map identifiers to network nodes              |

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
---