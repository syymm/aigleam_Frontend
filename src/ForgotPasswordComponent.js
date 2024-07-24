import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import './ForgotPasswordComponent.css';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const steps = ['确认账号', '重置密码', '重置成功'];

export default function ForgotPasswordComponent() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#7E57C2', // 登录按钮悬停时颜色
      },
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <br />
            <TextField
              sx={{ bgcolor: 'white', height: '40px', width: '60%' }}
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              size="small"
            />
            <br />
          </Box>
        );
      case 1:
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <TextField
              sx={{ bgcolor: 'white', marginTop: '0px', height: '40px', width: '60%' }}
              label="新密码"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              size="small"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      style={{ backgroundColor: 'transparent', padding: 0, margin: 'auto 0', top: '50%', transform: 'translateY(-50%)', color: '#666' }}
                    >
                      {showPassword ? <VisibilityOff style={{ fontSize: 24 }} /> : <Visibility style={{ fontSize: 24 }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ bgcolor: 'white', marginTop: '0px', height: '40px', width: '60%' }}
              label="确认密码"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              variant="outlined"
              size="small"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      style={{ backgroundColor: 'transparent', padding: 0, margin: 'auto 0', top: '50%', transform: 'translateY(-50%)', color: '#666' }}
                    >
                      {showPassword ? <VisibilityOff style={{ fontSize: 24 }} /> : <Visibility style={{ fontSize: 24 }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ bgcolor: 'white', marginTop: '0px', height: '40px', width: '60%' }}
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              size="small"
              margin="normal"
            />
            <InputBase
              sx={{
                bgcolor: 'white',
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                width: '60%',
                border: '1px solid #d1d1d1',
                borderRadius: '4px',
              }}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="验证码"
              endAdornment={
                <><Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <Button
                    id="customButton"
                    variant="text"
                    size='small'
                    endIcon={<SendIcon sx={{ color: '#6200ea', transform: 'translateY(-2px)' }} />}
                    sx={{
                      height: '18px',
                      ml: 1,
                      transform: 'translateY(5px)',
                      color: '#6200ea',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    send
                  </Button></>
              }
            />
          </Box>
        );
      case 2:
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography sx={{ mt: 2, mb: 1 }}>重置成功内容</Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ width: '250px', height: '50px', alignSelf: 'center' }}
            >
              返回登录
            </Button>
          </Box>
        );
      default:
        return '未知步骤';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="forgotpassword-component">
        <div className="forgotpassword-form">
          <h1>忘记密码了？</h1>
          <Box sx={{ width: '100%', mt: 1 }}>
            <Stack spacing={4}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* 内容区域 */}
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {getStepContent(activeStep)}
                </Typography>
              </Box>

              {/* 按钮区域 */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                {activeStep < steps.length - 1 && (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    sx={{ width: '250px', height: '50px' }}
                  >
                    下一步
                  </Button>
                )}
              </Box>
            </Stack>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}
