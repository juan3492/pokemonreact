import React from "react"
import "./Team.scss"
import { connect } from "react-redux"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import ProgressBar from "react-bootstrap/ProgressBar"
import Row from "react-bootstrap/Row"

//icons
import { FaStarOfLife, FaSnowflake, FaEye, FaFire, FaGhost, FaMountain,
         FaSkullCrossbones } from "react-icons/fa"
import { GiEvilMoon, GiSeaDragon, GiElectric, GiLindenLeaf, GiDrop,
         GiAnvil, GiRuneStone, GiAngelWings, GiPunchBlast, GiFairyWand} from "react-icons/gi"
import { IoIosBug } from "react-icons/io";

const Team = ({capitalize, deletePokemon, iconTypeSelector, iconWeaknessSelector, poketeam, progressBarColor}) => {
    if(poketeam.length === 0){
        return(
        <section>
            <Jumbotron style={{ marginTop: "2%"}}>
                <h1>No tenés pokemons en tu team</h1>
            </Jumbotron>
        </section>
        )
    }else{  
        return(
            <section>
            <Card style ={{padding : "1%", marginTop: "1%", marginBotton: "1%"}} >
                <Card.Header className="text-center">Equipo Pokemon</Card.Header>
                <div id="primary-content" className="primary-content">
                    <div className="row">
                        {
                            poketeam.map((pokemon, index) =>
                            <div className="col" key={index}>
                                    <div 
                                    className={`p-card ${ pokemon.types[1]?  pokemon.types[Math.floor(Math.random() * (1 - 0 + 1))].type.name  
                                        : pokemon.types[0].type.name }`}>
                                        <div className="character-area">
                                            <img className="character" src={pokemon.sprites.front_default} />
                                        </div>
                                        <div className="details">
                                            <span>{pokemon.types[1] ?  <p> {pokemon.types[0].type.name} / {pokemon.types[1].type.name}</p> 
                                                                    : <p> {pokemon.types[0].type.name}</p>} </span>
                                            <Row>
                                                <Col>
                                                    <h3>{ capitalize(pokemon.name) }</h3>
                                                </Col>
                                                <Col md={{ span: 4 }}>
                                                    <Button variant="outline-danger" size="sm"
                                                        onClick={()=>deletePokemon(pokemon)}>Borrar</Button>
                                                </Col>
                                            </Row>
                                                <Row >
                                                    <Col>
                                                        <span>Atk: {pokemon.stats[4].base_stat}</span>
                                                        <ProgressBar variant={progressBarColor(pokemon.stats[4].base_stat)} 
                                                                    now={pokemon.stats[4].base_stat} max={230} 
                                                                    style={{height : "5%"}}/>
                                                        <span>Def: {pokemon.stats[3].base_stat}</span>
                                                        <ProgressBar variant={progressBarColor(pokemon.stats[3].base_stat)} 
                                                                    now={pokemon.stats[3].base_stat} max={230} 
                                                                    style={{height : "5%"}}/>
                                                        <span>Atk esp: {pokemon.stats[2].base_stat}</span>
                                                        <ProgressBar variant={progressBarColor(pokemon.stats[2].base_stat)} 
                                                                    now={pokemon.stats[2].base_stat} max={230} 
                                                                    style={{height : "5%"}}/>
                                                    </Col>
                                                    <Col>
                                                        <span>Def esp: {pokemon.stats[1].base_stat}</span>
                                                        <ProgressBar variant={progressBarColor(pokemon.stats[1].base_stat)} 
                                                                    now={pokemon.stats[1].base_stat} max={230} 
                                                                    style={{height : "5%"}}/>
                                                        <span>Vel: {pokemon.stats[0].base_stat}</span>
                                                        <ProgressBar variant={progressBarColor(pokemon.stats[0].base_stat)}
                                                                    now={pokemon.stats[0].base_stat} max={230} 
                                                                    style={{height : "5%"}}/>  
                                                    </Col>
                                                </Row>
                                        </div>
                                            { pokemon.types[1]?
                                                <ul className="stats">
                                                    <li>
                                                        <span>Type</span>
                                                        <h5>{iconTypeSelector(pokemon.types[0].type.name)} {iconTypeSelector(pokemon.types[1].type.name)}</h5>
                                                    </li>
                                                    <li><span>HP</span><h5>{pokemon.stats[5].base_stat}</h5></li>
                                                    <li>
                                                        <span>Weakness</span>
                                                        <h5>{iconWeaknessSelector(pokemon.types[0].type.name)} {iconWeaknessSelector(pokemon.types[1].type.name)}</h5>
                                                    </li>
                                                </ul>

                                            :
                                                <ul className="stats">
                                                    <li>
                                                        <span>Type</span>
                                                        <h5>{iconTypeSelector(pokemon.types[0].type.name)}</h5>
                                                    </li>
                                                    <li><span>HP</span><h5>{pokemon.stats[5].base_stat}</h5></li>
                                                    <li>
                                                        <span>Weakness</span>
                                                        <h5>{iconWeaknessSelector(pokemon.types[0].type.name)}</h5>
                                                    </li>
                                                </ul>
                                            }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Card>
        </section>
        )
    }
}

const mapStateToProps = (state) =>({
    poketeam: state.poketeam,
})

const mapDispatchToProps = (dispatch) =>({

    deletePokemon(pokemon){
        dispatch({
            type: "DELETE_POKEMON",
            pokemon
        });
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
    capitalize(s){
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    },
    iconTypeSelector(type){
        switch (type) {
            case "normal":
                return <FaStarOfLife/>
            case "dark":
                return <GiEvilMoon/>
            case "dragon":
                return <GiSeaDragon/>
            case "ice":
                return <FaSnowflake/>
            case "psychic":
                return <FaEye/>
            case "electric":
                return <GiElectric/>
            case "grass":
                return <GiLindenLeaf/>
            case "water":
                return <GiDrop/>
            case "fire":
                return <FaFire/>
            case "steel":
                return <GiAnvil/>
            case "ghost":
                return <FaGhost/>
            case "bug":
                return <IoIosBug/>
            case "rock":
                return <GiRuneStone/>
            case "ground":
                return <FaMountain/>
            case "poison":
                return <FaSkullCrossbones/>
            case "flying":
                return <GiAngelWings/>
            case "fighting":
                return <GiPunchBlast/>
            case "fairy":
                return <GiFairyWand/>
            default:
                break;
        }

    },
    iconWeaknessSelector(type){
        switch (type) {
            case "normal":
                return <GiPunchBlast/>
            case "dark":
                return <GiPunchBlast/>
            case "dragon":
                return <GiFairyWand/>
            case "ice":
                return <GiAnvil/>
            case "psychic":
                return <FaGhost/>
            case "electric":
                return <FaMountain/>
            case "grass":
                return <FaFire/>
            case "water":
                return <GiLindenLeaf/>
            case "fire":
                return <GiDrop/>
            case "steel":
                return <FaFire/>
            case "ghost":
                return <GiEvilMoon/>
            case "bug":
                return <GiRuneStone/>
            case "rock":
                return <GiDrop/>
            case "ground":
                return <FaSnowflake/>
            case "poison":
                return <FaEye/>
            case "flying":
                return <GiElectric/>
            case "fighting":
                return <GiAngelWings/>
            case "fairy":
                return <FaSkullCrossbones/>
            default:
                break;
        }
    },
    
})

function between(x, min, max) {
    return x >= min && x <= max;
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)