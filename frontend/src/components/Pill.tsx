import React from 'react';
import { Box } from '@mui/material';

interface PillProps {
  children: React.ReactNode;
  color?: 'solar' | 'wind' | 'hydroelectric';
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  solar: {
    bg: '#fffde7',
    text: '#fbc02d',
    border: '#ffe082',
  },
  wind: {
    bg: '#e8f5e9',
    text: '#388e3c',
    border: '#66bb6a',
  },
  hydroelectric: {
    bg: '#e3eafc',
    text: '#1565c0',
    border: '#90caf9',
  },
  default: {
    bg: '#f5f5f5',
    text: '#333',
    border: '#e0e0e0',
  }
};

export const Pill: React.FC<PillProps> = ({ children, color = 'default' }) => {
  const c = colorMap[color as keyof typeof colorMap] || colorMap.default;
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: 1.5,
        py: 0.5,
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 700,
        bgcolor: c.bg,
        color: c.text,
        border: `1.5px solid ${c.border}`,
        letterSpacing: 1,
        textTransform: 'uppercase',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        ml: 1,
        verticalAlign: 'middle',
      }}
    >
      {children}
    </Box>
  );
};