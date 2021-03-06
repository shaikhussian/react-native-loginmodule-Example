import React, {Component} from 'react';
import {Container, Content,Form} from 'native-base';
import {View,ActivityIndicator} from 'react-native';
import {FullName,EMail,Password,CustomButton, ButtonAction} from 'react-native-loginmodule';

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            activity:false
        }
    }
    Register(){
        this.setState({
            activity:true
        })
        var AppName = "APP Name"
        const url = 'some api url for login/signup method must be post only'
        const fields = {FullName:'FullName',EMail:'EMail',Password:'Password'}
        ButtonAction(AppName,'register',url,fields).then((res)=>{
            if(res != undefined){
                if(res.isvalid != undefined){
                    this.setState({
                        activity:false
                    })
                }else{
                    this.setState({
                        activity:false
                    },()=>{
                        alert("Login successful");
                    })
                }
            }
        })
    }
    render() {
        return (
            <Container style={{backgroundColor:'yellow'}}>
                <Content contentContainerStyle={{flex:1,justifyContent: 'center'}}>
                    <Form style={{marginRight:10}}>
                        <FullName
                            onSubmitEditing={(event) => {
                                this._inputsecond._root.focus();

                            }}
                            style={{color:'red'}}
                            returnKeyType={'next'}/>
                        <EMail
                            getRef={(c) => this._inputsecond = c}
                            returnKeyType={'next'}
                            style={{color:'red'}}
                            onSubmitEditing={(event) => {
                                this._inputThrird._root.focus();
                            }}/>
                        <Password
                            getRef={(c) => this._inputThrird = c}
                            returnKeyType={'done'}
                            style={{color:'red'}}
                            onSubmitEditing={(event) => {
                                console.log("RegisterAction")
                            }}/>
                    </Form>
                    <CustomButton onPress={this.Register.bind(this)} style={{marginTop:10}}>Register</CustomButton>
                </Content>
                {this.state.activity ? (
                    <View style={{flex:1,alignSelf:'center'}}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <ActivityIndicator size="large" color="blue" />
                        </View>
                    </View>
                ):(<View></View>)}
            </Container>
        );
    }
}

