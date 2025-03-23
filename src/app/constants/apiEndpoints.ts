export const API_URL = 'https://finnhub.io/api/v1';

export const API_ENDPOINTS = {
    SYMBOL_LOOKUP: '/search?q={QUERY}&exchange=US&token=cvejen9r01ql1jnbr5v0cvejen9r01ql1jnbr5vg',
    SYMBOL_QUOTE: '/quote?symbol={SYMBOL}&token=cvejen9r01ql1jnbr5v0cvejen9r01ql1jnbr5vg',
    COMPANY_PROFILE: '/stock/profile2?symbol={SYMBOL}&token=cvejen9r01ql1jnbr5v0cvejen9r01ql1jnbr5vg',
    COMPANY_NEWS: '/company-news?symbol={SYMBOL}&from={FROM_DATE}&to={TO_DATE}&token=cvejen9r01ql1jnbr5v0cvejen9r01ql1jnbr5vg'
}