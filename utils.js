function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR",
      {
        style: "currency", currency: "BRL",
        minimumFractionDigits: 2
      }).format(valor / 100);
  }

const _formatarMoeda = formatarMoeda;
export { _formatarMoeda as formatarMoeda };