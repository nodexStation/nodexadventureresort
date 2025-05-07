
import React from 'react';
import { useSiteConfig } from '../hooks/use-site-config';

interface CurrencyFormatterProps {
  amount: number;
  showSymbol?: boolean;
  className?: string;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  amount,
  showSymbol = true,
  className = '',
}) => {
  const { currency } = useSiteConfig();
  const formattedAmount = new Intl.NumberFormat('bn-BD').format(amount);
  
  return (
    <span className={className}>
      {showSymbol && currency.symbol}{formattedAmount}
    </span>
  );
};

export default CurrencyFormatter;
