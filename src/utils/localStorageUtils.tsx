export const getEstadoFilmeTerminou = (id:any) => {
    const estadoFilmeArmazenado = localStorage.getItem(`estadoFilme_${id}`);
    if (estadoFilmeArmazenado) {
      return JSON.parse(estadoFilmeArmazenado);
    }
    return null;
};