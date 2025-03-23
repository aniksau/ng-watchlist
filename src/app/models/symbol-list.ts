export interface SymbolList {
    count: number;
    result: SymbolResultList[];
}

export interface SymbolResultList {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
    close?: number
}