import React from "react";

const meaningMap: Record<number, string> = {
    1: "A energia do número 1 pode ajudar sua empresa a conquistar e a fortalecer a independência. Grande potencial para inovação, originalidade, crescimento, liderança, principio, ousadia e confiança. Bom para: setor imobiliário, financeiro, econômico, contábil, operadoras de planos de saúde, investimentos e financeiras.",
    2: "A energia do número 2 pode ajudar sua empresa facilitando a receptividade e a cooperação para a realização de trabalhos conjuntos. Grande potencial de perseverança (pode levar um certo tempo para atingir seus objetivos, mas chega lá). Tem como característica a luta por uma causa. Bom para: empresas de RH, ONGs, fundações governamentais ou que tenham base social.",
    3: "A energia do número 3 pode ajudar sua empresa aumentando sua capacidade de expressão, favorecendo a criatividade e o entusiasmo. Grande potencial para as comunicações.Bom para: editoras, clínicas e escolas de psicologia, agências de marketing, jornais, publicidade e propaganda, rádio e TV e empresas.com.",
    4: "A energia do número 4 pode ajudar sua empresa a conseguir mais estabilidade aumentando sua capacidade de planejamento, assim também como na adoção de atitudes práticas de organização. Grande potencial para realizar, estabilizar e proteger. Também atrai energias difíceis de se adequar. Bom para: empresas de seguros ou reformas em geral, mas na verdade, o 4 é um número muito delicado para empresas e de difícil adequação às pessoas também.",
    5: "A energia do número 5 pode ajudar sua empresa elevando a capacidade de mudanças e readaptações. Também estimula a criatividade em várias direções e gera grande movimento. Grande potencial para flexibilização, inspiração, inteligência e acúmulos. Bom para: comércio exterior, prestação de serviço, turismo, entretenimento, escolas de artes, cinema e teatro. Mas precisa de regras e disciplina para atingir o sucesso.",
    6: "A energia do número 6 pode ajudar sua empresa no quesito relacionamentos. Promovendo a harmonia e favorecendo o equilíbrio. Grande potencial de atração, harmonia, beleza, cuidados com o corpo, a mente e com a casa. Bom para: moda, beleza, clínicas estéticas, restaurantes, lanchonetes, hotéis, SPAs, lojas de decoração e design de interiores.",
    7: "A energia do número 7 pode ajudar sua empresa se seu negócio estiver ligado a buscas pessoais, espiritualidade ou serviços com necessidades intuitivas. Grande potencial para o trabalho de energias emocionais, introspecção e isolamento. Bom para: livrarias, lojas e escolas esotéricas e religiosas. Este é um número de difícil adequação para funcionários. Não é ideal para indústrias.",
    8: "A energia do número 8 pode ajudar sua empresa nas atividades de liderança, aumentando a capacidade de organizar o mundo material, de administrar e de organizar. Grande potencial para trabalhos que envolvam competição, desafio, superação e movimento financeiro. Bom para: autônomos, empreendedores, engenharia, bancos, leilões e corretoras de valores.",
    9: "A energia do número 9 pode auxiliar sua empresa aumentando a conexão com o mundo e ampliando a abertura para novas abordagens. Grande potencial para trabalhos ligados a encerramento, porém pode também propiciar constantes abalos, rupturas e acidentes. Bom para: alimentação em geral, mas é muito “arriscado” manter uma empresa neste número."
};

const Modal:React.FC<{ chosedNumber: number, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({chosedNumber, setIsOpen}) => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen 
    w-screen bg-gray-900 bg-opacity-90 absolute">
        <div className="flex flex-col items-center justify-center bg-gray-100 h-[400px] w-[500px]
         rounded absolute p-4 text-center gap-9">
      <div className="text-4xl font-bold text-blue-500 mb-4">
        Número {chosedNumber}
      </div>
      <div className="flex flex-col items-center justify-center">
        {meaningMap[chosedNumber]}
      </div>
      <button
          onClick={()=>{setIsOpen(false)}}
          className="bg-blue-500 text-white px-4 py-2 h-[50px] w-[100px] rounded hover:bg-blue-700"
        >
          voltar
        </button>
      </div>
    </div>
  );
};

export default Modal;
