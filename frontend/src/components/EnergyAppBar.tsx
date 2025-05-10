import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Map as MapIcon, List as ListIcon } from '@mui/icons-material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { energyTypes } from '../utils/energyType';

interface EnergyAppBarProps {
  selectedType: string | null;
  onTypeChange: (event: React.SyntheticEvent, newValue: string | null) => void;
  view: 'map' | 'list';
  onViewChange: (event: React.MouseEvent<HTMLElement>, nextView: 'map' | 'list' | null) => void;
}

const tabSx = {
  fontWeight: 500,
  fontSize: 14,
  minHeight: 32,
  px: 1.5,
  py: 0.5,
  borderRadius: 2,
  color: '#e3e3e3',
  transition: 'background 0.2s, color 0.2s',
  '&:focus': { outline: 'none' },
  '&.Mui-selected': {
    color: '#1976d2',
    background: '#fff',
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
  },
  '&:hover': {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
  }
};

export const EnergyAppBar: React.FC<EnergyAppBarProps> = ({
  selectedType,
  onTypeChange,
  view,
  onViewChange,
}) => (
  <AppBar
    position="fixed"
    sx={{
      background: 'linear-gradient(90deg, #1976d2 60%, #2196f3 100%)',
      boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.25), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
      zIndex: 10,
      py: 0.5,
    }}
  >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        minHeight: 56,
        px: { xs: 1, sm: 2, md: 4 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          letterSpacing: 0.5,
          color: '#fff',
          fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
          textShadow: '0 2px 8px rgba(25,118,210,0.10)',
          mr: 2,
          fontSize: { xs: 18, sm: 20, md: 22 },
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <ElectricBoltIcon 
          sx={{ 
            fontSize: 28,
            color: '#fff',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          }} 
        />
        Proyectos de energías renovables
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end', minWidth: 0 }}>
        <Tabs
          value={selectedType}
          onChange={onTypeChange}
          aria-label="project type tabs"
          textColor="inherit"
          slotProps={{
            indicator: {
              style: {
                background: '#fff',
                height: 2,
                borderRadius: 1,
              }
            }
          }}
          sx={{
            minHeight: 40,
            '.MuiTabs-flexContainer': { justifyContent: 'center' },
            '.MuiTab-root': tabSx,
            '.MuiTab-root.Mui-focusVisible': { outline: 'none' }
          }}
        >
          {energyTypes.map(type => (
            <Tab
              key={type.value ?? 'all'}
              icon={type.icon}
              iconPosition="start"
              label={type.label}
              value={type.value}
              disableRipple
            />
          ))}
        </Tabs>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={onViewChange}
          aria-label="Vista"
          size="small"
          sx={{
            ml: 2,
            background: '#e3f2fd',
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(25,118,210,0.10)',
            height: 32,
            '& .MuiToggleButton-root': {
              border: 'none',
              color: '#1976d2',
              fontWeight: 600,
              fontSize: 16,
              px: 1.5,
              minWidth: 36,
              background: '#e3f2fd',
              '& .MuiSvgIcon-root': { fontSize: 20 },
              '&.Mui-selected': {
                background: '#1976d2 !important',
                color: '#fff !important',
              },
              '&:hover': {
                background: '#bbdefb',
              }
            }
          }}
        >
          <ToggleButton value="map" aria-label="Mapa">
            <MapIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="Lista">
            <ListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Toolbar>
  </AppBar>
);