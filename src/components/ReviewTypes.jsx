//react
import React from "react"
import { connect } from "react-redux"

// react-bootstrap
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const ReviewTypes = ({poketeam, makeStats}) =>{
    const types = makeStats(poketeam)
    return(
        <Card style={{margin: "1%"}}>
            <Card.Header>Analisis de Covertura de tipos</Card.Header>
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
    )
}

const mapStateToProps = (state) =>({
    poketeam : state.poketeam,
})

const mapDispatchToProps = (dispatch) =>({
    makeStats(poketeam){
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTypes)