/**
 * Logo Component
 * Avenue Ticket logo with size variants
 */

import React from 'react';
import styled from 'styled-components';
import avenueTicketSmall from '../assets/avenue-ticket-small.svg';
import logoIconSmall from '../assets/logo-icon-small.svg';
import avenueTicketBig from '../assets/avenue-ticket-big.svg';
import logoIconBig from '../assets/logo-icon-big.svg';

export type LogoSize = 'big' | 'small';

export interface LogoProps {
  /** Size variant (big or small) */
  size?: LogoSize;
  /** Additional CSS class */
  className?: string;
}

const LogoContainer = styled.div<{ $size: LogoSize }>`
  position: relative;
  display: inline-block;
  width: ${props => props.$size === 'big' ? '120px' : '80px'};
  height: ${props => props.$size === 'big' ? '36px' : '24px'};
`;

const AvenueText = styled.img<{ $size: LogoSize }>`
  position: absolute;
  display: block;
  max-width: none;
  width: ${props => props.$size === 'big' ? '78.373px' : '52.249px'};
  height: ${props => props.$size === 'big' ? '35.659px' : '23.773px'};
  left: ${props => props.$size === 'big' ? '41.36px' : '27.57px'};
  top: 0;
`;

const LogoIcon = styled.img<{ $size: LogoSize }>`
  position: absolute;
  display: block;
  max-width: none;
  width: ${props => props.$size === 'big' ? '35.255px' : '23.503px'};
  height: ${props => props.$size === 'big' ? '36px' : '24px'};
  left: ${props => props.$size === 'big' ? '0.75px' : '0.5px'};
  top: 50%;
  transform: translateY(-50%);
`;

export const Logo: React.FC<LogoProps> = ({
  size = 'big',
  className,
}) => {
  const isBig = size === 'big';
  
  return (
    <LogoContainer $size={size} className={className}>
      <AvenueText
        $size={size}
        src={isBig ? avenueTicketBig : avenueTicketSmall}
        alt="Avenue Ticket"
      />
      <LogoIcon
        $size={size}
        src={isBig ? logoIconBig : logoIconSmall}
        alt="Logo Icon"
      />
    </LogoContainer>
  );
};
