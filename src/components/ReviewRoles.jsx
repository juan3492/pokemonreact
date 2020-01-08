//react
import React from "react"
import { connect } from "react-redux"

// react-bootstrap
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Badge from "react-bootstrap/Badge"

const ReviewRoles = ({makeStats, poketeam}) =>{
    const stats = makeStats(poketeam)
    return(
        <Card style={{margin: "1%"}}>
            <Card.Header>Analisis de Roles</Card.Header>
            <Card.Body>
                <p className="h4"> Roles y atributos de cada pokemon </p>
                <br/>
                <Table>
                    <thead>
                        <tr>
                            <th>Pokemon</th>
                            <th>Atributos</th>
                            <th>Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stats.pokemons.map((pokemon, index)=>
                                <tr key={index}>
                                    <th className="align-middle">
                                        <img src={poketeam[index].sprites.front_default} alt=""/>
                                        <span> {poketeam[index].name}</span>
                                    </th>
                                    {
                                        (pokemon.atributes.length == 0 && pokemon.roles.length == 0) ? 
                                            <th colSpan="2"> <Badge variant="secondary">pokemon debil</Badge> deberias cambiarlo por otro más fuerte</th>
                                        :

                                            <th>{pokemon.atributes.map((atribute, index)=>
                                                    <p key={index}>
                                                            <Badge pill variant="success">{atribute}</Badge>
                                                    </p>   
                                                )}
                                                {pokemon.superatributes.map((atribute, index)=>
                                                    <p key={index}>
                                                        <Badge pill variant="danger">{atribute}</Badge>
                                                    </p>   
                                                )}
                                            </th>
                                    }
                                    <th>{pokemon.roles.map((role, index)=>
                                            <p>
                                                <Badge key={index} pill variant="warning">{role}</Badge>
                                            </p>
                                        )}
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <p className="h4"> Balance entre pokemones ofensivos y defensivos </p>
                <br/>
                <ul>
                    {  
                        (stats.ofensives_len < 3) ?
                        <li> {stats.ofensives_len} de tus pokemons son ofensivos competitivos, deberias tener al menos 3</li>
                        :
                        <li> {stats.ofensives_len} de tus pokemons son ofensivos competitivos, posees una cantidad aceptable</li>
                    }
                    <br/>
                    {  
                        (stats.defensives_len < 2) ?
                        <li> {stats.defensives_len} de tus pokemons son defensivos competitivos, deberias tener al menos 2.</li>
                        :
                        <li> {stats.defensives_len} de tus pokemons son defensivos competitivos, posees una cantidad aceptable.</li>
                    }   
                </ul>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) =>({
    poketeam : state.poketeam,
})

const mapDispatchToProps = (dispatch) =>({
    makeStats(poketeam){
        var atributes=[]
        var superatributes=[]
        var roles=[]
        var pokemons=[]
        var currpokemon={}
        var defensivecount=0
        var ofensivecount=0
        for(var i=0; i<6 ; i++){
            atributes=[]
            superatributes=[]
            roles=[]
            currpokemon = statPower(poketeam[i]).slice() // 0 : spd, 1 : sdef, 2 : satk, 3 : def, 4 : atk, 5 : hp
            if(currpokemon[5] + currpokemon[3] > 3){
                atributes.push("defensivo fisico")
                roles.push("wall fisico")
            }
            if(currpokemon[5] + currpokemon[1] > 3){
                atributes.push("defensivo especial")
                roles.push("wall especial")
            }
            if(currpokemon[4]>=3){
                atributes.push("atacante fisico")
                if(currpokemon[0]>=3){
                    roles.push("wallbreaker especial")
                }
            }
            if(currpokemon[2]>=3){
                atributes.push("atacante especial")
                if(currpokemon[0]>=3){
                    roles.push("wallbreaker fisico")
                }
            }
            if(ifExist(atributes, "defensivo especial") || ifExist(atributes, "defensivo fisico")){
                defensivecount++
            }
            if(ifExist(atributes, "atacante especial") || ifExist(atributes, "atacante fisico")){
                ofensivecount++
            }
            if(ifExist(atributes, "defensivo especial") && ifExist(atributes, "defensivo fisico")){
                superatributes.push("defensivo completo")
            }
            if(ifExist(atributes, "atacante especial") && ifExist(atributes, "atacante fisico")){
                superatributes.push("atacante completo")
            }
            pokemons.push({ "atributes" : atributes.slice(), 
                            "roles" : roles.slice(), 
                            "superatributes" : superatributes.slice()
                        })
        }
        const obj = {"pokemons" : pokemons, 
                    "ofensives_len" : ofensivecount, 
                    "defensives_len" : defensivecount }
        return (obj)
    },

})
function ifExist(arr, str){
    return(arr.indexOf(str)>-1)
}

function statPower(pokemon){
    var statpower=[0,0,0,0,0,0]
    var currstat = 0
    var stat = 0
    for(var i=0; i<6; i++){
        stat = pokemon.stats[i].base_stat
        if(between(stat, 150, 255)){
            statpower[i] = 3
        }
        else if(between(stat,100, 149)){
            statpower[i] = 3
        }
        else if(between(stat, 50, 99)){
            statpower[i] = 1
        }
        else{
            statpower[i] = 0
        }
    }
    return(statpower);   
}

function between(x, min, max) {
    return x >= min && x <= max;
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewRoles)