# Query Parameters Documentation

This document outlines the query parameters used by the frontend to interact with the backend services. These parameters are structured JSON objects that specify filters and other options for data retrieval.

## Query Parameter Structure

### Gene Query
```json
{
  "gene": {
    "filter": "chrom eq '16' and start le 2604247 and end ge 704247",
    "build": "GRCh37"
  }
}
```
**Description:**
- `filter`: A conditional statement to filter genes based on chromosome, start, and end positions.
  - `chrom eq '16'`: Filters genes located on chromosome 16.
  - `start le 2604247`: Includes genes with a start position less than or equal to 2,604,247.
  - `end ge 704247`: Includes genes with an end position greater than or equal to 704,247.
- `build`: Specifies the genome build version, e.g., `GRCh37`. (not needed)

### Recombination Query
```json
{
  "recomb": {
    "filter": "chromosome eq '16' and position le 2604247 and position ge 704247 and id in 15"
  }
}
```
**Description:**
- `filter`: A conditional statement to filter recombination events based on chromosome, position, and id.
  - `chromosome eq '16'`: Filters recombinations on chromosome 16.
  - `position le 2604247`: Includes recombinations with a position less than or equal to 2,604,247.
  - `position ge 704247`: Includes recombinations with a position greater than or equal to 704,247.
  - `id in 15`: Filters recombinations where the id is in the list containing 15. (necessity to be determined)

### Association Query
```json
{
  "assoc": {
    "filter": "analysis in 41 and chromosome in  '16' and position ge 704247 and position le 2604247"
  }
}
```
**Description:**
- `filter`: A conditional statement to filter associations based on analysis, chromosome, and position.
  - `analysis in 41`: Filters associations related to analysis 41. (not needed)
  - `chromosome in '16'`: Filters associations on chromosome 16.
  - `position ge 704247`: Includes associations with a position greater than or equal to 704,247.
  - `position le 2604247`: Includes associations with a position less than or equal to 2,604,247.

## Usage
These query parameters are sent by the frontend to send requests to the backend services, ensuring the correct filtering and retrieval of genetic, recombination, and association data.

Ensure that all query objects are properly formatted JSON with valid field names and conditions to prevent errors in data processing.

---

