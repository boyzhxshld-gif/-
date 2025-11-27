
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Phone, Lock, School, User, BookOpen, HelpCircle, Users } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  // State
  const [selectedRole, setSelectedRole] = useState<'STUDENT' | 'PARENT' | 'TEACHER'>('TEACHER');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
      if (!phone || !password) return alert('请输入手机号和密码');
      localStorage.setItem('userRole', selectedRole);
      navigate('/mine');
  };

  const handleForgotPassword = () => {
      alert('请联系管理员重置密码：400-123-4567');
  };

  const handleHelp = () => {
      alert('如遇登录问题，请检查网络或联系客服。');
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#7f1d1d]">
      {/* Background Pattern - Traditional Lattice Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 7.07 25.172 0h2.828zM32 0l-6.485 6.485 1.415 1.415L34.828 0H32zm5.657 0l-6.485 6.485 1.415 1.415L39.072 0h-1.415zM0 0l21.213 21.213-1.414 1.414L0 2.828V0zm60 0L38.787 21.213l1.414 1.414L60 2.828V0zM0 60l21.213-21.213-1.414-1.414L0 57.172V60zm60 0L38.787 38.787l1.414-1.414L60 57.172V60z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
      }}></div>
      
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>

      <div className="w-full max-w-md px-6 relative z-10 flex flex-col h-full justify-center">
        {/* Brand Header */}
        <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#fdfbf7] rounded-full shadow-2xl mb-6 relative border-4 border-amber-600">
                 <div className="absolute inset-1 rounded-full border border-amber-100"></div>
                 <BookOpen size={40} className="text-[#7f1d1d]" />
            </div>
            <h1 className="text-4xl font-black text-[#fdfbf7] tracking-tight font-serif mb-2 drop-shadow-md">
                讲好中国故事
            </h1>
            <div className="flex items-center justify-center space-x-3 opacity-80">
                <span className="h-px w-8 bg-amber-200/50"></span>
                <p className="text-amber-100 text-[10px] font-bold tracking-[0.3em] uppercase shadow-sm">
                    全国青少年语言素养大赛
                </p>
                <span className="h-px w-8 bg-amber-200/50"></span>
            </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#fdfbf7] rounded-[2rem] shadow-2xl shadow-black/30 overflow-hidden p-8 animate-slide-up relative border border-amber-100">
            
            <div className="mb-8">
                {/* Role Selector */}
                <div className="flex bg-stone-100 p-1.5 rounded-xl mb-8 border border-stone-200 shadow-inner">
                    <button 
                        onClick={() => setSelectedRole('STUDENT')}
                        className={`flex-1 py-3 rounded-lg text-xs font-bold flex flex-col items-center justify-center transition-all duration-300 font-serif ${
                            selectedRole === 'STUDENT' 
                            ? 'bg-[#7f1d1d] text-white shadow-md' 
                            : 'text-stone-400 hover:text-stone-600'
                        }`}
                    >
                        <User size={16} className="mb-1" /> 学生
                    </button>
                    <button 
                        onClick={() => setSelectedRole('PARENT')}
                        className={`flex-1 py-3 rounded-lg text-xs font-bold flex flex-col items-center justify-center transition-all duration-300 font-serif ${
                            selectedRole === 'PARENT' 
                            ? 'bg-[#7f1d1d] text-white shadow-md' 
                            : 'text-stone-400 hover:text-stone-600'
                        }`}
                    >
                        <Users size={16} className="mb-1" /> 家长
                    </button>
                    <button 
                        onClick={() => setSelectedRole('TEACHER')}
                        className={`flex-1 py-3 rounded-lg text-xs font-bold flex flex-col items-center justify-center transition-all duration-300 font-serif ${
                            selectedRole === 'TEACHER' 
                            ? 'bg-[#7f1d1d] text-white shadow-md' 
                            : 'text-stone-400 hover:text-stone-600'
                        }`}
                    >
                        <School size={16} className="mb-1" /> 老师
                    </button>
                </div>

                {/* Form */}
                <form autoComplete="off" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <div className="space-y-5">
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 border-r border-stone-200 pr-3 font-bold text-sm font-mono group-focus-within:text-[#7f1d1d] transition-colors">
                                +86
                            </div>
                            <input 
                                type="tel" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="请输入手机号码"
                                autoComplete="off"
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl py-4 pl-20 pr-4 text-stone-800 font-bold placeholder:font-normal placeholder:text-stone-400 focus:bg-white focus:border-amber-600/50 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                            />
                            <Phone size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 group-focus-within:text-[#7f1d1d] transition-colors" />
                        </div>

                        <div className="relative group">
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="请输入登录密码"
                                autoComplete="new-password"
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl py-4 pl-4 pr-10 text-stone-800 font-bold placeholder:font-normal placeholder:text-stone-400 focus:bg-white focus:border-amber-600/50 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all"
                            />
                            <Lock size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 group-focus-within:text-[#7f1d1d] transition-colors" />
                        </div>
                    </div>
                    
                    {/* Action Button */}
                    <button 
                        type="submit"
                        className="w-full font-bold py-4 rounded-2xl shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center text-white bg-gradient-to-r from-[#7f1d1d] to-[#991b1b] hover:shadow-red-900/30 mt-8"
                    >
                        立即登录
                        <ChevronRight size={18} className="ml-1 opacity-80" />
                    </button>
                </form>
                
                <div className="flex justify-between items-center mt-5 px-1">
                    <button 
                        type="button"
                        onClick={handleHelp}
                        className="text-xs text-stone-400 hover:text-stone-600 transition-colors flex items-center"
                    >
                        <HelpCircle size={12} className="mr-1" /> 遇到问题?
                    </button>
                    <button 
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-xs font-bold text-stone-500 hover:text-[#7f1d1d] transition-colors"
                    >
                        忘记密码
                    </button>
                </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                 <span className="text-xs text-stone-500">还没有账号？</span>
                 <button onClick={() => navigate('/register')} className="text-xs font-bold text-[#7f1d1d] ml-1 hover:underline transition-colors">
                     立即注册
                 </button>
            </div>
        </div>
        
        {/* Footer Info */}
        <div className="mt-10 text-center">
            <p className="text-[10px] text-white/40 font-medium font-serif tracking-widest">
                教育部“白名单”赛事认证平台
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
