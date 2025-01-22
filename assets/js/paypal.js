function openPayPalModal() {
    document.getElementById('paypalModal').style.display = 'block';
  }
  
  function closePayPalModal() {
    document.getElementById('paypalModal').style.display = 'none';
  }
  
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '3.00' // 3 EUR
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Transaction completed by ' + details.payer.name.given_name);
        closePayPalModal();
      });
    }
  }).render('#paypal-button-container');