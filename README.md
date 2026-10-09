# OracleGraph & PRISM — Paper Project Page

A responsive, Chinese-language academic project page for **Benchmarking and Optimizing Multimodal Structured Generation: The OracleGraph Dataset and PRISM Framework**.

The visual design follows the [HCSU project page](https://ihanzi.net/static/HCSU/): a historical-document hero, compact dataset statistics, white rounded section cards, tabbed results, original paper figures, and a dark citation footer. The implementation is original and uses no remote frontend dependencies.

## Preview

Open `index.html` directly, or serve this directory:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. No installation or build is required. The same files can be hosted on GitHub Pages or any static web host.

## Contents

- `index.html`: paper introduction, dataset, framework, results, ablations and BibTeX.
- `styles.css`: responsive desktop/mobile design.
- `app.js`: accessible tabs, mobile menu, figure dialog and citation copying.
- `assets/`: original PDF and figures extracted from its pages 4, 8 and 22.

## Source and editorial notes

All research numbers and scientific claims are based on the supplied 31-page anonymous manuscript. Website copy is a Chinese summary, not a verbatim reproduction. References to Figure/Table numbers retain the manuscript's numbering.

- Authors remain **Anonymous Author(s)** because the manuscript provides no named authors.
- NeurIPS 2026 is shown as an anonymous submission, not an acceptance.
- PRISM versus Vanilla-SDPO: +3.81 pp Graph Reward, p < 0.001. PRISM versus SFT: +1.02 pp, p = 0.12, not statistically significant.
- The reported 2.4× and 14× stability factors match **standard deviation ratios**, not variance ratios. The manuscript uses these terms inconsistently; this page states the numeric interpretation explicitly.
- Table 15's printed SFT/DPO rows use one seed, while its caption gives three-seed rewards. This page displays all three reported seeds and the caption's standard deviations; it does not claim a significant mean OOD advantage.
- Table 3's `long` DGR variant has lower std than `auto`. The page preserves this distinction rather than calling `auto` the lowest-variance variant.
- Table 17 is a separate single-seed component ablation with n = 50 OOD pages; these results are not merged with the n = 100 OOD probe.
- The code/dataset button points to the anonymous repository supplied in the manuscript. The GitHub button points to this page's source, not an invented research-code release.

## Updating after publication

Update the author row, submission label, BibTeX, paper PDF and research resource links in `index.html`. Keep results' evaluation protocols, seed counts and significance qualifiers with the corresponding data.

Paper content and extracted figures belong to their respective authors/rightsholders. No additional license is asserted for the manuscript or its assets.
