const xml2js = require("xml2js");

function orderFactory({ name = "Cliente", unitPrice = 0 }) {
  return {
    pedido: {
      cliente: {
        nome: name,
      },
      itens: {
        item: [
          {
            codigo: 1,
            descricao: "Produto Teste 1",
            un: "Un",
            qtde: 10,
            vlr_unit: unitPrice,
          },
        ],
      },
    },
  };
}

function convertObjectToXml(object) {
  const builder = new xml2js.Builder({
    xmldec: {
      version: "1.0",
      encoding: "UTF-8",
      standalone: null,
    },
  });

  return builder.buildObject(object);
}

function groupBy(array, key) {
  // Return the reduced array
  return array.reduce((result, currentItem) => {
    // If an array already present for key, push it to the array. Otherwise create an array and push the object.
    (result[currentItem[key]] = result[currentItem[key]] || []).push(currentItem);
    // return the current iteration `result` value, this will be the next iteration's `result` value and accumulate
    return result;
  }, {}); // Empty object is the initial value for result object
}

function formatDate(date) {
  return new Date(date).toISOString().substr(0, 10);
}

function sumPropInArray(array, key) {
  return array.reduce((a, b) => a + (b[key] || 0), 0);
}

module.exports = {
  orderFactory,
  convertObjectToXml,
  groupBy,
  formatDate,
  sumPropInArray,
};
