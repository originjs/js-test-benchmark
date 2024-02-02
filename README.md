## js-test-benchmark

### Usage
生成测试用例
```bash
node .\testCaseFactory\createCase.js fileCount caseCountInFile
# 生成 fileCount 个测试文件（fileCount必须是10的倍数），每个文件中生成 caseCountInFile 个测试用例(caseCountInFile必须是5的倍数）
# 总测试用例数量（fileCount * caseCountInFile）必须小于100000
```

```bash
pnpm install
pnpm run test:ben
```

### Output
Mean是所有基准测试运行的平均时间, 后面的数字±表示该平均值的统计误差的大小, 它是所有测量时间的（校正样本）标准偏差。

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `pnpm run test:jest` | 5.046 ± 0.579 | 4.685 | 5.713 | 1.47 ± 0.23 |
| `pnpm run test:vitest` | 3.434 ± 0.356 | 3.124 | 3.823 | 1.00 |
| `pnpm run test:jest:inline` | 5.589 ± 0.278 | 5.283 | 5.826 | 1.63 ± 0.19 |
| `pnpm run test:vitest:inline` | 3.521 ± 0.418 | 3.234 | 4.001 | 1.03 ± 0.16 |
