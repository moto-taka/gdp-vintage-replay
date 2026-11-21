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
- [June third estimate](https://www.bea.gov/news/2024/gross-domestic-product-third-estimate-and-gdp-industry)

Run the five checks with Node.js and its standard library.

```sh
node verify.cjs
```
