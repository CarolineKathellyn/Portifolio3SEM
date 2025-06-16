import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black-800 to-black-900 text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-pink-600"></div>
            <div className="absolute top-2 right-10 w-20 h-20 bg-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-5 left-10 w-16 h-16 bg-pink-400/10 rounded-full blur-lg"></div>
            
            <div className="container mx-auto text-center relative z-10">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                        Kathellyn Caroline
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">Desenvolvedora Full Stack & Cientista de Dados</p>
                </div>
                
                <div className="border-t border-pink-500/20 pt-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Kathellyn Caroline. Todos os direitos reservados.
                    </p>
                    <p className="text-pink-300 text-xs mt-2 opacity-75">
                        Feito com ❤️ e muito café ☕
                    </p>
                </div>
            </div>
        </footer>
    )
}