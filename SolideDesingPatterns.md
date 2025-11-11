# Sobre SOLID e Desing Patterns
SOLID na prática - Principios e aplicacoes em desing de software 

S Single Responsibility Principle Principio da Resonsabilidade Unica

O Open-Closed Principle Principio Aberto-Fechado

l Liskov Substitution Principle Principio da Substituicao de Liskov

I Interface Segregation Principle Principio da Segregacao de Interfaces

D Dependency Inversion Principle Principio da Inversao de Dependencia

# Principios SRP (Single Responsibility Principle)
- Uma Classe deve ter apenas uma responsabilidade bem definida, com um unico motivo para mudanca.
- Cada classe deve se especializar em fazer uma tarefa especifica com excelencia, criando codigo modular e coeso
- Multiplas responsabilidades em uma classe aumentam complexidade e riscos de manutencao

# Problemas de compreensao do SRP
1 - Interpretacao Literal : Erro comum de pensar que "uma coisa" significa uma unica linha de codigo ou funcao muito especifica.
2 - Escopo Restrito : Mal-entendido de que SRP significa limitar drasticamente a funcionalidade de uma classe.
3 - Abstracao Inadequada : Dificuldade em identificar o nivel correto de responsabilidade e coesão.

# Definicoes 
Atores um ator pode ser uma pessoa, um grupo ou um sistema que requisita mudancas no software. Diferentes atores como usuarios finais, gestores de produto, equipes de negocios e desenvolvedores podem ter necessidades distintas.

# Razoes para mudancas
Razoes para mudancas uma razao para mudar representa os diferentes stakeholders ou atores que podem exigir modificacoes que acabam refletindo na mudanca em uma mesma classe.

# Impacto da multiplicidade de Atores 
Mudancas para entender um ator podem impactar outras funcionalidades, gerando fragilidade no codigo.

# SRP: Atores e Stakeholders
class  Employee {
  definirSalario() {...}
  fazerPagamento() {...}
  gerarRelatorioAuditorial() {...}
}

* Atores como departamento ou stakeholders
- Financeiro: realizar pagamento
- RH: Definicao de salario
- Compliance: Geracao de relatorio de auditoria

# Atores como componentes 
class Employee {
  salvarNoDB() {...}
  enviarEmailDeConfirmacao() {...}
  registrarLogAlteracoes() {...}
}

* Atores envolvidos na classe:
- Persistencia de dados
- Notificacao por email

# OCP 
um componente ou uma classe sempre tem estar aberta para extencao mais fechado para modificacao.

# LSP Liskov Substitution Principle 

-> Definicao: Principio que estabelece que objetos de uma classe base devem ser substituiveis por objetos de suas classes derivadas sem alterar a o comportamento do programa.

-> Conceito Fundamental: Garante que subclasses mantenham o comportamento esperado da classe pai, preservando invariantes e respeitando os contratos de metodos.

-> Importancia: Promove desing de software mais robusto, facilitando extensibilidade e mantendo a consistencia comportamental entre classes relacionadas.

```Java
class CreditCard{
  processPayment(amount: number){
    console.log(`Processando pagamento de R$ ${amount} com cartao de credito`);
    return true;
  }
class PayPal extends CreditCard {
  processPayment(amount: number){
    console.log(`Processando pagamento de R$ ${amount} via PayPal`);
    return true;
  }
} 
}
```
Na implementacao correta, criamos uma classe CreditCard que define um contrato para processamento de pagamentos. Cada classe de metodo de pagamento herda e implementa o metodo processPayment() de forma especifica, respeitando o Principio da Substituicao de Liskov(LSP). Isso garante que diferentes metodos de pagamento possam ser intercambiados sem alterar o comportamento do sistema de processamento.

# Interface Segregation Principle (ISP)
O ISP afirma que os clientes nao devem ser forcados a depender de metodos que nao utilizam. As interfaces devem ser pequenas e focadas em um conjunto especifico de metodos.

# Violacao do interface Sefregation Principle (ISP)

``` Java
interface PaymentService {
  processCreditCardPayament(amount: number);
  validateCreditCard();
  processLoan(amount: number);
}

class CreditCardService implements: PaymentService{
  processCreditcardPayment(amount: number) {
    // implementacao de pagamento com cartao de credito
  }
  validateCrediCard(){
    // Validacao de cartao de credito
  }
  processLoan(amount: number){
    // Nao deveria existir
    throw new Error{"Metodo nao suportado"}
  }
  class LoandService implements PaymentService{
    processCrediCardPayment(amount: number){
      // Nao deveria existir
      throw new Error("Metodo nao suportado")
    }
    processLoan(amount: number){
      // Processamento de pagamento de emprestimo
    }
  }
}

```
![Segregacao da Segregacao de Componentes](/images/image.png)

# Dependency Inversion Principle (DIP)
O DIP determina que as classes de alto nivel nao devem depender de classes de baico nivel. Em vez disso, ambas devem depender de abstracoes. Isso permite que o codigo seja mais flexivel e facil de testar.

# Alto Nivel vs Baixo Nivel
Antes de entender a inversao de dependencia, e importante compreender a diferenca entre modulos de alto e baixo nivel.

- Modulo de Alto Nivel: Contem regras de negocio mais abstratas, que orquestram funcionalidades do sistemas.
- Modulo de Baixo Nivel: Contem implementacoes especificas, como acesso a banco de dados, APIs externas e manipulacoes de arquivos.

![Exemplo de Codigo? Violando o DIP](/images/image-1.png)

# DIP vs Dependency Injection
- Dependency Inversion Principle (DIP): 
  - Foca an estrutura de dependencias
  - Define como classes devem depender de abstracoes
  - objetivos: reduzir acoplamento entre componentes

- Dependency Injection (DI):
  - Foca na implementacao de dependencias
  - Fornece mecanismo para injetar dependencias
  - Objetivos: facilitar a modularidade e testabilidade

# Conclusao
  DIP e um principio arquitetural, enquanto DI e um padrao de implementacao. DI e uma base tecnica concreta que ajuda a realizar os objetivos do DIP, criando software mais flexivel e desacoplado.

-----------------------------------------------------------------------

# Gang of Four e Aplicacoes Reais
o que sao desing patterns ?
 Design sao estrategias revoluncionarias de desenvolvimento que transformam desafios complexos em solucoes elegantes, permitindo que desenvolvedores criem sistemas mais robustos, escalaveis e intuitivos.

# Caracteristicas
- Resolucao de Problemas Comuns: Padroes pre-definidos para enfrentar desafios recorrentes no desenvolvimento de software

- Reutilizacao de Codigos: Facilita a criacao de componentes que podem ser aplicados em diferentes contextos e projetos.

- Comunicacao Tecnica Padronizada: Simplifica o entendimento entre desenvolvedores atraves de uma linguagem tecnica compartilhada

# Niveis de Design de  Software 
- Nivel Estrategico: Arquitetura de Software e Principios SOLID

- Tatico: Implementacoes Concretas e solucoes especificas para construcao de software

Os niveis estrategicos e taticos sao complementares: as arquiteturas e principios SOLID definem uma visao de mais alto nivel, enquanto os Design Patterns fornecem os detalhes de mais baixo nivel para implementar essa visao.

Design patters sao agrupadores em tres categorias fundamentas que cobrem diferentes aspectos do desenvolvimento de software: criacao, estrutura e comportamento de objetos.

# Categorizacao dos Design Patterns
- Padroes Criacionais: Estrategias para a criacao de objetos de forma flexivel.
- Padroes Estruturais: Organizacao de classes e objetos para formar sistemas mais modulares.
- Padroes Comportamentais: Definicao da interacao entre objetos e distribuicao de responsabilidades.

# Padroes Populares
- Singleton: Garante que apenas uma isntancia de uma classe seja criada, util para gerenciar recuros compartilhados.

- Builder: Separa a contrucao de um objeto complexo de sua representacao,permitindo criar diferentes representacoes.

- Observer: Permite que objetos dependentes sejam notificados de mudancas em um objeto especifico.

- Factory Method: Define um metodo para criar objetos, permitindo a criacao de diferentes tipos de objetos a partir de uma unica interface.

- Adapter: Adapta a interface de uma classe para outra,  facilitando a integracao de classes com interfaces incompativeis.

- Strategy: Define uma familia de algoritmos, encapsulando cada um deles e torando-os intercambiaveis

# Devemos usar Desing Patterns para tudo ?
- Identificar o Problema: Antes de aplicar qualquer design pattern, analise cuidadosamente o problema de design de software. Busque padroes recorrentes de complexidade, acoplamento inadequado ou dificuldade de extensao no codigo.

- Criterios de Selecao: Considere tres aspectos fundamentais:
  - A frequencia do problema no sistema
  - A complexidade da solucao atual
  - O potencial de reuso e manutencao.

- Evitar "Paternite": Cuidado para nao transformar design patterns em uma solucao universal. Aplique apenas quando realmente necessario, evitando complexidade desnecessario e sobrecarga de abstracao.

![Padroes de Design: Categorias Completas](/images/image-3.png)

# Singleton (Problema a ser resolvido)
Sem controle adequado, multiplas instancias de um objeto podem causar problemas como:

- Desperdicio de recurso
- Inconsistencias de estado
- Concorrencia descontrolada
- Complexidade desnecessaria

# Solucao
O Singleton garante que uma classe tenha apenas uma unica intancia e fornece um ponto global de acesso a essa instancia.

- Tornar o construtor da classe privado. impedindo que novas instancias sejam criada externamente.
- Criar um metodo publico estatico que retorna a unica instancia da classe.
- Garantir que essa instancia seja inicializada apenas uma vez durante toda a execucao do programa.

# Exemplo de Uso
- Gerenciamento de conexoes com banco de dados
- Servicos de logging
- Cache compartilhando
- Configuracoes globais de aplicacoes 
- Manipulando de filas de mensagens

![Sem Singleton](/images/image-4.png)

![Implementacao do Singleton](/images/image-5.png)

# Desenvolvendo sistema de cache

## 📁 Exemplo Prático
Para ver a implementação completa do Singleton aplicado a um sistema de cache, consulte:
- **Caminho:** `Exercicios/singleton/`
- Arquivos disponíveis:
  - `index.ts` - Implementação principal
  - `cache/RegularCache.ts` - Cache sem Singleton
  - `cache/SingleCache.ts` - Cache com Singleton

## Factory Method 
Problema a ser resolvido
A criacao direta de objetos podem trazer varios desafios:

- Acoplamento forte entre classes
- Dificuldade para tocar implementacoes
- Codigo inflexivel e dificil de manter
- Violacao do principio de responsabilidade unica

# Solucao
O factory Method define uma interface para criar objetos, mas permite que as subclasses decidam quais classes instanciar.

- Criar uma interface ou classe abstrata com metodo factory
- Permitir que subclasses implementem a logica especifica de criacao
- Desacoplar o codigo que usa o objeto de codigo que cria

# Exemplos de Uso
- Metodos de Pagamentos: Uma classe PaymentProcessor com factory method createPayment(), onde CreditCardProcessor criar pagamentos com cartao e PixProcessor criar pagamentos via Pix
- Conexoes de Banco de Dados: Uma classe DataBaseFactory com factory method createConnection(), onde MySQLFactory criar conexoes MySQL e PostgressFactory cria conexoes PostgreSQL
- Geracao de Documentos: Uma classe DocumentFactory com factory method createDocument(), onde as subclasses geram diferentes formatos como PDF ou DOCX de forma simplificada.


## Builder
Problea a ser resolvido

A cricao de objetos complexos pode apresentar diversos desafios:

- Cronstrutores com muitos paramentros
- Ordem obrigatoria de inicializacao
- Configuracoes parciais impossiveis
- Codigo pouco legivel e propenso a erros

# Solucao
O builder permite construir objetos complexos passo a passo, separando o processo de construcao da representacao final.

- Criar uma classe Builder separada que encapsula a logica de construcao.
- Permitir a configuracao de diferentes caracteristicas de forma independente
- Possibilidade a criacao do objetos final apenas quando tiver complemente configurado

# Exemplos de uso
- Montagem de objetos de configuracao complexa
- Criacao de objetos imutaveis com muitos campos opcionais
- Montagem de queries SQL complexas

![Desenho Builder(Implementacao)](/images/image-6.png)

## Abstract Factory
Problema a ser resolvido

A criacao de familiais de objetos relacionados ou dependentes pode apresentar varios desafios:

- Necessidade de garantir compatibilidade entre objetos relacionados.
- Dificuldade em manter consistencia entre familiais de produtos
- Forte acoplamento entre o codigo cliente e as classes concretas
- Complexidade ao trocar toda uma familia de objetos

# Solucao
O abstract factory fornce uma interface para criar familiais de objetos relacionados sem especificar suas classes concretas.

- Criar uma interface abstrata para fabricar produtos relacionados
- Implementar fabricas concetras para cada familia de produtos
- Garantir que os produtos criados sejam entre si

## Em gravacao as aulas