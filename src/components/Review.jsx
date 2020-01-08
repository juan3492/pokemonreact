import React from "react"
import { connect } from "react-redux"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import ProgressBar from "react-bootstrap/ProgressBar"
import Row from "react-bootstrap/Row"
import "./Review.scss";

const Review = ({makestats, poketeam, progressBarColor, show, typesCoverage}) =>{
    if(show){
        const stats = makestats(poketeam)
        const types = typesCoverage(poketeam)
        return (
            <Card >               
                <Card className="review" style={{margin: "1%"}}>
                    <Card.Header>Analisis de estadisticas Base</Card.Header>
                    <Card.Body>
                        <p className="h4">Promedio de estadisticas Base</p>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.hp)} 
                                    label={`HP : ${stats.hp}`} 
                                    now={stats.hp} max={255}/>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.atk)} 
                                    label={`Ataque : ${stats.atk}`} 
                                    now={stats.atk} max={230}/>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.def)} 
                                    label={`Defensa : ${stats.def}`} 
                                    now={stats.def} max={230}/>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.satk)} 
                                    label={`Ataque Spe : ${stats.satk}`} 
                                    now={stats.satk} max={230}/>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.sdef)} 
                                    label={`Defensa Spe : ${stats.sdef}`} 
                                    now={stats.sdef} max={230}/>
                        <br/> 
                        <ProgressBar variant={progressBarColor(stats.spd)}
                                    label={`Velocidad : ${stats.sdef}`} 
                                    now={stats.sdef} max={230}/>
                        <br/>
                        <ProgressBar variant={progressBarColor(stats.spd)}
                                    label={`Velocidad : ${stats.sdef}`} 
                                    now={stats.sdef} max={230}/>
                        <br/>

                        <p>Si la estadistica esta en color <span className="text-danger">Rojo</span>, significa que la estadistica es muy alta.</p>
                        <p>Si la estadistica esta en color <span className="text-warning">Amarillo</span>, significa que la estadistica es alta.</p>
                        <p>Si la estadistica esta en color <span className="text-success">Verde</span> , significa que la estadistica es equilibrada.</p>
                        <p>Si la estadistica esta en color <span className="text-info">Celeste</span>, significa que la estadistica es baja, deberias mejorarla.</p>  
                        <br/>
                        <p className="h4"> Suma de las estadisticas </p>
                        <br/>
                            {
                                stats.statsum.map((stat, index)=>
                                    <div key={index}>
                                    <ProgressBar variant={progressBarColor(stat/5)}
                                                label={`${poketeam[index].name} : ${stat}`} 
                                                now={stat} max={720}/>
                                                <br/>
                                    </div>
                                )

                            }
                        <ProgressBar variant={progressBarColor(stats.statsum.reduce((acc,cur) => acc + cur/6 )/6)}
                        label={`Promedio de suma de estadisticas : ${Math.round(stats.statsum.reduce((acc,cur) => acc + cur ))/6}`} 
                        now={Math.round(stats.statsum.reduce((acc,cur) => acc + cur ))/6} max={720}/>
                        <br/>
                        <p className="h4"> Datos atipicos </p>
                        <br/>
                        {
                            stats.outliers[0] ? // if exist a outlier
                            <ul>
                                {
                                    stats.outliers.map((outlier, index) =>                                        
                                            
                                            ( outlier.stat_sum > (stats.statsum.reduce((acc,cur) => acc + cur ))/6) ?
                                            <li key={index}> <img src={poketeam[outlier.p_index].sprites.front_default} alt=""/> 
                                                Las estadisticas base de {poketeam[outlier.p_index].name} son considerablemente mas altos que el promedio del equipo. 
                                            </li> // pokemon stats are too hight than team average
                                            :
                                            <li key={index}> <img src={poketeam[outlier.p_index].sprites.front_default}/>
                                                Las estadisticas base de {poketeam[outlier.p_index].name} son considerablemente muy bajos respecto del promedio, deberias cambiarlo por uno mas poderoso.
                                            </li> // pokemon stats are too low than team average
                                    )
                                }
                            </ul>
                            :

                            <p> tu equipo no presenta datos atipicos</p>
                        }
                    </Card.Body>
                </Card>

                <Card style={{margin: "1%"}}>
                    <Card.Header>Covertura de tipos</Card.Header>
                    <Card.Body>    
                        <p>Tu equipo cubre {types.coverlen} de 17 tipos.</p>
                        <Row>
                            <Col>
                                <p>Tu equipo cubre:</p>
                                <ul>
                                    { types.cover.map((type)=> <li key= {types.cover.indexOf(type)} >{`${type} `}</li>) }
                                </ul>
                            </Col>
                            <Col>
                                <p>Tu equipo no cubre:</p>
                                <ul>
                                    { types.notcover.map((type)=> <li key={types.notcover.indexOf(type)}>{`${type} `}</li>) }
                                </ul>
                            </Col>
                        </Row>
                        <p>Tu equipo tiene una covertura {types.coverrev}.</p>
                    </Card.Body>
                </Card>
                <br/>
            </Card>
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
        var hp=0, atk=0, def=0, satk=0, sdef=0, spd=0;
        var statsum=[0,0,0,0,0,0];
        var outliers=[];
        var outliers_help=[];
        var outlier_cur=0;
        var outlier_avg=0;
        for(var i=0; i<poketeam.length; i++){
            hp = hp + poketeam[i].stats[5].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[5].base_stat
            atk = atk + poketeam[i].stats[4].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[4].base_stat
            def = def + poketeam[i].stats[3].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[3].base_stat
            satk = satk + poketeam[i].stats[2].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[2].base_stat
            sdef = sdef + poketeam[i].stats[1].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[1].base_stat
            spd = spd + poketeam[i].stats[0].base_stat
            statsum[i] = statsum[i] + poketeam[i].stats[0].base_stat
        }
        for(var i=0; i<6; i++){ // this loop decide if each pokemon is too strong or too weak than the rest of the team
            outliers_help = statsum.slice()
            outlier_cur = statsum[i]
            outliers_help.splice(i, 1)
            outlier_avg = outliers_help.reduce((acc,cur)=>acc+cur)/5
            if(Math.abs(outlier_avg-outlier_cur) > 200){
                outliers.push({"p_index" : i, "stat_sum": outlier_cur})
            }
        }
        console.log(outliers)
        const stats = { "hp": Math.round(hp/6), 
                        "atk":Math.round(atk/6), 
                        "def":Math.round(def/6), 
                        "satk":Math.round(satk/6),
                        "sdef":Math.round(sdef/6),
                        "spd":Math.round(spd/6),
                        "statsum": statsum,
                        "outliers": outliers
                        }
        return (stats)
    },
    typesCoverage(poketeam){
        var notcover = ["bug", "dark", "dragon", 
                    "electric", "fighting", "fire", 
                    "flying", "ghost", "grass", 
                    "ground", "ice", "normal", 
                    "poison", "psychic", "rock", 
                    "steel", "water"]
        var cover = []
        var coverrev = null
        var coverlen = 0
        for(var i=0; i<poketeam.length; i++){
            if(poketeam[i].types[1]){
                if(cover.indexOf(poketeam[i].types[0].type.name)===-1){ 
                    cover.push(poketeam[i].types[0].type.name)
                    notcover.splice(notcover.indexOf(poketeam[i].types[0].type.name), 1)
                    coverlen++
                }
                if(cover.indexOf(poketeam[i].types[1].type.name)===-1){
                    cover.push(poketeam[i].types[1].type.name)
                    notcover.splice(notcover.indexOf(poketeam[i].types[1].type.name), 1)
                    coverlen++
                }
            }else{
                if(cover.indexOf(poketeam[i].types[0].type.name)===-1){
                    cover.push(poketeam[i].types[0].type.name)
                    notcover.splice(notcover.indexOf(poketeam[i].types[0].type.name), 1)
                    coverlen++
                }                  
            }
        }
        if(coverlen > 9){
            coverrev = "Muy alta, tenes una muy buena covertura de equipos"
        }else if(coverlen > 7){
            coverrev = "Alta, tenes una buena covertura de equipos"
        }else if(coverlen === 6){
            coverrev = "Equilibrada, la covertura de equipos es regular"
        }else{
            coverrev = "Mala, tenes poca diversidad de tipos en tu equipo"
        }

        return ({"notcover": notcover, "cover": cover, "coverlen": coverlen, "coverrev": coverrev })
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