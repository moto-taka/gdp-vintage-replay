# US GDP vintage replay

Open index.html in a browser. Select a decision time to see the US real GDP growth estimate that had been published at that instant. The signal switches on above 1.5% annualized growth.

| Decision time (New York) | Evidence available | Signal |
| --- | --- | --- |
| April 25, 2024 at 8:29 a.m. | No Q1 release yet | Cannot evaluate |
| April 25, 2024 at 8:30 a.m. | 1.6% | On |
| May 30, 2024 at 8:30 a.m. | 1.3% | Off |
| June 27, 2024 at 8:30 a.m. | 1.4% | Off |
| Any of the above, with the missing-evidence box checked | Unverified input | Unknown |

The example uses three fixed public releases from the US Bureau of Economic Analysis. The checkbox simulates a row with missing release evidence. The demo runs offline after loading. Links to the original publications require internet access.

- [April advance estimate](https://www.bea.gov/news/2024/gross-domestic-product-first-quarter-2024-advance-estimate)
- [May second estimate](https://www.bea.gov/news/2024/gross-domestic-product-first-quarter-2024-second-estimate-and-corporate-profits)
- [June third estimate](https://www.bea.gov/news/2024/gross-domestic-product-third-estimate-corporate-profits-revised-estimate-and-gdp-industry)

Run the five checks with Node.js and its standard library.

```sh
node verify.cjs
```

## What a reporter could have known in 2024

Each cell links to the BEA release for that date and gives the annualized change in real GDP from the preceding quarter. These are the first three estimates for each quarter. The interactive demo above replays Q1.

| Quarter measured | Advance estimate | Second estimate | Third estimate |
| --- | --- | --- | --- |
| 2024 Q1 | [Apr 25, 2024 · 1.6%](https://www.bea.gov/news/2024/gross-domestic-product-first-quarter-2024-advance-estimate) | [May 30, 2024 · 1.3%](https://www.bea.gov/news/2024/gross-domestic-product-first-quarter-2024-second-estimate-and-corporate-profits) | [Jun 27, 2024 · 1.4%](https://www.bea.gov/news/2024/gross-domestic-product-third-estimate-corporate-profits-revised-estimate-and-gdp-industry) |
| 2024 Q2 | [Jul 25, 2024 · 2.8%](https://www.bea.gov/news/2024/gross-domestic-product-second-quarter-2024-advance-estimate) | [Aug 29, 2024 · 3.0%](https://www.bea.gov/news/2024/gross-domestic-product-second-estimate-corporate-profits-preliminary-estimate-second) | [Sep 26, 2024 · 3.0%](https://www.bea.gov/news/2024/gross-domestic-product-third-estimate-corporate-profits-revised-estimate-and-gdp-0) |
| 2024 Q3 | [Oct 30, 2024 · 2.8%](https://www.bea.gov/news/2024/gross-domestic-product-third-quarter-2024-advance-estimate) | [Nov 27, 2024 · 2.8%](https://www.bea.gov/news/2024/gross-domestic-product-third-quarter-2024-second-estimate-and-corporate-profits) | [Dec 19, 2024 · 3.1%](https://www.bea.gov/news/2024/gross-domestic-product-third-estimate-corporate-profits-revised-estimate-and-gdp-1) |
| 2024 Q4 | [Jan 30, 2025 · 2.3%](https://www.bea.gov/news/2025/gross-domestic-product-4th-quarter-and-year-2024-advance-estimate) | [Feb 27, 2025 · 2.3%](https://www.bea.gov/news/2025/gross-domestic-product-4th-quarter-and-year-2024-second-estimate) | [Mar 27, 2025 · 2.4%](https://www.bea.gov/news/2025/gross-domestic-product-4th-quarter-and-year-2024-third-estimate-gdp-industry-and) |

For example, a reporter writing after the November 27 release could say Q3 growth held at 2.8%. The 3.1% figure first appeared in the December 19 release.
