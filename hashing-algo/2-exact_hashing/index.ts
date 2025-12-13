import hash_my_text from "./hash_my_text.ts";

const input = "The rapid development of artificial intelligence (AI) has led to significant advancements across various industries, from healthcare diagnostics to autonomous transportation. These systems rely heavily on complex algorithms and vast datasets for training, enabling them to perform tasks that once required human cognition. However, this progress introduces critical ethical considerations, including data privacy concerns, algorithmic bias, and the potential for widespread job displacement. Experts are actively debating the necessity of robust regulatory frameworks to guide AI development responsibly, ensuring that technological innovation aligns with societal well-being and democratic values.";

const hash = await hash_my_text(input, "xxhash");
console.log(hash);