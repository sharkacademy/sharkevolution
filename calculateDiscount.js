// 
function getCoupons() {
    return coupons = {
      "MEGA": {
        "value": 0.20,
        "purchase": 500
      },
      "SUPER": {
        "value": 0.15,
        "purchase": 300
      },
      "BASICO": {
        "value": 0.10,
        "purchase": 100
      },
      "ULTRA": {
        "value": 0.10,
        "purchase": 100
      }
    };
  }
   
  function calculateDiscount(purchase, coupon, tags) {
    var coupons = getCoupons();
   
    let discount = 0;
   
    if(!coupons[coupon]) {
      return {
        status: false,
        message: "Falha, cupom inexistente"
      };
    }
    if(purchase >= coupons[coupon].purchase) {
      return {
        status: true,
        message: "Coupon aplicado com sucesso",
        final_value: purchase - (purchase * discount)
      };
    }
    return {
      status: false,
      message: "Você não atingiu o threshold de compra",
    };
   
  }
   
alert(calculateDiscount(600, "MEGA"));   // 480
alert(calculateDiscount(350, "SUPER"));  // 297.5
alert(calculateDiscount(120, "BASICO")); // 108
alert(calculateDiscount(80, "MEGA"));    // 80 (nenhum desconto)
alert(calculateDiscount(200, "INEXISTENTE")); // "coupon inválido!"