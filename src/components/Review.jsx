import React from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Jumbotron from "react-bootstrap/Jumbotron"
import ProgressBar from "react-bootstrap/ProgressBar"
import "./Review.scss";
import Row from "react-bootstrap/Row"

const Review = ({makestats, poketeam, progressBarColor, show, typesCoverage}) =>{
    if(show){
        const stats = makestats(poketeam)
        const types = typesCoverage(poketeam)
        return (
            <div className="card review" >               
                <Card className="review" style={{margin: "1%"}}>
                <Card.Header>Promedio de estadisticas Base</Card.Header>
                
                    <ProgressBar variant={progressBarColor(stats.hp)} 
                                label={`HP : ${stats.hp}`} 
                                now={stats.hp} max={255}
                                style={{margin:"1%"}} />
                    <br/>
                    <ProgressBar variant={progressBarColor(stats.atk)} 
                                label={`Ataque : ${stats.atk}`} 
                                now={stats.atk} max={230}
                                style={{margin:"1%"}} />
                    <br/>
                    <ProgressBar variant={progressBarColor(stats.def)} 
                                label={`Defensa : ${stats.def}`} 
                                now={stats.def} max={230}
                                style={{margin:"1%"}} />
                    <br/>
                    <ProgressBar variant={progressBarColor(stats.satk)} 
                                label={`Ataque Spe : ${stats.satk}`} 
                                now={stats.satk} max={230}
                                style={{margin:"1%"}} />
                    <br/>
                    <ProgressBar variant={progressBarColor(stats.sdef)} 
                                label={`Defensa Spe : ${stats.sdef}`} 
                                now={stats.sdef} max={230}
                                style={{margin:"1%"}} />
                    <br/> 
                    <ProgressBar variant={progressBarColor(stats.spd)}
                                label={`Velocidad : ${stats.sdef}`} 
                                now={stats.sdef} max={230}
                                style={{margin:"1%"}} />   
                    <p style={{paddingLeft:"1%"}}>Si la estadistica esta en color Rojo, significa que la estadistica es muy alta</p>
                    <p style={{paddingLeft:"1%"}}>Si la estadistica esta en color Naranja, significa que la estadistica es alta</p>
                    <p style={{paddingLeft:"1%"}}>Si la estadistica esta en color Verde, significa que la estadistica es equilibrada</p>
                    <p style={{paddingLeft:"1%"}}>Si la estadistica esta en color Celeste, significa que la estadistica es baja, deberias mejorarla</p>        
                </Card>
                <Card style={{margin: "1%"}}>
                    <Card.Header>Covertura de tipos</Card.Header>
                    <Card.Text style={{padding: "1%"}}>
                        aca tendriamos que decir que tipos cubre y que tipos no cubre
                        {types.cover}
                    </Card.Text>
                </Card>
                <br/>
            </div>
        )}else{
            return(
                <Jumbotron>
                    <h1> Para ver las estadisticas debes tener tu equipo de 6 pokemons </h1>
                </Jumbotron>
        );
    }
}


const mapStateToProps = (state) => ({
    poketeam: state.poketeam,
    show: state.showreview,
})

const mapDispatchToProps = (dispatch) =>({
    makestats(poketeam){
        var hp=0,atk=0, def=0, satk=0, sdef=0, spd=0;
        for(var i=0; i<poketeam.length; i++){
            hp = hp + poketeam[i].stats[5].base_stat
            atk = atk + poketeam[i].stats[4].base_stat
            def = def + poketeam[i].stats[3].base_stat
            satk = satk + poketeam[i].stats[2].base_stat
            sdef = sdef + poketeam[i].stats[1].base_stat
            spd = spd + poketeam[i].stats[0].base_stat
        }
        const stats = { "hp": Math.round(hp/6), 
                        "atk":Math.round(atk/6), 
                        "def":Math.round(def/6), 
                        "satk":Math.round(satk/6),
                        "sdef":Math.round(sdef/6),
                        "spd":Math.round(spd/6)
                        }
        return (stats)
    },
    typesCoverage(poketeam){
        var types = ["bug", "dark", "dragon", 
                    "electric", "fighting", "fire", 
                    "flying", "ghost", "grass", 
                    "ground", "ice", "normal", 
                    "poison", "psychic", "rock", 
                    "steel", "water"]
        var cover = []
        for(var i=0; i<poketeam.length; i++){
            if(poketeam[i].types[1]){
                if(cover.indexOf(poketeam[i].types[0].type.name)===-1){
                    cover.concat(poketeam[i].types[0].type.name)
                }
                if(cover.indexOf(poketeam[i].types[1].type.name)===-1){
                    cover.concat(poketeam[i].types[1].type.name)
                }
            }else{
                if(poketeam[i].types[1]){
                    if(cover.indexOf(poketeam[i].types[0].type.name)===-1){
                        cover.concat(poketeam[i].types[0].type.name) 
                    } 
                }     
            }
        }
        console.log(types)
        console.log(cover)
        return ({"types": types, "cover": cover })
    },
    progressBarColor(stat){
        if(between(stat, 150, 255)){
            return("danger")
        }
        if(between(stat,110, 149)){
            return("warning")
        }
        if(between(stat, 50, 109)){
            return("success")
        }
        if(between(stat, 0, 49)){
            return("info")
        }
    },
})

function between(x, min, max) {
    return x >= min && x <= max;
}

export default connect(mapStateToProps, mapDispatchToProps)(Review)