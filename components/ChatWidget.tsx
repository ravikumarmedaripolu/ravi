import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! I'm Ravi's AI assistant. Ask me anything about his skills, education, or experience."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Prepare context from RESUME object
        const context = JSON.stringify(RESUME);
        const systemInstruction = `
          You are a professional and friendly AI assistant for Ravi Kumar Medaripolu's portfolio website.
          Your goal is to answer visitor questions about Ravi's background, skills, education, and experience based STRICTLY on the provided context.
          
          Guidelines:
          - Use the following Context JSON to answer questions: ${context}
          - If a user asks about something not in the context, politely say you don't have that information and suggest contacting Ravi directly via the contact section.
          - Keep answers concise, professional, and easy to read.
          - Do not make up facts.
          - Be encouraging about his potential as a Business & Finance professional.
        `;

        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });
        
        setChatSession(chat);
      } catch (error) {
        console.error("Failed to initialize chat", error);
      }
    };

    initChat();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim() || !chatSession) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMessage.text });
      const responseText = result.text;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "I'm sorry, I couldn't generate a response. Please try again."
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting right now. Please try again later."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div class="mb-4 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 animate-fade-in-up h-[500px] max-h-[80vh]">
          {/* Header */}
          <div class="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                AI
              </div>
              <div>
                <h3 class="font-bold text-sm">Ravi's Assistant</h3>
                <p class="text-xs text-slate-300 flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-green-400"></span> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              class="text-slate-300 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                class={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  class={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div class="flex justify-start">
                <div class="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                  <Loader2 class="w-4 h-4 animate-spin text-blue-600" />
                  <span class="text-xs text-slate-500 font-medium">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} class="p-3 bg-white border-t border-slate-100 shrink-0">
            <div class="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about education, skills..."
                class="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm text-slate-800 placeholder:text-slate-400"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                class="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-blue-500/20"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        class={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? (
          <X class="w-6 h-6 text-white" />
        ) : (
          <MessageSquare class="w-6 h-6 text-white" />
        )}
        
        {/* Tooltip hint when closed */}
        {!isOpen && (
          <span class="absolute right-full mr-4 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with AI Assistant
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
