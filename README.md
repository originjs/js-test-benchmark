## js-test-benchmark

### Usage
Generate test cases
```bash
node ./testCaseFactory/createCase.js fileCount caseCountInFile cpuSpendMillisecond ioSpendMillisecond

# Generate fileCount test files (fileCount must be a multiple of 10), and generate caseCountInFile test cases in each file (caseCountInFile must be a multiple of 5).
# The total number of test cases (fileCount * caseCountInFile) must be less than 100000.
# Time spent of cpu simulating business functions (ms).
# Time spent of io simulating business functions (ms).

#Example：node ./testCaseFactory/createCase.js 100 10 500 500
```

Run benchmark
```bash
pnpm install
pnpm run test:ben
```

### Output
About [result](https://github.com/sharkdp/hyperfine/issues/443#issuecomment-964856075)

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm run test:jest` | 5.046 ± 0.579 | 4.685 | 5.713 | 1.47 ± 0.23 |
| `pnpm run test:vitest` | 3.434 ± 0.356 | 3.124 | 3.823 | 1.00 |
| `pnpm run test:jest:inline` | 5.589 ± 0.278 | 5.283 | 5.826 | 1.63 ± 0.19 |
| `pnpm run test:vitest:inline` | 3.521 ± 0.418 | 3.234 | 4.001 | 1.03 ± 0.16 |
