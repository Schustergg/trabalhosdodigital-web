<template>
<v-form action="#" method="POST" @submit.prevent data-pagarmecheckout-form>
    Nome (como escrito no cartão): <input type="text" name="holder-name" data-pagarmecheckout-element="holder_name">
    Número do cartão:<input type="text" name="card-number" data-pagarmecheckout-element="number">
    <span  data-pagarmecheckout-element="brand"></span>
    Mês de expiração:<input type="text" name="card-exp-month" data-pagarmecheckout-element="exp_month">
    Ano de expiração:<input type="text" name="card-exp-year" data-pagarmecheckout-element="exp_year">
    Código de segurança: <input type="text" name="cvv" data-pagarmecheckout-element="cvv">
    <v-btn type="submit" block class="mt-2">Enviar</v-btn>
</v-form>

</template>

<script>
export default {
    data() {
        return {
          cardHash: ""
        }
    },
    methods: {
        confirmarCompra(cardHash) {

            this.cardHash = cardHash;


        },
        success: function success(data) {
            this.confirmarCompra(data['pagarmetoken-0'])
            
            return false;
        },

        fail: function fail(error) {
            console.error(error);
        }
    },
    mounted() {
        let pagaermeScript = document.createElement('script')
        pagaermeScript.setAttribute('src', 'https://checkout.pagar.me/v1/tokenizecard.js')
        pagaermeScript.setAttribute('data-pagarmecheckout-app-id', 'pk_GLk6nlQTafyW5ENV')

        const promise = new Promise((resolve, reject) => {
            pagaermeScript.onload = resolve;
            pagaermeScript.onerror = reject;
        });

        document.head.appendChild(pagaermeScript);

        promise.then(() => {
            PagarmeCheckout.init(this.success, this.fail)
        }).catch(() => {
            console.error('Failed to load Pagar.me SDK');
        });
    },
    
}

</script>
