import PublicIcon from '@mui/icons-material/Public';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WindPowerIcon from '@mui/icons-material/WindPower';
import OpacityIcon from '@mui/icons-material/Opacity';

export const energyTypes = [
    { value: null, label: "Todos", icon: <PublicIcon sx={{ mr: 0.5, fontSize: 18 }} /> },
    { value: "solar", label: "Solar", icon: <WbSunnyIcon sx={{ color: '#fbc02d', mr: 0.5, fontSize: 18 }} /> },
    { value: "wind", label: "Eólica", icon: <WindPowerIcon sx={{ color: '#4fc3f7', mr: 0.5, fontSize: 18 }} /> },
    { value: "hydroelectric", label: "Hidroeléctrica", icon: <OpacityIcon sx={{ color: '#1976d2', mr: 0.5, fontSize: 18 }} /> },
  ];