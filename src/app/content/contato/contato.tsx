import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importação dos novos ícones
import LetterPullup from '../../components/animation/letterPullpup/letterPullpup';

export default function Contato() {
    return (
        <section id='contato' className="w-full py-20 md:py-44 min-h-[80vh] flex items-center">
            <div className="container py-4 sm:px-12 lg:px-24">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="space-y-2">
                        <div style={{ userSelect: 'none' }}>
                                <LetterPullup words='Meus Contatos' delay={0.08}/>
                        </div>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Fique à vontade para entrar em contato comigo através destes canais.
                        </p>
                    </div>
                    <div className="grid w-full max-w-md grid-cols-3 gap-6">
                        <Link
                            href="https://www.linkedin.com/in/kathellyn-caroline-a562101b9/"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors"
                            prefetch={false}
                        >
                            <FaLinkedin className="h-8 w-8 text-[#0077B5] transition-colors hover:text-purple-700" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                        <a
                            href="mailto:kathellyn.carolineas@gmail.com"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors"
                        >
                            <FaEnvelope className="h-8 w-8 text-[#EA4335] transition-colors hover:text-purple-700" />
                            <span className="text-sm font-medium">Email</span>
                        </a>
                        <Link
                            href="https://github.com/CarolineKathellyn"
                            className="flex flex-col items-center justify-center space-y-2 transition-colors"
                            prefetch={false}
                        >
                            <FaGithub className="h-8 w-8 text-black transition-colors hover:text-purple-700" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}