module.exports = {
  formateoDb: async function (dogDb) {
    const dbFormateo = dogDb.map((dog) => {
      return {
        id: dog.id,
        image: dog.image,
        name: dog.name,
        weight_min: dog.weight_min,
        weight_max: dog.weight_max,
        height_min: dog.height_min,
        height_max: dog.height_max,
        life_span_min: dog.life_span_min,
        life_span_max: dog.life_span_max,
        temperament: dog.temperaments,
        creadoEnDB: dog.creadoEnDB,
      };
    });

    // Formateo BD para tener datos limpios

    const validandoDogsDb = dbFormateo.map((dog) => {
      if (!dog.image) {
        dog.image =
          "https://img.freepik.com/fotos-premium/teckel-perro-salchicha-mira-adelante-aislado-sobre-fondo-blanco_104627-2781.jpg?w=2000";
      }
      if (Array.isArray(dog.temperament)) {
        dog.temperament = dog.temperament.map((tem) => tem.name);
        dog.temperament = dog.temperament.join(", ");

        // Pasamos los temperamentos de los dogs a string
      }
      return dog;
    });
    return validandoDogsDb;
  },

  formateoApi: async function (dogApi) {
    const apiFormateo = dogApi.map((dog) => {
      return {
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        weight_min: dog.weight.metric.slice(0, 2).trim(),
        weight_max: dog.weight.metric.slice(-2).trim(),
        height_min: dog.height.metric.slice(0, 2).trim(),
        height_max: dog.height.metric.slice(4).trim(),
        life_span_min: dog.life_span.slice(0, 2).trim(),
        life_span_max: dog.life_span.slice(4, -6).trim(),
        temperament: dog.temperament,
      };
    });

    // Formateo API para tener datos limpios

    const validandoDogsApi = await apiFormateo.map((dog) => {
      if (
        !dog.weight_min ||
        dog.weight_min === "Na" ||
        dog.weight_min === "NaN" ||
        dog.weight_min === "aN"
      ) {
        if (
          !dog.weight_max ||
          dog.weight_max === "Na" ||
          dog.weight_max === "NaN" ||
          dog.weight_max === "aN"
        ) {
          dog.weight_min = "8";
        } else {
          dog.weight_min = (dog.weight_max - 2).toString();
        }
      }

      if (
        !dog.weight_max ||
        dog.weight_max === "Na" ||
        dog.weight_max === "NaN" ||
        dog.weight_max === "aN"
      ) {
        if (
          !dog.weight_min ||
          dog.weight_min === "Na" ||
          dog.weight_min === "NaN" ||
          dog.weight_min === "aN"
        ) {
          dog.weight_max = "12";
        } else {
          dog.weight_max = (parseInt(dog.weight_min) + 7).toString();
        }
      }

      if (!dog.height_max) {
        if (!dog.height_min) {
          dog.height_max = "42";
        } else {
          dog.height_max = (parseInt(dog.height_min) + 3).toString();
        }
      }

      if (!dog.life_span_max) {
        if (!dog.life_span_min) {
          dog.life_span_max = "19";
        } else {
          dog.life_span_max = (parseInt(dog.life_span_min) + 3).toString();
        }
      }

      if (!dog.temperament) {
        dog.temperament = "Stubborn, Active, Happy, Dutiful, Confident";
      }

      return dog;
    });
    return validandoDogsApi;
  },
};
