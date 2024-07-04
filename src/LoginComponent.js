import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginComponent.css'; 
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7E57C2', // 登录按钮悬停时颜色
      },
    },
  });

  const handleLogin = () => {
    // Implement your login logic here
    console.log(email, password, rememberMe);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="login-component">
      <div className="login-form">
        <h1>Welcome👋</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="credentials-actions">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              记住密码
            </label>
            <a href="#" className="forgot-password">忘记密码了？</a>
          </div>
          <Button type="submit" variant="contained" color="primary">立即登录</Button>
        </form>
        <p>
          没有账号吗？<Link to="/register">现在注册一个</Link>
        </p>
      </div>
      <div className="login-image">
        {/* 图片将在这里添加 */}
      </div>
    </div>
    </ThemeProvider>
  );
}

export default LoginComponent;
