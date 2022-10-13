import {
  GET_DOGS,
  GET_DETAILS,
  GET_TEMPERAMENT,
  DOG_POST,
  FILTER_DOG,
  FILTER_CREATED,
  DOG_WANTED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "../actions/index";

const initialState = {
  dogs: [],
  allDogsFilter: [],
  details: [],
  temperaments: [],
  dogsHome: [],
  filtradosDB: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        allDogsFilter: payload,
        dogsHome: payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };

    case DOG_POST:
      return {
        ...state,
      };

    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: payload,
      };

    case FILTER_DOG:
      const allDogs = state.dogs;
      const allDogsFil = state.allDogsFilter;
      const filtradosDB = state.filtradosDB;
      // const allDogsFil = state.dogs;
      if (payload === "All") {
        const filltroDogs = filtradosDB;
        return {
          ...state,
          allDogsFilter: filltroDogs,
        };
      } else {
        const filltroDogs = filtradosDB.filter((e) =>
          e.temperament.includes(payload)
        );
        return {
          ...state,
          allDogsFilter: filltroDogs,
        };
      }

    case FILTER_CREATED:
      const allDogsFilter = state.dogs;

      if (payload === "creados") {
        const filterDog1 = allDogsFilter.filter((dogs) => dogs.creadoEnDB);
        return {
          ...state,
          allDogsFilter: filterDog1,
          filtradosDB: filterDog1,
        };
      } else if (payload === "Api") {
        const filterDog = allDogsFilter.filter((dogs) => !dogs.creadoEnDB);
        return {
          ...state,
          allDogsFilter: filterDog,
          filtradosDB: filterDog,
        };
      } else
        return {
          ...state,
          allDogsFilter: allDogsFilter,
          filtradosDB: allDogsFilter,
        };

    case DOG_WANTED:
      return {
        ...state,
        dogsHome: payload,
      };

    case ORDER_BY_NAME:
      const orderDogsName =
        payload === "name_A-Z"
          ? state.allDogsFilter.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            })
          : state.allDogsFilter.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogsFilter: orderDogsName,
      };
    case ORDER_BY_WEIGHT:
      const orderDogsKg =
        payload === "peso_MAX-MIN"
          ? state.allDogsFilter.slice().sort(function (a, b) {
              if (parseInt(a.weight_min) < parseInt(b.weight_min)) {
                return -1;
              }
              if (parseInt(b.weight_min) < parseInt(a.weight_min)) {
                return 1;
              }
              return 0;
            })
          : state.allDogsFilter.slice().sort(function (a, b) {
              if (parseInt(a.weight_min) > parseInt(b.weight_min)) {
                return -1;
              }
              if (parseInt(a.weight_min) > parseInt(b.weight_min)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogsFilter: orderDogsKg,
      };

    default:
      return state;
  }
};

export default rootReducer;
