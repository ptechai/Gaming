import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Trophy, Coins, Gift, Gamepad2 } from 'lucide-react';

interface Reward {
  type: 'trophy' | 'coins' | 'gift';
  x: number;
  y: number;
  collected: boolean;
}

const GAMES = [
  'Ludo and SnL',
  'Rummy',
  'Callbreak',
  'Solitaire',
  'Fantasy',
  'Poker',
  'Survivor',
  'Win Patti',
  'Draw4',
  'Bingo',
];

const MESSAGES = [
  '🎉 Incredible Win! +$1000',
  '🌟 You\'re Amazing! +$750',
  '🏆 New High Score! +$500',
  '💰 Jackpot! +$1500',
  '🎮 Gaming Master! +$2000'
];

export function Game() {
  const [score, setScore] = useState(0);
  const [currentGame, setCurrentGame] = useState(0);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('');
  const [isHappy, setIsHappy] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const winAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const newRewards: Reward[] = [];
    for (let i = 0; i < 5; i++) {
      newRewards.push({
        type: ['trophy', 'coins', 'gift'][Math.floor(Math.random() * 3)] as 'trophy' | 'coins' | 'gift',
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 300) + 100,
        collected: false
      });
    }
    setRewards(newRewards);
  }, [currentGame]);

  const playGame = () => {
    setIsPlaying(true);
    setMessage('');
    setIsHappy(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
    
    setTimeout(() => {
      const newMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(newMessage);
      setScore(prev => prev + Math.floor(Math.random() * 1000) + 500);
      setCurrentGame(prev => (prev + 1) % GAMES.length);
      setIsPlaying(false);
      setIsHappy(true);
      if (winAudioRef.current) {
        winAudioRef.current.play();
      }
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 overflow-hidden perspective-1000">
      {/* Room Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100">
          <div className="absolute top-10 left-10 w-48 h-72 bg-amber-200 rounded-lg shadow-lg transform -rotate-6 hover:scale-105 transition-transform">
            <div className="w-full h-full border-4 border-amber-300 rounded-lg p-2">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300" 
                   alt="Gaming Poster" 
                   className="w-full h-full object-cover rounded" />
            </div>
          </div>
          <div className="absolute top-20 right-20 w-40 h-60 bg-amber-200 rounded-lg shadow-lg transform rotate-3 hover:scale-105 transition-transform">
            <div className="w-full h-full border-4 border-amber-300 rounded-lg p-2">
              <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=300" 
                   alt="Gaming Poster" 
                   className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-amber-300 to-amber-200 transform -skew-y-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>

      {/* Living Room Setup */}
      <div className="absolute bottom-0 left-0 right-0 h-[80vh] flex items-end justify-center">
        <div className="absolute bottom-[40vh] left-1/2 transform -translate-x-1/2 w-[40vw] perspective-1000">
          <div className="w-full h-8 bg-gradient-to-b from-stone-700 to-stone-900 rounded-lg shadow-2xl" />
          <div className="w-[90%] h-[30vh] mx-auto bg-gray-900 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] -mt-[28vh] border-8 border-stone-800">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-sm opacity-90 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0.3)_100%)]" />
              <Gamepad2 size={40} className="text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Couch with Character */}
        <div className="relative w-[50vw] h-[45vh] mb-20">
          <div className="absolute bottom-0 w-full h-[30vh]">
            <div className="absolute bottom-0 w-full h-[25vh] bg-gradient-to-b from-stone-600 to-stone-800 rounded-3xl shadow-2xl">
              <div className="absolute top-4 left-4 right-4 bottom-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-stone-700 rounded-xl shadow-inner" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-[20vh] -right-4 -left-4 h-[10vh] bg-gradient-to-b from-stone-500 to-stone-700 rounded-t-3xl" />
            <div className="absolute bottom-0 -right-6 -left-6 h-[8vh] bg-gradient-to-b from-stone-700 to-stone-900 rounded-b-3xl" />
          </div>

          {/* Character with Enhanced Expressions */}
          <div className="absolute bottom-[22vh] left-1/2 transform -translate-x-1/2 scale-75">
            {/* Head with Expressions */}
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-[#ffdbac] rounded-full shadow-lg">
                {/* Hair */}
                <div className="absolute -top-2 -left-1 -right-1 h-14 bg-[#4a3419] rounded-t-full" />
                
                {/* Eyes */}
                <div className={`absolute top-9 left-6 w-3 h-2 bg-[#3d3d3d] rounded-full transition-all duration-300 ${isHappy ? 'h-1 transform translate-y-1' : ''}`} />
                <div className={`absolute top-9 right-6 w-3 h-2 bg-[#3d3d3d] rounded-full transition-all duration-300 ${isHappy ? 'h-1 transform translate-y-1' : ''}`} />
                
                {/* Eyebrows */}
                <div className={`absolute top-7 left-5 w-5 h-0.5 bg-[#4a3419] rounded-full transition-transform duration-300 ${isHappy ? 'transform -rotate-15' : ''}`} />
                <div className={`absolute top-7 right-5 w-5 h-0.5 bg-[#4a3419] rounded-full transition-transform duration-300 ${isHappy ? 'transform rotate-15' : ''}`} />
                
                {/* Nose */}
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-[#f4c6a1] rounded-full" />
                
                {/* Mouth */}
                <div className={`absolute top-[4.2rem] left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  isHappy 
                    ? 'w-10 h-4 bg-[#da7b7b] rounded-full border-2 border-[#c56c6c]' 
                    : 'w-8 h-2 bg-[#da7b7b] rounded-full'
                }`} />
              </div>
            </div>

            {/* Body with Better Hand Visibility */}
            <div className="relative -mt-2">
              <div className="w-36 h-48 bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-3xl relative">
                {/* Arms with Enhanced Gaming Animation */}
                <div className={`absolute -left-10 top-6 w-14 h-28 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full transform origin-top ${isPlaying ? 'animate-[wiggle_0.3s_ease-in-out_infinite]' : 'rotate-12'}`}>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#ffdbac] rounded-full shadow-inner" />
                </div>
                <div className={`absolute -right-10 top-6 w-14 h-28 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full transform origin-top ${isPlaying ? 'animate-[wiggle_0.3s_ease-in-out_infinite]' : '-rotate-12'}`}>
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#ffdbac] rounded-full shadow-inner" />
                </div>

                {/* Enhanced Phone with Game Display */}
                <div className={`absolute top-1/3 right-[-2.5rem] transform ${isPlaying ? 'animate-[tilt_0.3s_ease-in-out_infinite]' : ''}`}>
                  <div className="relative">
                    <div className="w-20 h-36 bg-black rounded-2xl shadow-2xl border-2 border-gray-800 relative overflow-hidden">
                      <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl overflow-hidden">
                        {isPlaying ? (
                          <div className="absolute inset-0 flex items-center justify-center flex-col p-2">
                            <div className="w-4 h-4 bg-white rounded-full animate-ping" />
                            <div className="text-[8px] text-white text-center mt-2 font-bold">
                              {GAMES[currentGame]}
                            </div>
                          </div>
                        ) : message ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[8px] text-white text-center font-bold animate-[celebrate_0.5s_ease-in-out_infinite] p-1">
                              {message}
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[8px] text-white text-center font-bold">
                              Ready to Play!
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <Smartphone size={28} className="text-gray-800 absolute -right-3 -bottom-3 drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Interface */}
      <div className="relative z-10 flex flex-col items-center pt-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4 drop-shadow-lg"> 🌟 Manifest Your RMG Goals 🏆</h1>
        <h5 className="text-4xl font-bold text-blue-800 mb-4 drop-shadow-lg">Keep Playing 🎮 Keep winning Real Cash 💰 </h5>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
          <p className="text-2xl font-semibold text-gray-800">Score: {score}</p>
          <p className="text-xl text-gray-600">Current Game: {GAMES[currentGame]}</p>
        </div>

        {/* Enhanced Rewards */}
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ${
              reward.collected ? 'opacity-0' : 'opacity-100'
            } animate-bounce`}
            style={{ left: `${reward.x}px`, top: `${reward.y}px` }}
          >
            {reward.type === 'trophy' && (
              <div className="relative">
                <Trophy size={32} className="text-yellow-500 drop-shadow-lg" />
                <div className="absolute inset-0 animate-ping opacity-50">
                  <Trophy size={32} className="text-yellow-500" />
                </div>
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20" />
              </div>
            )}
            {reward.type === 'coins' && (
              <div className="relative">
                <Coins size={32} className="text-yellow-400 drop-shadow-lg" />
                <div className="absolute inset-0 animate-ping opacity-50">
                  <Coins size={32} className="text-yellow-400" />
                </div>
                <div className="absolute inset-0 bg-yellow-300 blur-xl opacity-20" />
              </div>
            )}
            {reward.type === 'gift' && (
              <div className="relative">
                <Gift size={32} className="text-red-500 drop-shadow-lg" />
                <div className="absolute inset-0 animate-ping opacity-50">
                  <Gift size={32} className="text-red-500" />
                </div>
                <div className="absolute inset-0 bg-red-400 blur-xl opacity-20" />
              </div>
            )}
          </div>
        ))}
      </div>
      <button
          onClick={playGame}
          disabled={isPlaying}
          className={`mt-8 px-8 py-4 text-xl font-bold text-white rounded-full transition-all transform hover:scale-105 ${
            isPlaying
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl'
          }`}
        >
          {isPlaying ? 'Playing...' : 'Play Next Game'}
        </button>

      {/* Audio Elements */}
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3" />
      <audio ref={winAudioRef} src="https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3" />
    </div>
  );
}