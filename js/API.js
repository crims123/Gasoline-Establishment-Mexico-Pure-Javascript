class Api {
  async getDataInformation() {
    const total = 500;
    const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;
    const data = await fetch(url);
    const result = await data.json();
    return result.results;
  }
}
