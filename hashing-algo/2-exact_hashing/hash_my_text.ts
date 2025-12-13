import xxhash from "xxhash-wasm";

type Algo = "xxhash";

const hash_my_text = async (
    input: string,
    algo: Algo
): Promise<string> => {
    if (algo === "xxhash") {
        const hasher = await xxhash();
        return hasher.h32ToString(input);
    }

    throw new Error("Unsupported algorithm");
};

export default hash_my_text;
