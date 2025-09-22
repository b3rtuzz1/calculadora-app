export default {
  data() {
    return {
      valorCorrente: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,
    };
  },
  methods: {
    /**
     * Método responsável por limpar o display da 'Calculadora':
     */
    limpar() {
      this.valorCorrente = '';
    },

    /**
     * Método responsável por colocar o sinal '-' ou '+' para a realização
     * de cálculos operacionais.
     * chartAt --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
     * slice --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`;
    },

    // Método responsávelpor realizar operações de 'porcentagem'
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },

    // Método responsável por juntar os números no display da Calculadora:
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = '';
        this.operadorClicado = false;
      }

      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },

    // Método responsável por adicionar 'ponto' no display da Calculadora:
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.');
      }
    },

    setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },

    // Método responsável por realizar a operação da 'divisão'
    dividir() {
      this.operador = (num1, num2) => num1 / num2;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'multiplicar'
    multiplicar() {
      this.operador = (num1, num2) => num1 * num2;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'diminuir'
    diminuir() {
      this.operador = (num1, num2) => num1 - num2;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'somar'
    somar() {
      this.operador = (num1, num2) => num1 + num2;
      this.setarValor();
    },

    logBase10() {
      this.valorCorrente = `${Math.log10(parseFloat(this.valorCorrente))}`;
    },

    logBaseX() {
      if (this.numeroAnterior !== null) {
        this.valorCorrente = `${Math.log(parseFloat(this.numeroAnterior)) / Math.log(parseFloat(this.valorCorrente))}`;
        this.numeroAnterior = null;
      }
    },

    aoQuadrado() {
      this.valorCorrente = `${Math.pow(parseFloat(this.valorCorrente), 2)}`;
    },

    potenciaXY() {
      this.operador = (num1, num2) => Math.pow(num1, num2);
      this.setarValor();
    },

    raizQuadrada() {
      this.valorCorrente = `${Math.sqrt(parseFloat(this.valorCorrente))}`;
    },

    raizXporY() {
      this.operador = (num1, num2) => Math.pow(num1, 1 / num2);
      this.setarValor();
    },

    // Método responsável por apresentar o resultado das operações da Calculadora:
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente),
      )}`;
      this.numeroAnterior = null;
    },
  },
};