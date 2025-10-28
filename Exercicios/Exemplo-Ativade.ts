// essa classe esta fazendo muita coisa, isso nao é legal
class BookingService {
  processBooking(bookingDetails: any){
    // Validacao das datas
    if(bookingDetails.startDate >= bookingDetails.endDate){
      throw new Error("Data de inicio deve ser anterior a data de fim");
    }

    // Calculo do preco total
    const durationInDays = Math.ceil(
      (bookingDetails.endDate.getTime() - bookingDetails.startDate.getTime()) / (1000 * 60 * 60 * 24)
    )
    const totalPrice = bookingDetails.dailyRate * durationInDays;

    console.log(`Preco total calculado: ${totalPrice}`);

    // Envio de confirmacao por email 
    console.log(`Enviando confirmacao para o email: ${bookingDetails.email}`);
  }
}

// essa classe estaria correta, voce distribui funcoes
class BookingService2 {
  constructor(
    private validator: BookingValidator,
    private priceCalculator: BookingPriceCalculator,
    private emailService: EmailService
  ){}

  processBooking(bookingDetails: any): void {
    this.validator.validateDates(
      bookingDetails.startDate,
      bookingDetails.endDate
    );

    const totalPrice = this.priceCalculator.calculatePrice(
      bookingDetails.dailyRate,
      bookingDetails.startDate,
      bookingDetails.endDate
    );
    
    console.log(`Preco total calculado: R$${totalPrice}`);
    this.emailService.sendBookingConfirmation(bookingDetails.email, totalPrice);
  }
}

// outro exemplo checkout simplificado
class checkoutService{
  processCheckout(cart: any, userId: string){
    // validacao de estoque
    for(const item of cart.items){
      if(item.stock < item.quantity){
        throw new Error(`Produto ${item.name} sem estoque suficiente`);
      }
    }
    // Calculo de imposto e total
    let total = 0 ;
    for(const item of cart.items){
      total += item.price * item.quantity;
    }
    const tax = total * 0.1;
    total += tax;

    console.log(`Total com impostos: R$${total}`);

    // Processamento de pagamento
    console.log(`Processando pagamento para o usuario ${userId}`);
  }
}

