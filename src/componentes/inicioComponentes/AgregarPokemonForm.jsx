import React from 'react'
import { useState } from 'react';


const AgregarPokemonForm = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [move, setMove] = useState("");
  const [moveTwo, setMoveTwo] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");

   
  const Form = async () => {
      const response = await fetch("http://localhost:4000/Pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          datosPokemon: {
            name: name,
            height: height,
            weight: weight,
            description: description,
            image: img,
            HP: hp,
            ATK: atk,
            DEF: def,
            SATK: satk,
            SDEF: sdef,
            SPD: spd,
            type: type
        },
        Moves: [
            {   
                nombre: move
            },
            {   
                nombre: moveTwo
            }
        ],
        Types: [
            {   
                name: type1
            },
            {   
                name: type2
            }
        ]
        })
      });
    }


  const onClick = (e) => {
    e.preventDefault();
    Form();
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeImg = (e) => {
    setImg(e.target.value);
  };
  const onChangeType1 = (e) => {
    setType1(e.target.value);
  };
  const onChangeType2 = (e) => {
    setType2(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeMove = (e) => {
    setMove(e.target.value);
  };
  const onChangeMoveTwo = (e) => {
    setMoveTwo(e.target.value);
  };
  const onChangeHp = (e) => {
    setHp(e.target.value);
  };
  const onChangeAtk = (e) => {
    setAtk(e.target.value);
  };
  const onChangeDef = (e) => {
    setDef(e.target.value);
  };
  const onChangeSatk = (e) => {
    setSatk(e.target.value);
  };
  const onChangeSdef = (e) => {
    setSdef(e.target.value);
  };
  const onChangeSpd = (e) => {
    setSpd(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  return (
    <section>
        
      <div className="flex flex-col">
    
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa su nombre</label>
          <input className="pl-[20px] mt-[5px] rounded-3xl w-[50vh]" type="text" name="name" id="name" value={name} onChange={onChangeName}/>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa el URL de la imagen</label>
          <input className="border border-none pl-[20px] mt-[5px] rounded-3xl w-[50vh]"
            type="url"
            name="image"
            id="image"
            value={img}
            onChange={onChangeImg}
          />
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus tipos</label>
          <br/>
          <select id="tipos" onChange={onChangeType1} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
             <option selected>Selecciona su tipo principal</option>
             <option value="agua">Agua</option>
             <option value="dragon">Dragon</option>
             <option value="electrico">Electrico</option>
             <option value="fantasma">Fantasma</option>
             <option value="fuego">Fuego</option>
             <option value="hada">Hada</option>
             <option value="hielo">Hielo</option>
             <option value="insecto">Insecto</option>
             <option value="luchador">Luchador</option>
             <option value="metal">Metal</option>
             <option value="normal">Normal</option>
             <option value="oscuro">Oscuro</option>
             <option value="planta">Planta</option>
             <option value="psiquico">Psiquico</option>
             <option value="roca">Roca</option>
             <option value="tierra">Tierra</option>
             <option value="venenoso">Venenoso</option>
             <option value="volador">Volador</option>
          </select>
          <select id="tipos" onChange={onChangeType2} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
             <option selected>Selecciona su tipo secundario (si tiene)</option>
             <option value="agua">Agua</option>
             <option value="dragon">Dragon</option>
             <option value="electrico">Electrico</option>
             <option value="fantasma">Fantasma</option>
             <option value="fuego">Fuego</option>
             <option value="hada">Hada</option>
             <option value="hielo">Hielo</option>
             <option value="insecto">Insecto</option>
             <option value="luchador">Luchador</option>
             <option value="metal">Metal</option>
             <option value="normal">Normal</option>
             <option value="oscuro">Oscuro</option>
             <option value="planta">Planta</option>
             <option value="psiquico">Psiquico</option>
             <option value="roca">Roca</option>
             <option value="tierra">Tierra</option>
             <option value="venenoso">Venenoso</option>
             <option value="volador">Volador</option>
          </select>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa su descripcion</label>
          <textarea className="text-black rounded-3xl w-[50vh] m-[6px] pl-[10px]" type="text" name="info" id="descripcion" value={description} onChange={onChangeDescription}
          />
        </div>
        <div className="mt-[1vh]" >
          <label className="font-bold">Ingresa sus medidas</label>
          <br/>
          <input className="border border-none  text-black rounded-3xl w-[50vh] m-[6px] pl-[10px]"
            type="text"
            name="weight"
            id="weight"
            placeholder="Weight/gr"
            value={weight}
            onChange={onChangeWeight}
          />
          <input className="border border-none  text-black rounded-3xl w-[50vh] m-[6px] pl-[10px]"
            type="text"
            name="height"
            id="height"
            placeholder="Height/cm"
            value={height}
            onChange={onChangeHeight}
          />
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus movimientos</label>
          <br/>
          <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus movimientos</label>
          <input className="border border-none pl-[20px] mt-[5px] rounded-3xl w-[50vh]"
            type="text"
            name="move"
            id="move"
            value={move}
            onChange={onChangeMove}
          />
        </div>
          {/* <select id="tipos" onChange={onChangeMove} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
             <option selected>Selecciona un movimiento</option>
             <option value="RAZOR-WIND">RAZOR-WIND</option>
             <option value="SWORD-DANCE">SWORD-DANCE</option>
             <option value="MEGA-PUNCH">MEGA-PUNCH</option>
             <option value="FIRE-PUNCH">FIRE-PUNCH</option>
             <option value="ICE-PUNCH">ICE-PUNCH</option>
             <option value="TACKLE">TACKLE</option>
             <option value="STRING-SHOT">STRING-SHOT</option>
             <option value="HARDEN">HARDEN</option>
             <option value="GUST">GUST</option>
             <option value="POISON-STING">POISON-STING</option>
             <option value="HEADBUTT">HEADBUTT</option>
             <option value="WHIRLWIND">WHIRLWIND</option>
             <option value="BIND">BIND</option>
             <option value="SLAM">SLAM</option>
             <option value="PAY-DAY">PAY-DAY</option>
             <option value="CUT">CUT</option>
             <option value="SCRATCH">SCRATCH</option>
          </select>
          <select id="tipos" onChange={onChangeMoveTwo} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
            <option selected>Selecciona un movimiento</option>
            <option value="RAZOR-WIND">RAZOR-WIND</option>
            <option value="SWORD-DANCE">SWORD-DANCE</option>
            <option value="MEGA-PUNCH">MEGA-PUNCH</option>
            <option value="FIRE-PUNCH">FIRE-PUNCH</option>
            <option value="ICE-PUNCH">ICE-PUNCH</option>
            <option value="TACKLE">TACKLE</option>
            <option value="STRING-SHOT">STRING-SHOT</option>
            <option value="HARDEN">HARDEN</option>
            <option value="GUST">GUST</option>
            <option value="POISON-STING">POISON-STING</option>
            <option value="HEADBUTT">HEADBUTT</option>
            <option value="WHIRLWIND">WHIRLWIND</option>
            <option value="BIND">BIND</option>
            <option value="SLAM">SLAM</option>
            <option value="PAY-DAY">PAY-DAY</option>
            <option value="CUT">CUT</option>
            <option value="SCRATCH">SCRATCH</option>
          </select> */}
        </div>
        <div className="mt-[1vh] flex flex-col" >
          <label className="font-bold">Ingresa sus estadísticas</label>
          <div className="flex flex-row">
            <input className="border border-none text-black rounded-3xl m-[6px] pl-[10px] w-[143px]"
              type="text"
              name="baseStats"
              id="HP"
              placeholder="HP"
              value={hp}
              onChange={onChangeHp}
            />
            <input className="border border-none  text-black rounded-3xl  m-[6px] pl-[10px] w-[143px]"
              type="text"
              name="baseStats"
              id="ATK"
              placeholder="ATK"
              value={atk}
              onChange={onChangeAtk}
            />
            <input className="border border-none  text-black rounded-3xl m-[6px] pl-[10px] w-[143px]"
              type="text"
              name="baseStats"
              id="DEF"
              placeholder="DEF"
              value={def}
              onChange={onChangeDef}
            />
          </div>
          <div className="flex flex-row">
          <input className="border border-none  text-black rounded-3xl m-[6px] pl-[10px] w-[143px]"
            type="text"
            name="baseStats"
            id="SATK"
            placeholder="SATK"
            value={satk}
            onChange={onChangeSatk}
          />
          <input className="border border-none  text-black rounded-3xl m-[6px] pl-[10px] w-[143px]"
            type="text"
            name="baseStats"
            id="SDEF"
            placeholder="SDEF"
            value={sdef}
            onChange={onChangeSdef}
          />
          <input className="border border-none  text-black rounded-3xl w-30% m-[6px] pl-[10px] w-[143px]"
            type="text"
            name="baseStats"
            id="SPD"
            placeholder="SPD"
            value={spd}
            onChange={onChangeSpd}
          />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={onClick} className="bg-gradient-to-b from-blue-500 to-blue-900 rounded-3xl font-medium p-2 md:p-4 text-white uppercase w-[50vh] ">AGREGAR</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarPokemonForm