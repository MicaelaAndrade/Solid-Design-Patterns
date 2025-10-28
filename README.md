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



