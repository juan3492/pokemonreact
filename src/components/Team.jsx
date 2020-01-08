import React from "react"
import "./Team.scss"
import { connect } from "react-redux"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import ProgressBar from "react-bootstrap/ProgressBar"
import Row from "react-bootstrap/Row"



const Team = ({capitalize, deletePokemon, poketeam, progressBarColor}) => {

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
                                                <Row>
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
                                        <ul className="stats">
                                            <li>
                                                <span>Type</span>
                                                <h5><i className="far fa-fire"></i></h5>
                                            </li>
                                            <li><span>HP</span><h5>{pokemon.stats[5].base_stat}</h5></li>
                                            <li>
                                                <span>Weakness</span>
                                                <h5><i className="far fa-water"></i></h5>
                                            </li>
                                        </ul>
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
    }
    
})

function between(x, min, max) {
    return x >= min && x <= max;
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)