# 06-aggregation

This practice is orientated on learning the basics of the **aggregations** in SQL.

---

## Concepts practiced

- 

---

## Note:

The functions `SUM`, `AVG`, `MIN` and `MAX` **ignore NULL values automatically**. For example: if there are 10 rows but 3 of them have NULL as their value, `AVG` function **will only** calculate the average of the 7 rows with values.

---

## Usage

``` bash
node aggregation.ts