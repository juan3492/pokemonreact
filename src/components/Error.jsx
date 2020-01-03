import React from "react"
import { connect } from "react-redux"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const Error = ({closeError, error, show}) => {
    return(
        <Modal show={show} onHide={() => closeError()}>
            <Modal.Header closeButton>
                <Modal.Title>Error!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ error }</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => closeError()}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    error: state.error,
    show: state.showerror
})

const mapDispatchToProps = (dispatch) => ({
    closeError(){
        dispatch({
            type: "CLOSE_ERROR"
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Error)