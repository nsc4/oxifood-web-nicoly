import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistemas';
export default function FormProduto () {

    return (

        <div>
        
            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='titulo'
                                    maxLength="100"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='codigo produto'
                                    maxLength="1000"/>

                               

                            
                            </Form.Group>
                            
                            <Form.Group>

                                <Form.TextArea
                                    required
                                    fluid
                                    label='descrição'
                                    maxLength="1000"/>

                            </Form.Group>


                            <Form.Group>

                               
                             
                                <Form.Input
                                    fluid
                                    label='valor Unitario'
                                    maxLength="1000">

                                    </Form.Input>
                                   
                        
                                
                            
                                <Form.Input
                                    fluid
                                    label='Minutos Maximos'
                                    maxLength="1000">
                                  
                                </Form.Input>
                                <Form.Input
                                  fluid
                                    label='Minutos Minimos'
                                    maxLength="1000">
                            

                            
                                </Form.Input>


                    </Form.Group>
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
