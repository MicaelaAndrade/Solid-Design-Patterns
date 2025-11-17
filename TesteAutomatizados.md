## TDD - Test Driven Development 

# Teste Automatizados
Teste automatizados sao procedimentos de verificacao do software executados por ferramentas ou scripts que avaliam se o comportamento da aplicacao esta de acordo com o esperado.

- Eficiencia e Economia de Tempo: Testes manuais podem ser demorados e propensos a erros humanos. Automatizar esses testes acelera o processo e libera os desenvolvedores para se concentrarem em tarefas mais complexas.

- Consistencia e Repetibilidade: Os testes automatizados garantem que os mesmo passos sejam seguidos a cada execucao, eliminando variacoes que podem ocorrer com testes manuais.

- Deteccao Precoce de Erros: Identificar problemas nas fases iniciais do desenvolvimento reduz siginificamente o custo e os esforco necessarios para corrigi-los posteriomente.

- Facilidade na Manutencao do Codigo: Ao refatorar novas funcionalidades, os testes automatizados ajudam a garantir que as mudancas nao quebrem funcionalidade existentes.

# Problemas que os testes Automatizados Resolvem 

- Regressoes: Com cada nova alteracao no codigo, existe o risco de introduzir bugs que afetam funcionalidades que antes funcionavam corretamente. Testes automatizados detectam essas regressoes rapidamente.

- Cobertura Inadequada de Testes: Sem teste automatizados, e dificl garantir que todas as partes do codigo foram testadas adequadamente.

- Dependencia de Conhecimento Humano: Equipes que dependem apenas de testes manuais podem enfrentar problemas quando membros chave saem ou se ausentam, pois o conhecimento pode nao estar documento ou padronizado.

# Principais Tipos de Testes Automatizados

- Teste de Unidade / "Unitarios"
Os testes unitarios focam em verificar o comportamento de pequenas unidades do codigo, como funcoes, metodos ou classes. ELes sao escritos para testar uma funcionalidade especifica de forma isolada, sem dependencias externas.

- Isolamento de Erros
Ao testar componentes individualmente, fica mais facil identificar extamente onde um erro esta ocorrendo.

- Documentacao Viva
Os teste unitarios servem como uma forma de documentacao que demostra como cada unidade deve se comportar.

- Facilidade na Refatoracao
Com teste unitarios abrangentes, desenvolvedores podem refatorar o codigo com confianca, sabendo que os teste iram alerta-los sobre possiveis quebras.

- Contratos de Interfaces
Garantem que as entradas e saidas das funcoes permanecem consistentes prevenindo impacto em partes no codigo que dependem delas.

- Teste de integracao
Os teste de integracao verificam a interacao entre diferentes modulos ou componentes do sistema. O objetivo e assegurar que, quando combinados, esses componentes funcionem harmoniosamente.

- Verificacao de Interface
Confirma que a comunicacao entre modulos esta funcionando conforme o esperado.

- Deteccao de Problemas de Compatibilidade
Identifica incompatibilidades entre diferentes partes do sistema ou com servicos externos.

- Validacao de Fluxos de Dados
Garante que os dados fluem corretamente atraves dos diferentes componentes

- Dependencias Externas: Auxilia a identificar na integracai com bancos de dados, sistemas de arquivos ou servicos de terceiros

- Erro de comunicacao
Captura problemas na troca de informacoes entre modulos, como chamadas de API malformadas ou contratos quebrados.

- Teste End-toEnd (E2E)
Os teste E2E simulam o comportamento real do usuario, testando o sistena completo desde a interface ate o bacjend e vice-versa. Eles verificam se todos os componentes do sistena funcionam juntos em um abiente que replica o de producao

- Experiencia do Usuario
Assegura que o software atende as expectativas do usuario final.

- Validacao de Fluxo Criticos
Confirma que processos essenciais, como cadastro, login ou compras, funcionam sem problemas

- Ambiente Realista
Testa o sistema em condicoes proximos ao uso real, incluindo possiveis interacoes complexas

- Erros de Integracao Completa
Identifica problemas que so surgem quando todos os componentes estao operando juntos.

-Ambiguidade nos Requisitos
Ajuda a revelar inconsistencias ou mal-entendidos nos requisitos do sistema

# Piramide de testes e sistemas legados

![Piramide](/images/image-7.png)

# Sobre o TDD

- Considerado uma metodologia Agil
- Criado por Kent Beck em 2002 atraves do livro " Test-Driven Development: by Example" 
- Motivacao:
      - Desafios diarios na criacao de um software com bugs dificis de detectar com
      - Complexidade crescente
      - Entendimento dos requisitos de negocio

 ![Processo de trabalho e dinamica](/images/image-8.png)  

 ![](/images/image-9.png)

# 3 Leis do TDD
- Nao e permitido escrever codigo de producao sem antes ter um teste falho:
      - Assegura que todo o codigo escrito esta sendo direcionado por uma necessidade explicita definida por um teste.
- Nao e permitido escrever mais de um teste unitario suficiente para falhar:
      - Mantem o foco em um unico problema de cada vez
- Nao e permitido escrever mais codigo de producao do que o necessario para fazer o teste atual passar.
      - Evita a tentacao de antecipar funcionalidade futuras e mantem o codigo o mais simples possivel.

# Padroes     
- Fake it ("Fingir")
      - incialmente, retornar resultados estaticos para fazer o teste passar, e depois evoluir o codigo para ser mais generico.

- Triangulation ("Triangulacao")
      - Introduzir novos testes com diferenes entradas para generalizar o codigo de producao de forma segura.

- Obvious Implementation("Implementacao Obvia")
      - Quando a solucao e evidente, implementar diretamente o codigo necessario para passar no teste, sem etapas intermediarias      

# Ganho real com TDD
- Refatoracao Continua 
- Pequenos Passos e Feedback Rapido
- Documentacao Viva
- Coragem para Mudar 

# Quando nao usar TDD
- Desenvolvimento exploratorio
- Prototipos e provar de conceito talvez o overhead nao se justifique
- Requistos ALTAMENTE volateis e poucos claros

