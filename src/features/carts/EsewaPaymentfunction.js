export const payWithEsewa = (total) => {

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

  const params = {
    amount: total,
    tax_amount: 0,
    total_amount: total,
    transaction_uuid: Date.now(),
    product_code: "EPAYTEST",
    product_service_charge: 0,
    product_delivery_charge: 0,
    success_url: "http://localhost:5173/cart",
    // failure_url: "http://localhost:5173/cart",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "test"
  };

  Object.keys(params).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = params[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};