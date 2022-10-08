import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogPost } from "../../Redux/actions/index";
import { getTemperament } from "../../Redux/actions/index";
import styled from "styled-components";

function validar(input) {
  //name
  let errors = {};
  if (!input.name) {
    errors.name = "debes ponerle un nombre";
  } else if (!/[A-Z]+$/i.test(input.name)) {
    errors.name = "solo puede contener letras";
  } else if (parseInt(input.name.length) >= 25) {
    errors.name = "debe contener menos de 25 caracteres";
  }
  // /^[A-Z]+$/i

  //height
  if (!input.height_max) {
    errors.height_max = "altura max requerida";
  } else if (parseInt(input.height_max) > 85) {
    errors.height_max = "debe ser menor a 85 CM";
  } else if (!/^[0-9]+$/.test(input.height_max)) {
    errors.height_max = "solo puede contener numeros";
  } else if (parseInt(input.height_max) < 10) {
    errors.height_max = "El perro debe tener más de 10 cm";
  }

  //agregar a los otros inputs

  if (!input.height_min) {
    errors.height_min = "altura min requerida";
  } else if (parseInt(input.height_min) >= parseInt(input.height_max)) {
    errors.height_min = "debe ser menor al max";
  } else if (!/^[0-9]+$/.test(input.height_min)) {
    errors.height_min = "solo puede contener numeros";
  } else if (parseInt(input.height_min) < 10) {
    errors.height_min = "El perro debe tener más de 10 cm";
  }

  //weight
  if (!input.weight_max) {
    errors.weight_max = "peso max requerido";
  } else if (parseInt(input.weight_max) > 90) {
    errors.weight_max = "debe ser menor a 90 KG";
  } else if (!/^[0-9]+$/.test(input.weight_max)) {
    errors.weight_max = "solo puede contener numeros";
  } else if (parseInt(input.weight_max) <= 1) {
    errors.weight_max = "debe ser mayor a 1 KG";
  }

  if (!input.weight_min) {
    errors.weight_min = "peso min requerido";
  } else if (parseInt(input.weight_min) >= parseInt(input.weight_max)) {
    errors.weight_min = "debe ser menor al max";
  } else if (!/^[0-9]+$/.test(input.weight_min)) {
    errors.weight_min = "solo puede contener numeros";
  } else if (parseInt(input.weight_min) <= 1) {
    errors.weight_min = "debe ser mayor a 1 KG";
  }

  //life_span
  if (parseInt(input.life_span_max) > 20) {
    errors.life_span_max = "Debe ser menor a 20 Años";
  } else if (!/^[0-9]+$/.test(input.life_span_max)) {
    errors.life_span_max = "solo puede contener numeros";
  } else if (parseInt(input.life_span_max) < 6) {
    errors.life_span_max = "Debe ser mayor a 5 Años";
  }

  if (parseInt(input.life_span_min) < 6) {
    errors.life_span_min = "Debe ser mayor a 5 Años";
  } else if (!/^[0-9]+$/.test(input.life_span_min)) {
    errors.life_span_min = "solo puede contener numeros";
  }

  return errors;
}

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const temperamentos = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span_min: "",
    life_span_max: "",
    image: "",
    temperament: [],
  });

  const [selectNameState, setSelectNameState] = useState([]);

  // console.log("input form :",input.temperament)

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.temperament.includes(e.target.value)) return;

    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });

    const selectName = e.target.value;
    if (selectName === "default") return;
    setInput({ ...input, temperament: [...input.temperament, selectName] });
    setSelectNameState([
      ...selectNameState,
      temperamentos.find((e) => e.id === parseInt(selectName)),
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.height_min &&
      !errors.height_max &&
      !errors.weight_min &&
      !errors.weight_max
    ) {
      try {
        dispatch(dogPost(input));
        setInput({
          name: "",
          image: "",
          height_min: "",
          height_max: "",
          weight_min: "",
          weight_max: "",
          life_span_min: "",
          life_span_max: "",
          temperament: [],
        });
        setSelectNameState([]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((t) => t !== e.target.value),
    });
    setSelectNameState(
      selectNameState.filter((t) => t.id !== parseInt(e.target.value))
    );
  }

  return (
    <FormContainer>
      <h2 className="form_title">CREA TU PERRO</h2>
      <p className="datos_obligatorios">Datos (*) son obligatorios</p>

      <form className="form" action="" onSubmit={handleSubmit}>
        {/* ---- INPUT NAME ---- */}
        <div>
          <div>
            <label>Nombre (*)</label>
            <div className={errors.name ? "div_input error" : "div_input"}>
              <input
                className="form_input"
                placeholder="Raza o nombre del perro"
                onChange={handleChange}
                name="name"
                value={input.name}
              />
            </div>
            {errors.name && (
              <span className="dato_incorrecto">{errors.name}</span>
            )}
          </div>
        </div>

        {/* ---- INPUT IMAGE ---- */}
        <div>
          <label>Imagen</label>
          <div className="div_input">
            <input
              className="form_input"
              placeholder="Url de la imagen del amigo perruno "
              onChange={handleChange}
              name="image"
              value={input.image}
            />
          </div>
        </div>

        {/* ---- INPUT HEIGHT ---- */}
        <div className="div_inputs_dobles">
          <div className="max">
            <label>Altura (*)</label>
            <div
              className={errors.height_max ? "div_input error" : "div_input"}
            >
              <input
                className="form_input min"
                placeholder="Max"
                onChange={handleChange}
                name="height_max"
                value={input.height_max}
              />
              <span className="unidad">CM</span>
            </div>
            {errors.height_max && (
              <span className="dato_incorrecto">{errors.height_max}</span>
            )}
          </div>

          <div className="min">
            <label className="label_min">Peso</label>
            <div
              className={errors.height_min ? "div_input error" : "div_input"}
            >
              <input
                className="form_input max"
                placeholder="Min"
                onChange={handleChange}
                name="height_min"
                value={input.height_min}
              />
              <span className="unidad">CM</span>
            </div>
            {errors.height_min && (
              <span className="dato_incorrecto">{errors.height_min}</span>
            )}
          </div>
        </div>

        {/* ---- INPUT WEIGHT ---- */}
        <div className="div_inputs_dobles">
          <div className="max">
            <label>Peso (*)</label>
            <div
              className={errors.weight_max ? "div_input error" : "div_input"}
            >
              <input
                className="form_input min"
                placeholder="Max"
                onChange={handleChange}
                name="weight_max"
                value={input.weight_max}
              />
              <span className="unidad">KG</span>
            </div>
            {errors.weight_max && (
              <span className="dato_incorrecto">{errors.weight_max}</span>
            )}
          </div>

          <div className="min">
            <label className="label_min">Peso</label>
            <div
              className={errors.weight_min ? "div_input error" : "div_input"}
            >
              <input
                className="form_input max"
                placeholder="Min"
                onChange={handleChange}
                name="weight_min"
                value={input.weight_min}
              />
              <span className="unidad">KG</span>
            </div>
            {errors.weight_min && (
              <span className="dato_incorrecto">{errors.weight_min}</span>
            )}
          </div>
        </div>

        {/* ---- INPUT AGE ---- */}
        <div className="div_inputs_dobles">
          <div className="max">
            <label>Años de vida</label>
            <div
              className={errors.life_span_max ? "div_input error" : "div_input"}
            >
              <input
                className="form_input min_years"
                placeholder="Max"
                onChange={handleChange}
                name="life_span_max"
                value={input.life_span_max}
              />
            </div>
            {errors.life_span_max && (
              <span className="dato_incorrecto">{errors.life_span_max}</span>
            )}
          </div>

          <div className="min">
            <label className="label_min">Peso</label>
            <div
              className={errors.life_span_min ? "div_input error" : "div_input"}
            >
              <input
                className="form_input max_years "
                placeholder="Min"
                onChange={handleChange}
                name="life_span_min"
                value={input.life_span_min}
              />
            </div>
            {errors.life_span_min && (
              <span className="dato_incorrecto">{errors.life_span_min}</span>
            )}
          </div>
        </div>

        {/* ---- INPUT TEMPERAMENT ---- */}
        <div>
          <label>Temperamentos</label>
          <div className="div_input">
            <select
              className="select_form"
              name="temperamentos"
              onChange={handleSelect}
            >
              {temperamentos.map((t, i) => {
                return (
                  <option className="option_form" key={i} value={t.id}>
                    {t.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="div_form_final_temps">
            <ul className="ul_temp">
              {selectNameState.map((e, i) => {
                return (
                  <li className="li_temp" key={i}>
                    {e.name}
                    <button
                      className="delete_temp"
                      type="button"
                      value={e.id}
                      onClick={handleDelete}
                    >
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <input
          className={
            errors.name ||
            errors.height_min ||
            errors.height_max ||
            errors.weight_min ||
            errors.weight_max
              ? "submit none"
              : "submit"
          }
          type="submit"
          value="crear"
        />
      </form>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`
  max-width: 526px;
  border-radius: 20px;
  border: var(--border-color);
  box-shadow: 0px 4px 22px 0px #0000001a;
  font-family: "Montserrat";
  padding: 40px;
  margin: 0 auto;

  .form_title {
    font-size: 18px;
    font-weight: 700;
    color: var(--main-color);
  }

  .datos_obligatorios {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: var(--black-color);
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: var(--black-color);
  }
  .div_input {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    background-color: #f0f0f0;
    padding: 6px 6px;
    height: 50px;
    border: var(--border-color);
  }

  .div_input.error {
    border: 2px solid red;
  }

  .div_inputs_dobles {
    display: flex;
    justify-content: space-between;
  }

  .unidad {
    font-weight: 700;
    font-size: 14px;
    border-left: 1px solid #d6d6d6;
    padding: 15px 2px 15px 5px;
    color: var(--light-color2);
  }

  .label_min {
    opacity: 0;
  }

  .form_input.min,
  .form_input.max {
    max-width: 165px;
  }

  .form_input.min_years,
  .form_input.max_years {
    max-width: 165px;
  }

  .form_input {
    border: none;
    background: transparent;
    height: 100%;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 9px;
    color: black;
    letter-spacing: 0.6px;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0px;
      color: var(--light-color2);
    }
  }

  .ul_temp {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 10px;
    margin: 20px 0;
    font-size: 14px;
    font-weight: 500;
    color: var(--black-color);
  }
  .li_temp {
    border-radius: 20px;
    display: flex;
    gap: 5px;
    border: var(--border-color);
    padding: 3px;
  }

  .select_form {
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--light-color2);
    width: 100%;
    padding: 5px 0;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  .submit {
    width: 100%;
    border: none;
    color: var(--light-color);
    font-size: 26px;
    font-weight: 700;
    padding: 10px 0;
    border-radius: 8px;
    background-color: var(--main-color);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: var(--main-color-hover);
    }
    &:focus {
      outline: none;
    }
  }

  .submit.none {
    background-color: red;
    cursor: not-allowed;
  }

  .option_form {
    width: 100px;
    height: 100px;
    color: var(--light-color2);
    background-color: var(--light-color);
    text-align: center;
  }

  .dato_incorrecto {
    margin-left: 15px;
    color: red;
    font-size: 12px;
    font-weight: 700;
  }

  .div_form_final_temps {
    max-width: 500px;
  }

  .delete_temp {
    border: none;
    color: var(--light-color2);
    background-color: transparent;
    cursor: pointer;
  }

  @media screen and (max-width: 574px) {
    padding: 20px;
    .form_title {
      font-size: 16px;
    }
    .form {
      gap: 30px;
    }
    label {
      font-size: 13px;
    }
    .div_input {
      padding: 4px 4px;
    }

    .div_input_vida {
      width: 100%;
    }
    .div_inputs_dobles {
      gap: 10px;
    }
    .unidad {
      font-size: 11px;
    }
    .form_input {
      font-size: 13px;
    }
    .form_input::placeholder {
      font-size: 13px;
    }
    .ul_temp {
      font-size: 12px;
    }

    .select_form {
      font-size: 14px;
    }
    .submit {
      font-size: 20px;
    }

    .dato_incorrecto {
      font-size: 9px;
      font-weight: 700;
    }
  }
`;
