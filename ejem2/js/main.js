new Vue({
      el: '#app', // Elemento
      data: { // Parametros
        newEntry: {
          name: '',
          amount: 0
        },
        items: [{
            name: 'Servicios',
            amount: 200,
            paid: false
          },
          {
            name: 'Hosting de Anexsoft',
            amount: 90,
            paid: true
          },
        ]
      },
      methods: {
        remove: function(index) {
          this.items.splice(index, 1);
        },
        // Ecmascript 6 syntax
        add() {
          this.items.push({
            name: this.newEntry.name,
            amount: parseFloat(this.newEntry.amount),
            paid: false
          });

          this.newEntry.name = '';
          this.newEntry.amount = 0;
        },
        changeToPaid(item) {
          item.paid = !(item.paid);
        },
        totalAmount(t){
            var total = this.items.reduce(function(a, b) {
              switch(t) {
                case 0: return a + (!b.paid ? b.amount : 0);
                case 1: return a + (b.paid ? b.amount : 0);
                case 2: return a + b.amount;
              }
            }, 0);

            return total.toFixed(2);
        }
      }
    });