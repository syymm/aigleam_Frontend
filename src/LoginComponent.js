import React, { useState } from 'react';
import './LoginComponent.css'; 

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log(email, password, rememberMe);
  };

  return (
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
          <button type="submit">立即登录</button>
        </form>
        <p>
          没有账号吗？<a href="#">现在注册一个。</a>
        </p>
      </div>
      <div className="login-image">
        {/* 图片将在这里添加 */}
      </div>
    </div>
  );
}

export default LoginComponent;
