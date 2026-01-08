const API_URL = "https://api.nptelprep.in/courses/101101001";

async function sequentialTest(
  url: string,
  delayMs = 100,
  maxRequests = 200
): Promise<{ limit: number }> {
  console.log("\n🔄 SEQUENTIAL TEST (per-minute limit)...\n");
  let success = 0;

  for (let i = 1; i <= maxRequests; i++) {
    const res = await fetch(url, {
      headers: { "User-Agent": "RateTester/1.0" },
    });

    if (res.status === 429) {
      console.log(`\n🚫 SEQUENTIAL LIMIT HIT: ${success} req/min`);
      return { limit: success };
    }

    if (res.ok) {
      success++;
      const rem = res.headers.get("X-RateLimit-Remaining") || "∞";
      process.stdout.write(`\r✅ ${i}/${maxRequests} | Remaining: ${rem}`);
    }

    await new Promise((r) => setTimeout(r, delayMs));
  }

  console.log(`\nℹ️  Sequential: >${success} req/min (increase maxRequests)`);
  return { limit: success };
}

async function burstTest(
  url: string,
  maxConcurrency = 64
): Promise<{ limit: number }> {
  console.log("\n🔥 BURST TEST (concurrent limit)...\n");

  for (let level = 1; level <= maxConcurrency; level *= 2) {
    console.log(`Testing ${level} concurrent...`);
    const promises = Array(level)
      .fill(0)
      .map(() => fetch(url, { headers: { "User-Agent": "RateTester/1.0" } }));

    const results = await Promise.allSettled(promises);
    const fails = results.filter(
      (r) =>
        r.status === "rejected" ||
        (r.status === "fulfilled" && r.value.status === 429)
    ).length;

    if (fails > level * 0.3) {
      // 30% failure = limit hit
      console.log(`\n💥 BURST LIMIT: ~${level} concurrent`);
      return { limit: level };
    }
  }

  console.log(`ℹ️  Burst: >${maxConcurrency} concurrent`);
  return { limit: maxConcurrency };
}

async function main() {
  console.log(`Testing: ${API_URL}\n`);

  const seq = await sequentialTest(API_URL);
  const burst = await burstTest(API_URL);

  console.log("\n🎯 YOUR API LIMITS:");
  console.log(`Sequential: ${seq.limit} requests/minute`);
  console.log(`Burst:     ${burst.limit} concurrent requests`);
  console.log(`\n✅ Use these in production!`);
}

main().catch(console.error);
