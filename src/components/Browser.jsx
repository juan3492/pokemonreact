import React from "react"
import { connect } from "react-redux"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Image from "react-bootstrap/Image"
import ProgressBar from "react-bootstrap/ProgressBar"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Axios from "axios"

const Browser = ({pokemon, pokename, pokenameChange, pokenameRequest, progressBarColor, addPokemon}) => (
    <section>
        <Card className="browser">
            <Card.Header>Escriba el nombre del pokemon que desee agregar a su equipo</Card.Header>
            <Card.Body>    
            <Form.Control name="pokename" type="text" placeholder="Ej: Pikachu" 
                onChange={event => pokenameChange(event.target.value)}/>
                <br/>
            <Button variant="outline-danger" onClick={()=> pokenameRequest(pokename)}>
                        Submit
                    </Button>
            </Card.Body>
        </Card>
        <br/>
        <Card className="pokeinfo" style={{padding: "1%"}}>
            <Row>
                <Col sm={4} className="poke-image">
                    <Card style={{height: "100%", marginBottom: "1%"}}>
                        <Image className="" src={pokemon.sprites.front_default} style={{height: "100%"}} />
                    </Card>
                </Col>
                <Col className="poke-basic">
                    <Table  striped bordered hover variant>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>{pokemon.name}</td>
                            </tr>
                            <tr>
                                <td>Tipo/s</td>
                                <td>{pokemon.types[1] ?  <p> {pokemon.types[0].type.name} / {pokemon.types[1].type.name}</p> 
                                                         : <p> {pokemon.types[0].type.name} </p>}
                                </td>
                            </tr>
                            <tr>
                                <td>Numero de orden</td>
                                <td>{pokemon.order}</td>
                            </tr>
                            <tr>
                                <td>Peso</td>
                                <td>{pokemon.weight}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="poke-stats">
                <Col sm={4}>
                    <Card style={{height: "100%", marginTop: "1%"}}>
                         <Image  src={pokemon.sprites.back_default} style={{height: "100%"}} alt=""/>
                    </Card>
                </Col>
                <Col>
                    <ProgressBar variant={progressBarColor(pokemon.stats[5].base_stat)} 
                                label={`HP : ${pokemon.stats[5].base_stat}`} 
                                now={pokemon.stats[5].base_stat} max={255} />
                    <br/>
                    <ProgressBar variant={progressBarColor(pokemon.stats[4].base_stat)} 
                                label={`Ataque : ${pokemon.stats[4].base_stat}`} 
                                now={pokemon.stats[4].base_stat} max={230} />
                    <br/>
                    <ProgressBar variant={progressBarColor(pokemon.stats[3].base_stat)} 
                                label={`Defensa : ${pokemon.stats[3].base_stat}`} 
                                now={pokemon.stats[3].base_stat} max={230} />
                    <br/>
                    <ProgressBar variant={progressBarColor(pokemon.stats[2].base_stat)} 
                                label={`Ataque Spe : ${pokemon.stats[2].base_stat}`} 
                                now={pokemon.stats[2].base_stat} max={230} />
                    <br/>
                    <ProgressBar variant={progressBarColor(pokemon.stats[1].base_stat)} 
                                label={`Defensa Spe : ${pokemon.stats[1].base_stat}`} 
                                now={pokemon.stats[1].base_stat} max={230} />
                    <br/>
                    <ProgressBar variant={progressBarColor(pokemon.stats[0].base_stat)}
                                 label={`Velocidad : ${pokemon.stats[0].base_stat}`} 
                                 now={pokemon.stats[0].base_stat} max={230} />  
                </Col>
            </Row>
            <Button variant="outline-success" style={{ margin : "1.5%" }} 
                    onClick={()=> addPokemon(pokemon)} >Agregar pokemon a mi equipo</Button>
        </Card>
    </section>
)


const mapStateToProps = (state) => ({
    pokemon : state.browserinfo,
    pokename : state.pokename
})

const mapDispatchToProps = (dispatch) => ({
    pokenameChange(input){
        dispatch({
            type: "POKENAME_CHANGE",
            input
        })
    },
    pokenameRequest(pokename){
        dispatch({
            type: "POKENAME_REQUEST"
        });
        if(pokename.length > 0){   
            return Axios.get('https://pokeapi.co/api/v2/pokemon/'+pokename.toLowerCase())
            .then(res => {
                dispatch({
                    type: 'GET_DATA_SUCCESS',
                    payload: res.data
                });
            })
            .catch(error => {
                alert("El nombre ingresado no pertenece a ningun pokemon, por favor, vuelve a intentarlo y esta vez escriba un nombre correcto");
                dispatch({
                    type: 'GET_DATA_ERROR',
                    payload:''
                });
            });
        }else{
            alert("escribe el nombre del pokemon primero")
        }
    },
    addPokemon(pokemon){
        pokemon["id"] = generateID(pokemon.name)
        dispatch({
            type: "ADD_POKEMON",
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
    }
})

function between(x, min, max) {
    return x >= min && x <= max;
  }

const generateID = (pre) => {
     return `${ pre }_${ new Date().getTime() }`;
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Browser)