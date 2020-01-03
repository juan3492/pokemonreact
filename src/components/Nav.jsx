import React from "react"
import { connect } from "react-redux"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Nav =({}) =>{
    return(
        <Navbar expand="lg" variant="dark" bg="danger" style={{marginBottom: "1%"}}>>
            <Container>
                <Navbar.Brand href="#">PokeReact</Navbar.Brand>
            </Container>
        </Navbar>
    )
} 

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)