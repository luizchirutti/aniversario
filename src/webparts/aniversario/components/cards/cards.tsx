import * as React from "react";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
// import iconcake from "./../../assets/img/cake.png";
// ../../assets/img/cake.png

const iconCake = require("./../../assets/img/cake.png")
const iconProfile = require("./../../assets/img/user.png")
const iconEnvelope = require("./../../assets/img/envelope.png")




export function Cards() {
    const [arrayBirthday, setArrayBirthday] = useState([]);
    useEffect(() => {
        getAllBirthday()



    }, [])

    function getAllBirthday() {

        var url = "https://filenew.sharepoint.com/sites/KumulusDEV//_api/web/lists/getbytitle('aniversario')/items";
        axios.get(url).then(result => {
            console.log(result.data.value)
            setArrayBirthday(result.data.value)




        }).catch(error => {
            console.log(error)
        })



    }
    return (
        <div className={style.deck}>
            {
                arrayBirthday.map(cItem => {
                    return (
                        <div className={style.card}>
                            <div className={style.header}>
                                <div className={style.iconCake}><img src={iconCake} alt="icone de bolo aniversario" /></div>
                                <div className={style.congrats}>
                                    <span>Happy Birthday</span>
                                </div>
                                <div className={style.dateBirthday}>
                                    <span>{cItem.dataAniversario} </span>
                                </div>


                            </div>
                            <div className={style.body}>
                                <div className={style.bodyContainer}>
                                    <div className={style.pictureProfile}>
                                        <img src={iconProfile} alt="icone de perfil" />

                                    </div>
                                    <div className={style.infoProfile}>
                                        <div className={style.name}>
                                            <span>{cItem.Title}</span>

                                        </div>
                                        <div className={style.job}>
                                            <span>{cItem.job}</span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className={style.footer}>
                                <img src={iconEnvelope} alt="icone de envelope" />

                            </div>
                        </div>
                    )
                })
            }




        </div>


    )

}