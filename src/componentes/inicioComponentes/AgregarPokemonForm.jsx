import React from 'react'
import { useState } from 'react';


const AgregarPokemonForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [move, setMove] = useState("");
  const [moveTwo, setMoveTwo] = useState("");
  const [hp, setHp] = useState(0);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [satk, setSatk] = useState(0);
  const [sdef, setSdef] = useState(0);
  const [spd, setSpd] = useState(0);
  const [type, setType] = useState(0);
  const [typeName, setTypeName] = useState(0);

   
  const Form = async () => {
      const response = await fetch("http://localhost:4000/Pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          pokemon: {
            name: name,
            height: height,
            weight: weight,
            description: description,
            image: image,
            hp: hp,
            atk: atk,
            def: def,
            satk: satk,
            sdef: sdef,
            spd: spd,
            type: "grass"
        },
        moves: [
            {   id:1,
                nombre: move
            },
            {   id:2,
                nombre: moveTwo
            }
        ],
        types: [
            {   id:type1,
                name: type1
            },
            {   id:type2,
                name: type2
            }
        ]
        })
      });
    }


  const onClick = (e) => {
    Form();
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeType1 = (e) => {
    setType1(e.target.value);
    setTypeName(e.target.name);
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
    <section className='w-full bg-[#ffca2a] h-full pt-[50px]'>
        
      <div className='flex w-4/5 md:w-1/3 h-full m-auto  border-black border-[0.1px] flex-col bg-[#F7F7F7] rounded-xl '>
    
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa su nombre</label>
          <input className="pl-[20px] mt-[5px] rounded-3xl w-[50vh]" type="text" name="name" id="name" value={name} onChange={onChangeName}/>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa el URL de la imagen</label>
          <input type="url" name="image" id="image" value={image} onChange={onChangeImage}/>
        </div>
        <div className="mt-[2vh]" >
          <label className="font-bold">Ingresa sus tipos</label>
          <br/>
          <select defaultValue={1} id="tipos" onChange={onChangeType1} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
             <option value={0}>Selecciona su tipo principal</option>
             <option value={1} name='water'>Agua</option>
             <option value={2} name='dragon'>Dragon</option>
             <option value={3} name='electric'>Electrico</option>
             <option value={4} name='ghost'>Fantasma</option>
             <option value={5} name='fire'>Fuego</option>
             <option value={6} name='tail'>Hada</option>
             <option value={7} name='ice'>Hielo</option>
             <option value={8} name='bug'>Insecto</option>
             <option value={9} name='fighting'>Luchador</option>
             <option value={10} name='steel'>Metal</option>
             <option value={11} name='normal'>Normal</option>
             <option value={12} name='dark'>Oscuro</option>
             <option value={13} name='grass'>Planta</option>
             <option value={14} name='psychic'>Psiquico</option>
             <option value={15} name='rock'>Roca</option>
             <option value={16} name='ground'>Tierra</option>
             <option value={17} name='poison'>Venenoso</option>
             <option value={18} name='flying'>Volador</option>
          </select>
          <select defaultValue={1} id="tipos" onChange={onChangeType2} className="rounded-3xl pl-[10px] m-[6px] border border-none w-[50vh] h-[3vh] text-gray-400">
             <option value={0}>Selecciona su tipo secundario (si tiene)</option>
             <option value={1}>Agua</option>
             <option value={2}>Dragon</option>
             <option value={3}>Electrico</option>
             <option value={4}>Fantasma</option>
             <option value={5}>Fuego</option>
             <option value={6}>Hada</option>
             <option value={7}>Hielo</option>
             <option value={8}>Insecto</option>
             <option value={9}>Luchador</option>
             <option value={10}>Metal</option>
             <option value={11}>Normal</option>
             <option value={12}>Oscuro</option>
             <option value={13}>Planta</option>
             <option value={14}>Psiquico</option>
             <option value={15}>Roca</option>
             <option value={16}>Tierra</option>
             <option value={17}>Venenoso</option>
             <option value={18}>Volador</option>
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
          <button onClick={() => {onClick()}} className="bg-gradient-to-b from-blue-500 to-blue-900 rounded-3xl font-medium p-2 md:p-4 text-white uppercase w-[50vh] ">AGREGAR</button>
        </div>
      </div>
    </section>
  );
};

export default AgregarPokemonForm