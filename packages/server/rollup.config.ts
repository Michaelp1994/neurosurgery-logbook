import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    input: "src/index.ts",
    output: {
        file: "src/bundle.ts",
        format: "cjs",
        sourcemap: true,
    },
    plugins: [typescript()],
});
