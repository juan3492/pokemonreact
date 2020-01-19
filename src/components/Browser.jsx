//react
import React from "react"
import { connect } from "react-redux"

//axios
import Axios from "axios"

//react-bootstrap
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Spinner from "react-bootstrap/Spinner"
import dictionary from "./dictionary"

// material design 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const Browser = ({dictionary, loading, pokemon, pokename, pokenameChange, pokenameRequest, progressBarColor, addPokemon}) => {
    return (
    <section>
        <Card className="browser">
            <Card.Header>Escriba el nombre del pokemon que desee agregar a su equipo</Card.Header>
            <Card.Body>    
            <Autocomplete
            id="combo-box-demo"
            autoHighlight
            options={dictionary}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            onChange={(event,value) => pokenameChange(value)}
            renderInput={params => (
                <TextField {...params} 
                label="Elije tu pokemon" 
                variant="outlined" fullWidth 
                onChange={event => pokenameChange(event.target.value)}
                onKeyDown={event => { event.key === 'Enter' ? pokenameRequest(pokename) : void(0) }}
                />
            )}
            />
                <br/>
            { loading ?
                 <Button variant="outline danger" disabled>
                   <Spinner
                     as="span"
                     animation="grow"
                     size="sm"
                     role="status"
                     aria-hidden="true"
                     />
                     Cargando...
                </Button>
            :
                <Button variant="outline-danger" onClick={()=> pokenameRequest(pokename)}>
                    Buscar
                </Button>
            }
            </Card.Body>
        </Card>
        <br/>
        { loading ?
            <Card className="text-center">
                <Card.Body style={{padding: "25%"}}>
                    <Spinner animation="grow" role="status">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </Card.Body>
            </Card>
            
            :

                <Card className="pokeinfo" style={{padding: "1%"}}>
                <Row>
                    <Col sm={4} className="poke-image">
                        <Card style={{height: "100%", margin: "1%"}}>
                            <Card.Img src={pokemon.sprites.front_default} />
                        </Card>
                    </Col>
                    <Col className="poke-basic">
                        <Table responsive bordered style={{marginTop: "1%"}} >
                            <tbody>
                                <tr>
                                    <td>Nombre</td>
                                    <td>{pokemon.name}</td>
                                </tr>
                                <tr>
                                    <td>Tipo/s</td>
                                    <td>{pokemon.types[1] ?  <span> {pokemon.types[0].type.name} / {pokemon.types[1].type.name}</span> 
                                                            : <span> {pokemon.types[0].type.name} </span>}
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
                        <Card style={{ height:"100%", margin: "1%"}}>
                            <Card.Img src={pokemon.sprites.back_default}/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{height:"100%", margin: "1%"}}>
                            <Card.Body>
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
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Button variant="outline-success" style={{ margin : "1.5%" }} 
                        onClick={()=> addPokemon(pokemon)} >Agregar pokemon a mi equipo</Button>
            </Card>
        }
    </section>  
    )
}

const mapStateToProps = (state) => ({
    pokemon : state.browserinfo,
    pokename : state.pokename,
    loading : state.loading,
    dictionary: dictionary
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
                dispatch({
                    type: 'GET_DATA_ERROR',
                    error: "El nombre ingresado no pertenece a ningun pokemon o no se encuentra en la base de datos, por favor, vuelve a intentarlo o prueba con otro pokemon.",
                    payload:''
                });
            });
        }else{
            dispatch({
                type: 'GET_DATA_ERROR',
                error: "No ingresaste ningun nombre, por favor, ingresa el nombre de algun pokemon.",
                payload:''
            });
        }
    },
    addPokemon(pokemon){
        var newpokemon = JSON.parse(JSON.stringify(pokemon))
        newpokemon["id"] = generateID(newpokemon.name)
        dispatch({
            type: "ADD_POKEMON",
            newpokemon
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

function generateID(pre){
     return `${ pre }_${ new Date().getTime() }`;
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Browser)