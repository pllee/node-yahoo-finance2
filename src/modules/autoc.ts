import yahooFinanceFetch from '../lib/yahooFinanceFetch';
import validate from '../lib/validate';

const QUERY_URL = 'https://autoc.finance.yahoo.com/autoc';
const QUERY_OPTIONS_SCHEMA_KEY = "#/definitions/AutocOptions"
const QUERY_RESULT_SCHEMA_KEY = "#/definitions/AutocResultSet";

export interface AutocResultSet {
  Query: string;
  Result: Array<AutocResult>
}

export interface AutocResult {
  symbol: string;      // "AMZN"
  name: string;        // "Amazon.com, Inc."
  exch: string;        // "NMS"
  type: string;        // "S".    TODO "S" | "I" | ???
  exchDisp: string;    // "NASDAQ"
  typeDisp: string;    // "Equity"
}

export interface AutocOptions {
  region?: number;      // 1
  lang?: string;        // "en"
}

const queryOptionsDefaults = {
  region: 1,
  lang: 'en'
};

async function autoc(
  query: string,
  queryOptionsOverrides: AutocOptions = {},
  fetchOptions?: object
): Promise<AutocResultSet> {
  validate(queryOptionsOverrides, QUERY_OPTIONS_SCHEMA_KEY, 'autoc');

  const queryOptions = {
    query,
    ...queryOptionsDefaults,
    ...queryOptionsOverrides
  };

  const result = await yahooFinanceFetch(QUERY_URL, queryOptions, fetchOptions);

  if (result.ResultSet) {
    validate(result.ResultSet, QUERY_RESULT_SCHEMA_KEY);
    return result.ResultSet;
  }

  throw new Error("Unexpected result: " + JSON.stringify(result));
}

export default autoc;