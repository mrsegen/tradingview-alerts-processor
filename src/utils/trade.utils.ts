import { Ticker } from 'ccxt';
import { Side } from '../types/trade.types';

export const getTradeSide = (side: Side): 'buy' | 'sell' =>
  side === ('short' || 'sell') ? 'sell' : 'buy';

export const getInvertedTradeSide = (side: Side): 'buy' | 'sell' =>
  side === ('short' || 'sell') ? 'buy' : 'sell';

// provided size is in US$
export const getAverageTradeSize = (ticker: Ticker, size: string): number => {
  const { ask, bid } = ticker;
  return Number(size) / ((ask + bid) / 2);
};