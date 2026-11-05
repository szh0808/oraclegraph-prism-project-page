# OracleGraph & PRISM — Paper Project Page

A responsive Chinese-language project page for **Benchmarking and Optimizing Multimodal Structured Generation: The OracleGraph Dataset and PRISM Framework** by **Zhihong Sun, Qi Fan, Pan Liu, Yang Yi, and Chen Ye**, College of Computer Science and Technology, Tongji University.

Zhihong Sun and Qi Fan contributed equally. Chen Ye is the corresponding author.

**Live website:** https://szh0808.github.io/oraclegraph-prism-project-page/

GitHub Pages serves the repository root from `main`. The page is static HTML/CSS/JavaScript, with no remote frontend dependencies or build step.

## Preview

```sh
python -m http.server 8000
```

Open `http://localhost:8000`.

## Research resources

The hero and footer each contain exactly three resource links:

| Button | Destination |
| --- | --- |
| Paper | `assets/paper.pdf` |
| 权重 | `https://www.modelscope.cn/models/Tongji209/PRISM` |
| 数据集 | `https://www.modelscope.cn/datasets/Tongji209/OracleGraph` |

The ModelScope repositories currently require an account with repository access. The model repository contains LoRA adapters that require Qwen3-VL-8B-Instruct base weights. The website does not link its own source as a research resource.

## Source edition

Content was reviewed against the author-supplied **36-page final PDF** on November 5, 2026. `assets/paper.pdf` is byte-identical to that supplied file.

- PDF SHA-256: `11f18a60327f979d48843d7921d49d9e2ea2504c11ae153823580eb44e1d4a66`
- PDF size: 8,035,776 bytes.
- Author order, equal-contribution markers, affiliation, corresponding-author email, and citation metadata follow page 1.
- The venue label follows the PDF's NeurIPS 2026 line. No DOI, proceedings volume, or acceptance distinction has been invented.
- The title's leading decorative diamond is not part of the bibliographic title.

| Asset | Figure | PDF page |
| --- | ---: | ---: |
| `prism-framework.png` | 1 | 4 |
| `difficulty-ablation.png` | 2 | 8 |
| `training-dynamics.png` | 3 | 9 |
| `graphdoc-transfer.png` | 4 | 10 |
| `synthesis-pipeline.png` | 5 | 23 |
| `water-margin.webp` | 6 | 24 |
| `hongloumeng.webp` | 7 | 24 |

Raster assets are extracted from the final PDF; the new vector figures are rendered from their original PDF regions. They have descriptive alternatives and zoom dialogs. Figures and manuscript remain the authors' material.

## Editorial and metric conventions

- Describe the OracleGraph graph annotations as **procedural**, as corrected in the final PDF; do not restore the old human-annotation or IAA claims.
- Distinguish the paper's 10,000-page organization (5,000 / 500 / 4,500) from the uploaded archive's 10,029 pages (5,000 main, 4,500 stress, 529 saved VQA pages). The downloaded main corpus includes the fixed 4,900/100 train/validation membership. Archive membership does not reconstruct every paper VQA sampling protocol.
- The full ontology contains z-index, while the released LoRA's compact output does not directly predict it. The website does not imply full-ontology coverage by the released adapter.
- Preserve the main three-seed Graph Reward table (Table 3), its +3.81pp PRISM–SDPO contrast, and its non-significant +1.02pp PRISM–SFT contrast. Treat observed standard deviations as descriptive; do not claim a tested general variance reduction.
- Distinguish Graph Reward, pooled strict F1, VQA averages, and GraphDoc's official metrics. Also distinguish the paper's three-seed ablation mean from the five-seed uploaded-weight mean (0.5092 pooled strict F1).
- The difficulty subsets in Table 11 use five seeds; the whole-set reference comes from the three-seed main table. The two outcome-selected subsets can reflect regression to the mean.
- Table 5 is the primary component/teacher result. The Table 19 factorial is supplementary: component rows use seed 42, while the displayed Vanilla-SDPO reference is a three-seed mean; its OOD subset has only 50 pages.
- Table 6 reports `long` standard deviation 0.21pp and `auto` 0.27pp. Follow these numbers even though nearby manuscript prose calls `auto` the most stable. `auto` is the default, not the minimum-std variant.
- Correct VQA structural-subset averages follow Appendix A.6: SFT 21.63%, PRISM seed 42 21.50%, Qwen3-VL base 18.38%, Qwen2.5-VL-7B 8.93%. EXR ignores character order and must not be presented as reading-order accuracy.
- OOD means follow Table 16: SFT 20.02%, DPO 17.41%, PRISM 18.29%, with no significant pairwise mean difference. PRISM's displayed population std is 0.16pp. Table 17 separately reports near-zero pooled strict F1.
- GraphDoc retraining (Table 20, three seeds, 20 post-SFT steps) and zero-shot transfer (Table 21, 23 complex pages, shared text-region ontology) are separate protocols. Report their observed gains without inventing significance tests or full-ontology generalization.
- Figure 3's smoothed illustration is distinct from independent evaluation and the Appendix B.6 training-window summaries. Do not describe it as evidence of monotonically increasing reward.

The resource URLs and PDF checksum should be rechecked when replacing the final paper or changing access settings. Keep table/figure references, seed counts, and metric qualifications with their corresponding results.
