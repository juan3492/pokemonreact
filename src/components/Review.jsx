//react
import React from "react"
import { connect } from "react-redux"
//react-bootstrap
import Card from "react-bootstrap/Card"
import Jumbotron from "react-bootstrap/Jumbotron"

//componets
import ReviewStats from "./ReviewStats" 
import ReviewTypes from "./ReviewTypes"
import ReviewRoles from "./ReviewRoles"

const Review = ({show}) =>{
    if(show){
        return (
            <Card >               
                <ReviewStats/>
                <ReviewTypes/>
                <ReviewRoles/>
            </Card>
        )}else{
            return(
                <Jumbotron>
                    <p className="h1"> Para ver las estadisticas debes tener un equipo de 6 pokemons </p>
                </Jumbotron>
        );
    }
}


const mapStateToProps = (state) => ({
    show: state.showreview,
})

const mapDispatchToProps = (dispatch) =>({

})


export default connect(mapStateToProps, mapDispatchToProps)(Review)